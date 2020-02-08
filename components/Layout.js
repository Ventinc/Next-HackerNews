import NextHead from 'next/head';
import styled from "styled-components";
import colors from "../config/colors";

const LayoutContainer = styled.div`
  background-color: ${colors.gray200};
  font-family: 'Nunito', sans-serif;
`

const Container = styled.div`
  width: 800px;
  margin: 0px auto;
  min-height: 100vh;
  padding: 30px 0px;

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
      <Container>
        {children}
      </Container>
    </LayoutContainer>
  </>
)

export default Layout;