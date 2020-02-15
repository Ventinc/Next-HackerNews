import colors from '../config/colors';
import Card from './Card';
import styled from 'styled-components';

const Pagination = styled(Card)`
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const PageInfo = styled.span`
  color: ${colors.gray900};
  font-size: 0.9em;
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

Pagination.PageInfo = PageInfo;
Pagination.PageButton = PageButton;

export default Pagination;