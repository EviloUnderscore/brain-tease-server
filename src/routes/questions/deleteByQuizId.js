import { db } from "../../database";

export const deleteByQuizIdRoute = {
    method: 'DELETE',
    path: '/api/questions/{id}',
    handler: async (req, h) => {
        const { id } = req.params;
        await db.query(
            'DELETE FROM questions WHERE quiz_id=?',
            [id],
        );
        return { message: 'Success!'}
    }
}