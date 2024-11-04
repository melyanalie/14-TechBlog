const express = require('express');
const session = require('express-session');
const Sequelize = require('sequelize');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
require('dotenv').config(); 

const app = express();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        port: process.env.DB_PORT,
        logging: false,
    }
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    session({
        secret: process.env.SESSION_SECRET || 'default_secret',
        store: new SequelizeStore({
            db: sequelize,
        }),
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 24 * 60 * 60 * 1000, // 1 day
        },
    })
);

app.get('/', (req, res) => {
    res.send('Welcome to the CMS Tech Blog!');
});

sequelize.sync({ force: false }).then(() => {
    app.listen(3307, () => {
        console.log('Server is running on port 3307');
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

