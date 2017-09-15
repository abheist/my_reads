import React from "react";
import BookShelfChanger from "./BookShelfChanger";

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
                    style={{ backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}>
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

export default Book
