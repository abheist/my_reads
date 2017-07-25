import React from "react";

class BookShelfChanger extends React.Component {

    render() {
        return (
            <div className="book-shelf-changer">
                <select
                    onChange={e => this.props.changeBookShelf(this.props.bookId, e)}
                    value={this.props.currentShelf || ''}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default BookShelfChanger
