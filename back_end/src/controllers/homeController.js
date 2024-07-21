let getHomePage = (req, res) => {
    return res.render('homePage.ejs');
};

let getAboutme = (req, res) => {
    return res.render('about.ejs');
};

module.exports = {
    getHomePage,
    getAboutme,
};
