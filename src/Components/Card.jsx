import React, { useState, useEffect } from "react";
function Card() {
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
    adult3,
    room4,
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
  useEffect(() => {
    getValues();
  }, []);
  return (
    <>
      <div className="p-3 lg:p-10">
        <form onSubmit={onSubmit}>
          <div className="flex flex-wrap md:mx-[50px] lg:ml-[210px] xl:ml-[450px]">
            <div className="m-2 h-[170px] w-full rounded-lg border-[2px] border-[#5F7161] bg-[#D0C9C0]/50 p-3 lg:w-4/12">
              <div className="">
                <h1 className="text-center">Room 1</h1>
                <input
                  hidden
                  type="checkbox"
                  id="room1"
                  checked={room1}
                  value={true}
                  onChange={onMutate}
                />
              </div>
              <div className="">
                <div className="">
                  <label htmlFor="adult1">Adult (18+)</label>
                  <select
                    name=""
                    id="adult1"
                    value={adult1}
                    onChange={onMutate}
                    className="w-full rounded-lg p-1 px-3 outline-none"
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                  </select>
                  <label htmlFor="child1">Child (0-17)</label>
                  <select
                    name=""
                    id="child1"
                    value={child1}
                    onChange={onMutate}
                    className="w-full rounded-lg p-1 px-3 outline-none"
                  >
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                  </select>
                </div>
              </div>
            </div>
            <div
              className={`border-[2px] border-[#5F7161] ${
                room2 ? "bg-[#D0C9C0]/50" : "bg-[#6D8B74]/80"
              } m-2 h-[160px] w-full rounded-lg p-3 lg:w-4/12`}
            >
              <div className="flex justify-between">
                <h1 className="text-center text-white">Room 2</h1>
                <input
                  type="checkbox"
                  id="room2"
                  checked={room2}
                  value={room2 ? false : true}
                  onChange={onMutate}
                />
              </div>
              <div>
                <div className="">
                  <label htmlFor="adult2">Adult (18+)</label>
                </div>
                <div className="">
                  <select
                    id="adult2"
                    value={adult2}
                    disabled={!room2}
                    onChange={onMutate}
                    className={`${
                      room2 ? "bg-white" : "bg-[#6D8B74]/80"
                    } w-full rounded-lg p-1 px-3 outline-none`}
                  >
                    <option value={!room2 ? 0 : 1}>1</option>
                    <option value={!room2 ? 0 : 2}>2</option>
                  </select>
                  <label htmlFor="child2">Child (0-17)</label>
                  <select
                    id="child2"
                    value={child2}
                    disabled={!room2}
                    onChange={onMutate}
                    className={`${
                      room2 ? "bg-white" : "bg-[#6D8B74]/80"
                    } w-full rounded-lg p-1 px-3 outline-none`}
                  >
                    <option value={0}>0</option>
                    <option value={!room2 ? 0 : 1}>1</option>
                    <option value={!room2 ? 0 : 2}>2</option>
                  </select>
                </div>
              </div>
            </div>
            <div
              className={`border-[2px] border-[#5F7161] ${
                room3 ? "bg-[#D0C9C0]/50" : "bg-[#6D8B74]/80"
              } m-2 h-[160px] w-full rounded-lg p-3 lg:w-4/12`}
            >
              <div className="flex justify-between">
                <h1 className="text-center text-white">Room 3</h1>
                <input
                  type="checkbox"
                  id="room3"
                  checked={room3}
                  value={room3 ? false : true}
                  onChange={onMutate}
                />
              </div>
              <div>
                <div className="">
                  <label htmlFor="adult3">Adult (18+)</label>
                </div>
                <div className="">
                  <select
                    id="adult3"
                    value={adult3}
                    disabled={!room3}
                    onChange={onMutate}
                    className={`${
                      room3 ? "bg-white" : "bg-[#6D8B74]/80"
                    } w-full rounded-lg p-1 px-3 outline-none`}
                  >
                    <option value={!room3 ? 0 : 1}>1</option>
                    <option value={!room3 ? 0 : 2}>2</option>
                  </select>
                  <label htmlFor="child3">Child (0-17)</label>
                  <select
                    id="child3"
                    value={child3}
                    disabled={!room3}
                    onChange={onMutate}
                    className={`${
                      room3 ? "bg-white" : "bg-[#6D8B74]/80"
                    } w-full rounded-lg p-1 px-3 outline-none`}
                  >
                    <option value={0}>0</option>
                    <option value={!room3 ? 0 : 1}>1</option>
                    <option value={!room3 ? 0 : 2}>2</option>
                  </select>
                </div>
              </div>
            </div>
            <div
              className={`border-[2px] border-[#5F7161] ${
                room4 ? "bg-[#D0C9C0]/50" : "bg-[#6D8B74]/80"
              } m-2 h-[160px] w-full rounded-lg p-3 lg:w-4/12`}
            >
              <div className="flex justify-between">
                <h1 className="text-center text-white">Room 4</h1>
                <input
                  type="checkbox"
                  id="room4"
                  checked={room4}
                  value={room4 ? false : true}
                  onChange={onMutate}
                />
              </div>
              <div>
                <label htmlFor="adult4">Adult (18+)</label>
                <div className="">
                  <select
                    id="adult4"
                    value={adult4}
                    disabled={!room4}
                    onChange={onMutate}
                    className={`${
                      room4 ? "bg-white" : "bg-[#6D8B74]/80"
                    } w-full rounded-lg p-1 px-3 outline-none`}
                  >
                    <option value={!room4 ? 0 : 1}>1</option>
                    <option value={!room4 ? 0 : 2}>2</option>
                  </select>
                  <label htmlFor="child4">Child (0-17)</label>
                  <select
                    id="child4"
                    value={child4}
                    disabled={!room4}
                    onChange={onMutate}
                    className={`${
                      room4 ? "bg-white" : "bg-[#6D8B74]/80"
                    } w-full rounded-lg p-1 px-3 outline-none`}
                  >
                    <option value={0}>0</option>
                    <option value={!room4 ? 0 : 1}>1</option>
                    <option value={!room4 ? 0 : 2}>2</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          {/* Button */}
          <div className="w-full rounded-lg p-3 text-center text-white">
            <button
              type="submit"
              className="w-full bg-[#5F7161] px-3 py-2 md:w-auto"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Card;
