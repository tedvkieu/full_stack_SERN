import express from 'express';
import {
    getHomePage,
    getAboutme,
    getCRUD,
    postCRUD,
    displayGetCRUD,
    editCRUD,
    putCRUD,
} from '../controllers/homeController';
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', getHomePage);

    router.get('/aboutme', getAboutme);

    router.get('/crud', getCRUD);

    router.post('/post-crud', postCRUD);

    router.get('/get-crud', displayGetCRUD);

    router.get('/edit-crud', editCRUD);

    router.post('/put-crud', putCRUD);

    return app.use('/', router);
};

module.exports = initWebRoutes;
