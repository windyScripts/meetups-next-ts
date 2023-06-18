import { eventInterface } from "@/dummy-data";
import Link from "next/link"
<link rel="stylesheet" href="" />

function EventItem(props:eventInterface) {
  const { title, image, date, location, id} = props;
  const humanReadableDate = new Date(date).toLocaleDateString('en-US',{day: 'numeric',month: 'long', year: 'numeric'});
  const formattedAddress = location.replace(',','\n');
  const exploreLink = `/events/${id}`;
  return <li>
    <img src={'/'+image} alt={title} />
    <div>
      <div>
        <h2>{title}</h2>
        <div>
          <time>{humanReadableDate}</time>
        </div>
        <div>
          <address>{formattedAddress}</address>
        </div>
      </div>
      <div>
        <Link href={exploreLink}> Explore event</Link>
      </div>
    </div>
  </li>;
}

export default EventItem;