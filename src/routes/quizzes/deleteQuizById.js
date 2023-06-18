import * as admin from 'firebase-admin'
import { db } from "../../database";

export const deleteQuizByIdRoute = {
    method: 'DELETE',
    path: '/api/quizzes/{id}',
    handler: async (req, h) => {
        const { id } = req.params;
        const token = req.headers.authtoken;
        const user = await admin.auth().verifyIdToken(token);
        const userId = user.user_id;
        await db.query(
            'DELETE FROM quizzes WHERE id=? AND user_id=?',
            [id, userId],
        );
        return { message: 'Success!'}
    }
}