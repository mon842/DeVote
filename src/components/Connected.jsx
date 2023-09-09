import React, { useEffect, useState } from "react";
// import Lottie from "lottie-react";
// import clock from '../clock.json';
import { Button, IconButton, Snackbar } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const Connected = (props) => {
    const dp = 'https://im.indiatimes.in/content/2022/Jul/tere-naam_62d938217e409.jpg'
    
    const acc1=props.account.substring(0, 5);
    const acc2=props.account.substring(props.account.length-5 , props.account.length);

    const [open, setOpen] = useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
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
    const click=(e)=>{
        props.handleNumberChange(e);
    }
    useEffect(() => {
        props.candidates.map((candidate) => {
            if (candidate.voteCount === 1) {
                setOpen(true);
            }
    });
    }, [])
    

    return (
        <div className=" h-screen relative text-white px-10 py-6">
           
            <div ca>
                <p className="py-2">Remaining Time: {props.remainingTime}</p>
                {/* <Lottie className="h-24 w-24 bg-purple-900 rounded-3xl" animationData={clock}/> */}
            </div>

            <div className="bg-gradient-to-r from-purple-800 via-purple-900 to-[#141420] rounded-3xl p-3 flex items-center space-x-4 absolute right-10 top-5">
                <img className="w-10 h-10 rounded-full" src={dp} alt="" />
                <div className="font-medium dark:text-white">
                    <div className="text-sm text-gray-300 dark:text-gray-400">{acc1}.....{acc2}</div>
                    <div className="text-sm text-gray-300 dark:text-gray-400">{props.name}</div>
                </div>
            </div>
            
                <button className="bg-gradient-to-r from-bg-[#1b0f36f8] to-purple-600 text-white" onClick={props.voteFunction}>confirm</button>
            
            

            <div className="shadow-md sm:rounded-xl mt-20">
                <table className=" w-full text-sm text-left text-gray-100 border-separate border-spacing-y-2">
                    <thead className="rounded-xl text-s text-gray-100 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                        <tr>
                            <th scope="col" className=" px-5 py-3">
                                Index
                            </th>
                            <th scope="col" className=" px-6 py-3">
                                Name
                            </th>

                            <th scope="col" className="flex justify-center px-6 py-3">
                                VoteCount
                            </th>
                            <th scope="col" className="">

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.candidates.map((candidate,index) => (

                            

                            <tr key={index} className="last:border-0 bg-white border-b-2 dark:bg-gray-900 dark:border-gray-700 mb-8">

                                <td className="w-4 p-4">
                                    <div className="flex-items-center">
                                        <img className="w-10 h-10 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Bharatiya_Janata_Party_logo.svg" alt="Jese image" />
                                    </div>
                                </td>

                                <th scope="row" className="flex items-center px-6 py-6 text-gray-100 whitespace-nowrap dark:text-white">
                                
                                        <div className="text-xl font-normal ">{candidate.name}</div>
                                    
                                </th>

                                <td className="px-6 py-4">
                                    {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">{candidate.voteCount}</a> */}
                                    <div className="flex justify-center">
                                    {candidate.voteCount}
                                    </div>
                                    
                                </td>

                                <td className="flex justify-center px-6 py-3">
                                    {
                                        candidate.index===props.number?
                                        <button className='flex gap-1 hover:outline-none hover:ring hover:ring-fuchsia-600 transition duration-200 ease-in transform   hover:scale-105  px-10 py-3 rounded-xl font-bold text-gray-400 hover:text-white bg-[#262636] hover:bg-gradient-to-r from-[#ff05c9] via-[#c905ff] to-[#8402cf]' value={candidate.index} 
                                    onClick={click}>Vote</button>
                                    :
                                    <button className='flex gap-1 hover:outline-none hover:ring hover:ring-fuchsia-600 transition duration-200 ease-in transform   hover:scale-105  px-10 py-3 rounded-3xl font-bold text-gray-400 hover:text-white bg-[#262636] hover:bg-gradient-to-r from-[#ff05c9] via-[#c905ff] to-[#8402cf]' value={candidate.index} 
                                    onClick={click }>Vote</button>
                                    }
                                </td>

                            </tr>
                            
                        ))}



                    </tbody>
                </table>
            </div>
            <Snackbar
                        open={open}
                        autoHideDuration={6000}
                        onClose={handleClose}
                        message="Successfully voted"
                        action={action}
                    />
        </div>
    )
}

export default Connected;


