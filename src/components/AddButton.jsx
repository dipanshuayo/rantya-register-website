import React from "react";
const AddButton = ({onClick}) => {
  return (
    <button
      class="colorAccent  text-white active:bg-red-900 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      type="button"
      onClick={onClick}
    >
     + Add Student
    </button>
  );
};

export default AddButton;
