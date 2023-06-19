import { db } from "../../database";

export const getHistoriesByUserRoutes = {
    method: "GET",
    path: "/api/histories/user/{id}",
    handler: async (req, h) => {
        const { id } = req.params;
        const { results } = await db.query(
            'SELECT * FROM histories WHERE user_id=?',
            [id]
        );
        return results;
    }
}