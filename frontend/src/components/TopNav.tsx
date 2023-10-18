import React, { useState } from "react"
import { Link } from "react-router-dom"
import {
  AiOutlineSearch,
  AiOutlineFileSearch,
  AiOutlineUpload,
} from "react-icons/ai"
import { BsThreeDotsVertical } from "react-icons/bs"
import { GrLogout } from "react-icons/gr"
import { BsFillPersonFill } from "react-icons/bs"
import useGeneralStore from "../stores/generalStore"
import { useUserStore } from "../stores/userStore"
import { LOGOUT_USER } from "../graphql/mutations/Logout"
import { useMutation } from "@apollo/client"
import { useLocation } from "react-router-dom"

function TopNav() {
    const isLoginOpen = useGeneralStore((state) => state.isLoginOpen)
    const setIsLoginOpen = useGeneralStore((state) => state.setLoginIsOpen)
    const user = useUserStore((state) => state)
    const setUser = useUserStore((state) => state.setUser)
    const [logoutUser, { loading, error, data }] = useMutation(LOGOUT_USER)
    const location = useLocation()

    const getURL = () => {
        return window.location.pathname
    }

    const handleLogout = async () => {
        try {
            await logoutUser()
            // make empty the user store
            setUser({
                id: undefined,
                fullname: "",
                email: ""
            })
            setIsLoginOpen(true)
        } catch (err) {
            console.log(err)
        }
    }
    
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div
            id="TopNav"
            className="bg-white fixed z-30 flex items-center w-full border-b h-[61px]"
        >
        <div
            className={[
            getURL() === "/" ? "max-w-[1150px]" : "",
            "flex items-center justify-between w-full px-6 mx-auto",
            ].join(" ")}
        >
            <div className={getURL() === "/" ? "w-[80%]" : "lg:w-[20%] w-[70%]"}>
            <Link to="/">
                <p><b>Sellbie</b></p>
            </Link>
            </div>
            <div className="hidden md:flex items-center bg-[#F1F1F1] p-1 rounded-full max-w-[380px] w-full">
            <input
                type="text"
                className="w-full pl-3 my-2 bg-transparent placeholder-[#838383] text-[15px] focus:outline-none"
                placeholder="Search products"
            />
            <div className="px-3 py-1 flex items-center border-l border-l-gray-3">
                <AiOutlineSearch size="20" color="#838383" />
            </div>
            </div>
            <div className="flex items-center justify-end gap-3 min-w-[275px] max-w-[320px] w-full">
            {location.pathname === "/" ? (
                <Link
                to="/product/upload"
                className="flex items-center border rounded-sm px-3 py-[6px] hover:bg-gray-100"
                >
                <AiOutlineUpload size="20" color="#161724" />
                <span className="px-2 font-medium text-[15px] text-[#161724]">
                    Add product
                </span>
                </Link>
            ) : (
                <Link
                to="/"
                className="flex items-center border rounded-sm px-3 py-[6px] hover:bg-gray-100"
                >
                <AiOutlineFileSearch size="20" color="#161724" />
                <span className="px-2 font-medium text-[15px] text-[#161724]">
                    Product
                </span>
                </Link>
            )}
            {!user.id && (
                <div className="flex items-center">
                <button
                    onClick={() => setIsLoginOpen(!isLoginOpen)}
                    className="flex items-center bg-[#F02C56] text-white border rounded-md px-3 py-[6px] min-w-[110px]"
                >
                    <span className="mx-4 font-medium text-[15px]">Log In</span>
                </button>
                <BsThreeDotsVertical size="25" color="#161724" />
                </div>
            )}
            <div className="flex items-center"> 
                <div className="relative">
                <button className="mt-1" onClick={() => setShowMenu(!showMenu)}>
                    <img
                    className="rounded-full"
                    width="33"
                    src={"https://picsum.photos/145"}
                    />
                </button>
                {showMenu && (
                    <div
                    id="PopupMenu"
                    className="absolute bg-white rounded-lg py-1.5 w-[200px] shadow-xl border top-[43px] -right-2"
                    >
                    <Link
                        onClick={() => setShowMenu(!showMenu)}
                        to={"/profile/" + user.id}
                        className="flex flex-col px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                        {" "}
                        <BsFillPersonFill size="20" color="#161724" />
                        <span className="font-semibold text-sm">Profile</span>
                    </Link>
                    {user.id && (
                        <div
                        onClick={handleLogout}
                        className="cursor0pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        >
                        <GrLogout size="20" color="#161724" />
                        <span className=" font-semibold text-sm">Log out</span>
                        </div>
                    )}
                    </div>
                )}
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default TopNav;