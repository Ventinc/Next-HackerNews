import styled from 'styled-components';
import colors from '../config/colors';

const Card = styled.div`
  border-radius: 4px;
  padding: 8px;
  background-color: #FFFFFF;
  overflow: hidden;

  & ~ & {
    margin-top: 16px;
  }
`

const CardTitle = styled.h1`
  color: ${colors.gray900};
  margin: 0;
  font-size: 1.4em;
`

const CardSubTitle = styled.span`
  color: ${colors.gray500};
  font-size: 0.7em;
`

export {
  CardTitle,
  CardSubTitle,
}
export default Card;