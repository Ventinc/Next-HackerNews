import styled from 'styled-components';
import colors from '../../config/colors';

const SkeletonPulse = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
  background: linear-gradient(-90deg, ${colors.gray100} 0%, ${colors.gray200} 50%, ${colors.gray100} 100%);
  background-size: 400% 400%;
  color: transparent;
  animation: pulse 1.2s ease-in-out infinite;
  
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;

export default () => (<SkeletonPulse>...</SkeletonPulse>);