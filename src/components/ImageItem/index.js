import React from "react"

function ImageItem(props) {
    const {picture} = props

    return (
        <div className='imgWrapper'>
            <img className='img'
                 src={picture.url}
                 alt={picture.alt}
            />
        </div>
    )
}

export default ImageItem