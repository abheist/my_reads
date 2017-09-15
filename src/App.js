import React from "react";
import { Switch, Link, Route } from "react-router-dom";
import debounce from 'lodash.debounce'

import SearchBook from "./SearchBook";
import BookShelf from "./BookShelf";
import SearchResults from "./SearchResults"
import Page404 from "./Page404"

import * as BooksAPI from "./BooksAPI";
import "./App.css";

class App extends React.Component {
	state = {
		books: [],
		bookResults: []
	};

	componentDidMount() {
		BooksAPI.getAll().then(books => {
			this.setState({ books });
		});
	}

	setBooksAgain() {
		BooksAPI.getAll().then(books => {
			this.setState({ books });
		});
	}

	changeBookShelf = (book_to_change, event) => {
		BooksAPI.update(book_to_change, event.target.value).then(result => {
			this.setBooksAgain();
		});
	};

	updateBook = (book, shelf) => {
		BooksAPI.update(book, shelf).then(res => {
			this.setBooksAgain()
		})
	}

	resetSearchResultState = () => {
		this.setState({ bookResults: [] });
	}

	convertToCamelCase = (str) => {
		var out = "";
		str.split(" ").forEach(function (el, idx) {
			var add = el.toLowerCase();
			out += (idx === 0 ? add : add[0].toUpperCase() + add.slice(1));
		});
		return out;
	}

	sendRequestForSearch = debounce(function (query, maxResult) {
		BooksAPI.search(query, maxResult).then(res => {
			if (query.length && !res.error) {
				this.setState({ bookResults: res })
			} else {
				this.resetSearchResultState();
			}
		}).catch(this.resetSearchResultState);
	}, 1000, { leading: false, trailing: true });

	searchEveryBook = (query) => {
		const maxResult = 7;
		if (query.length) {
			this.sendRequestForSearch(query, maxResult);
		} else {
			this.resetSearchResultState();
		}
	}

	render() {
		return (
			<div className="app">
				<Switch>
					<Route path="/" exact render={() => (
						<div className="list-books">
							<div className="list-books-title">
								<h1>MyReads</h1>
							</div>
							<div className="list-books-content">
								<div>
									{
										['Currently Reading', 'Read', 'Want to Read'].map(shelf =>
											<BookShelf
												key={shelf}
												shelfName={shelf}
												books={
													this.state.books.filter(
														book => book.shelf === this.convertToCamelCase(shelf)
													)
												}
												booksInShelf={this.state.books}
												changeBookShelf={this.changeBookShelf}
											/>
										)
									}
								</div>
							</div>
							<div className="open-search">
								<Link to="/search">Add a book</Link>
							</div>
						</div>
					)}
					/>

					<Route path="/search" render={() => (
						<div className="search-books">
							<SearchBook
								searchEveryBook={this.searchEveryBook}
							/>
							<SearchResults
								changeBookShelf={this.changeBookShelf}
								bookResults={this.state.bookResults}
								booksInShelf={this.state.books}
								resetSearchResultState={this.resetSearchResultState}
							/>
						</div>
					)} />

					<Route component={Page404} />
				</Switch>
			</div>
		);
	}
}

export default App;
