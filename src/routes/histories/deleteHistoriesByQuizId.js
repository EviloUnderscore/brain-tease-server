import { db } from "../../database";

export const deleteHistoriesByQuizIdRoute = {
    method: 'DELETE',
    path: '/api/histories/quiz/{id}',
    handler: async (req, h) => {
        const { id } = req.params;
        await db.query(
            'DELETE FROM histories WHERE quiz_id=?',
            [id],
        );
        return { message: 'Success!'}
    }
}