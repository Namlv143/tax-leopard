import React from "react";
import Footer from "../Footer";
import Header from "../Header";

const AppLayout = (props) => {
  return (
    <>
      <Header />
        {props.children}
      <Footer />
    </>
  );
};

export default AppLayout;
