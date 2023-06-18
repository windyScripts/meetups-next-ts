import Link from 'next/link';

import classes from './button.module.css';
import { ReactElement } from 'react';

function Button(props:{link: string; children: ReactElement|ReactElement[];}) {
    return <Link className={classes.btn} href={props.link}>{props.children}</Link>
}

export default Button;