import React, { useEffect, useState } from "react";
import { Button, IconButton, } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import PurpleHead from './Ui/PurpleHead'

import { Blockie } from "@web3uikit/web3";
import {  useNotification } from "@web3uikit/core";
// import {No } from "@web3uikit";

const Connected = (props) => {


    const acc1 = props.account.substring(0, 5);
    const acc2 = props.account.substring(
        props.account.length - 5,
        props.account.length
    );

    const dispatch = useNotification();

    const handleNewNotification = () => {
        dispatch({
            type: 'info',
            message: 'Somebody messaged you',
            title: 'New Notification',
            position:  'topR',
        });
    };



    const click = (e) => {

        props.handleNumberChange(e);
    };

    const add=(a)=>{return parseInt(a)+1;}
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


            {props.number &&
                <div className="w-full flex justify-center">
                    <button
                        className="text-lg md:text-2xl hover:outline-none hover:ring hover:ring-fuchsia-600 transition duration-200 ease-in transform   hover:scale-105 px-4 py-1 md:px-20 md:py-4 rounded-3xl font-bold text-gray-400 hover:text-white bg-[#262636] hover:bg-gradient-to-r from-[#ff05c9] via-[#c905ff] to-[#8402cf]"
                        onClick={props.voteFunction}
                    >

                        <p className="text-lg">confirm vote : <span> {add(props.number) }</span>  </p>


                    </button>
                </div>
            }


            <table className=" w-full mt-24">
                <tbody>
                    {
                        props.candidates.map((candidate, index) => (
                            <tr key={index} className="px-1 grid grid-cols-3 drop-shadow-2xl  h-20 rounded-lg bg-slate-800 text-gray-100 my-4 ">

                                <td className="m-4 text-xl">
                                    <p className="text-lg md:text-2xl font-bold">{candidate.name}</p>
                                </td>

                                <td className="mt-3 flex justify-center">
                                    <p>{candidate.voteCount}</p>
                                </td>

                                <td className="m-2 flex justify-center" >
                                    <button value={candidate.index} onClick={click} className="text-base md:text-2xl hover:outline-none hover:ring hover:ring-fuchsia-600 transition duration-200 ease-in transform   hover:scale-105 px-4 py-1 md:px-20 md:py-4 rounded-3xl font-bold text-gray-400 hover:text-white bg-[#262636] hover:bg-gradient-to-r from-[#ff05c9] via-[#c905ff] to-[#8402cf]">
                                        VOTE
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            {/* {
                props.open &&
                <Button
                text="Error"
                onClick={handleNewNotification}
                theme="colored"
                color="red"
                isFullWidth={true}
            />
            } */}
        </div>
    );
};


export default Connected;
