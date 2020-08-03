import { getMongoRepository, MongoRepository } from "typeorm";
import AppError from "@shared/errors/appError";
import INewsRepository from "../../../repositories/INewsRepository";
import News from "../schemas/News";
import ICreateNewsDTO from "../../../dtos/ICreateNewsDTO";
import IUpdateNewsDTO from "../../../dtos/IUpdateNewsDTO";

export default class NewsRepository implements INewsRepository {
  private ormRepository: MongoRepository<News>;

  constructor() {
    this.ormRepository = getMongoRepository(News);
  }

  public async create({
    user_id,
    title,
    publication,
    content,
  }: ICreateNewsDTO): Promise<News> {
    const news = this.ormRepository.create({
      user_id,
      title,
      content,
      publication,
    });

    await this.ormRepository.save(news);

    return news;
  }

  public async update(
    id: string,
    { title, content, publication }: IUpdateNewsDTO
  ): Promise<News> {
    const news = await this.ormRepository.findOne(id);

    if (!news) {
      throw new AppError("The news was not found");
    }

    news.content = content || news.content;
    news.title = title || news.title;
    news.publication = publication || news.publication;

    await this.ormRepository.update(id, news);

    return news;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async findAll(): Promise<News[]> {
    const news = await this.ormRepository.find();

    return news;
  }

  public async findById(id: string): Promise<News | undefined> {
    const news = await this.ormRepository.findOne(id);

    return news;
  }

  public async findByTitle(title: string): Promise<News | undefined> {
    const news = await this.ormRepository.findOne({
      where: {
        title,
      },
    });

    return news;
  }
}
