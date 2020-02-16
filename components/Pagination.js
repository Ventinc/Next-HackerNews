import colors from '../config/colors';
import Card from './Card';
import styled from 'styled-components';

const PaginationContainer = styled(Card)`
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

function Pagination({ page, onPrev, onMore, max }) {
  return (
    <PaginationContainer>
      <PageButton disabled={page < 1} onClick={onPrev}>Prev</PageButton>
      <PageInfo>{page + 1} / {Math.ceil(max / 20)}</PageInfo>
      <PageButton disabled={page >= max / 20 - 1} onClick={onMore}>More</PageButton>
    </PaginationContainer>
  );
}

export default Pagination;