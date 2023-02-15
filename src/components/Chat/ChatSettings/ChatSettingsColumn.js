import ChatSelect from './ChatSelect';
import InputCross from './InputCross';
import TagSection from './Tag';
import { BsThreeDots } from 'react-icons/bs';
import React, { useEffec, useState } from 'react'
// import InputSearch from './InputSearch';


 
const ChatSettingsColumn = () => {
  
  return (
    <>

<div className='settings-column'>

<BsThreeDots className='dots'/>
<img src="https://static.thenounproject.com/png/1136207-200.png" className='image'/>
<p className='jone-numb'>Jone<span/>Doe</p>
<p className='number'>+919876543210</p>
<ChatSelect/>
<p className='para'>Cotact<span/>Customer<span/>Parameters</p>
<InputCross/>
<p className='para'>Tag</p>
<TagSection/>


{/* <InputSearch/> */}
</div>

    </>
    
  )
}

export default ChatSettingsColumn;
