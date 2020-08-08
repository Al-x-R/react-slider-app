import React from "react"

const ButtonItem = (props) => {

    const {handler, icon, className, title} = props

    return (
        <button className={className} onClick={handler} title={title}>
            {icon}
        </button>
    )
}

export default ButtonItem