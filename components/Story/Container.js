import styled from 'styled-components';
import colors from '../../config/colors';

const StoryContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  padding: 16px 8px;
  &:not(:last-child) {
    border-bottom: 1px solid ${colors.gray200};
  }
`;

export default StoryContainer;