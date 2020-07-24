import React from 'react';
import { useParams } from 'react-router-dom';
import CallToAction from '../../components/CallToAction';
import PostSection from './PostSection';

const SearchPage = () => {
  const { search } = useParams();

  return (
    <>
      <main className="home-main">
        <h1>You are searching for: {search || 'Everything'}</h1>
      </main>

      <PostSection search={search} />
      <CallToAction />
    </>
  );
};

export default SearchPage;
