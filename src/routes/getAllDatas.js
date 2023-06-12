import { db } from "../database";

export const getAllDatasRoutes = {
    method: "GET",
    path: "/api/users",
    handler: async (req, h) => {
        const { results } = await db.query(
            'SELECT * FROM users'
        );
        return results;
    }

}