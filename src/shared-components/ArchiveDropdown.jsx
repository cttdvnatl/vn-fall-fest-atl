import React, {useState, useEffect, useRef} from 'react';

export const ArchiveDropdown = (ref) => {
    const listOfYears = useRef(null);
    
    const [isActive, setIsActive] = useState(false);

    let listOfLinks = [
        (<a style={{}} href="/#">2023</a>),
        (<a style={{}} href="/2022">2022</a>)
    ]

    for (let i = 0;i < listOfLinks.length;i++) {
        if (listOfLinks[i].props.children === ref.year.toString()) {
            listOfLinks.splice(i, 1);
        }
    }

    useEffect(() => {
        if (isActive === true) {
            listOfYears.current.style.display  = "flex";
        }
        else {
            listOfYears.current.style.display = "none";
        }
    }, [isActive])

    return (
        <div className='archive-dropdown'>
            <p onClick={() => isActive === false ? setIsActive(true) : setIsActive(false)}>{ref.year}</p>
            <div style={{}} ref={listOfYears}>
                {listOfLinks}
            </div>
        </div>
    )
}