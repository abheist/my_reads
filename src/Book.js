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
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover"
                        style={{ backgroundImage: `url(${this.props.book.imageLinks.smallThumbnail})` }}>
                    </div>
                    <BookShelfChanger
                        book={this.props.book}
                        bookShelf={this.getBookShelf()}
                        changeBookShelf={this.props.changeBookShelf}
                    />
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">
                    {this.props.book.authors ? (this.props.book.authors.map((author, i) =>
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
