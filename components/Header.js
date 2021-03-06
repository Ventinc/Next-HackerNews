import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from "styled-components";
import colors from "../config/colors";

const HeaderContainer = styled.div`
  position: fixed;
  background-color: ${colors.yellow500};
  width: 100%;
  line-height: 48px;
  color: #FFFFFF;
`

const HeaderContent = styled.div`
  width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`

const HeaderLogo = styled.h1`
  font-size: 1.2em;
  margin: 0;
  color: ${colors.yellow700};
  margin: 0px 16px;
  text-decoration: none;
  
  a {
    text-decoration: none;
    color: ${colors.yellow700};
  }
`

const HeaderLinks = styled.ul`
  font-size: 1em;
  color: ${colors.yellow700};
  list-style-type: none;
  padding: 0;
  margin: 0;
  
  li {
    display: inline;
    margin: 0px 8px;
    a {
      color: ${colors.yellow300};
      text-decoration: none;
    }

    &.active {
      a {
        color: ${colors.yellow100};
      }
    }
  }
`

function HeaderLink({ href, children }) {
  const router = useRouter();

  const active = router.pathname === href;

  return <li className={active ? 'active' : null}><Link href={href}><a>{children}</a></Link></li>
}

function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogo>
          <Link href="/" passHref>
            <a>Next HN</a>
          </Link>
        </HeaderLogo>
        <HeaderLinks>
          <HeaderLink href='/'>Top</HeaderLink>
          <HeaderLink href='/new'>New</HeaderLink>
          <HeaderLink href='/show'>Show</HeaderLink>
          <HeaderLink href='/ask'>Ask</HeaderLink>
          <HeaderLink href='/job'>Job</HeaderLink>
        </HeaderLinks>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;