import React, { Component } from 'react'

//compulsory to create interface for props
interface IProps{
    name: string,
    total?: number
}

interface IState{
    status: number
  }

export default class User extends Component<IProps, IState>{
    constructor(props: IProps){
        super(props)
        this.state = {
            status:0
        }
    }
  render() {
    return (
      <div>
        Class Components
        <div>
            Customer: {this.props.name}
            <br />
            {this.props.total? "Total:"+ this.props.total: ""}
        </div>
      </div>
    )
  }
}
