import axios from "axios";
import { useEffect, useState } from "react";




export const useApiHooks = (api) => {
  const [data, setData] = useState([]);
  const [pag, setPag] = useState(1);

  const [load, setLoad] = useState(false);

  const getData = async () => {
    try {
      setLoad(true);
      const response = await axios.get(api, {
        params: {
          page: pag
        }
      });
      setData(response.data);
      setLoad(false);
    } catch (err) {
      setLoad(false);

    }
  }

  useEffect(() => {
    getData();

  }, [pag]);


  return [data, load];
}