import React from 'react'
import { Button, CardText } from 'reactstrap';
import { formatDate } from '../utils/date';
import '../css/postPanel.css'

export const PostlistbottomPanel = ({ timestamp, author, deleted }) => {

  const handleDelete =() => {
    console.log('delete button clicked')
  }

  const handleEdit =() => {
    console.log('edit button clicked')
  }

  const handleAddComment =() => {
    console.log('add comment button clicked')
  }
  return (
    <div className='panel-container'>
      <div className='panel-content'>
        <div className='panel-content-text'>
          <Button className='button' onClick={handleEdit}>edit</Button>
          <Button className='button' onClick={handleDelete}>delete {deleted}</Button>
          <Button className="button" onClick={handleAddComment}>add comment</Button>
        </div>
        <CardText className='panel-content-text-p'>
          created at <br/>{formatDate(timestamp)}
        </CardText>
      </div>
      <CardText>{author}</CardText>
    </div>
  );
};
