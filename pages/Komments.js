//Komments.js

import { useState, useEffect } from 'react';
import style from '../styles/komments.module.css';
import { addCommentToDB, getCommentsFromDB } from './/api//DB';

const DatabaseAccess = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState({ username: '', comment: '' });

    useEffect(() => {
        fetchComments();
    }, []);

    const fetchComments = async () => {
        try {
            const data = await getCommentsFromDB();
            setComments(data);
        } catch (error) {
            console.error('Fehler beim Abrufen der Daten:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewComment((prevComment) => ({ ...prevComment, [name]: value }));
    };

    const handleSubmit = async () => {
        try {
            const { username, comment } = newComment;
            const data = await addCommentToDB(username, comment);
            if (data) {
                setComments([...comments, data]);
                setNewComment({ username: '', comment: '' });
            } else {
                console.error('Fehler beim Hinzufügen des Kommentars.');
            }
        } catch (error) {
            console.error('Fehler beim Hinzufügen des Kommentars:', error);
        }
    };

    return (
        <div className={style.commentsSection}>
            <h2>Kommentare aus der Datenbank</h2>
            {comments.length > 0 ? (
                <ul>
                    {comments.map((comment, index) => (
                        <li key={index} className={style.comment}>
                            <p className={style.username}>{comment.username}</p>
                            <p className={style.commentText}>{comment.comment}</p>
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
