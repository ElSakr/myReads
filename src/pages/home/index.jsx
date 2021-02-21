import React, { useEffect, useState } from "react";
import { Layout, Collapse } from "antd";
import AppHeader from "./../../components/header";
import Shelf from "./../../components/shelf";
import { SHELFS } from "./../../utils/constants";
import { getAllBooks } from "./../../network/apis/books";
const Home = () => {
  const { Content, Footer } = Layout;
  const { Panel } = Collapse;
  const [booksList, setBooksList] = useState([]);
  useEffect(() => {
    getAllBooks().then((res) => setBooksList(res?.data?.books));
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
          <Collapse defaultActiveKey={[SHELFS[0].key]}>
            {SHELFS.length > 0 &&
              SHELFS.map((shelf) => (
                <Panel header={shelf.title} key={shelf.key}>
                  <Shelf
                    id={shelf.key}
                    booksList={booksList.filter(
                      (books) => books.shelf === shelf.key
                    )}
                  />
                </Panel>
              ))}
          </Collapse>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        My Reads ©2021 Created by Amr Sakr
      </Footer>
    </Layout>
  );
};

export default Home;
