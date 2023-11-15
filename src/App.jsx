import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  const [pageData, setPageData] = useState(null);

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

  return (
    <>
      {pageData ? (
        <>
          <Header data={pageData.navigation} />
          <main className="mx-auto px-4 desktop:container">
            <Hero data={pageData.hero}/>
          </main>
        </>
      ) : (
        "Loading..."
      )}
    </>
  );
}

export default App;
