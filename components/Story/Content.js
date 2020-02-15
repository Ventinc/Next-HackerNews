import styled from 'styled-components';
import colors from '../../config/colors';

const StoryContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: ${colors.gray800};
`;

const StoryScore = styled.div`
  font-size: 1.1em;
  width: 80px;
  text-align: center;
  color: ${colors.yellow500};
  font-weight: 700;
  margin-right: 4px;
`;

const StoryTitle = styled.span`
  a {
    color: ${colors.gray800};
    text-decoration: none;
  }
`;

const StoryMeta = styled.span`
  margin-top: 4px;
  color: ${colors.gray500};
  font-size: 0.9em;
  a {
    color: ${colors.gray500};
  }
`;

StoryContent.StoryScore = StoryScore;
StoryContent.StoryTitle = StoryTitle;
StoryContent.StoryMeta = StoryMeta;

export default StoryContent;