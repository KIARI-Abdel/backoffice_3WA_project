const argon2 = require('argon2');
const AdminBro = require('admin-bro');

/** @type {AdminBro.after<AdminBro.ActionResponse>} */
const after = async (response) => {
    if (response.record && response.record.errors) {
        response.record.errors.password = response.record.errors.encryptedPassword;
    }
    return response
};

/** @type {AdminBro.Before} */
const before = async (request) => {
    if (request.method === 'post') {
        const { password, ...ortherParams } = request.payload;
        if (password) {
            const encryptedPassword = await argon2.hash(password);
            return {
                ...request,
                payload: {
                    ...ortherParams,
                    encryptedPassword,
                },
            };
        }
    }
    return request
};

module.exports = { after, before };