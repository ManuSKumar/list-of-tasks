import React, { Component } from 'react'
import './Header.scss'

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h1 className='header-name'>Task List</h1>
            <div className='button-holder'>
              <button className='button-create'>Create +</button>
            </div>
            </div>
        )
    }
}
