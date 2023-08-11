import React, { useState, useEffect } from "react";
import axios from "axios";


const Books = (props) => {
    return (
        <div className="list">
            <div className="card-container">
                <img
                    src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
                    alt="Books"
                    height="200"
                />
                <div className="desc">
                    <h2><a href="/show-book/123id">{props.book.title}</a></h2>
                    <h3>{props.book.author}</h3>
                    <p>{props.book.description}</p>
                </div>
                <button className="btn btn-secondary" onClick={() => { props.deleteProduct(props.book._id) }}>
                    X
                </button>
            </div>
        </div>
    )
}

const FrontPage = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/book/`)
            .then(response => { setBooks(response.data) })
            .catch(err => console.log(err))
    }, []);

    const addProduct = () => {
        window.location = "/add";
    }

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:5000/book/delete/${id}`)
            .then(response => {
                console.log(response.data);
                setBooks(books.filter(b => b._id !== id))
            })
    };

    const BookList = () => {
        return books.map(b => {
            return <Books
                key={b._id}
                book={b}
                deleteProduct={deleteProduct}
            />
        })
    }

    return (
        <div className="BookList">
            <div className="col-md-12">
                <br />
                <h2 className="display-4 text-center">Books List</h2>
            </div>
            <div className="col-md-11">
                <button className="btn btn-info float-right" href="/create-book" onClick={addProduct}>+ Add New Book</button>
                <br /><br />
                <hr />
            </div>
            {BookList()}
        </div>
    )
}

export default FrontPage;