import React,{Component} from 'react'

import { connect } from "react-redux";
import { removeFromTaskList,updateTaskList } from "../../../redux/actions";

import './Card.scss'
import Clock from './Clock';


class Card extends Component { 
    constructor(props) {
        super(props)
        this.state = {
            name:this.props.name,
            isTimeout:false,
        }
    }

    onNameChange=(ev)=>{
        this.setState({name:ev.target.value})
    }

    onTimeout=()=>{
        this.setState({isTimeout:true})
    }

    onCreate=()=>{
        const { id } = this.props
        const { name, isTimeout} = this.state
        let content={
            taskId:id,
            name:name,
            type:isTimeout?'bad':'good'
        }
        this.props.updateTaskList(content)
    }

    onClose=(id)=>{
        this.props.removeFromTaskList(id)
    }

    render() {
    const { type,id } = this.props
    const { name } =this.state
    return (
        <div className={`card ${type}`} key={id}>
           {type!=='nill'?<h1 className='taskName'>{name}</h1>:<input className='taskName' type="text" onChange={this.onNameChange} value={name} />}
           {type==='nill'?<div className={`controls`}>
                <Clock onTimeout={this.onTimeout}/>
                <button className='create button' onClick={this.onCreate} >Create</button>
                <button className='close button'  onClick={()=>this.onClose(id)} >X</button>
            </div>:null} 
        </div>
    )
}
}



// export default ListHolder;
export default connect(null,{removeFromTaskList,updateTaskList})(Card);