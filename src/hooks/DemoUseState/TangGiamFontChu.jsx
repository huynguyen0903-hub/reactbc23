import React,{useState} from 'react'

export default function TangGiamFontChu(props) {

    const [fSize,setFSize] = useState(16);

  return (
    <div>
        <p style={{fontSize:fSize + 'px'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quaerat molestias iusto eos beatae aliquam! Doloremque earum hic nobis laboriosam pariatur mollitia natus incidunt consequuntur et. Ea ipsa possimus ullam!
        </p>
         
        <br/>
        <button className='btn btn-primary' onClick={()=>{
            setFSize(fSize + 2);
        }}>+</button>
        <button className='btn btn-primary ml-2' onClick={()=>{
            setFSize(fSize - 2);
        }}>-</button>
    </div>
  )
}
