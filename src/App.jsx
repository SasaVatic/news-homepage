import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Loader from "./components/Loader";

function App() {
  const [pageData, setPageData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  async function getPageContent() {
    try {
      const response = await fetch("/api/page");
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

  function setLoaded() {
    setIsLoaded(true);
  }

  return (
    <>
      {isLoaded ? (
        <>
          <Header data={pageData.navigation} />
          <main className="mx-auto px-4 desktop:container">
            <Hero data={pageData.hero} />
          </main>
        </>
      ) : (
        <Loader setLoadedState={setLoaded} data={pageData} />
      )}
    </>
  );
}

export default App;
