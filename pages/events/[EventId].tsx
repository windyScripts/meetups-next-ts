import { useRouter } from "next/router";
//import { Fragment } from "react";

import { getEventById } from "@/dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "@/components/events/error-alert";

function EventDetailPage() {
  const router = useRouter();

  const EventId = router.query.EventId as string;
  const event = getEventById(EventId);

  if (!event) {
    return <ErrorAlert><p>No event found!</p></ErrorAlert>;
  }

  return (
    <>
      <EventSummary title={event.title}/>
      <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title}/>
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

export default EventDetailPage;
