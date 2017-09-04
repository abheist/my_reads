import React from "react";
import { Link, Route } from "react-router-dom";
import SearchBook from "./SearchBook";
import BookShelf from "./BookShelf";
import "./App.css";
import * as BooksAPI from "./BooksAPI";

class App extends React.Component {
	state = {
		books: [],
		bookResults: []
	};

	componentDidMount() {
		BooksAPI.getAll().then(books => {
			this.setState(state => ({ books }));
		});
	}

	setBooksAgain() {
		BooksAPI.getAll().then(books => {
			this.setState(state => ({ books }));
		});
	}

	changeBookShelf = (book_to_change, event) => {
		BooksAPI.update(book_to_change, event.target.value).then(result => {
			this.setBooksAgain();
		});
	};

	updateBook = (book, shelf) => {
		BooksAPI.update(book, shelf).then(res => {
			console.log('updated book', book)
			this.setBooksAgain()
		})
	}

	searchEveryBook = (query, maxResults) => {
		query.length === 0 && this.setState({ bookResults: [] })

		query.length > 0 &&
			BooksAPI.search(query, maxResults).then(searchedBooks => {
				if (!searchedBooks.error) {
					searchedBooks.map((searchedBook) => {
						let unmatched = this.state.books.filter(book => book.id !== searchedBook.id)
						let match = this.state.books.filter(book => book.id === searchedBook.id)
						if (match.length > 0) {
							return searchedBook.shelf = match[0].shelf
						}
						if (unmatched.length > 0) {
							return searchedBook.shelf = 'none'
						}
					})
				}
				searchedBooks.error || searchedBooks === undefined ? (this.setState({ bookResults: [] })) : (this.setState({ bookResults: searchedBooks }))
			})
	}

	render() {
		return (
			<div className="app">
				<Route path="/search" render={() => (
					<SearchBook
						searchEveryBook={this.searchEveryBook}
						changeBookShelf={this.changeBookShelf}
						bookResults={this.state.bookResults}
						books={this.state.books}
					/>
				)} />

				<Route path="/" exact render={() => (
					<div className="list-books">
						<div className="list-books-title">
							<h1>MyReads</h1>
						</div>
						<div className="list-books-content">
							<div>
								<BookShelf
									key="Currently Reading"
									shelfName="Currently Reading"
									books={this.state.books.filter(
										book => book.shelf === "currentlyReading"
									)}
									changeBookShelf={this.changeBookShelf}
								/>
								<BookShelf
									key="Read"
									shelfName="Read"
									books={this.state.books.filter(
										book => book.shelf === "read"
									)}
									changeBookShelf={this.changeBookShelf}
								/>
								<BookShelf
									key="Want to Read"
									shelfName="Want to Read"
									books={this.state.books.filter(
										book => book.shelf === "wantToRead"
									)}
									changeBookShelf={this.changeBookShelf}
								/>
							</div>
						</div>
						<div className="open-search">
							<Link to="/search">Add a book</Link>
						</div>
					</div>
				)}
				/>
			</div>
		);
	}
}

export default App;
