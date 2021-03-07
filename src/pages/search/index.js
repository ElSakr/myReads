import React, { useState } from "react";
import { search } from "../../network/apis/books";
import { updateBook } from "../../network/apis/books";
import Book from "../../components/book";

const Search = ({ allBooks }) => {
  const [list, setList] = useState([]);

  const serchOnBooks = (value, maxResults) => {
    if (!value.trim().length) {
      setList([]);
    } else {
      search(value, maxResults).then((res) => {
        if (res?.data?.books.length) {
          const filterdData = res?.data?.books?.filter((el) =>
            allBooks?.allBooks.map((item) => {
              if (el.id === item.id) {
                el.shelf = item.shelf;
              } else {
                el.item = "none";
              }
              return el;
            })
          );
          setList(filterdData);
        } else {
          setList([]);
        }
      });
    }
  };

  const updateShelf = (id, data) => {
    updateBook(id, data);
  };

  return (
    <div className="search-page">
      <div className="container">
        <div className="search-wrapper my-5">
          <a className="py-5" href="/">
            Back to hom
          </a>
        </div>
        <div className="search-input mt-5">
          <input
            placeholder="Search"
            onKeyUp={(e) => {
              serchOnBooks(e.target.value, 15);
            }}
            style={{
              width: "100%",
              padding: "20px",
              border: "1px solid #ddd",
              boxShadow: "2px 4px 20px #ddd",
            }}
          />

          <div className="books-container">
            {list?.length > 0 ? (
              list.map((book) => (
                <div key={book?.id}>
                  <Book
                    book={book}
                    changeShelf={(changeShelf) =>
                      updateShelf(book?.id, changeShelf)
                    }
                  />
                </div>
              ))
            ) : (
              <p>No results!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
