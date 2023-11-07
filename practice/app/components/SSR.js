// pages/ssr.js

const SSRPage = ( props ) => {
    console.log(props)
    return (
      <div>
        <h1>Server-Side Rendered Page</h1>
        <p>Content rendered on the server:</p>
        <p>{props.serverRenderedData}</p>
      </div>
    );
  };
  
  export async function getServerSideProps() {
    // Perform server-side data fetching here
    const serverRenderedData =  'This data was rendered on the server';
    console.log(serverRenderedData)
    
    return {
      props: {
        serverRenderedData
      },
    };
  }
  
  export default SSRPage;
  