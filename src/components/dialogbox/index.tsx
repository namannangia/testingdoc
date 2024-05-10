import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
const DialogBox = ({ isOpen, onClose, children, title }: isDialog) => {
  return (
    <>
      <Modal open={isOpen} onClose={onClose} center >
        <div className="flex justify-between items-center">
          <span className="text-2xl font-semibold">{title}</span>
          <button
            onClick={onClose}
            type="button"
            className="text-primary-300  border-2 font-extrabold border-primary-700 focus:outline-none bg-transparent  rounded-md text-sm w-5 h-5 ms-auto inline-flex justify-center items-center "
            data-modal-hide="default-modal"
          >
            <b>
              <svg
                className="w-2 h-[7px]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </b>
          </button>
        </div>
        <div className="pt-3">{children}</div>
      </Modal>
      {/* {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center  justify-center overflow-x-hidden overflow-y-auto outline-none">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="relative z-50 bg-white margin-modal p-6 rounded-lg shadow-lg max-w-2xl ">
            <div className="flex justify-between items-center">
              <span className="text-2xl font-semibold">{title}</span>
              <button
                onClick={onClose}
                type="button"
                className="text-primary-300  border-2 font-extrabold border-primary-700 focus:outline-none bg-transparent  rounded-md text-sm w-5 h-5 ms-auto inline-flex justify-center items-center "
                data-modal-hide="default-modal"
              >
                <b>
                  <svg
                    className="w-2 h-[7px]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </b>
              </button>
            </div>
            <div className="pt-3">{children}</div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default DialogBox;
