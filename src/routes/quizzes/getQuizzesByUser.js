import { db } from "../../database";

export const getQuizzesByUserRoutes = {
    method: "GET",
    path: "/api/quizzes/user/{id}",
    handler: async (req, h) => {
        const { id } = req.params;
        const { results } = await db.query(
            'SELECT * FROM quizzes WHERE user_id=?',
            [id]
        );
        return results;
    }
}