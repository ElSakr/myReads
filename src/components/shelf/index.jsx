import React from "react";
import PropTypes from "prop-types";
import Book from "./../../components/book";

const Shelf = ({ booksList, id, changeList }) => {
  const updateShelf = (data) => {
    changeList(data);
  };
  return (
    <div className="bookshelf" key={id}>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksList.length > 0 ? (
            booksList.map((book) => (
              <p key={book.id}>
                <Book
                  book={book}
                  changeShelf={(changeShelf) => updateShelf(changeShelf)}
                />
              </p>
            ))
          ) : (
            <p>No Books</p>
          )}
        </ol>
      </div>
    </div>
  );
};

Shelf.propTypes = {
  booksList: PropTypes.array.isRequired,
};
export default Shelf;
