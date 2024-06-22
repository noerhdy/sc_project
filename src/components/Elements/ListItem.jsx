import React from "react";
import { Link } from "react-router-dom";

const ListItem = (props) => {
  const { title, link, children } = props;
  return (
    <li className="p-2">
      <Link to={link}>
        <div>
          <strong>{title}</strong>
          <p>{children}</p>
        </div>
      </Link>
    </li>
  );
};

export default ListItem;
