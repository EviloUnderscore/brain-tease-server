import * as admin from 'firebase-admin';

export const getAllUsersRoutes = {
    method: "GET",
    path: "/api/users",
    handler: async (req, h) => {
        try {
            const userRecords = await admin.auth().listUsers();
            const users = userRecords.users.map((userRecord) => {
              return {
                uid: userRecord.uid,
                email: userRecord.email,
                displayName: userRecord.displayName
              };
            });
            return users;
          } catch (error) {
            console.error('Error fetching users:', error);
            throw error;
          }
    }

}