import { useState } from 'react';
import api from '../../config/api';
import Layout from '../../components/Layout';
import Story from '../../components/Story';
import StoryList from '../../components/Story/List';
import Pagination from '../../components/Pagination';

const { PageButton, PageInfo } = Pagination;

function JobPage({ stories }) {
  const [ page, setPage ] = useState(0);

  return (
    <Layout>
      <Pagination>
        <PageButton disabled={page < 1} onClick={() => setPage(page - 1)}>Prev</PageButton>
        <PageInfo>{page + 1} / {Math.ceil(stories.length / 20)}</PageInfo>
        <PageButton disabled={page >= stories.length / 20 - 1} onClick={() => setPage(page + 1)}>More</PageButton>
      </Pagination>
      <StoryList>
        <ul>
          {stories.slice(0 + (20 * page), 20 + (20 * page)).map(story => (
            <Story key={story.id} story={story} />
          ))}
        </ul>
      </StoryList>
    </Layout>
  );
}

JobPage.getInitialProps = async () => {
  const { data: storiesId } = await api.get('jobstories.json');

  const stories = await Promise.all(storiesId.map(async (storyId) => {
    const res = await api.get(`item/${storyId}.json`);

    return res.data;
  }));

  return { stories: stories.filter(story => story !== null) }
}

export default JobPage;