import News from '../infra/typeorm/schemas/News';
import ICreateNewsDTO from '../dtos/ICreateNewsDTO';
import IUpdateNewsDTO from '../dtos/IUpdateNewsDTO';

export default interface INewsRepository {
  create(data: ICreateNewsDTO): Promise<News>;
  update(id: string, data: IUpdateNewsDTO): Promise<News>;
  findAll(): Promise<News[]>;
  findById(id: string): Promise<News | undefined>;
  findByTitle(title: string): Promise<News | undefined>;
  delete(id: string): Promise<void>;
}
