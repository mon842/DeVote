import React, { useEffect, useState } from "react";
import { Button, IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
const Connected = (props) => {
  const dp =
    "https://im.indiatimes.in/content/2022/Jul/tere-naam_62d938217e409.jpg";

  const acc1 = props.account.substring(0, 5);
  const acc2 = props.account.substring(
    props.account.length - 5,
    props.account.length
  );

  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
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
  // console.log(props.candidates);
  const click = (e) => {
    props.handleNumberChange(e);
  };
  useEffect(() => {
    props.candidates.map((candidate) => {
      if (candidate.voteCount === 1) {
        setOpen(true);
      }
    });
  }, []);

  return (
    <div className=" h-screen relative text-white px-10 py-6">
      <div ca>
        <p className="py-2">Remaining Time: {props.remainingTime}</p>
      </div>

      <div className="bg-gradient-to-r from-purple-800 via-purple-900 to-[#141420] rounded-3xl p-3 flex items-center space-x-4 absolute right-10 top-5">
        <img className="w-10 h-10 rounded-full" src={dp} alt="" />
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
        className="bg-gradient-to-r from-bg-[#1b0f36f8] to-purple-600 text-white"
        onClick={props.voteFunction}
      >
        confirm
      </button>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-20">
        <table className="w-full text-sm text-left text-gray-100 ">
          <thead className="text-xs text-gray-100 uppercase  ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Index
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>

              <th scope="col" className="px-6 py-3">
                VoteCount
              </th>
              <th scope="col" className=""></th>
            </tr>
          </thead>

          <tbody>
            {props.candidates.map((candidate, index) => (
              
              <tr
                key={index}
                className="bg-gradient-to-r from-gray-900 via-purple-800 to-purple-900 "
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Bharatiya_Janata_Party_logo.svg"
                      alt="Jese image"
                    />
                  </div>
                </td>

                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-100 whitespace-nowrap dark:text-white"
                >
                  <div className="pl-3">
                    <div className="text-base font-semibold">
                      {candidate.name}
                    </div>
                  </div>
                </th>

                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    {candidate.voteCount}
                  </a>
                </td>

                <td className="px-6 py-5">
                <button
                      className="button w-24 h-10   cursor-pointer select-none active:translate-y-2  
                                                active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] active:border-b-[0px] 
                                                transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841] 
                                                rounded-full  border-[1px] border-blue-800 bg-blue-800 "
                      value={candidate.index}
                      onClick={click}
                    >
                      Vote
                    </button>
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
  );
};

export default Connected;
