import Boom from "@hapi/boom";
import { db } from "../database";

export const getDataRoute = {
    method: "GET",
    path: "/api/datas/{id}",
    handler: async (req, h) => {
        const id = req.params.id
        const { results } = await db.query(
            'SELECT * FROM users WHERE id=?',
            [id],
        );
        const data = results[0];
        if (!data) throw Boom.notFound(`data doesn't exist with id ${id}`);
        return data;
    }
}