import React,{useState} from 'react'
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from 'reactstrap';
//import { formatDate } from '../utils/date';
import '../css/postlist.css'
import { useSelector, useDispatch } from 'react-redux';
import { getPosts, IncrementCommentCounter } from '../app/posts.slices';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { PostlistbottomPanel } from './PostlistbottomPanel';
import { Comments } from './Comments';



export const PostList = () => {
  const posts = useSelector(getPosts);
  const dispatch = useDispatch();
  const [postId, setPostid] = useState(null);

  const handleUpvote = () => {
    console.log(postId);
    dispatch(IncrementCommentCounter({id: postId}));
  }
  return (
    <>
      {posts.map(
        ({
          id,
          title,
          body,
          author,
          timestamp,
          category,
          voteScore,
          deleted,
          commentCount,
        }) => (
          <div className='Container' key={id}>
            <div className='innerContainer'>
              <div className='voteCount'>
                <Button
                  className='voteButton'
                  color='primary'
                  size='sm'
                  onClick={() => {
                    setPostid(id);
                    handleUpvote();
                  }}
                >
                  <FaChevronUp />
                </Button>
                <span> {voteScore}</span>
                <Button
                  className='voteButton'
                  color='primary'
                  size='sm'
                  onClick={() => {}}
                >
                  <FaChevronDown />
                </Button>
              </div>

              <div className='card-container'>
                <Card>
                  <CardBody>
                    <CardTitle tag='h5'>{title}</CardTitle>
                    <CardSubtitle className='mb-2 text-muted' tag='h6'>
                      {category}
                    </CardSubtitle>
                    <CardText style={{ flexWrap: 'wrap', width: '30vw' }}>
                      {body}
                    </CardText>
                    {/* <CardText>{formatDate(timestamp)}</CardText>
                  <CardText>{author}</CardText>
                  <CardText>{deleted}</CardText> */}
                    <PostlistbottomPanel
                      timestamp={timestamp}
                      author={author}
                      deleted={deleted}
                    />
                  </CardBody>
                </Card>
              </div>
            </div>

            <div className='comments-container'>
              <Comments postId={id} />
              
            </div>
          </div>
        ),
      )}
    </>
  );
};