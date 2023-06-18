import React from 'react'

const Menu = ({id, hrefLink, text}) => {
  return (
    <>
       <li key={id}>
              <a href={hrefLink} className="nav-link">
                {text}
              </a>
            </li>
    </>
  )
}

export default Menu