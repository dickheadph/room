import { useEffect } from "react";

export const useLocalStorage = () => {
  useEffect(() => {
    const values = localStorage.getItem("Room");
    const parsedValues = JSON.parse(values);
    //console.log(parsedValues);
    return parsedValues || "";
  }, []);
};
