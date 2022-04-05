import React from "react";
import { Route } from "react-router-dom";

export const SectionRoute = ({
  permissions,
  ...props
}) => {
 
  return <Route {...props} />
};
export default React.memo(SectionRoute);
