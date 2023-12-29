// DB.js

import { Pool } from 'pg';

const pool = new Pool({
    user: 'default',
    host: 'ep-tight-frost-78860768-pooler.eu-central-1.postgres.vercel-storage.com',
    database: 'verceldb',
    password: 'OEQypVDJ0ug3',
    port: 5432,
    ssl: {
        rejectUnauthorized: false,
    },
});

export const getCommentsFromDB = async () => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM kommentare');
        client.release();
        return result.rows;
    } catch (error) {
        console.error('Fehler beim Abrufen der Kommentare:', error);
        return [];
    }
};

export const addCommentToDB = async (username, comment) => {
    try {
        const client = await pool.connect();
        const result = await client.query('INSERT INTO kommentare ("Benutzername", "Kommentar") VALUES ($1, $2) RETURNING *', [username, comment]);
        client.release();
        return result.rows[0];
    } catch (error) {
        console.error('Fehler beim Hinzufügen des Kommentars:', error);
        return null;
    }
};

