import { v4 as uuid } from 'uuid';
import { db } from '../../database';
import * as admin from 'firebase-admin';

export const createQuizRoute = {
    method: 'POST',
    path: '/api/quizzes/create',
    handler: async (req, h) => {
        const id = uuid();
        const { name = '', description = '', category_id = ''} = req.payload;
        
        const token = req.headers.authtoken;
        const user = await admin.auth().verifyIdToken(token);
        const user_id = user.user_id;
        const authorName = user.name;
        const createDate = new Date();
       
        await db.query(`
                INSERT INTO quizzes (id, name, description, category_id, user_id, authorName, created_at)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            `,
            [id, name, description, category_id, user_id, authorName, createDate]
        );
        return { id, name, description, category_id, user_id, authorName}
    }
}
