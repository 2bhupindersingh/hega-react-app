import React from "react";

const SocialMedia = ({id, hrefLink, targetSocial, socialIcon}) => {
  return (
    <li key={id}>
      <a href={hrefLink} className="nav-icon" target={targetSocial}>
        <i className={socialIcon}></i>
      </a>
    </li>
  );
};

export default SocialMedia;
