import { AxiosError } from "axios";
import { signOut } from "next-auth/react";

interface ErrorResponseData {
  meta?: { message: string; status: number }; // Menyesuaikan agar lebih fleksibel
}

const onErrorHandler = (error: Error) => {
  const axiosError = error as AxiosError<ErrorResponseData>;

  if (axiosError.response?.status === 403) {
    const errorName = axiosError.response?.data?.meta?.message;

    if (errorName === "jwt expired") {
      signOut();
      localStorage.removeItem("token");
    }
  }

  if (axiosError.response?.status === 500 && axiosError.response?.data?.meta?.message.includes("E11000")) {
    throw new Error("username or email already exist");
  }

  throw new Error(axiosError.response?.data?.meta?.message || "Something went wrong");
};

export { onErrorHandler };
