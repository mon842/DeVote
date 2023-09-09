import React, { useEffect, useState } from "react";
import { Button, IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import PurpleHead from './Ui/PurpleHead'

import { Blockie } from "@web3uikit/web3";


const Connected = (props) => {


    const acc1 = props.account.substring(0, 5);
    const acc2 = props.account.substring(
        props.account.length - 5,
        props.account.length
    );

    
    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        props.setOpen(false);
    };
    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );
    // console.log(props.candidates);
    const click = (e) => {

        props.handleNumberChange(e);
    };
    // useEffect(() => {
    //     props.candidates.map((candidate) => {
    //         if (candidate.voteCount === 1) {
    //             setOpen(true);
    //         }
    //     });
    // }, []);

    return (
        <div className=" h-screen relative text-white px-10 py-6">
            <div ca>
                <p className="py-2">Remaining Time: {props.remainingTime}</p>
            </div>

            <div className="bg-gradient-to-r from-purple-800 via-purple-900 to-[#141420] rounded-3xl p-3 flex items-center space-x-4 absolute right-10 top-5">

                <Blockie seed="0x0000000000000000000000000000000000000000" />
                <div className="font-medium dark:text-white">
                    <div className="text-sm text-gray-300 dark:text-gray-400">
                        {acc1}.....{acc2}
                    </div>
                    <div className="text-sm text-gray-300 dark:text-gray-400">
                        {props.name}
                    </div>
                </div>
            </div>

            <button
                className=""
                onClick={props.voteFunction}
            >
                {props.number &&
                    <p className="text-lg">confirm vote to Candidate <PurpleHead text={props.number} /> </p>
                }

            </button>

            <table className=" w-full mt-24">
                <tbody>
                    {
                        props.candidates.map((candidate, index) => (
                            <tr key={index} className="px-1 flex drop-shadow-2xl justify-evenly h-20 rounded-lg bg-slate-800 text-gray-100 my-4 ">

                                <td className="mt-4 text-xl">
                                    <PurpleHead text={candidate.name} />
                                </td>

                                <td className="mt-3">
                                    <p>{candidate.voteCount}</p>
                                </td>

                                <td className="mt-3" >
                                    <button value={candidate.index} onClick={click} className=" hover:outline-none hover:ring hover:ring-fuchsia-600 transition duration-200 ease-in transform   hover:scale-105  px-7 py-4 rounded-3xl font-bold text-gray-400 hover:text-white bg-[#262636] hover:bg-gradient-to-r from-[#ff05c9] via-[#c905ff] to-[#8402cf]">
                                        vote
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <Snackbar
                open={props.open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Successfully voted"
                action={action}
            />
        </div>
    );
};

export default Connected;
