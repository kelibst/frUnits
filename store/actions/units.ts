export const GET_UNITS = "GET_UNITS";
import Axios from "axios";

export const getUnits = () => {
  const getUnitsAxios = Axios.create({
    baseURL: "https://unitreview.herokuapp.com/api/v1/",
  });
  getUnitsAxios
    .get("/units.json")
    .then((res) => {
      console.log(res);
      return { type: GET_UNITS, data: res.data };
    })
    .catch((err) => console.log(err));
};
