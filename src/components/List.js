
import React from 'react';

const List = ({ items, itemType }) => (
  <div>
    <h2>{itemType} List</h2>
    {items.length > 0 ? (
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong>: {item.description}
          </li>
        ))}
      </ul>
    ) : (
      <p>No {itemType.toLowerCase()} found.</p>
    )}
  </div>
);

export default List;
