import React from "react";
import Book from "./Book";

class BookShelf extends React.Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfName}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map((book) => {
                            return <li key={book.title}>
                                <Book bookImage={book.imageLinks.smallThumbnail}
                                    bookName={book.title}
                                    bookAuthor={book.authors}
                                />
                            </li>
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf
