import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { getAllBooks } from "./network/apis/books";
import Routes from "./routes/routes";
import "./App.scss";

function App() {
  const [booksList, setBooksList] = useState([]);

  useEffect(() => {
    getAllBooks().then((res) => setBooksList(res?.data?.books));
  }, []);

  return (
    <div className="app-wrapper">
      <Router>
        <Routes allBooks={booksList} />
      </Router>
    </div>
  );
}

export default App;
