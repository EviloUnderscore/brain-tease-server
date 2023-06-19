import { db } from "../../database";

export const getAllHistoriesRoutes = {
    method: "GET",
    path: "/api/histories",
    handler: async (req, h) => {
        const { results } = await db.query(
            'SELECT * FROM histories'
        );
        return results;
    }
}