import React from 'react'

const FooterMenu = ({id, hrefLink, text}) => {
  return (
    <li key={id}>
    <a href={hrefLink} className="footer-link">
      {text}
    </a>
  </li>
  )
}

export default FooterMenu