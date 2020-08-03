import { inject, injectable } from "tsyringe";

import AppError from "@shared/errors/appError";
import INewsRepository from "../repositories/INewsRepository";
import News from "../infra/typeorm/schemas/News";

interface IRequest {
  id: string;
}

@injectable()
class ShowAllNewsService {
  constructor(
    @inject("NewsRepository")
    private newsRepository: INewsRepository
  ) {}

  public async execute(): Promise<News[]> {
    const news = await this.newsRepository.findAll();

    if (!news) {
      throw new AppError("News was not found.");
    }

    return news;
  }
}

export default ShowAllNewsService;
