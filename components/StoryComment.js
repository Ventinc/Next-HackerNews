import React, { Component } from "react";
import Link from 'next/link';
import api from "../config/api";
import styled from "styled-components";
import colors from "../config/colors";
import { formatDistanceToNow, fromUnixTime } from "date-fns";
import SkeletonPulse from "./Skeleton/SkeletonPulse";

const Comment = styled.div`
  padding: 8px 0px;
  margin: 8px 0px;
  text-align: justify;
  &:first-child {
    margin-top: 0px;
  }

  border-top: 1px solid ${colors.gray300}
`

const CommentContent = styled.div`
  font-size: 0.9em;
`

const CommentMeta = styled.div`
  font-size: 0.9em;
  margin-bottom: 4px;
  color: ${colors.gray500};
  a {
    color: ${colors.gray500};
  }
`

const SubComment = styled.div`
  margin-left: 16px;
`

const Button = styled.button`
  color: ${colors.yellow700};
  border: none;
  border-radius: 4px;
  background-color: ${colors.yellow400};
  cursor: pointer;
  border-bottom: 2px solid ${colors.yellow500};
  transition: opacity 0.4s ease;
  outline: none;
`

class StoryComment extends Component{
  defaultProps = {
    displayAll: false,
  }

  state = {
    loading: true,
    viewReponse: false,
    comment: null,
  }

  componentDidMount() {
    const { displayAll } = this.props;

    this.setState({ viewResponse: displayAll });

    this.fetchComment();
  }

  async fetchComment() {
    const { id } = this.props;

    const res = await api.get(`/item/${id}.json`);

    this.setState({
      loading: false,
      comment: res.data,
    })
  }

  render() {
    const { loading, comment, viewResponse } = this.state;

    if (loading) {
      return (
        <Comment>
          <CommentMeta><SkeletonPulse /></CommentMeta>
          <CommentContent><SkeletonPulse /></CommentContent>
        </Comment>
      );
    }

    return (
      <Comment>
        <CommentMeta>
          <Link href={`/user/${comment.by}`}><a>{comment.by}</a></Link> { formatDistanceToNow(fromUnixTime(comment.time), { addSuffix: true }) }
        </CommentMeta>
        <CommentContent dangerouslySetInnerHTML={{__html: comment.text}} />
        {comment.kids && comment.kids.length && (
          <>
            {!viewResponse && <Button onClick={() => this.setState({viewResponse: true})}>View responses</Button>}
            {viewResponse && (
              <SubComment>
                { comment.kids.map(kid => <StoryComment key={kid} id={kid} displayAll/>) }
              </SubComment>
            )}
          </>
        )}
      </Comment>
    )
  }
}

export default StoryComment;