import { Request, Response, NextFunction, Router } from 'express';
import * as ErrorHandler from '../utils/errorHandlers';

const handle404Error = (router: Router) => {
    router.use((req: Request, res: Response) => {
        ErrorHandler.notFoundError();
    });
};

const handleClientError = (router: Router) => {
    router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        ErrorHandler.clientError(err, req, res, next);
    });
};

const handleServerError = (router: Router) => {
    router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        ErrorHandler.serverError(err, req, res, next);
    });
};

const errorMiddleware = [handle404Error, handleClientError, handleServerError];

export default errorMiddleware;
