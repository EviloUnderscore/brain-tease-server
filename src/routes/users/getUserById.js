import * as admin from 'firebase-admin';

export const getUserByIdRoutes = {
    method: "GET",
    path: "/api/users/{id}",
    handler: async (req, h) => {
        try {
            const id = req.params.id;
            const userRecord = await admin.auth().getUser(id);
            const user = {
                uid: userRecord.uid,
                email: userRecord.email,
                displayName: userRecord.displayName
            }
            return user;
          } catch (error) {
            console.error('Error fetching user:', error);
            throw error;
          }
    }
}