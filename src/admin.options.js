const { default: AdminBro } = require('admin-bro');
const AdminBroMongoose = require('admin-bro-mongoose');

AdminBro.registerAdapter(AdminBroMongoose);

const { Demande } = require('./demande/demande.entity');
const AdminUser = require('./user/user.admin');

/** @type {import('admin-bro')AdminBroOptions} */
const options = {
    branding: {
        companyName: 'Letellier Développement',
        softwareBrothers: false,
        logo: false,
    },
    resources: [AdminUser, {
        resource: Demande,
        options: {
            parent: {
                name: 'Immobilier',
                icon: 'fas fa-home',
            }
        }
    }],
};

module.exports = options;