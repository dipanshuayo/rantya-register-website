import React from 'react';
import ListItem from './ListItem';
const ListView = ({values,onItemClicked}) => {
    return ( <div>
        <ul>
        {
            values.map(value=>{
                return(
                    <ListItem value={value} onItemClicked={onItemClicked}/>
                )
            })
        }
        </ul>
    </div> );
}
 
export default ListView;