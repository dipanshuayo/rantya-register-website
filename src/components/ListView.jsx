import React from 'react';
import ListItem from './ListItem';
const ListView = ({values,onItemClicked,onLongPress}) => {
    return ( <div>
        <ul>
        {
            values.map(value=>{
                return(
                    <ListItem value={value} onItemClicked={onItemClicked} onLongPress={onLongPress}/>
                )
            })
        }
        </ul>
    </div> );
}
 
export default ListView;