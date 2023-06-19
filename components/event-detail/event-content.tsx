import { ReactElement } from 'react';
import classes from './event-content.module.css';

function EventContent(props:{children:ReactElement|ReactElement[]}) {
  return (
    <section className={classes.content}>
      {props.children}
    </section>
  );
}

export default EventContent;
