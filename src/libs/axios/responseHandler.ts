import { AxiosError } from "axios";
import { signOut } from "next-auth/react";

interface ErrorResponseData {
  meta?: { message: string }; // Menyesuaikan agar lebih fleksibel
}

const onErrorHandler = (error: Error) => {
  const axiosError = error as AxiosError<ErrorResponseData>;

  if (axiosError.response?.status === 403) {
    const errorName = axiosError.response?.data?.meta?.message;

    if (errorName === "jwt expired") {
      signOut();
      // Hapus token dari localStorage jika ada
      // localStorage.removeItem("token");

      // Sign out dari NextAuth
    }
  }
};

export { onErrorHandler };
