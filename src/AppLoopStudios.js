import { useState, useEffect } from 'react';


import logo from './images/logo.svg';

//
import imageInteractive from './images/desktop/image-interactive.jpg';


// icons
import iconClose from './images/icon-close.svg';
import iconFacebook from './images/icon-facebook.svg';
import iconHamburger from './images/icon-hamburger.svg';
import iconInstagram from './images/icon-instagram.svg';
import iconPinterest from './images/icon-pinterest.svg';
import iconTwitter from './images/icon-twitter.svg';

export const AppLoopStudios = () => {


  const [isActive, setActive] = useState(false);
  const [icon, setIcon] = useState(false);

  useEffect(() => {
    setIcon(!icon);
  }, [isActive]);

  const handleMenu = () => {

    setActive(!isActive);
    
  }
  



  return (
    <div className="loop__container">
      <div className="loop__section1">

        <div className={`${isActive ? "loop__headerActive" : "loop__header"}`}>
          <div className="loop__subHeader">
          <img src={logo} alt="Logo" />
          <a onClick={handleMenu} className={`${isActive ? "loop__logoLink" : "loop__logoLink"}`}>
            <img src={icon ?  iconHamburger : iconClose}
                  alt={!icon ? "Hamburger Icon" : "Close Icon"} className="loop__logoImg"/>
          </a>
          </div>
          <div className={`${isActive ? "loop__subheaderActive" : "loop__subheader"}`}>
            <a className="">About</a>
            <a className="">Careers</a>
            <a className="">Events</a>
            <a className="">Products</a>
            <a className="">Support</a>
          </div>
        </div>

        <div className="loop_section1-content">
            <p className="loop_section1-contentText">INMERSIVE <br/> EXPERIENCES <br/> THAT DELIVER</p>
        </div>

      </div>

      <div className="loop__section2">
        <img src={imageInteractive} />
        <div className="loop__section2-content">
          <h2>THE LEADER IN <br/> INTERACTIVE VR</h2>
          <p className="loop__section2-contentText">Founded in 2011, Loopstudios has been producing
            world-class <br /> virtual reality projects for some of the best companies around the <br /> globe. Our 
            award-winning creations have transformed <br /> businesses through digital experiences that bind to 
            their brand.
          </p>
        </div>
      </div>

      <div className="loop__section3">

        <div className="loop__section3-header">
          <h2>OUR CREATIONS</h2>
          <a className="loop__section3-link">SEE ALL</a>
        </div>

        <div className="loop__section3-gridContainer">
          <div className="loop__section3-gridDiv1"><p className="loop__section3-textDivs">DEEP <br/> EARTH</p></div>
          <div className="loop__section3-gridDiv2"><p className="loop__section3-textDivs">NIGHT <br/> ARCADE</p></div>
          <div className="loop__section3-gridDiv3"><p className="loop__section3-textDivs">SOCCER <br/> TEAM VR</p></div>
          <div className="loop__section3-gridDiv4"><p className="loop__section3-textDivs">THE <br/> GRID</p></div>
          <div className="loop__section3-gridDiv5"><p className="loop__section3-textDivs">FROM UP <br/> ABOVE VR</p></div>
          <div className="loop__section3-gridDiv6"><p className="loop__section3-textDivs">POCKET <br/> BOREALIS</p></div>
          <div className="loop__section3-gridDiv7"><p className="loop__section3-textDivs">THE <br/> CURIOSITY</p></div>
          <div className="loop__section3-gridDiv8"><p className="loop__section3-textDivs">MAKE IT <br/> FISHEYE</p></div>
        </div>

      </div>

      <div className="loop__footer">

        <div className="">
          <img src={logo} alt="Logo" />
          <div className="">
            <div className="loop__subheader">
              <a className="">About</a>
              <a className="">Careers</a>
              <a className="">Events</a>
              <a className="">Products</a>
              <a className="">Support</a>
            </div>
          </div> 
        </div>

        <div className="loop__footerRight">
          <div className="loop__footerIcons">
            <img src={iconFacebook} alt="Logo" />
            <img src={iconTwitter} alt="Logo" />
            <img src={iconPinterest} alt="Logo" />
            <img src={iconInstagram} alt="Logo" />
          </div>
          <p className="loop__footerText">2021 Loopstudios. All rights reserved</p>
        </div>

      </div>

    </div>
  )
}


