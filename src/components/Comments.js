import React from 'react'
import { useSelector } from 'react-redux'
import { getall } from '../app/comments.slices'

export const Comments = ({postId}) => {
  const comments = useSelector(getall) 
  console.log(comments)
  return (
    <div className='container'>
      <h6>Comments</h6>
      <ul>
        {comments.map(comment => (
          comment.postId === postId && <li key={comment.id}> {comment.body} </li>
        ))}
      </ul>


    </div>
  )
}
