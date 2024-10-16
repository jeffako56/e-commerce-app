import React, { useState } from 'react'

const ImageWithPlaceholder = ({ src, alt, placeholder, isProduct }) => {
    const [imgSrc, setImgSrc] = useState(src);

    return (
        <img
            src={imgSrc}
            alt={alt}
            onError={() => setImgSrc(placeholder)}
            className={isProduct ? "card-product-image" : "card-brand-image"}
        />
    )
}


export default ImageWithPlaceholder;