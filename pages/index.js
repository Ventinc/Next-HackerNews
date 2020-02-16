import { useState } from 'react';
import api from '../config/api';
import Layout from '../components/Layout';
import Story from '../components/Story';
import StoryList from '../components/Story/List';
import Pagination from '../components/Pagination';

const { PageButton, PageInfo } = Pagination;

function HomePage({ stories }) {
  const [ page, setPage ] = useState(0);

  return (
    <Layout>
      <Pagination
        page={page}
        onMore={() => setPage(page + 1)}
        onPrev={() => setPage(page - 1)}
        max={stories.length}
      />
      <StoryList stories={stories} page={page} pageSize={20} />
    </Layout>
  );
}

HomePage.getInitialProps = async () => {
  const { data: storiesId } = await api.get('topstories.json');

  const stories = await Promise.all(storiesId.map(async (storyId) => {
    const res = await api.get(`item/${storyId}.json`);

    return res.data;
  }));

  return { stories: stories.filter(story => story !== null) }
}

export default HomePage;