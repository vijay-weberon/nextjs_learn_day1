import React from 'react';
import Link from 'next/link';


const Loading = () => {
  return (
    <div>
      Loading... Fetching the data
      <img src="https://cdnl.iconscout.com/lottie/premium/thumb/spinner-loading-5600921-4672284.gif" alt="Loading GIF" style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}/>
    </div>
  );
};

export default Loading;
