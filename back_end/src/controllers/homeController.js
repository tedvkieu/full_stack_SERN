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

let editCRUD = async (req, res) => {
    let userId = req.query.id;
    console.log(userId);
    if (userId) {
        let userData = await CRUDService.getUserInfoById(userId);
        if (userData) {
            return res.render('editCRUD.ejs', { user: userData });
        }
    } else {
        return res.send('user not found');
    }
};

let putCRUD = async (req, res) => {
    let data = req.body;
    let allUsers = await CRUDService.updateUserData(data);
    return res.render('displayCRUD.ejs', { data: allUsers });
};

module.exports = {
    getHomePage,
    getAboutme,
    getCRUD,
    postCRUD,
    displayGetCRUD,
    editCRUD,
    putCRUD,
};
