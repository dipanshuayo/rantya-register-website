import React from 'react';
const AccentButton = ({name,onClick}) => {
    return ( <button
        className="flex justify-center w-50 centerHorizontal colorAccent margin-top text-white  active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
      
        onClick={() => onClick()}
       
      >
       {name}
      </button> );
}
 
export default AccentButton;