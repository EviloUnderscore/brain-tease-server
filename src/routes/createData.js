import { v4 as uuid } from 'uuid';
import { db } from '../database';

export const createDataRoute = {
    method: 'POST',
    path: '/api/users/create',
    handler: async (req, h) => {
        const id = uuid();
        const { firstname = '', lastname = '', mail = ''} = req.payload;
        await db.query(`
                INSERT INTO users (id, firstname, lastname, mail)
                VALUES (?, ?, ?, ?)
            `,
            [id, firstname, lastname, mail]
        );
        return { id, firstname, lastname, mail}
    }
}
