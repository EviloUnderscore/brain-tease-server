import { createQuizRoute } from "./quizzes/createQuiz";
import { deleteQuizByIdRoute } from "./quizzes/deleteQuizById";
import { getAllQuizzesRoutes } from "./quizzes/getAllQuizzes";
import { getQuizByIdRoute } from "./quizzes/getQuizById";
import { updateQuizByIdRoute } from "./quizzes/updateQuizById";
import { getAllUsersRoutes } from "./users/getAllUsers";
import { getUserByIdRoutes } from "./users/getUserById";

export default [
    createQuizRoute,
    deleteQuizByIdRoute,
    getAllQuizzesRoutes,
    getQuizByIdRoute,
    updateQuizByIdRoute,
    getAllUsersRoutes,
    getUserByIdRoutes
];