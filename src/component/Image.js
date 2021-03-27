import React from 'react';
import {USER_PER_PAGE} from '../utils/pageconst';
import Imagedata from './Imagedata';


function Image({datas,page}) {
    const StartIndex = (page-1)*USER_PER_PAGE;
    const selectedUser = datas.slice(StartIndex,StartIndex + USER_PER_PAGE )
    
    return selectedUser.map(item=>
        
        <Imagedata key={item.id}
                 item = {item}/>
    )   
}

export default Image



