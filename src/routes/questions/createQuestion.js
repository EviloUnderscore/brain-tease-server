import { v4 as uuid } from 'uuid';
import { db } from '../../database';

export const createQuestionRoute = {
    method: 'POST',
    path: '/api/question/create',
    handler: async (req, h) => {
        const id = uuid();
        const { quiz_id = '', 
                question = '', 
                answer = '', 
                category = '', 
                type_id = '', 
                fake_answer_1 = '', 
                fake_answer_2 = '', 
                fake_answer_3 = '' } = req.payload;

        await db.query(`
                INSERT INTO questions (id, question, answer, category, quiz_id, type_id, fake_answer_1, fake_answer_2, fake_answer_3)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            `,
            [id, question, answer, category, quiz_id, type_id, fake_answer_1, fake_answer_2, fake_answer_3]
        );
        return {id, question, answer, category, quiz_id, type_id, fake_answer_1, fake_answer_2, fake_answer_3}
    }
}
