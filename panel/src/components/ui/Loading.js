import React from 'react';
import { HashLoader } from 'react-spinners';

const Loading = () => {
  const loaderContainer = {
    backgroundColor: '#ffffff67',
    zIndex: 100
  }
  return (
    <div className='fixed left-0 top-0 w-screen h-screen flex items-center justify-center' style={loaderContainer}>
      <HashLoader size={75} />
    </div>
  );
};

export default Loading;
