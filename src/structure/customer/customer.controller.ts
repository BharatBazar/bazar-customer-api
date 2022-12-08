import { NextFunction, Request, Response } from 'express';
import ResponseHandler from '../../lib/helpers/responseHandler';
import customerModel from './customer.model';

class CustomerController {
    public async Login(req: Request, res: Response, next: NextFunction) {
        const responseHandler = new ResponseHandler();
        try {
            responseHandler
                .reqRes(req, res)
                .onFetch('Here is the product you asked for!', await customerModel.login(req.body))
                .send();
        } catch (error) {
            next(responseHandler.sendError(error as Error));
        }
    }
    public async Register(req: Request, res: Response, next: NextFunction) {
        const responseHandler = new ResponseHandler();
        try {
            responseHandler
                .reqRes(req, res)
                .onFetch('Here is the product you asked for!', await customerModel.register(req.body))
                .send();
        } catch (error) {
            next(responseHandler.sendError(error as Error));
        }
    }
    public async UpdateDetails(req: Request, res: Response, next: NextFunction) {
        const responseHandler = new ResponseHandler();
        try {
            responseHandler
                .reqRes(req, res)
                .onFetch('Here is the product you asked for!', await customerModel.updateDetails(req.body))
                .send();
        } catch (error) {
            next(responseHandler.sendError(error as Error));
        }
    }
}

export default new CustomerController();
