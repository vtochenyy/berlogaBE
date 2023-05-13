import { NextFunction, Request, Response, Router } from 'express';
import { IMiddleware } from './middleware.interface';

export interface IControllerRoute {
    root: string;
    path: string;
    func: (req: Request, res: Response, next: NextFunction) => void;
    method: keyof Pick<Router, 'get' | 'post' | 'delete' | 'put' | 'patch'>;
    middlewares?: IMiddleware[];
}
