import { eventInterface } from "@/dummy-data";
import EventItem from "./event-item";

import classes from './event-list.module.css'

function EventList(props:{items:Array<eventInterface>}){
    const {items} = props;
return <ul className={classes.list}>
    {items.map(event => <EventItem key={event.id} id={event.id} title={event.title} description={event.description} location={event.location} image={event.image} date={event.date} isFeatured={event.isFeatured} />)}
</ul>
}

export default EventList;