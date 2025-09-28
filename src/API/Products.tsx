import axios from "axios";
import { API_URL } from "./config";

export const productList = async () => {
  try {
    const res = await axios.get(`${API_URL}/products`, {});
    return res.data;
  } catch (error) {
    return console.log(error);
  }
};

