let comments = [];

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(comments);
    } else if (req.method === 'POST') {
        const { username, comment } = req.body;
        const newComment = { username, comment };
        comments.push(newComment);
        res.status(201).json({ message: 'Kommentar hinzugefügt', comment: newComment });
    } else {
        res.status(405).json({ message: 'Methode nicht erlaubt' });
    }
}
