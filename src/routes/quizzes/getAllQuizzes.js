import { db } from "../../database";

export const getAllQuizzesRoutes = {
    method: "GET",
    path: "/api/quizzes",
    handler: async (req, h) => {
        const { results } = await db.query(
            'SELECT * FROM quizzes'
        );
        return results;
    }

}