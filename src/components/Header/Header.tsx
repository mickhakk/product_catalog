import { useEffect, useState } from 'react';
import { Menu } from './Menu/Menu';
import { Topbar } from './Topbar/Topbar';
import './no-scroll.scss';

export const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const hideMenu = () => setIsMenuActive(false);
  const toggleMenu = () => {
    setIsMenuActive((currentValue) => !currentValue);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMenuActive) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isMenuActive]);

  useEffect(() => {
    if (windowWidth >= 640) {
      hideMenu();
    }
  }, [windowWidth]);

  return (
    <header>
      <Topbar
        isMenuActive={isMenuActive}
        hideMenu={hideMenu}
        toggleMenu={toggleMenu}
      />

      <Menu show={isMenuActive} onHide={hideMenu} />
    </header>
  );
};
