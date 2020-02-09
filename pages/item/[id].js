import Link from 'next/link';
import Error from 'next/error';
import Layout from "../../components/Layout";
import api from "../../config/api";
import Card, { CardTitle, CardSubTitle } from "../../components/Card";
import { StoryMeta } from '../../components/Story';
import { formatDistanceToNow, fromUnixTime } from 'date-fns';
import StoryComment from '../../components/StoryComment';

function StoryPage ({ errorCode, story }) {
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  return (
    <Layout>
      <Card>
        <CardTitle>{story.title}</CardTitle>
        <StoryMeta>{story.score} points | by <Link href={`/user/${story.by}`}><a>{story.by}</a></Link> { formatDistanceToNow(fromUnixTime(story.time), { addSuffix: true }) }</StoryMeta>
      </Card>
      <Card>
        <CardTitle>Comments <CardSubTitle>({story.descendants})</CardSubTitle></CardTitle>
        <div>
          {story.kids.map(kid => (
            <StoryComment key={kid} id={kid} />
          ))}
        </div>
      </Card>
    </Layout>
  )
}

StoryPage.getInitialProps = async ({ query }) => {
  const res = await api.get(`/item/${query.id}.json`);

  let errorCode = res.status !== 200 ? res.status : false;

  if (res.data === null) {
    errorCode = 404;
  }

  return { errorCode, story: res.data }
}

export default StoryPage;