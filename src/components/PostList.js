import React from 'react'
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from 'reactstrap';
import { formatDate } from '../utils/date';
import '../css/postlist.css'
import { useSelector } from 'react-redux';
import { getPosts } from '../app/posts.slices';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';



export const PostList = () => {
  const posts = useSelector(getPosts);
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
            <div className='voteCount'>
              <Button
                className='voteButton'
                color='primary'
                size='sm'
                onClick={() => {}}
              >
                <FaChevronUp />
              </Button>
              {voteScore}
              <Button
                className='voteButton'
                color='primary'
                size='sm'
                onClick={() => {}}
              >
                <FaChevronDown />
              </Button>
              <span className='commentCount'>
                comment count: {commentCount}
              </span>
            </div>

            <div className='card-container'>
              <Card>
                <CardBody>
                  <CardTitle tag='h5'>{title}</CardTitle>
                  <CardSubtitle className='mb-2 text-muted' tag='h6'>
                    {category}
                  </CardSubtitle>
                  <CardText>{body}</CardText>
                  <CardText>{formatDate(timestamp)}</CardText>
                  <CardText>{author}</CardText>
                  <CardText>{deleted}</CardText>
                </CardBody>
              </Card>
            </div>
          </div>
        )
      )}
    </>
  );
};
