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
                            return <li>
                                <Book bookImage={book.image}
                                      bookName={book.name}
                                      bookAuthor={book.author}/>
                            </li>
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf