import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../api/user";

export const useRegisterUser = () => {
    return useMutation({
        mutationKey: ["registerUser"],
        mutationFn: registerUser,
        onSuccess: (data) => {
            // console.log("회원가입 성공:", data);
        },
        onError: (error) => {
            // console.error("회원가입 실패:", error);
        }
    });
};