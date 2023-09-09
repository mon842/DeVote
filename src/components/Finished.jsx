import React from "react";
import Header from "./Header/Header";

const Finished = (props) => {

    return (
        <div className="bg-[#141420] h-screen">
            <Header />
            <h1 className="flex pt-40 text-center justify-center text-white font-bold">
                <span className="font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-pink-600  via-[#c905ff] to-purple-500">Voting</span>
                is Finished </h1>
        </div>
    )
}

export default Finished;