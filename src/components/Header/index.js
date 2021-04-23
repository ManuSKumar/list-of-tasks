import React, { Component } from 'react'

import { connect } from "react-redux";
import { addToTaskList } from "../../redux/actions";

import './Header.scss'

 class Header extends Component {

    handleCreate = () => {
        this.props.addToTaskList({name:'Name',type:'nill'});
      };

    render() {
        return (
            <div className='header'>
                <h1 className='header-name'>List of Tasks</h1>
            <div className='button-holder'>
              <button className='button-create'onClick={this.handleCreate} >Create Task</button>
            </div>
            </div>
        )
    }
}

export default connect(
    null,
    { addToTaskList }
  )(Header);