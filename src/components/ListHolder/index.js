import React, { Component } from 'react'
import Card from './Card'

import { connect } from "react-redux";

import './ListHolder.scss'

class ListHolder extends Component {
    render() {
        const { taskList } = this.props
       return (
            <div className='listHolder'>
                {taskList.map(task =>  <Card key={task.taskId} name={task.name} type={task.type} /> )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { taskList } = state.tasks;
    return { taskList };
  };

// export default ListHolder;
export default connect(mapStateToProps)(ListHolder);