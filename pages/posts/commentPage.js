import { useEffect, useState } from 'react';

function fetchData() {
    return fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
        .then((response) => response.json())
        .catch((error) => {
            console.error('Fehler beim Abrufen der Daten:', error);
        });
}

function DataFetching({ data }) {
    const [fetchedData, setFetchedData] = useState(data);

    useEffect(() => {
        fetchData()
            .then((newData) => {
                setFetchedData(newData);
            });
    }, []);

    return (
        <div>
            <h1>Die ersten 10 Kommentare der URL:</h1>
            <ul>
                {fetchedData.map((comment) => (
                    <li key={comment.id}>
                        <p><strong>Name:</strong> {comment.name}</p>
                        <p><strong>E-Mail:</strong> {comment.email}</p>
                        <p><strong>Body:</strong> {comment.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export async function getStaticProps() {
    const data = await fetchData();

    return {
        props: { data },
    };
}

export default DataFetching;

