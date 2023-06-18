import { db } from "../../database";

export const updateQuestionByIdRoute = {
    method: 'POST',
    path: '/api/question/update/{id}',
    handler: async (req, h) => {
        const { id } = req.params;
        const { quiz_id = '', 
                question = '', 
                answer = '', 
                category = '', 
                type_id = '', 
                fake_answer_1 = '', 
                fake_answer_2 = '', 
                fake_answer_3 = '' } = req.payload;
        
        await db.query(`
                UPDATE questions
                    SET question=?, answer=?, category=?, quiz_id=?, type_id=?, fake_answer_1=?, fake_answer_2=?, fake_answer_3=?
                    WHERE id=?
            `,
            [question, answer, category, quiz_id, type_id, fake_answer_1, fake_answer_2, fake_answer_3, id]
        );

        const { results } = await db.query(
            'SELECT * FROM questions WHERE id=?',
            [id],
        );
        return results[0];
    }
}