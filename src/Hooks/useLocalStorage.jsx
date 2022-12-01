import { useEffect, useState } from "react";

export const useLocalStorage = () => {
  const [parsedValues, setParsedValues] = useState([]);
  useEffect(() => {
    const values = localStorage.getItem("Room");
    setParsedValues(JSON.parse(values));
    //console.log(parsedValues);
  }, []);
  return parsedValues;
};
