import React from "react";
import List from "./List";
import Edit from "./Edit";
const routes = {
  "/": () => <List />,
  "/edit:id": () => <Edit />,
};
export default routes;