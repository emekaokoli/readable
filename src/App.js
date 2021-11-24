import * as React from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { Get } from './app/comments.slices';
import { getall } from './app/posts.slices';
import { fetchCategories } from './app/categories.slices';
import { Posts } from './components/Posts';

const { useEffect } = React;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(Get());
    dispatch(getall());
  }, [dispatch]);

  return(
    <div className='App'>
      <Posts />

  </div>
  )
}

export default App;
