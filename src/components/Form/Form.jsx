import React from 'react'

const Form = (props) => {
    return (
        <div className="h-64 w-64 md:w-full md:h-full">
            <form className="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-100 text-sm font-bold mb-2" for="username">
                        Username
                    </label>
                    <input onChange={(e)=>{props.setName(e.target.value)}} value={props.name} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                </div>

                <div className="flex items-center justify-between text-sm md:text-base">
                    <button onClick={props.connectWallet} className="bg-gradient-to-r from-purple-600 to-pink-600 hove:from-purple-400 hover:to-pink-400 text-white font-bold p-1 md:py-2 md:px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        connect to wallet
                    </button>
                    <button onClick={props.handleForm} className="bg-gradient-to-r from-red-600 to-pink-800 hove:from-purple-400 hover:to-pink-400 text-white font-bold p-1 md:py-2 md:px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        cancel
                    </button>
                </div>
            </form>

        </div>
    )
}

export default Form