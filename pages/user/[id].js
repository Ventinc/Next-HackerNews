import Error from 'next/error'
import Layout from "../../components/Layout";
import api from "../../config/api";
import styled from "styled-components";
import colors from "../../config/colors";
import { formatDistanceToNow, fromUnixTime } from "date-fns";

const UserContainer = styled.div`
  background-color: #FFFFFF;
  border-radius: 4px;
  padding: 8px;
`

const UserTitle = styled.h1`
  color: ${colors.yellow500};
  margin: 16px;
  text-transform: capitalize;
`

const UserAbout = styled.div`
  margin: 0 8px;
  text-transform: justify;
  color: ${colors.gray900}
`

const UserInformations = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`

const UserInformation = styled.div`
  border: 1px solid ${colors.yellow300};
  background-color: ${colors.yellow100};
  color: ${colors.yellow500};
  padding: 4px 8px;
  border-radius: 4px;
  margin: 8px 0px;
`

function UserPage({ errorCode, user }) {
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  return (
    <Layout>
      <UserContainer>
        <UserTitle>{user.id}</UserTitle>
        <UserInformations>
          <UserInformation>Created : {formatDistanceToNow(fromUnixTime(user.created))}</UserInformation>
          <UserInformation>Karma : {user.karma}</UserInformation>
        </UserInformations>
        <UserAbout dangerouslySetInnerHTML={{
          __html: user.about && user.about.length ? user.about : `No informations about ${user.id}.`
        }} />
      </UserContainer>
    </Layout>
  )
}

UserPage.getInitialProps = async ({ query }) => {
  const res = await api.get(`/user/${query.id}.json`);
 
  let errorCode = res.status !== 200 ? res.status : false;
  
  if (!res.data) {
    errorCode = 404;
  }

  return { errorCode, user: res.data }
}

export default UserPage;