import { db } from "../../database";

export const updateQuizByIdRoute = {
    method: 'POST',
    path: '/api/quizzes/update/{id}',
    handler: async (req, h) => {
        const { id } = req.params;
        const { name, description, category_id} = req.payload;
        
        await db.query(`
                UPDATE quizzes
                    SET name=?, description=?, category_id=?
                    WHERE id=?
            `,
            [name, description, category_id, id]
        );

        const { results } = await db.query(
            'SELECT * FROM quizzes WHERE id=?',
            [id],
        );
        return results[0];
    }
}
