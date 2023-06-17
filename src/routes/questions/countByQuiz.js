import { db } from "../../database";

export const countByQuizRoutes = {
    method: "GET",
    path: "/api/questions/count",
    handler: async (req, h) => {
        try {
            const query = `
                SELECT qz.id, COUNT(*) AS question_count
                FROM quizzes qz
                JOIN questions qs ON qz.id = qs.quiz_id
                GROUP BY qz.id;
            `;
            const { results } = await db.query(query);

            const counts = results.map((row) => ({
              id: row.id,
              question_count: row.question_count,
            }));
            return counts;
        } catch (error) {
            console.error(error);
            return h.response("Error occurred").code(500);
        }
    }
}