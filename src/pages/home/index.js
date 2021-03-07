import React, { useState, useEffect } from "react";
import { Layout, Collapse } from "antd";
import AppHeader from "../../components/header";
import Shelf from "../../components/shelf";
import { SHELFS } from "../../utils/constants";
import { getAllBooks } from "../../network/apis/books";

const Home = ({ allBooks }) => {
  const { Content } = Layout;
  const { Panel } = Collapse;
  const [booksList, setBooksList] = useState(allBooks?.allBooks);

  const updateBooksList = () => {
    setBooksList([]);
    getAllBooks().then((res) => setBooksList(res?.data?.books));
  };

  useEffect(() => {
    getAllBooks().then((res) => setBooksList(res?.data?.books));
    return () => {
      setBooksList([]);
    };
  }, []);

  return (
    <Layout>
      <AppHeader />
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          <div className="search-wrapper my-5">
            <a className="py-5" href="/search">
              Search on Books
            </a>
          </div>

          <Collapse defaultActiveKey={[SHELFS[0].key]}>
            {SHELFS.length > 0 &&
              SHELFS.map((shelf) => (
                <Panel header={shelf.title} key={shelf.key}>
                  <Shelf
                    id={shelf.key}
                    booksList={booksList.filter(
                      (books) => books.shelf === shelf.key
                    )}
                    changeList={(changeShefl) => updateBooksList(changeShefl)}
                  />
                </Panel>
              ))}
          </Collapse>
        </div>
      </Content>
    </Layout>
  );
};

export default Home;
