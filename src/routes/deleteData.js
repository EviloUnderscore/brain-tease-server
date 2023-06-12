import { db } from "../database";

export const deleteDataRoute = {
    method: 'DELETE',
    path: '/api/users/{id}/delete',
    handler: async (req, h) => {
        const { id } = req.params;
        await db.query(
            'DELETE FROM users WHERE id=?',
            [id],
        );
        return { message: 'Success!'}
    }
}