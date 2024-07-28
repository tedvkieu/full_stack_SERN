import express from 'express';
import {
    getHomePage,
    getAboutme,
    getCRUD,
    postCRUD,
    displayGetCRUD,
    editCRUD,
    putCRUD,
    deleteCRUD,
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

    router.get('/delete-crud', deleteCRUD);


    return app.use('/', router);
};

module.exports = initWebRoutes;
