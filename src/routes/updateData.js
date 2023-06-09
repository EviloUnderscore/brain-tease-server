import { db } from '../database';

export const updateDataRoute = {
    method: 'POST',
    path: '/api/datas/{id}/update',
    handler: async (req, h) => {
        const { id } = req.params;
        const { firstname, lastname, mail} = req.payload;
        
        await db.query(`
                UPDATE users
                    SET firstname=?, lastname=?, mail=?
                    WHERE id=?
            `,
            [firstname, lastname, mail, id]
        );

        const { results } = await db.query(
            'SELECT * FROM users WHERE id=?',
            [id],
        );
        return results[0];
    }
}
