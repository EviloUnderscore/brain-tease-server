import { getAllCategoriesRoutes } from "./categories/getAllCategories";
import { getCategoryByIdRoutes } from "./categories/getCategoryById";
import { createHistoryRoute } from "./histories/createHistory";
import { getAllHistoriesRoutes } from "./histories/getAllHistories";
import { getHistoriesByUserRoutes } from "./histories/getHistoriesByUser";
import { countByQuizRoutes } from "./questions/countByQuiz";
import { createQuestionRoute } from "./questions/createQuestion";
import { deleteByQuizIdRoute } from "./questions/deleteByQuizId";
import { deleteQuestionByIdRoute } from "./questions/deleteQuestionById";
import { getQuestionsByQuizIdRoute } from "./questions/getQuestionsByQuizId";
import { updateQuestionByIdRoute } from "./questions/updateQuestion";
import { createQuizRoute } from "./quizzes/createQuiz";
import { deleteQuizByIdRoute } from "./quizzes/deleteQuizById";
import { getAllQuizzesRoutes } from "./quizzes/getAllQuizzes";
import { getQuizByIdRoute } from "./quizzes/getQuizById";
import { getQuizzesByUserRoutes } from "./quizzes/getQuizzesByUser";
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
    getUserByIdRoutes,
    getAllCategoriesRoutes,
    getCategoryByIdRoutes,
    countByQuizRoutes,
    deleteByQuizIdRoute,
    getQuizzesByUserRoutes,
    getQuestionsByQuizIdRoute,
    createQuestionRoute,
    updateQuestionByIdRoute,
    deleteQuestionByIdRoute,
    createHistoryRoute,
    getAllHistoriesRoutes,
    getHistoriesByUserRoutes,
];