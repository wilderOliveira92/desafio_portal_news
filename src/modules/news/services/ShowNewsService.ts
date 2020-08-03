import { inject, injectable } from "tsyringe";

import AppError from "@shared/errors/appError";
import INewsRepository from "../repositories/INewsRepository";
import News from "../infra/typeorm/schemas/News";

interface IRequest {
  id: string;
}

@injectable()
class ShowNewsService {
  constructor(
    @inject("NewsRepository")
    private newsRepository: INewsRepository
  ) {}

  public async execute({ id }: IRequest): Promise<News> {
    const news = await this.newsRepository.findById(id);

    if (!news) {
      throw new AppError("The news was not found.");
    }

    return news;
  }
}

export default ShowNewsService;
