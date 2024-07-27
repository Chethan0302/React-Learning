import React from "react";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";
const EventDetailPage = () => {
  const { event } = useRouteLoaderData('event-detail');
  return <EventItem event={event} />;
};

export default EventDetailPage;

export async function loader({ request, params }) {
  const response = await fetch(
    `http://localhost:8080/events/${params.eventId}`
  );
  if (!response.ok) {
    throw new Response("Could not fetch data from server", { status: 500 });
  } else {
    return response;
  }
}
