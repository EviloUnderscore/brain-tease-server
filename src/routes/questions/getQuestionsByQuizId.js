import { db } from "../../database";

export const getQuestionsByQuizIdRoute = {
    method: "GET",
    path: "/api/questions/quiz/{id}",
    handler: async (req, h) => {
        const id = req.params.id
        const { results } = await db.query(
            'SELECT * FROM questions WHERE quiz_id=?',
            [id],
        );
        return results;
    }
}