import { addCommentToDB, getCommentsFromDB } from './DB';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const comments = await getCommentsFromDB();
        res.status(200).json(comments);
    } else if (req.method === 'POST') {
        const { username, comment } = req.body;
        const newComment = await addCommentToDB(username, comment);
        if (newComment) {
            res.status(201).json({ message: 'Kommentar hinzugefügt', comment: newComment });
        } else {
            res.status(500).json({ message: 'Fehler beim Hinzufügen des Kommentars' });
        }
    } else {
        res.status(405).json({ message: 'Methode nicht erlaubt' });
    }
}