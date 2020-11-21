const knex = require('../db/index');


module.exports = {
    async index(req, res, next){
        try {
            const { user_id, page = 1 } = req.query;

            const query = knex('projects')
            .limit(5) //limite de dados por pagina
            .offset((page - 1) * 5) //quanta pagina sera adicionado dados

            const countObj = knex('projects').count()

            if(user_id){
                query
                .where({ user_id })
                .join('users', 'users.id', '=', 'projects.user_id') //junte users com projects
                .select('projects.*','users.primeiro_nome','users.ultimo_nome') //quero de projects somente o nome e sobrenome
                .where('users.deleted_at', null)
                
                countObj
                .where({ user_id })
            }

            const [count] = await countObj;

            res.header('X-Total-Count', count['count'])

            const resultado = await query

            return res.status(201).json(resultado)
            

        } catch (error) {
            next(error)
        }
        
    },
    async create(req, res, next){
        try {
            const { title, user_id } = req.body;

            await knex('projects').insert(
                {
                    title: title,
                    user_id: user_id
                }
            )

            return res.status(201).send();
            
        } catch (error) {
            next(error)
        }
    },
    async update(req, res, next){
        try {
            const { id } = req.params;
            const { title } = req.body;
            await knex('projects')
                    .update({ title })
                    .where({ id })
            
            return res.status(201).send();

        } catch (error) {
            next(error)
        }
    },
    async delete(req, res, next){
       try {
           const { id } = req.params
           await knex('projects')
                .where({ id })
                .delete()
            return res.status(201).send();
       } catch (error) {
           next(error)
       }
    }
}