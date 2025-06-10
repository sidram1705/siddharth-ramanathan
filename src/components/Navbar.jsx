/** 
 * @copyright 2025 siddharthramanathan
 * @license Apache-2.0
 */ 

import { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();
  const [scrolled, setScrolled] = useState(false);

  const initActiveBox = () => {
    if (!lastActiveLink.current || !activeBox.current) return;
    activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
  };

  useEffect(() => {
    initActiveBox();
    window.addEventListener('resize', initActiveBox);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', initActiveBox);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove('active');
    event.target.classList.add('active');
    lastActiveLink.current = event.target;

    activeBox.current.style.top = event.target.offsetTop + 'px';
    activeBox.current.style.left = event.target.offsetLeft + 'px';
    activeBox.current.style.width = event.target.offsetWidth + 'px';
    activeBox.current.style.height = event.target.offsetHeight + 'px';
  };

  const navItems = [
    { label: 'Home', link: '#home', className: 'nav-link active', ref: lastActiveLink },
    { label: 'About', link: '#about', className: 'nav-link' },
    { label: 'TimeLine', link: '#timeline', className: 'nav-link' },
    { label: 'Projects', link: '#project', className: 'nav-link' },
    { label: 'Contact', link: '#contact', className: 'nav-link md:hidden' }
  ];

  return (
    <nav className={`navbar ${navOpen ? 'active' : ''} ${scrolled ? 'scrolled' : ''}`}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <a
          href={link}
          key={key}
          ref={ref}
          className={className}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired
};

export default Navbar;
