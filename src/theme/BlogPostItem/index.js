import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import Comment from '../../components/comment';

export default function BlogPostItemWrapper(props) {
  return (
    <>
      <BlogPostItem {...props} sx={{ marginBottom: '10px !important' }}/>
      <Comment/>
      <a href="https://www.buymeacoffee.com/AG_Jeremy" target="_blank" rel="noopener noreferrer">
        <img 
          src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png" 
          alt="Buy Me A Coffee" 
          style={{ height: '60px', width: '217px', marginBottom: '1rem' }} 
        />
      </a>
    </>
  );
}
