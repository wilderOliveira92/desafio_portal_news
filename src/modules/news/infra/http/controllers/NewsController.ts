import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateNewsService from '../../../services/CreateNewsService';
import ShowNewsService from '../../../services/ShowNewsService';
import ShowAllNewsService from '../../../services/ShowAllNewsService';
import DeleteNewsService from '../../../services/DeleteNewsService';
import UpdateNewsService from '../../../services/UpdateNewsService';

export default class NewsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const showAllNews = container.resolve(ShowAllNewsService);

    const news = await showAllNews.execute();

    return response.json(news);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { title, content, publication } = request.body;

    const createNews = container.resolve(CreateNewsService);

    const news = await createNews.execute({
      title,
      publication,
      content,
    });

    return response.json(news);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showNews = container.resolve(ShowNewsService);

    const news = await showNews.execute({ id });

    return response.json(news);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteNews = container.resolve(DeleteNewsService);

    await deleteNews.execute({ id });

    return response.status(200).json('The news has been deleted.');
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { title, content, publication } = request.body;

    const updateNews = container.resolve(UpdateNewsService);

    const news = await updateNews.execute(id, { title, content, publication });

    return response.json(news);
  }
}
