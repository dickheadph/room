import React from "react";

function CardOutline(props) {
  return (
    <>
      <div className="w-2/12 rounded-lg border-[2px] bg-slate-300 p-3">
        {props.children}
      </div>
    </>
  );
}

export default CardOutline;
