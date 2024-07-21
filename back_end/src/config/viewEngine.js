import express from 'express';

//ES6
let configViewEngine = (app) => {
    //arrow function
    app.use(express.static('./src/public')); // dễ dàng truy cập các static 
    app.set('view engine', 'ejs'); // cho express hiểu ta đang sử dụng ejs
    app.set("views", "./src/views")

};

module.exports = configViewEngine;
