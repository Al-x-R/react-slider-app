import React from "react"

function ImageItem(props) {
    const {picture} = props

    return (
            <img
                 src={picture.url}
                 alt={picture.alt}
            />
    )
}

export default ImageItem