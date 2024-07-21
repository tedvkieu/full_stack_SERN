import express from 'express';
import { getHomePage, getAboutme } from '../controllers/homeController';
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', getHomePage);

    router.get('/aboutme', getAboutme);
    return app.use('/', router);
};

module.exports = initWebRoutes;
