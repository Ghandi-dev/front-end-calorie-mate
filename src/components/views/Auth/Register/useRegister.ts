import { useContext, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IRegister } from "@/types/Auth";
import authServices from "@/services/auth.service";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { ToasterContext } from "@/context/ToasterContext";

const registerSchema = yup.object().shape({
  fullname: yup.string().required("Full name is required"),
  username: yup.string().required("Username is required"),
  gender: yup.string().required("Gender is required"),
  birthDate: yup.date().required("Birth date is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Password confirmation is required"),
});

const useRegister = () => {
  const router = useRouter();
  const [visiblePassword, setVisiblePassword] = useState({
    password: false,
    confirmPassword: false,
  });
  const { setToaster } = useContext(ToasterContext);

  const handleVisiblePassword = (key: "password" | "confirmPassword") => {
    setVisiblePassword({ ...visiblePassword, [key]: !visiblePassword[key] });
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(registerSchema) });

  const registerService = async (payload: IRegister) => {
    const result = await authServices.register(payload);
    return result;
  };

  const { mutate: mutateRegister, isPending: isPendingRegister } = useMutation({
    mutationFn: registerService,
    onError(error) {
      setToaster({ type: "error", message: error.message });
    },
    onSuccess: () => {
      reset();
      setToaster({ type: "success", message: "Register successfully" });
      router.push("/auth/register/success");
    },
  });

  const handleRegister = (data: IRegister) => mutateRegister(data);

  return {
    visiblePassword,
    handleVisiblePassword,
    control,
    handleSubmit,
    errors,
    handleRegister,
    isPendingRegister,
  };
};

export default useRegister;
