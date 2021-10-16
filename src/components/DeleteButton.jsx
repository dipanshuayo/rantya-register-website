import React from "react";
import deleteIcon from "../../public/delete.png"
const DeleteButton = ({onClick}) => {
  return (
    <button
      class="colorAccent  text-white active:bg-red-900 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      type="button"
      onClick={onClick}
    >
        <div className="flex">
        <img src={deleteIcon} width="20px" height="20px"/>
        <p className="text-center">Remove Student</p>
        </div>
        
    </button>
  );
};

export default DeleteButton;
