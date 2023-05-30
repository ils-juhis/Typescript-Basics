import React, {useState} from 'react'

interface IProps{
    message: string
}

interface IState{
    message: string
}

let btnStyle={
    margin: "10px",
    padding: "5px",
    outline: "none",
    cursor: "pointer",
    fontWeight: 800
  }

  
function Youtube(props: IProps) {
    const [message, setMessage] = useState<IState>({message: "welcome"})
    const handleGreet = (greet: string): void =>{
        setMessage({message: greet})
    }

  return (
    <div className='mb-5'>
        <h1>2. Youtube</h1>
        <div>
            <h3>{message.message}</h3>
            <button style={btnStyle} onClick={()=>{handleGreet("like")}}>Like</button>
            <button style={btnStyle} onClick={()=>{handleGreet("comment")}}>Comment</button>
            <button style={btnStyle} onClick={()=>{handleGreet("subscribe")}}>Subscribe</button>
        </div>
    </div>
  )
}

export default Youtube