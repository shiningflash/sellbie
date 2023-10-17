import React from "react"
import TextInput from "./TextInput"
import { LOGIN_USER } from "../graphql/mutations/Login"
import { useMutation } from "@apollo/client"
import { useUserStore } from "../stores/userStore"
import useGeneralStore from "../stores/generalStore"
import { GraphQLErrorExtensions } from "graphql"

function Login() {
    const [loginUser, { loading, error, data }] = useMutation(LOGIN_USER)
    const setUser = useUserStore((state) => state.setUser)
    const setIsLoginOpen = useGeneralStore((state) => state.setLoginIsOpen)
    // errors is an object with property of email, password
    const [errors, setErrors] = React.useState<GraphQLErrorExtensions>({})
    const [invalidCredentials, setInvalidCredentials] = React.useState(false)
  
    const [loginData, setLoginData] = React.useState({
      email: "",
      password: "",
    })
  
    const handleLogin = async () => {
        try {
            setErrors({})
            await loginUser({
                variables: {
                    email: loginData.email,
                    password: loginData.password,
                },
            }).catch((err) => {
                if (err.graphQLErrors[0].extensions?.invalidCredentials) {
                    setInvalidCredentials(err.graphQLErrors[0].extensions?.invalidCredentials)
                } else setErrors(err.graphQLErrors[0].extensions)
            })

            if (!data?.login.user)
              setUser({
                  id: data?.login.user.id,
                  email: data?.login.user.email,
                  fullname: data?.login.user.fullname,
              })
            setIsLoginOpen(false)
        } catch (_) {
            if (error && error.graphQLErrors && error.graphQLErrors[0].extensions) {
                const validationErrors = error.graphQLErrors[0].extensions
                setErrors(validationErrors)
            }
        }
    }

  return (
    <>
      <div className="text-center text-[28px] mb-4 font-bold">Login</div>

      <div className="px-6 pb-1.5 text-[15px]">Email address</div>
      <div className="px-6 pb-2">
        <TextInput
          max={64}
          placeHolder="Enter your email address"
          onChange={(e) =>
            setLoginData({ ...loginData, email: e.target.value })
          }
          inputType="email"
          autoFocus={true}
          error={errors?.email as string}
        />
      </div>

      <div className="px-6 pb-1.5 text-[15px]">Password</div>
      <div className="px-6 pb-2">
        <TextInput
          autoFocus={false}
          max={64}
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
          placeHolder="Enter your password"
          inputType="password"
          error={errors?.password as string}
        />
      </div>

      <div className="px-6 mt-6">
        <span className="text-red-500 text-[14px] font-semibold">{invalidCredentials}</span>
        <button
          onClick={handleLogin} 
          disabled={!loginData.email || !loginData.password}
          className={[
            "w-full text-[17px] font-semibold text-white py-3 rounded-sm",
            !loginData.email || !loginData.password
              ? "bg-gray-200"
              : "bg-[#F02C56]",
          ].join(" ")}
        >
          Login
        </button>
      </div>
    </>
  )
}

export default Login