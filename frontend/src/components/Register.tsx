import React from "react"
import TextInput from "./TextInput"
import { REGISTER_USER } from "../graphql/mutations/Register"
import { useMutation } from "@apollo/client"
import { useUserStore } from "../stores/userStore"
import { GraphQLErrorExtensions } from "graphql"
import useGeneralStore from "../stores/generalStore"

function Register() {
  const [registerUser, { loading, error, data }] = useMutation(REGISTER_USER)
  const setUser = useUserStore((state) => state.setUser)
  const setIsLoginOpen = useGeneralStore((state) => state.setLoginIsOpen)
  // errors is an object with property of email, password, fullname, confirmPassword mapped to an error message. type it properly
  const [errors, setErrors] = React.useState<GraphQLErrorExtensions>({})

  const [registerData, setRegisterData] = React.useState({
    email: "",
    password: "",
    fullName: "",
    confirmPassword: "",
  })

  const handleRegister = async () => {
    try {
        setErrors({})
        await registerUser({
            variables: {
                email: registerData.email,
                password: registerData.password,
                fullname: registerData.fullName,
                confirmPassword: registerData.confirmPassword,
            },
        }).catch((err) => {
        console.log(err.graphQLErrors)
        setErrors(err.graphQLErrors[0].extensions)
        })

        if (!data?.register.user)
            setUser({
                id: data?.register.user.id,
                email: data?.register.user.email,
                fullname: data?.register.user.fullname,
            })
        setUser(data.register.user)
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
      <div className="text-center text-[28px] mb-4 font-bold">Sign up</div>

      <div className="px-6 pb-2">
        <TextInput
          max={64}
          placeHolder="Enter your full name"
          onChange={(e) =>
            setRegisterData({ ...registerData, fullName: e.target.value })
          }
          inputType="email"
          autoFocus={true}
          error={errors?.fullname as string}
        />
      </div>
      
      <div className="px-6 pb-2">
        <TextInput
          autoFocus={false}
          max={64}
          onChange={(e) =>
            setRegisterData({ ...registerData, email: e.target.value })
          }
          placeHolder="Email"
          inputType="text"
          error={errors?.email as string}
        />
      </div>

      <div className="px-6 pb-2">
        <TextInput
          autoFocus={false}
          max={64}
          onChange={(e) =>
            setRegisterData({ ...registerData, password: e.target.value })
          }
          placeHolder="Password"
          inputType="password"
          error={errors?.password as string}
        />
      </div>

      <div className="px-6 pb-2">
        <TextInput
          autoFocus={false}
          max={64}
          onChange={(e) =>
            setRegisterData({ ...registerData, confirmPassword: e.target.value })
          }
          placeHolder="Confirm Password"
          inputType="password"
          error={errors?.confirmPassword as string}
        />
      </div>
      
      <div className="px-6 mt-6">
        <button
          onClick={handleRegister}
          disabled={
            !registerData.email ||
            !registerData.password ||
            !registerData.fullName ||
            !registerData.confirmPassword
          }
          className={[
            "w-full text-[17px] font-semibold text-white py-3 rounded-sm",
            !registerData.email ||
            !registerData.password ||
            !registerData.fullName ||
            !registerData.confirmPassword
              ? "bg-gray-200"
              : "bg-[#24a0ed]",
          ].join(" ")}
        >
          Register
        </button>
      </div>
    </>
  )
}

export default Register