import Link from 'next/link';

import classes from './button.module.css';
import { MouseEventHandler, ReactElement } from 'react';

function Button(props:{children: ReactElement|ReactElement[]| string; link?: string; onClick?: MouseEventHandler}) {
    if(props.link){
        return <Link className={classes.btn} href={props.link}>{props.children}</Link>
    }else{
        return <button className={classes.btn} onClick={props.onClick}>{props.children}</button>
    }
    
}

export default Button;