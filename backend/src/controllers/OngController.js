const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
     
        return response,json(ongs)
    },

    async create(requeste, response) {
        const { name, email, whatsapp, city, uf } = resquest.body;

        const id = crypto.randomBytes(4).toString('HEX');
     
        await conncetion('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
     
        return response.json({ id });
    }
}