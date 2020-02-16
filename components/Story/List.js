import styled from 'styled-components';
import Card from '../Card';
import Story from './index';

const StoryListContainer = styled(Card)`
  padding: 0;
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
`

function StoryList({ pageSize, page, stories }) {
  return (
    <StoryListContainer>
      <ul>
        {stories.slice(0 + (pageSize * page), pageSize + (pageSize * page)).map(story => (
          <Story key={story.id} story={story} />
        ))}
      </ul>
    </StoryListContainer>
  )
}

export default StoryList;