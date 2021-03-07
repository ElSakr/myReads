import React from "react";
import PropTypes from "prop-types";
import Book from "../book";

const Shelf = ({ booksList, id, changeList }) => {
  const updateShelf = (data) => {
    changeList(data);
  };
  return (
    <div className="bookshelf" key={id}>
      <div className="bookshelf-books">
        <ol className="books-grid" style={{ listStyle: "none" }}>
          {booksList?.length > 0 ? (
            booksList?.map((book) => (
              <li key={book.id}>
                <Book
                  book={book}
                  changeShelf={(changeShelf) => updateShelf(changeShelf)}
                />
              </li>
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
