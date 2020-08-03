import { inject, injectable } from "tsyringe";
import AppError from "@shared/errors/appError";

import INewsRepository from "../repositories/INewsRepository";
import News from "../infra/typeorm/schemas/News";

interface IRequest {
  user_id: string;
  title: string;
  content: string;
  publication: Date;
}

@injectable()
class CreateNewsService {
  constructor(
    @inject("NewsRepository")
    private newsRepository: INewsRepository
  ) {}

  public async execute({
    user_id,
    title,
    content,
    publication,
  }: IRequest): Promise<News> {
    const findNews = await this.newsRepository.findByTitle(title);

    if (findNews) {
      throw new AppError("Already exists news with same title for this day.");
    }

    const news = await this.newsRepository.create({
      user_id,
      title,
      publication,
      content,
    });

    return news;
  }
}

export default CreateNewsService;
