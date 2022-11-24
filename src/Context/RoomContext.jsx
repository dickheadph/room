import React, { createContext, useState } from "react";

const RoomContext = createContext();
export const RoomProvider = (props) => {
  const [selected, setSelected] = useState({
    room1: true,
    child1: 0,
    adult1: 1,
    room2: false,
    child2: 0,
    adult2: 1,
    room3: false,
    child3: 0,
    adult3: 1,
    room4: false,
    child4: 0,
    adult4: 1,
  });

  const {
    room1,
    child1,
    adult1,
    room2,
    child2,
    adult2,
    room3,
    child3,
    room4,
    adult3,
    child4,
    adult4,
  } = selected;

  const onMutate = (e) => {
    let boolean = null;
    if (e.target.value === "true") {
      boolean = true;
    }
    if (e.target.value === "false") {
      boolean = false;
    }
    //
    if (e.target.value === room2) {
      setSelected((prevState) => ({
        ...prevState,
        [e.target.id]: boolean ?? +e.target.value,
        room3: boolean ?? +e.target.value,
      }));
    } else if (!e.target.value === room3) {
      setSelected((prevState) => ({
        ...prevState,
        [e.target.id]: boolean ?? +e.target.value,
        room2: boolean ?? +e.target.value,
        room3: boolean ?? +e.target.value,
      }));
    } else if (e.target.value !== room4) {
      setSelected((prevState) => ({
        ...prevState,
        [e.target.id]: boolean ?? +e.target.value,
        room2: boolean ?? +e.target.value,
        room3: boolean ?? +e.target.value,
        room4: boolean ?? +e.target.value,
      }));
    } else {
      setSelected((prevState) => ({
        ...prevState,
      }));
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("Room", JSON.stringify(selected));
  };
  const getValues = () => {
    const values = localStorage.getItem("Room");
    const parsedValues = JSON.parse(values);
    //console.log(parsedValues);
    setSelected(parsedValues ?? "-");
  };
  return (
    <RoomContext.Provider
      value={{
        room1,
        child1,
        adult1,
        child2,
        adult2,
        child3,
        adult3,
        child4,
        adult4,
        selected,
        onMutate,
        onSubmit,
        getValues,
      }}
    >
      {props.children}
    </RoomContext.Provider>
  );
};
