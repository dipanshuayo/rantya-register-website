import React from 'react';
const ListItem = ({value,onItemClicked}) => {
    return ( 
        <li className="cursor-pointer bg-white mb-4 text-center mx-4 h-12 font-semibold rounded" onClick={onItemClicked} itemID={value} id={value}>{value}</li>
     );
}
 
export default ListItem;