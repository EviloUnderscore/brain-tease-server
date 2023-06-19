import Hapi from '@hapi/hapi';
import routes from './routes';
import { db } from './database';
import * as admin from 'firebase-admin';
import credentials from '../credentials.json';
import dotenv from 'dotenv';

dotenv.config();

admin.initializeApp({
    credential : admin.credential.cert(credentials)
});

let server;

const start = async () => {
    server = Hapi.server({
        port: 8000,
        host: 'localhost',
    })

    routes.forEach(route => server.route(route));

    db.connect();
    await server.start();
    console.log(`server is listening on ${server.info.uri}`);
}

process.on('unhandledRejection', error => {
    console.error(error);
    process.exit(1);
});

process.on('SIGINT', async () => {
    console.log('\nStopping server...');
    await server.stop({ timeout: 10000 });
    db.end();
    console.log('Server stopped');
    process.exit(0);
});

start();