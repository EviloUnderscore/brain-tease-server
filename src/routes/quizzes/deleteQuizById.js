import { db } from "../database";

export const deleteQuizByIdRoute = {
    method: 'DELETE',
    path: '/api/quizzes/{id}',
    handler: async (req, h) => {
        const { id } = req.params;
        await db.query(
            'DELETE FROM quizzes WHERE id=?',
            [id],
        );
        return { message: 'Success!'}
    }
}