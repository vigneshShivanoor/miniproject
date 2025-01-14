import { useEffect, useState } from 'react';
import { Form } from './Form';

function EventCard() {
    // const [jsonData, setJsonData] = useState(null);
    // useEffect(() => {
    //     fetch('http://localhost:5000/events', {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     }).then((response) => response.json()).then((data) => setJsonData(data));
    // }, []);

    return (
        // <h1>Hello World</h1>
        <Form/>
    );
}

export default EventCard;