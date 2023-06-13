import { v4 as uuid } from 'uuid';
import { db } from '../../database';

export const createQuizRoute = {
    method: 'POST',
    path: '/api/quizzes/create',
    handler: async (req, h) => {
        const id = uuid();
        const { name = '', description = '', category_id = ''} = req.payload;
        await db.query(`
                INSERT INTO quizzes (id, name, description, category_id)
                VALUES (?, ?, ?, ?)
            `,
            [id, name, description, category_id]
        );
        return { id, name, description, category_id}
    }
}
