import styled from 'styled-components';
import Layout from '../components/Layout';
import colors from '../config/colors';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 50px 0;
`;

const ErrorCode = styled.span`
  color: ${colors.yellow500};
  font-weight: 700;
  font-size: 40px;
  padding: 0px 32px;
  border-right: 2px solid ${colors.yellow500};
  margin-right: 32px;
`

const ErrorSentence = styled.span`
  color: ${colors.gray900};
`

function getErrorSentence(statusCode) {
  if (!statusCode) {
    return 'An error occured on client';
  }
  
  switch(statusCode) {
    case 404:
      return 'Page not found';
    default:
      return `An error ${statusCode} occurred on server`;
  }
}

function Error({ statusCode }) {
  return (
    <Layout>
      <ErrorContainer>
        {statusCode && (
          <ErrorCode>{statusCode}</ErrorCode>
        )}
        <ErrorSentence>
          {getErrorSentence(statusCode)}
        </ErrorSentence>
      </ErrorContainer>
    </Layout>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error