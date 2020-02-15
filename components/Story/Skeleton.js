import StoryContent from './Content';
import StoryContainer from './Container';
import SkeletonPulse from '../Skeleton/SkeletonPulse';

const { StoryScore, StoryMeta, StoryTitle } = StoryContent;

function StorySkeleton() {
  return (
    <StoryContainer>
      <StoryScore><SkeletonPulse /></StoryScore>
      <StoryContent>
        <StoryTitle><SkeletonPulse /></StoryTitle>
        <StoryMeta>
          <SkeletonPulse />
        </StoryMeta>
      </StoryContent>
    </StoryContainer>
  )
};

export default StorySkeleton;