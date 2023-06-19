import EventList from "@/components/events/event-list";
import ResultsTitle from "@/components/events/results-title";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";

import Button from "@/components/ui/button";
import ErrorAlert from "@/components/events/error-alert";

function filteredEventssPage() {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return (
      <>
        <ErrorAlert><p className="center">Loading...</p></ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }
  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numMonth) ||
    isNaN(numYear) ||
    numYear > 2030 ||
    numYear < 2001 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    return <>
    <ErrorAlert><p>Invalid filter, please adjust your values.</p></ErrorAlert>
    <Button link='/events'>Show All Events</Button></>;
  }

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });
  if (!filteredEvents || filteredEvents.length === 0) {
    return <ErrorAlert><p>No events found for chosen filter.</p></ErrorAlert>;
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
}

export default filteredEventssPage;
