# E-Commerce Back-End

## Description

This project was built using Oject Relational Mapping. All routes are set up to successfully GET, POST, PUT, or Delete items from the e-commerce database

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Questions](#Questions)

## Installation

In order to run the program, you'll first have to fork the repo. In the terminal, to install all dependencies, you'll run:

    npm install

## Usage

You'll first need to setup a database in your MySql workbench. Then, in order to seed the database with data, you'll navigate to the root folder of the program. While in the program's root folder, in the terminal, you'll type

    node seeds/index.js

Here is a walk through video demonstrating this process
![DB Setup Gif](./assets/db-setup.gif)

Next, to start the server, while in the program's root folder, in the terminal, you'll type

    node server.js

From there, you'll open up insomnia to send any sort of GET, POST, PUT, or DELETE request. The following gifs will demonstrate how the program works:

This is the products api

![Products API Gif](./assets/products-api.gif)

This is the categories api

![Category API Gif](./assets/categories-api.gif)

This is the tags api

![Tags API Gif](./assets/tags-api.gif)

## License

None

## Badges

![badges](https://img.shields.io/badge/Language-JavaScript-red)

![badges](https://img.shields.io/badge/Environment-Node-yellow)

![badges](https://img.shields.io/badge/Database-MySql-green)

## Questions

If you have any questions, reach out to me through my [Github](www.github.com/levickane) .
