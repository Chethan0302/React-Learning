import React from "react";
import { Link } from "react-router-dom";
const DUMMY_EVENTS = [
  { id: "e1", title: "Some event" },
  { id: "e2", title: "Another event" },
];
const EventsPage = () => {
  return (
    <>
      <h1>EventsPage</h1>
      {DUMMY_EVENTS.map((event) => {
        return (
          <ul>
            <li>
              <Link to={event.id}>{event.title}</Link>
            </li>
          </ul>
        );
      })}
    </>
  );
};

export default EventsPage;
