const connection = require('../database/connection');
// Pacote padrão de criptografia do node
const crypto = require('crypto');

module.exports = {
    // Listagem de Ong
    async index (request,response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    // Cadastro de Ong
    async create(request, response) {
        // Desestruturação do objeto de retorno
        const { name, email, whatsapp, city, uf } = request.body;
        
        // Irá gerar um id com 4 bits hexadecimais (checar doc do node)  
        const id = crypto.randomBytes(4).toString('HEX');
        
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });
        
        return response.json({ id });
    }
}