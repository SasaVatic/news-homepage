import { useEffect, useState } from 'react';
import Header from './components/Header';

function App() {
  const [pageData, setPageData] = useState(null);

  async function getPageContent() {
    try {
      const response = await fetch('/api/page');
      const data = await response.json();

      if (response.ok) {
        setPageData(data);
        return;
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getPageContent();
  }, []);

  return (
    <>
    {pageData ? <><Header data={pageData.navigation} /></> : 'Loading...'}
    </>
  );
}

export default App;
