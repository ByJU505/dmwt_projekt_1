const { Pool } = require('pg');

const pool = new Pool({
    connectionString: 'postgres://default:OEQypVDJ0ug3@ep-tight-frost-78860768-pooler.eu-central-1.postgres.vercel-storage.com:5432/verceldb?pgbouncer=true&connect_timeout=15',
    ssl: {
        rejectUnauthorized: false,
    },
});

const getCommentsFromDB = async () => {
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

const addCommentToDB = async (username, comment) => {
    try {
        const client = await pool.connect();
        const result = await client.query('INSERT INTO kommentare (username, comment) VALUES ($1, $2) RETURNING *', [username, comment]);
        client.release();
        return result.rows[0]; // Gibt den hinzugefügten Kommentar zurück
    } catch (error) {
        console.error('Fehler beim Hinzufügen des Kommentars:', error);
        return null;
    }
};

