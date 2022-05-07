import React from 'react'

const Showdata = (props) => {
    const rows = props.skillData.map((row, index) =>{
        return (
            <div>
            <ul key={index}>
                <li>{row.skill}</li>
            </ul>
            </div>
        )
    })
    return <ul>{rows}</ul>
}

export default Showdata