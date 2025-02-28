import authServices from "@/services/auth.service";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

const useActivation = () => {
  const router = useRouter();
  const { code } = router.query;

  const activation = async (code: string) => {
    const res = await authServices.activation({ code: code });
    return res.data.data;
  };

  const { data } = useQuery({
    queryKey: ["activation", code],
    queryFn: () => activation(String(code) || ""),
    enabled: router.isReady,
  });

  const status = data ? "success" : "failed";

  return {
    status,
  };
};

export default useActivation;
