import catalogueCustomerController from './catalogue.controller';

export default [
    {
        path: '/customer/get/catalogue',
        method: 'get',
        escapeAuth: true,
        handler: [catalogueCustomerController.GetProductCatalogue],
    },
];
