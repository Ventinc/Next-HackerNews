import React, { Component } from 'react';
import { fromUnixTime, formatDistanceToNow } from 'date-fns';
import styled from 'styled-components';
import Link from 'next/link';
import api from '../config/api';
import colors from '../config/colors';
import SkeletonPulse from './Skeleton/SkeletonPulse';

const StoryContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  padding: 16px 8px;
  &:not(:last-child) {
    border-bottom: 1px solid ${colors.gray200};
  }
`

const StoryScore = styled.div`
  font-size: 1.1em;
  width: 80px;
  text-align: center;
  color: ${colors.yellow500};
  font-weight: 700;
  margin-right: 4px;
`

const StoryContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: ${colors.gray800};
`

const StoryTitle = styled.span`
  a {
    color: ${colors.gray800};
    text-decoration: none;
  }
`

const StoryMeta = styled.span`
  margin-top: 4px;
  color: ${colors.gray500};
  font-size: 0.9em;
  a {
    color: ${colors.gray500};
  }
`

class Story extends Component {
  state = {
    loading: true,
    story: null,
  }

  componentDidMount() {
    this.fetchStory();
  }

  async fetchStory() {
    const { id } = this.props;

    const res = await api.get(`item/${id}.json`)

    this.setState({
      loading: false,
      story: res.data,
    })
  }

  render () {
    const { id } = this.props;
    const { loading, story } = this.state;

    if (loading) {
      return (
        <StoryContainer key={id}>
          <StoryScore><SkeletonPulse /></StoryScore>
          <StoryContent>
            <StoryTitle><SkeletonPulse /></StoryTitle>
            <StoryMeta>
              <SkeletonPulse />
            </StoryMeta>
          </StoryContent>
        </StoryContainer>
      )
    }

    return (
      <StoryContainer key={story.id}>
        <StoryScore>{story.score}</StoryScore>
        <StoryContent>
          <StoryTitle><a href={story.url}>{story.title}</a></StoryTitle>
          <StoryMeta>
            By <Link href={`/user/${story.by}`}><a>{story.by}</a></Link> | { formatDistanceToNow(fromUnixTime(story.time), { addSuffix: true }) } | <Link href={`/item/${story.id}`}><a>{story.descendants} comments</a></Link>
          </StoryMeta>
        </StoryContent>
      </StoryContainer>
    )
  }
}

export default Story;