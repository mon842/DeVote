import React from "react";

import { Blockie } from "@web3uikit/web3";
import { Modal } from "@web3uikit/core";

import chor1 from '../assets/chor1.jpg'
import chor2 from '../assets/chor2.jpg'
import chor3 from '../assets/chor3.jpg'
import chor4 from '../assets/chor4.jpg'

const Icon=[chor1,chor2,chor3,chor4]

const Connected = (props) => {


    const acc1 = props.account.substring(0, 5);
    const acc2 = props.account.substring(
        props.account.length - 5,
        props.account.length
    );

    const click = (e) => {

        props.handleNumberChange(e);
    };

    const add = (a) => { return parseInt(a) + 1; }
    return (
        <div className=" h-screen relative text-white px-5 md:px-10 py-6">

            <div className="grid grid-cols-2">
                <p className="py-2">Remaining Time: {props.remainingTime}</p>

                <div className="bg-gray-200 rounded-3xl p-1 md:p-3 flex items-center space-x-1 md:space-x-4 absolute right-10 top-5">

                    <Blockie seed="0x0000000000000000000000000000000000000000" />
                    <div className="font-medium dark:text-white">
                        <div className="text-sm text-gray-900 dark:text-gray-900">
                            {acc1}.....{acc2}
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-900">
                            {props.name}
                        </div>
                    </div>
                </div>
            </div>


            {props.number && !props.Already &&
                <div className="w-full flex justify-center">
                    <button
                        className="text-lg md:text-2xl hover:outline-none hover:ring hover:ring-fuchsia-600 transition duration-200 ease-in transform   hover:scale-105 px-4 py-1 md:px-20 md:py-4 rounded-3xl font-bold text-gray-400 hover:text-white bg-[#262636] hover:bg-gradient-to-r from-[#ff05c9] via-[#c905ff] to-[#8402cf]"
                        onClick={props.voteFunction}
                    >

                        <p className="text-lg">confirm vote : <span> {add(props.number)}</span>  </p>


                    </button>
                </div>
            }
            {
                props.Already &&
                <div className="w-full flex justify-center">
                    <button
                        className="text-lg md:text-2xl hover:outline-none hover:ring hover:ring-fuchsia-600 transition duration-200 ease-in transform   hover:scale-105 px-4 py-1 md:px-20 md:py-4 rounded-3xl font-bold text-gray-400 hover:text-white bg-[#262636] hover:bg-gradient-to-r from-[#ff05c9] via-[#c905ff] to-[#8402cf]"
                    >

                        <p className="text-lg"> You Have Already Voted </p>


                    </button>
                </div>
            }


            <table className=" w-full mt-24">
                <tbody>
                    {
                        props.candidates.map((candidate, index) => (
                            <tr key={index} className="px-1 grid grid-cols-4 drop-shadow-2xl  h-20 rounded-lg bg-slate-800 text-gray-100 my-4 ">
                                
                                <td className="flex justify-center items-center">
                                    <img className="w-9 h-9 md:w-12 md:h-12 rounded-full" src={Icon[index]} alt="" />
                                </td>

                                <td className="flex justify-center items-center text-xl">
                                    <p className="text-sm  md:text-2xl font-bold">{candidate.name}</p>
                                </td>

                                <td className="flex justify-center items-center ">
                                    <p>{candidate.voteCount}</p>
                                </td>

                                <td className="flex justify-center" >
                                    <button value={candidate.index} onClick={click} className="text-sm md:text-2xl hover:outline-none hover:ring hover:ring-fuchsia-600 transition duration-200 ease-in transform   hover:scale-105 px-4 py-1 lg:px-20 lg:py-2 rounded-3xl font-bold text-gray-400 hover:text-white bg-[#262636] hover:bg-gradient-to-r from-[#ff05c9] via-[#c905ff] to-[#8402cf]">
                                        VOTE
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            {
                props.not &&
                <div>
                    <Modal
                        headerHasBottomBorder
                        id="regular"
                        isVisible
                        onCancel={()=>{props.setNot(false)}}
                        onCloseButtonPressed={()=>{props.setNot(false)}}
                        onOk={()=>{props.setNot(false)}}
                    >
                        <div
                            style={{
                                display: 'grid',
                                placeItems: 'center'
                            }}
                        >
                            <p>
                                Successfully Voted{' '}

                            </p>
                        </div>
                    </Modal>
                </div>
            }
        </div>
    );
};


export default Connected;
