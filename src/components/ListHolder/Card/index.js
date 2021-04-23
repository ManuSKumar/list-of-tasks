import React from 'react'
import './Card.scss'


export default function index(props) {
    const { type,name,Id } = props
    return (
        <div className={`card ${type}`} key={Id}>
            <h1 className='taskName'>{name}</h1>
        </div>
    )
}
