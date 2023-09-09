import React from 'react'

const Btn = ({text}) => {
    return (
        <button className=" hover:outline-none hover:ring hover:ring-fuchsia-600 transition duration-200 ease-in transform   hover:scale-105  px-7 py-4 rounded-3xl font-bold text-gray-400 hover:text-white bg-[#262636] hover:bg-gradient-to-r from-[#ff05c9] via-[#c905ff] to-[#8402cf]">
            {text}
        </button>
    )
}

export default Btn