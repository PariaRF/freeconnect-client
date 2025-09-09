import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { changeUserStatusApi } from "../../../services/authService";

export default function useChangeUserStatus() {
  const queryClicent = useQueryClient();
  const { isPending: isUsersLoading, mutate: changeUserStatus } = useMutation({
    mutationFn: changeUserStatusApi,
    onSuccess: (data) => toast.success(data.message),
    onError: (error) => toast.error(err?.response?.data?.message),
  });

  return { isUsersLoading, changeUserStatus };
}
