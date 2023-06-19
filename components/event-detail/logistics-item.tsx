import classes from './logistics-item.module.css';
import React from 'react';

function LogisticsItem(props:{icon: React.FC, children:React.ReactElement| React.ReactElement[]}) {
  const { icon: Icon } = props;

  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{props.children}</span>
    </li>
  );
}

export default LogisticsItem;
