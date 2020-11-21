const knex = require('../db/index');

module.exports = {
    async index(req, res){
        const resultado = await knex('users')
        .where('deleted_at', null)

        return res.json(resultado)
    },
    async create(req, res, next){
        try {
            const { primeiro_nome, ultimo_nome } = req.body;
            await knex('users')
            .insert(
                { primeiro_nome, ultimo_nome }
            )
            return res.status(201).send();
        } catch (error) {
            next(error)
        }
    },
    async update(req, res, next){
        try {
            const { primeiro_nome, ultimo_nome } = req.body;
            const { id } = req.params;
            await knex('users')
                    .update({ primeiro_nome, ultimo_nome })
                    .where({ id })

            return res.status(201).send();
        } catch (error) {
            next(error);
        }
    },
    async delete(req, res, next){
        try {

            const { id } = req.params;
            await knex('users')
                .where({ id })
                .update('deleted_at', new Date()) //em vez de apagar, será guardado um update
                //.delete()
            return res.status(201).send();

        } catch (error) {
            next(error);
        }
    }
}