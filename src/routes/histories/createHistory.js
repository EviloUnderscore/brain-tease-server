import { v4 as uuid } from 'uuid';
import { db } from '../../database';

export const createHistoryRoute = {
    method: 'POST',
    path: '/api/histories/create',
    handler: async (req, h) => {
        const id = uuid();
        const token = req.headers.authtoken;
        const user = await admin.auth().verifyIdToken(token);
        const user_id = user.user_id;
        const { quiz_id = '', 
                score = ''} = req.payload;

        await db.query(`
                INSERT INTO histories (id, score, user_id quiz_id)
                VALUES (?, ?, ?, ?)
            `,
            [id, score, user_id, quiz_id]
        );
        return {id, score, user_id, quiz_id}
    }
}