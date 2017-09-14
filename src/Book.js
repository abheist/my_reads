import React from "react";
import BookShelfChanger from "./BookShelfChanger";

class Book extends React.Component {

    getBookShelf = () => {
        for (const shelfBook of this.props.booksInShelf) {
            if (shelfBook.id === this.props.book.id) {
                return shelfBook.shelf;
            }
        }
        return '';
    }

    render() {
        const { book } = this.props;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover"
                        style={{ backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}>
                    </div>
                    <BookShelfChanger
                        book={book}
                        bookShelf={this.getBookShelf()}
                        changeBookShelf={this.props.changeBookShelf}
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
}

export default Book
