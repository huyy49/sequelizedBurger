# Eat-Da-Burger!

### Overview
This app creates a burger logger with MySQL, Node, Express, Handlebars and Sequelize.
It lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, the app will display the burger on the `Burgers that are not devoured!` section. Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the `Burgers that are devoured!` section the page. The app will store every burger in a database, whether devoured or not.

### Folder Structure
```
.
├── config
│   └── config.json
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│   └── index.js
│
├── node_modules
│
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       ├── img
│       │   └── burger.png
│       └── js
│           └── burgers.js
│
├── routes
│   └── api-routes.js
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

### Required Node API/Packages
  * express
  * express-handlebars
  * mysql
  * sequelize
