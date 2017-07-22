import React from "react";
import BookShelfChanger from "./BookShelfChanger";

class Book extends React.Component {
    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${this.props.bookImage})`
                    }}></div>
                    <BookShelfChanger />
                </div>
                <div className="book-title">{this.props.bookName}</div>
                <div className="book-authors">
                    {this.props.bookAuthor.map((author, i) =>
                        <span key={i}>
                            {!!i && ", "}
                            {author}
                        </span>)}
                </div>
            </div>
        )
    }
}

export default Book
