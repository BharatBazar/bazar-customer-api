import { Customer } from './customer.schema';
import { HTTP400Error } from '../../lib/utils/httpErrors';
import { CustomerData } from './customer.interface';
import productSchema from '../product/product.schema';

class CustomerModel {
    public async login(data: { phone: string }) {
        if (!data.phone) {
            throw new HTTP400Error('Phone not provided');
        } else {
            const userExist = await Customer.findOne({ phone: data.phone }).lean();

            if (userExist) {
                return userExist;
            } else {
            }
        }
    }

    public async register(data: { phone: string }) {
        if (!data.phone) {
            throw new HTTP400Error('Phone not provided');
        } else {
            const userExist = await Customer.findOne({ phone: data.phone }).lean();
            if (userExist) {
                throw new HTTP400Error('User already exist');
            } else {
                const customer = new Customer(data);
                await customer.save();
                return customer;
            }
        }
    }

    public async updateDetails(data: CustomerData) {
        if (!data.phone) {
            throw new HTTP400Error('Phone not provided');
        } else {
            const userExist = await Customer.findOne({ phone: data.phone }).lean();
            if (userExist) {
                return await Customer.updateOne({ phone: data.phone, data }, { new: true });
            } else {
                throw new HTTP400Error('User does not exist');
            }
        }
    }
}

export default new CustomerModel();
