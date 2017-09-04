import React from "react";
import { Link } from "react-router-dom";
import SearchResults from "./SearchResults"

class SearchBook extends React.Component {
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                            placeholder="Search by title or author"
                            onChange={(event) => this.props.searchEveryBook(event.target.value)}
                        />
                    </div>
                </div>
                <SearchResults
                    changeBookShelf={this.props.changeBookShelf}
                    bookResults={this.props.bookResults}
                />
            </div>
        )
    }
}

export default SearchBook
