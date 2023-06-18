import * as admin from 'firebase-admin'
import { db } from "../../database";

export const deleteQuestionByIdRoute = {
    method: 'DELETE',
    path: '/api/question/{id}',
    handler: async (req, h) => {
        const { id } = req.params;
        const token = req.headers.authtoken;
        const user = await admin.auth().verifyIdToken(token);
        const userId = user.user_id;
        await db.query(
            'DELETE FROM questions WHERE id=?',
            [id],
        );
        return { message: 'Success!'}
    }
}