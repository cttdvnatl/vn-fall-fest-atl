import React from 'react';

const Rewards = (list) => {
    return (
        <div className="rewards">x
            {list.data.map((rewards) => (
                <div className="reward__container">
                    <div className="reward">
                        <h3 className="reward__header">{rewards.title}</h3>
                        {rewards.paragraphs.map((paragraph) => (
                            <p className="reward__para">{paragraph.text}</p>
                        ))}
                    </div>
                    <figure className="reward__image--wrapper">
                        <img src={rewards.image} alt=""  className="reward__image" />
                    </figure>
                </div>
            ))}
        </div>
    )
}

export default Rewards;