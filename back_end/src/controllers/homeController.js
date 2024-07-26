import db from '../models/index';
import CRUDService from '../services/CRUDService';

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();

        return res.render('homePage.ejs', { data: JSON.stringify(data) });
    } catch (e) {
        console.log(e);
    }
};

let getAboutme = (req, res) => {
    return res.render('about.ejs');
};

let getCRUD = (req, res) => {
    return res.render('crud.ejs');
};

let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send('POST CRUD FROM SERVER');
};

let displayGetCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();
    console.log('--------------------------------');
    console.log(data);
    return res.render('displayCRUD.ejs', { data });
};

module.exports = {
    getHomePage,
    getAboutme,
    getCRUD,
    postCRUD,
    displayGetCRUD,
};
