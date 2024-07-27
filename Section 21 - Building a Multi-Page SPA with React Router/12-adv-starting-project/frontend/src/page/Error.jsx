import React from "react";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const { status, data } = useRouteError();
  let title = "An error occured";
  let messsage = "An error occured";
  if (status === 500) messsage = data;
  if (status === 404) {
    title = "Not found!";
    messsage = "The requested page could not be found.";
  }
  return <PageContent title={title}>{messsage}</PageContent>;
};

export default Error;
