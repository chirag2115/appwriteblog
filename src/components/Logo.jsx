import React from 'react';

function Logo({ width = '100px' }) {
  return (
    <div>
      <img 
        src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572-768x591.png" 
        alt="Logo" 
        width={width} 
      />
    </div>
  );
}

export default Logo;
