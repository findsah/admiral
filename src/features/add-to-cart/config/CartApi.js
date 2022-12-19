import { createAsyncThunk } from "@reduxjs/toolkit";
import apiInstance from "../../../config/AxiosInstance";

export const GetProducts = createAsyncThunk("cart/GetProducts", async () => {
  let result = await apiInstance
    .get(`products`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });

  return result;
});
