import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <NavBar>
      <LinkLeft>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/store'>Store</NavLink>
      </LinkLeft>
      <LinkRight>
        <NavLink to='/gmail'>Gmail</NavLink>
        <NavLink to='/images'>Images</NavLink>
        <NavLink to='/'>
          <svg focusable='false' viewBox='0 0 24 24'>
            <path d='M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z' />
          </svg>
        </NavLink>
      </LinkRight>
    </NavBar>
  );
}

export default Nav;

const NavBar = styled.nav``;

const NavLink = styled(Link)``;

const LinkLeft = styled.div``;

const LinkRight = styled.div``;
