import { useMutation, useQuery } from "react-query";
import { loginUser, getUsers, getUserById, updateUser } from "../services/UserService";

export const useLogin = () => useMutation(loginUser);

export const useUpdateUser = () => useMutation(updateUser);

export const useUsers = () => useQuery("users", getUsers)

export const useOwnUser= (userId) => useQuery(["user", userId],() => getUserById(userId))
