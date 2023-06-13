import Boom from "@hapi/boom";
import { db } from "../../database";

export const getQuizByIdRoute = {
    method: "GET",
    path: "/api/quizzes/{id}",
    handler: async (req, h) => {
        const id = req.params.id
        const { results } = await db.query(
            'SELECT * FROM quizzes WHERE id=?',
            [id],
        );
        const data = results[0];
        if (!data) throw Boom.notFound(`data doesn't exist with id ${id}`);
        return data;
    }
}