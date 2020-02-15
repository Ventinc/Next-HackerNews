import React, { Component } from 'react';
import { fromUnixTime, formatDistanceToNow } from 'date-fns';
import Link from 'next/link';
import StoryContent from './Content';
import StoryContainer from './Container';

const { StoryScore, StoryMeta, StoryTitle } = StoryContent;

function Story({ story }) {
  return (
    <StoryContainer key={story.id}>
      <StoryScore>{story.score}</StoryScore>
      <StoryContent>
        <StoryTitle><a href={story.url}>{story.title}</a></StoryTitle>
        <StoryMeta>
          By <Link href={`/user/${story.by}`}><a>{story.by}</a></Link>
          {' '}
          { formatDistanceToNow(fromUnixTime(story.time), { addSuffix: true }) }
          {story.type !== 'job' && (
            <>
              {' | '}
              <Link href={`/item/${story.id}`}><a>{story.descendants} comments</a></Link>
            </>
          )}
        </StoryMeta>
      </StoryContent>
    </StoryContainer>
  )
}

export default Story;