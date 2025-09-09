import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutApi } from "../../services/authService";
import { useNavigate } from "react-router-dom";

export default function useLogout() {
  const queryClicent = useQueryClient();
  const navigate = useNavigate();

  const { isPending, mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: (data) => {
      queryClicent.removeQueries();
      navigate("/auth", { replace: true });
    },
  });

  return { isPending, logout };
}
