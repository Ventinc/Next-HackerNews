import { useState } from 'react';
import styled from 'styled-components';
import api from '../config/api';
import Layout from '../components/Layout';
import Story from '../components/Story';
import colors from '../config/colors';

const StoryList = styled.div`
  border-radius: 4px;
  background-color: #FFFFFF;
  border: 1px solid ${colors.gray200};
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
`

const PaginationContainer = styled.div`
  border-radius: 4px;
  background-color: #FFFFFF;
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px;
  border-radius: 4px;
`

const PageInfo = styled.span`
  color: ${colors.gray900};
`

const PageButton = styled.button`
  color: ${colors.yellow700};
  border: none;
  border-radius: 4px;
  background-color: ${colors.yellow400};
  cursor: pointer;
  border-bottom: 2px solid ${colors.yellow500};
  transition: opacity 0.4s ease;
  outline: none;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

function HomePage({ stories }) {
  const [ page, setPage ] = useState(0);

  return (
    <Layout>
      <PaginationContainer>
        <PageButton disabled={page < 1} onClick={() => setPage(page - 1)}>Prev</PageButton>
        <PageInfo>{page + 1} / {stories.length / 20}</PageInfo>
        <PageButton disabled={page >= stories.length / 20 - 1} onClick={() => setPage(page + 1)}>More</PageButton>
      </PaginationContainer>
      <StoryList>
        <ul>
          {stories.slice(0 + (20 * page), 20 + (20 * page)).map(storyId => (
            <Story key={storyId} id={storyId} />
          ))}
        </ul>
      </StoryList>
    </Layout>
  );
}

HomePage.getInitialProps = async () => {
  const res = await api.get('topstories.json');

  return { stories: res.data }
}

export default HomePage;