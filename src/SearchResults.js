import React, { Component } from 'react'
import Book from './Book'

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
							changeBookShelf={this.props.changeBookShelf}
						/>
					))}
				</ol>
			</div>
		)
	}
}

export default SearchResults
