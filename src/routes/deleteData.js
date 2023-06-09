import { db } from "../database";

export const deleteDataRoute = {
    method: 'DELETE',
    path: '/api/datas/{id}/delete',
    handler: async (req, h) => {
        const { id } = req.params;
        await db.query(
            'DELETE FROM users WHERE id=?',
            [id],
        );
        return { message: 'Success!'}
    }
}