import React from 'react';

const PhotoGallery = (list) => {
    return (
        <div class="photo-gallery-component">
        {list.data.map((section, index) => (
            <div class={section.galleryStyle + '-container'} key={index}>
                <div class={section.galleryStyle}>
                {section.content.map((content, idx) => (
                    <div class="img-container" key={idx}>
                        <img src={content.img} alt={content.img}/>
                    </div>
                ))}
                </div>
            </div>
        ))}
        </div>
    )
}

export default PhotoGallery;