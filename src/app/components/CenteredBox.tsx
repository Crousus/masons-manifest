import React from 'react';

const CenteredBox = ({ children }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded-md shadow-md max-w-lg w-full lg:max-w-xl lg:p-12">
        {children}
      </div>
    </div>
  );
};

export default CenteredBox;
