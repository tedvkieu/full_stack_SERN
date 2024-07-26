import express from 'express';
import {
    getHomePage,
    getAboutme,
    getCRUD,
    postCRUD,
    displayGetCRUD,
} from '../controllers/homeController';
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', getHomePage);

    router.get('/aboutme', getAboutme);

    router.get('/crud', getCRUD);

    router.post('/post-crud', postCRUD);

    router.get('/get-crud', displayGetCRUD);

    return app.use('/', router);
};

module.exports = initWebRoutes;
