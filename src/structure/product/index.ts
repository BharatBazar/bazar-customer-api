import productController from './product.controller';

export default [
    {
        path: '/customer/filter/items',
        method: 'post',
        escapeAuth: true,
        handler: [productController.getItemsOnFiltering],
    },
    {
        path: '/customer/get/product',
        method: 'post',
        escapeAuth: true,
        handler: [productController.GetProductDetailsForCustomer],
    },
    {
        path: '/customer/shop/get',
        method: 'post',
        escapeAuth: true,
        handler: [productController.GetShpopDetailsForCustomer],
    },
];
