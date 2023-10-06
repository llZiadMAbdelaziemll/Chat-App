import { Client, Databases, Account } from 'appwrite';

export const PROJECT_ID = '6515da1a0b0d84089d75'
export const DATABASE_ID = '6515db89b1875c0b9a80'
export const COLLECTION_ID_MESSAGES = '6515dba6592c7ab91fca'

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6515da1a0b0d84089d75');

export const databases = new Databases(client);
export const account = new Account(client);
export default client;