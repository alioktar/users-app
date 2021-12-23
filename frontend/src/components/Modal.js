import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "./Button";

function Modal({
  title,
  isShown,
  onClose,
  onSave,
  showFooter = true,
  children,
}) {
  return (
    <>
      {isShown ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="md:text-3xl sm:text-xl font-semibold mr-4">
                    {title}
                  </h3>
                  <button
                    className="text-2xl text-black p-1 ml-auto bg-transparent border-0 opacity-70 leading-none font-semibold outline-none focus:outline-none"
                    onClick={onClose}
                  >
                    <FontAwesomeIcon icon={faTimes} className="text-black" />
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  {React.cloneElement(children)}
                </div>
                {/*footer*/}
                {showFooter && (
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <Button
                      label="Close"
                      className="text-red-500 bg-transparent border-0 text-sm outline-none focus:outline-none ease-linear transition-all duration-150"
                      onClick={onClose}
                    />
                    <Button
                      label="Save"
                      onClick={onSave}
                      className="bg-emerald-500 border-emerald-500 active:bg-emerald-600 mr-2"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default Modal;
