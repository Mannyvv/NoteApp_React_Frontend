

import React from "react";

function Footer() {
  

  return (
    <footer className="footer">
      {/* <FontAwesomeIcon icon={icon({ name: "user-secret" })} />
      
      <FontAwesomeIcon icon={icon({ name: "facebook", style: "brands" })} />
      <FontAwesomeIcon icon={solid("gift")}/> */}
      
      <a className='btn btn-social-icon btn-github' href='https://github.com/Mannyvv'>
      <i className='fa fa-github' /></a>
      <a className='btn btn-social-icon btn-linkedin' href='https://www.linkedin.com/in/manuelvera1/'>
      <i className='fa fa-linkedin' /></a>
    </footer>
  );
}

export default Footer;
