import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

class SearchBook extends React.Component {

    searchBook(event) {
        this.props.searchEveryBook(this.searchedString.value)
    }

    render() {
        return (
            <div className="search-books-bar">
                <Link className="close-search" to="/">Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text"
                        placeholder="Search by title or author"
                        onChange={(e) => this.searchBook(e)}
                        ref={(input) => this.searchedString = input}
                        autoFocus
                    />
                </div>
            </div>
        )
    }
}

SearchBook.propTypes = {
    searchEveryBook: PropTypes.func
}

export default SearchBook
