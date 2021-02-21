import React from "react";
import { Card, Divider } from "antd";
import PropTypes from "prop-types";
import { updateBook } from "./../../network/apis/books";

const Book = ({ book, changeShelf }) => {
  const renderBookAuthors = (authors) => {
    switch (authors) {
      case !authors:
        return;

      case authors?.length > 1:
        return authors.join(" , ");

      case authors?.length === 0:
        return authors[0];

      default:
        return "";
    }
  };

  const handleShelfChange = (e) => {
    updateBook(book?.id, e.target.value);
    changeShelf(e.target.value);
  };

  const moveTo = () => {
    return (
      <div className="content-wrapper">
        <select
          onChange={(e) => handleShelfChange(e)}
          defaultValue={book.shelf}
        >
          <option value="none" disabled>
            Move to
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
        </select>
      </div>
    );
  };

  return (
    <Card
      title={book?.title}
      bordered={true}
      extra={changeShelf && moveTo()}
      className="my-5"
    >
      <p>{book?.description}</p>
      <Divider />
      <p>
        <span style={{ marginRight: "5px" }}>Authors:</span>
        {renderBookAuthors(book?.authors)}
      </p>
    </Card>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
};
export default Book;
