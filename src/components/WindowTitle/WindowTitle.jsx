import React from "react";
import { Helmet } from "react-helmet";

const WindowTitle = ({ title }) => {
  return !title ? null : (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default WindowTitle;
