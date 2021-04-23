import React, { Component } from 'react'
import Card from './Card'

import './ListHolder.scss'

export default class ListHolder extends Component {
    render() {
        const { list } = this.props
        return (
            <div className='listHolder'>
                {list.map(task =>  <Card key={task.id} name={task.name} type={task.type} /> )}
            </div>
        )
    }
}
