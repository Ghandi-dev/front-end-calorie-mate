import environment from "@/config/environment";
import { SessionExtended } from "@/types/Auth";
import axios from "axios";
import { getSession } from "next-auth/react";
import { onErrorHandler } from "./responseHandler";

const headers = {
  "Content-Type": "application/json",
};

const instance = axios.create({
  baseURL: environment.API_URL,
  headers,
  timeout: 60 * 1000,
});

// Interceptors request (Menambahkan Token ke Header)
instance.interceptors.request.use(
  async (request) => {
    const session: SessionExtended | null = await getSession();
    if (session && session.accessToken) {
      request.headers.Authorization = `Bearer ${session.accessToken}`;
    }
    return request;
  },
  (error) => Promise.reject(error)
);

// Interceptors response (Menangani Error)
instance.interceptors.response.use(
  (response) => response, // Jika response sukses, lanjutkan
  (error) => {
    onErrorHandler(error); // Panggil error handler
    // return Promise.reject(error);
  }
);

export default instance;
