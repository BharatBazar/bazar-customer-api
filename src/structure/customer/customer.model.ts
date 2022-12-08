import { CustomerData } from './customer.interface';

class CustomerModel {
    public async login(data: { phone: string }) {}

    public async register(data: { phone: string }) {}

    public async updateDetails(data: CustomerData) {}
}

export default new CustomerModel();
