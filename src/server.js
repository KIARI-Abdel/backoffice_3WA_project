const express = require('express');
const { default: AdminBro } = require('admin-bro');
const options = require('./admin.options');
const buildAdminRouter = require('./admin.router');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3400;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/server_prod'

const run = async () => {
    await mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const admin = new AdminBro(options);
    const router = buildAdminRouter(admin);

    app.use(admin.options.rootPath, router);
    app.listen(port, () => console.log(
        `Example app listening at http://localhost:${port}`,
    ));
}

module.exports = run;