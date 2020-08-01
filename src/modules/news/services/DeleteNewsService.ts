import { inject, injectable } from 'tsyringe';

import INewsRepository from '../repositories/INewsRepository';
// import News from '../infra/typeorm/schemas/News';

interface IRequest {
  id: string;
}

@injectable()
class DeleteNewsService {
  constructor(
    @inject('NewsRepository')
    private newsRepository: INewsRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<void> {
    await this.newsRepository.delete(id);
  }
}

export default DeleteNewsService;
