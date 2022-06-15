import React from "react";

const Dog = (props) => {
  return (
    <li>
      <h3>{props.name}</h3>
      <h4>Favorite Toy: {props.favoriteToy}</h4>
      <h4>Chip Number: {props.chipNumber}</h4>
    </li>
  );
};

export default Dog;
