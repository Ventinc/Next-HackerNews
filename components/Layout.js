import NextHead from 'next/head';
import styled from "styled-components";
import colors from "../config/colors";
import Header from './Header';

const LayoutContainer = styled.div`
  background-color: ${colors.gray200};
  font-family: 'Nunito', sans-serif;
`

const Container = styled.div`
  width: 800px;
  margin: 0px auto;
  min-height: calc(100vh - 100px);
  padding-top: 80px;
  padding-bottom: 20px;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`

const Layout = ({ children }) => (
  <>
    <NextHead>
      <title>NextJS | HackerNews Clone</title>
      <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i&display=swap" rel="stylesheet" />
    </NextHead>
    <LayoutContainer>
      <Header />
      <Container>
        {children}
      </Container>
    </LayoutContainer>
  </>
)

export default Layout;