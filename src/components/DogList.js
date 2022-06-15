import React from "react";
import Dog from "./Dog";

const DogList = (props) => {
  const dogComponents = props.dogData.map((dog) => {
    return (
      <Dog
        name={dog.name}
        favoriteToy={dog.favoriteToy}
        chipNumber={dog.chipNumber}
      ></Dog>
    );
  });
  return (
    <section>
      <h2>Dog Count: {props.dogData.length}</h2>
      <ul>{dogComponents}</ul>
    </section>
  );
};
