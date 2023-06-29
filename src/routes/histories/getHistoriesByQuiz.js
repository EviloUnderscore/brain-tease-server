import { db } from "../../database";

export const getHistoriesByQuizRoutes = {
    method: "GET",
    path: "/api/histories/quiz/{id}",
    handler: async (req, h) => {
        const { id } = req.params;
        const { results } = await db.query(
            'SELECT * FROM histories WHERE quiz_id=?',
            [id]
        );
        return results;
    }
}