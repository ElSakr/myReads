import React from "react";
import PropTypes from "prop-types";

const Shelf = ({ booksList, id }) => {
  return (
    <div className="bookshelf" key={id}>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksList.length > 0 &&
            booksList.map((book) => <p key={book.id}>{book?.title}</p>)}
        </ol>
      </div>
    </div>
  );
};

Shelf.propTypes = {
  booksList: PropTypes.array.isRequired,
};
export default Shelf;
