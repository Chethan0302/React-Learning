import React from "react";
import EventsNavigation from "../components/EventsNavigation";
import { Outlet, useNavigation } from "react-router-dom";
const EventsRoot = () => {
  const navigate = useNavigation();
  return (
    <>
      <EventsNavigation />
      <main>
        {navigate.state === "loading" && <p>Loading...</p>}
        <Outlet />
      </main>
    </>
  );
};

export default EventsRoot;
