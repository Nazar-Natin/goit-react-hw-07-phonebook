import React from 'react';
import { Circles } from 'react-loader-spinner';

const Loader = ({ color = '#4f9f4f' }) => {
  return (
    <div>
      <Circles
        height="60"
        width="60"
        color={color}
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
export default Loader;
