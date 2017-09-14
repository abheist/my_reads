import React from "react";
import Book from "./Book";


const BookShelf = (props) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.shelfName}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.books.map((book) => {
                        return <li key={book.title}>
                            <Book book={book}
                                changeBookShelf={props.changeBookShelf}
                                booksInShelf={props.booksInShelf}
                            />
                        </li>
                    })}
                </ol>
            </div>
        </div>
    )
}

export default BookShelf
