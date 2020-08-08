import React from "react"

const ButtonItem = (props) => {

    const {handler, icon} = props

    return (
        <button className='btn' onClick={handler}>
            {icon}
        </button>
    )
}

export default ButtonItem