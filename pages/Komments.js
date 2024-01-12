//Komments.jsg

import { useState, useEffect } from 'react';
import style from '../styles/komments.module.css';

const DatabaseAccess = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState({ username: '', comment: '' });

    const fetchComments = async () => {
        try {
            const response = await fetch('/api/comments');
            if (!response.ok) {
                throw new Error('Fehler beim Abrufen der Daten');
            }
            const data = await response.json();
            console.log('Data from API:', data);
            setComments(data);
        } catch (error) {
            console.error(error.message);
        }
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

    const handleSubmit = async () => {
        try {
            if (newComment.username.trim() !== '' && newComment.comment.trim() !== '') {
                const response = await fetch('/api/comments', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newComment),
                });

                if (!response.ok) {
                    throw new Error('Fehler beim Hinzufügen des Kommentars');
                }

                const data = await response.json();
                setComments([...comments, data.comment]);
                setNewComment({ username: '', comment: '' });
            } else {
                console.log('Benutzername und Kommentar dürfen nicht leer sein.');
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div className={style.commentsSection}>
            <h2>Das ist eine Unsichtbare Überschrift</h2>
            {comments.length > 0 ? (
                <ul className={style.commentList}>
                    {comments.map((comment) => (
                        <li key={comment.id} className={style.comment}>
                            <div className={style.commentDetails}>
                                <p className={style.username}>User: {comment.benutzername}</p>
                                <p className={style.commentText}>{comment.kommentar}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No comments</p>
            )}

            <div className={style.addComment}>
                <h3>New comment</h3>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={newComment.username}
                    onChange={handleInputChange}
                />
                <textarea
                    name="comment"
                    placeholder="Your comment"
                    value={newComment.comment}
                    onChange={handleInputChange}
                    className={style.customTextarea}
                ></textarea>
                <button onClick={handleSubmit}>Submit comment</button>
            </div>
        </div>
    );
};

export default DatabaseAccess;

