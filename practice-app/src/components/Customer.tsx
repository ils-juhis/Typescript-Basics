import React, {useState} from 'react'

//compulsory to create interface for props
interface IProps{
    name: string,
    total?: number
}

interface IState{
  status: number
}

function Customer(props: IProps) {
  const [data, setData] = useState<IState>({status:0})
  return (
    <div style={{textAlign:"left"}}>
        Customer: {props.name}
        <br />
        {props.total? "Total:"+ props.total: ""}
        <br />
        status: {data.status}
    </div>
    
  )
}

export default Customer