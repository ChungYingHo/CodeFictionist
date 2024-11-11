import React from 'react';
import Layout from '@theme-original/DocItem/Layout';
import Comment from '../../../components/comment';

export default function LayoutWrapper(props) {
  return (
    <>
      <Layout {...props} />
      <Comment />
      <a href="https://www.buymeacoffee.com/AG_Jeremy" target="_blank" rel="noopener noreferrer">
        <img 
          src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png" 
          alt="Buy Me A Coffee" 
          style={{ height: '60px', width: '217px' }} 
        />
      </a>
    </>
  );
}
