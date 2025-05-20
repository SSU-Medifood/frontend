// 회원가입 시, 사용자가 입력하는 정보를 전역적으로 관리하고 한 번에 fetch한다.
// import { createContext, useContext, useState } from "react";

// const SignupContext = createContext();

// export const SignupProvider = ({ children }) => {
//     const [signupData, setSignupData] = useState({
//         email: "",
//         password: ""
//     });

//     const updateSignupData = (key, value) => {
//         setSignupData((prev) => ({
//         ...prev,
//         [key]: value,
//         }));
//     };

//     const resetSignupData = () => {
//         setSignupData({
//             email: "",
//             password: ""
//         });
//     };

//     return (
//         <SignupContext.Provider value={{ signupData, updateSignupData, resetSignupData }}>
//             {children}
//         </SignupContext.Provider>
//     );
// };

// export const useSignup = () => useContext(SignupContext);
