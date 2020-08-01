import { inject, injectable } from 'tsyringe';

import INewsRepository from '../repositories/INewsRepository';
import News from '../infra/typeorm/schemas/News';

interface IRequest {
  title: string;
  content: string;
  publication: Date;
}

@injectable()
class CreateNewsService {
  constructor(
    @inject('NewsRepository')
    private newsRepository: INewsRepository,
  ) {}

  public async execute(
    id: string,
    { title, content, publication }: IRequest,
  ): Promise<News> {
    const news = await this.newsRepository.update(id, {
      title,
      content,
      publication,
    });

    return news;
  }
}

export default CreateNewsService;
