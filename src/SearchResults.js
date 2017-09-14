import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class SearchResults extends Component {

	componentWillMount() {
		this.props.resetSearchResultState()
	}

	render() {
		return (
			<div className="search-books-results">
				<ol className="books-grid">
					{this.props.bookResults.map(book => (
						<Book
							key={book.id}
							book={book}
							booksInShelf={this.props.booksInShelf}
							changeBookShelf={this.props.changeBookShelf}
						/>
					))}
				</ol>
			</div>
		)
	}
}

SearchResults.propTypes = {
	resetSearchResultState: PropTypes.func,
	bookResults: PropTypes.array,
	booksInShelf: PropTypes.array,
	changeBookShelf: PropTypes.func
}


export default SearchResults
