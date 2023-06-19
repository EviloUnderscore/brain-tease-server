const angularRoutePaths = [
    '/',
    '/home',
    '/my-quizzes',
    '/my-quizzes/create',
    '/my-quizzes/edit/{id}',
    '/play/{id}',
]

export const filesRoutes = angularRoutePaths.map(path => ({
    method: 'GET',
    path,
    handler: (req, h) => {
        return h.file('dist/tfe/index.html')
    }
}))

export const staticFilesRoute = {
    method: "GET",
    path: "/{params*}",
    handler: {
        directory: {
            path: 'dist/tfe',
        }
    }
}