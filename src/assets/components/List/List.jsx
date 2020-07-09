import React from 'react';
import classNames from 'classnames';

import './List.scss';

function List({ items, isRemovable, onClick }) {
  return (
    <ul onClick={onClick} className="list">
      {items.map((item, index) => (
        <li key={index} className={classNames(item.className, { active: item.active })}>
          {item.icon ? <i>{item.icon}</i> : <i className={`badge badge--${item.color}`}></i>}
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default List;
