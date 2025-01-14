import React, { useEffect, useState } from 'react'
import { FloatingLabel } from 'react-bootstrap';

export const Form = () => {
    const [image, setImage] = useState('');

    useEffect(() => {
        console.log(image);
    }, [image]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        formData.append("image", image);
        await fetch('http://localhost:5000/upload', {
            method: 'POST',
            body: formData
        }).then(res => res.json()).then(data => console.log(data));
        // await fetch('http://localhost:5000/update',{
        //     method:'POST',
        //     headers:{
        //         'Content-Type':'application/json',
        //     },
        //     body:JSON.stringify(data)
        // }).then(res=>res.json()).then(data => console.log(data));
    }
    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
        <form method="" onSubmit={handleSubmit}>
            <div className='container-md mb-3'>
                <div className="form-floating mb-3">
                    <input type="file" className="form-control" onChange={e => setImage(e.target.files[0])} accept="image/*" />
                </div>
                <div className="form-floating mb-3">
                    <input type="date" className="form-control" name='Date'/>
                </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
            </div>
            <div class="form-floating mb-3">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height:'20rem'}}></textarea>
                <label for="floatingTextarea2">Comments</label>
            </div>
            <input type="file" onChange={e => setImage(e.target.files[0])} accept="image/*" />
            <input type="text" name='Link' />
            <input type="text" name='AuthorName' />
            <input type="date" name='Date' />
            <input type="text" name='title' />
            <button >Submit</button>
            </div>
        </form>
        </div>
    )
}
