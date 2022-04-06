# Inventory Management System
![badge](https://img.shields.io/badge/license-MIT-brightgreen)  

## Description
This Inventory Management System application will allow a company with large amount of products to manage their inventory. It will allow employees to add, update, delete and view Categories, Supplier, Products and Inventory. In the main dashboard, it will display all categories with all product and each will have a button to view inventory. In the Product section, it will display the product information with total quantity in stock and total inventory value. Also it will display the supplier info, stock locations and quantity for the selected product.

## Table of Contents
- [Inventory Management System](#inventory-management-system)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Screenshots](#screenshots)
  - [Instalation](#instalation)
  - [SQL Database](#sql-database)
  - [Seed Data](#seed-data)
  - [Start the server](#start-the-server)
  - [License](#license)
  - [Deployment](#deployment)
  - [Contributing](#contributing)
  - [Questions](#questions)

## Screenshots
![screenshot](/public/images/main.png)
![screenshot](/public/images/dashboard.png)
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
Santiago [Github](https://github.com/bompilori)  

## Questions
Contact me by email
Email: [jimenezraul1981@gmail.com](mailto:jimenezraul1981@gmail.com)