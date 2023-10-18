import React from "react"
import { useLocation } from "react-router-dom"
import TextInput from "./TextInput"

function SideNavMain() {
  const doNothing = ""

  return (
    <div
      id="SideNavMain"
      className={[
        useLocation().pathname === "/" ? "lg:w-[310px]" : "lg:w-[220px]",
        "fixed z-20 bg-white pt-[1px] h-full lg:border-r-0 border-r  overflow-auto",
      ].join(" ")}
    >
      <div className="lg:w-full w-[55px] mx-auto">
        
        <div className="border-b lg:ml-2 mt-32" />

        <div className="px-6 pb-2">
        <div className="pb-2 text-[15px]">Title</div>
        <TextInput
            max={64}
            placeHolder="Search title"
            onChange={(_) =>
                doNothing()
            }
            inputType="title"
            autoFocus={false}
            error=""
        />
        <div className="px-6 pb-2"></div>
        <div className="pb-2 text-[15px]">Categories</div>
        <TextInput
            max={64}
            placeHolder="Search categories"
            onChange={(_) =>
            doNothing()
            }
            inputType="title"
            autoFocus={false}
            error=""
        />
        <div className="px-6 pb-2"></div>
        <div className="px-6 mt-6">
        <button
          className="w-full text-[14px] font-semibold text-white py-2 rounded-sm bg-[#7F00FF]"
        >
          Search
        </button>
      </div>
      </div>
      </div>
    </div>
  )
}

export default SideNavMain