import { db } from "../../database";

export const deleteByQuizIdRoute = {
    method: 'DELETE',
    path: '/api/questions/{id}',
    handler: async (req, h) => {
        console.log(44444444444);
        const { id } = req.params;
        await db.query(
            'DELETE FROM questions WHERE quiz_id=?',
            [id],
        );
        return { message: 'Success!'}
    }
}