import customerController from './customer.controller';

export default [
    {
        path: '/customer/login',
        method: 'post',
        escapeAuth: true,
        handler: [customerController.Login],
    },
    {
        path: '/customer/register',
        method: 'post',
        escapeAuth: true,
        handler: [customerController.Register],
    },
    {
        path: '/customer/update-details',
        method: 'post',
        escapeAuth: true,
        handler: [customerController.UpdateDetails],
    },
];
