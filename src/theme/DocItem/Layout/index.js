import React from 'react';
import Layout from '@theme-original/DocItem/Layout';
import Comment from '../../../components/comment';

export default function LayoutWrapper(props) {
  return (
    <>
      <Layout {...props} />
      <Comment />
    </>
  );
}
