import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import PropTypes from "prop-types";

const AppLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
AppLayout.propTypes = {
  children: PropTypes.element,
};
export default AppLayout;
