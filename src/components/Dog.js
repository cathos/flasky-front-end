import React from "react";

const Dog = () => {
  const newDog = {
    id: "id",
    name: "name",
    age: "age",
    breed: "breed",
    chip: "",
  };

  return (
    <section>
      <h3>This is a dog</h3>
      <p>{newDog.name}</p>
    </section>
  );
};

export default Dog;
