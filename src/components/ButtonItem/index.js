import React from "react"

const ButtonItem = (props) => {

    const {handler, icon, className} = props

    return (
        <button className={className} onClick={handler}>
            {icon}
        </button>
    )
}

export default ButtonItem