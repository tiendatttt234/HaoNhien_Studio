const mongoose = require("mongoose");

// Import các model từ thư mục models
const User = require("./User");
const Banner = require("./Banner");
const Support = require("./Support");
const News = require("./News");
const NewCategory = require("./NewCategory");
const Architects = require("./Architects");
const Service = require("./Service");
const ServiceCategory = require("./ServiceCategory");
const ProductCategory = require("./ProductCategory");
const Product = require("./Product");

// Khai báo đối tượng CSDL
const Db = {};
Db.User = User;
Db.Banner = Banner;
Db.Support = Support;
Db.News = News;
Db.NewCategory = NewCategory;
Db.Architects = Architects;
Db.Service = Service;
Db.ServiceCategory = ServiceCategory;
Db.ProductCategory = ProductCategory;
Db.Product = Product;

module.exports = Db;
