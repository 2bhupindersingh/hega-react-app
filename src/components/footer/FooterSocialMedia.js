import React from 'react'

const FooterSocialMedia = ({id, hrefLink, targetSocial, socialIcon}) => {
  return (
    <li key={id}>
    <a href={hrefLink} className="footer-icon" target={targetSocial}>
      <i className={socialIcon}></i>
    </a>
  </li>
  )
}

export default FooterSocialMedia