import React from "react"
import { BsMusicNoteBeamed } from "react-icons/bs"
import { AiFillHeart } from "react-icons/ai"
import { ProductType } from "../gql/graphql"
import { Link } from "react-router-dom"

function ProductMain({ product }: { product: ProductType }) {

  console.log(product)

  return (
    <div id="ProductMain" className="flex  border-b py-6">
      <div className="cursor-pointer">
        <b>
        iPhone 14 Pro Max
        </b>
      </div>
      <div className="pl-3 w-full px-4">
        <div className="flex items-center justify-between pb-0.5">
            <div className="px-6 pb-2 pl-3 text-[15px] pb-0.5 break-words md:max-w-[480px] max-w-[300px]">
                Apple iPhone 15 Pro Max Summary The phone comes with a 120 Hz refresh rate 6.10-inch touchscreen display offering a resolution of 1179x2556 pixels at a pixel density of 460 pixels per inch (ppi). Apple iPhone 15 Pro is powered by a hexa-core Apple A17 Pro processor. It comes with 8GB of RAM.
            </div>
        </div>
        <div className="px-6 pb-2 pl-3 text-[15px] pb-0.5 break-words md:max-w-[480px] max-w-[300px]">
            <b>Categories:</b> Phone, Gadget |
            <b> Views:</b> 5
        </div>
        
        <div className="px-6 pb-2 pl-3">
            <button className="px-6 border text-[15px] px-[21px] py-.5 border-[#F02C56] text-[#F02C56] hover:bg-[#ffeef2] font-semibold rounded-md">
                Buy
            </button>
            <button className="px-6 border text-[15px] px-[21px] py-.5 border-[#F02C56] text-[#F02C56] hover:bg-[#ffeef2] font-semibold rounded-md">
                Rent
            </button>
      </div>
      </div>
    </div>
  )
}

export default ProductMain