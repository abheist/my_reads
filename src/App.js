import React from "react";
import { Link, Route } from "react-router-dom";
import SearchBook from "./SearchBook";
import BookShelf from "./BookShelf";
import "./App.css";
import * as BooksAPI from "./BooksAPI"

class App extends React.Component {
    state = {
        currentlyReading: [],
        wantToRead: [],
        read: []
    };

    componentDidMount() {
        BooksAPI.getAll().then(books => {
            this.setState((state) => ({
                currentlyReading: books.filter(book => book.shelf === "currentlyReading"),
                wantToRead: books.filter(book => book.shelf === "wantToRead"),
                read: books.filter(book => book.shelf === "read")
            }))
        })
    }

    changeBookShelf(book, event) {
        console.log("book id: " + book);
        console.log(event.target.value)
    }

    render() {
        return (
            <div className="app">
                <Route
                    path="/search"
                    render={() => (<SearchBook />)}
                />

                <Route path="/"
                    exact
                    render={() => (
                        <div className="list-books">
                            <div className="list-books-title">
                                <h1>MyReads</h1>
                            </div>
                            <div className="list-books-content">
                                <div>
                                    <BookShelf
                                        key="Currently Reading"
                                        shelfName="Currently Reading"
                                        books={this.state.currentlyReading}
                                        changeBookShelf={this.changeBookShelf}
                                    />
                                    <BookShelf
                                        key="Read"
                                        shelfName="Read"
                                        books={this.state.read}
                                        changeBookShelf={this.changeBookShelf}
                                    />
                                    <BookShelf
                                        key="Want to Read"
                                        shelfName="Want to Read"
                                        books={this.state.wantToRead}
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
        )
    }
}

export default App
