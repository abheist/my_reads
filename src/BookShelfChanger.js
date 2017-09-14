import React from "react";
import PropTypes from 'prop-types';

class BookShelfChanger extends React.Component {
    render() {
        return (
            <div className="book-shelf-changer">
                <select
                    onChange={e => this.props.changeBookShelf(this.props.book, e)}
                    value={this.props.bookShelf || ''}>
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

BookShelfChanger.propTypes = {
    changeBookShelf: PropTypes.func,
    bookShelf: PropTypes.string,
    book: PropTypes.object
}

export default BookShelfChanger
