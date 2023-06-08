import { db } from "../database";

export const getAllDatasRoutes = {
    method: "GET",
    path: "/api/datas",
    handler: async (req, h) => {
        const { results } = await db.query(
            'SELECT * FROM users'
        );
        return results;
    }

}