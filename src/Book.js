import React from "react";
import BookShelfChanger from "./BookShelfChanger";
import PropTypes from "prop-types"

const Book = (props) => {
    const getBookShelf = () => {
        for (const shelfBook of props.booksInShelf) {
            if (shelfBook.id === props.book.id) {
                return shelfBook.shelf;
            }
        }
        return '';
    }
    const { book } = props;
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover"
                    style={{ backgroundImage: book.imageLinks ? `url(${book.imageLinks.smallThumbnail})` : `url('http://via.placeholder.com/128x193?text=No%20Cover')` }}>
                </div>
                <BookShelfChanger
                    book={book}
                    bookShelf={getBookShelf()}
                    changeBookShelf={props.changeBookShelf}
                />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">
                {book.authors ? (book.authors.map((author, i) =>
                    <span key={i}>
                        {!!i && ", "}
                        {author}
                    </span>)) : ''
                }
            </div>
        </div>
    )
}


Book.propTypes = {
    booksInShelf: PropTypes.array,
    book: PropTypes.object,
    changeBookShelf: PropTypes.func,
}

export default Book
