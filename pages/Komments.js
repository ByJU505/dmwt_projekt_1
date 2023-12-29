//Komments.jsg

import { useState, useEffect } from 'react';
import style from '../styles/komments.module.css';

const DatabaseAccess = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState({ username: '', comment: '' });

    const fetchComments = () => {
        fetch('/api/comments')
            .then((response) => response.json())
            .then((data) => setComments(data))
            .catch((error) => console.error('Fehler beim Abrufen der Daten:', error));
    };

    useEffect(() => {
        fetchComments();

        const interval = setInterval(() => {
            fetchComments();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewComment((prevComment) => ({ ...prevComment, [name]: value }));
    };

    const handleSubmit = () => {
        if (newComment.username.trim() !== '' && newComment.comment.trim() !== '') {
            fetch('/api/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newComment),
            })
                .then((response) => response.json())
                .then((data) => {
                    setComments([...comments, data.comment]);
                    setNewComment({ username: '', comment: '' });
                })
                .catch((error) => console.error('Fehler beim Hinzufügen des Kommentars:', error));
        } else {
            console.log('Benutzername und Kommentar dürfen nicht leer sein.');
            // Hier könntest du eine Benachrichtigung oder Handhabung für den Benutzer hinzufügen
        }
    };

    return (
        <div className={style.commentsSection}>
            <h2>Kommentare aus der Datenbank</h2>
            {comments.length > 0 ? (
                <ul className={style.commentList}>
                    {comments.map((comment, index) => (
                        <li key={index} className={style.comment}>
                            <div className={style.commentDetails}>
                                <p className={style.username}>Nutzer: {comment.username}</p>
                                <p className={style.commentText}>{comment.comment}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Keine Kommentare vorhanden.</p>
            )}

            <div className={style.addComment}>
                <h3>Neuen Kommentar verfassen</h3>
                <input
                    type="text"
                    name="username"
                    placeholder="Nutzername"
                    value={newComment.username}
                    onChange={handleInputChange}
                />
                <textarea
                    name="comment"
                    placeholder="Dein Kommentar"
                    value={newComment.comment}
                    onChange={handleInputChange}
                    className={style.customTextarea}
                ></textarea>
                <button onClick={handleSubmit}>Kommentar hinzufügen</button>
            </div>
        </div>
    );
};

export default DatabaseAccess;

