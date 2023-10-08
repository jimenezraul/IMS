# Inventory Management System
![badge](https://img.shields.io/badge/license-MIT-brightgreen)  

## Description
This Inventory Management System application will allow a company with large amount of products to manage their inventory. It will allow employees to add, update, delete and view Categories, Supplier, Products and Inventory. In the main dashboard, it will display all categories with all product and each will have a button to view inventory. In the Product section, it will display the product information with total quantity in stock and total inventory value. Also it will display the supplier info, stock locations and quantity for the selected product.

This application was built using MVC architecture. The front end was built using HTML5, CSS3, Bootstrap and Javascipt and the back end was built using NodeJS, Express and Handlebars. The information is stored in MySQL database and the data is encrypted using bcrypt.

## Click [here](https://ims-w5x6.onrender.com) to view the live application.

## Table of Contents
- [Inventory Management System](#inventory-management-system)
  - [Description](#description)
  - [Click here to view the live application.](#click-here-to-view-the-live-application)
  - [Table of Contents](#table-of-contents)
  - [Tools \& Resources](#tools--resources)
  - [Screenshots](#screenshots)
  - [Instalation](#instalation)
  - [SQL Database](#sql-database)
  - [Seed Data](#seed-data)
  - [Start the server](#start-the-server)
  - [API Endpoints](#api-endpoints)
  - [License](#license)
  - [Deployment](#deployment)
  - [Contributing](#contributing)
  - [Questions](#questions)

## Tools & Resources
* [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
* [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3)
* [Bootstrap](https://getbootstrap.com/)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [NodeJS](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [Handlebars](https://handlebarsjs.com/)
* [MySQL](https://www.mysql.com/)
* [bcrypt](https://www.npmjs.com/package/bcrypt)

## Screenshots
Main Page:
![screenshot](/public/images/main.png)
Inventory Dashboard:
![screenshot](/public/images/dashboard.png)
Product Page:
![screenshot](/public/images/product.png)

## Instalation
```
git clone git@github.com:jimenezraul/IMS.git
cd IMS
npm install
```

## SQL Database

```
mysql -u root -p
SOURCE db/schema.sql
quit
```
## Seed Data
```
npm run seeds
```

## Start the server
```
npm start
```

## API Endpoints
```
GET, POST /api/categories
GET, POST, PUT, DELETE /api/categories/:id
GET, POST /api/products
GET, POST, PUT, DELETE /api/products/:id
GET, POST /api/suppliers
GET, PUT, DELETE /api/suppliers/:id
GET, POST /api/locations
GET, PUT, DELETE /api/locations/:id
GET /api/users
GET, PUT, DELETE /api/users/:id
```

## License
![badge](https://img.shields.io/badge/license-MIT-brightgreen)   
This application is covered by the MIT license.  
[MIT License](https://opensource.org/licenses/MIT) 

## Deployment
Application deployed on Heroku  
[Live Demo](https://ims-inventory-s.herokuapp.com/)

## Contributing
Raul [Github](https://github.com/jimenezraul)  
Michelle [Github](https://github.com/michelle-aguirre)  
Olga [Github](https://github.com/obrailovska)

## Questions
Contact me by email
Email: [jimenezraul1981@gmail.com](mailto:jimenezraul1981@gmail.com)