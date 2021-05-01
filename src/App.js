import React from "react";
import {useScroll} from "./utils";
import {Header, Landing, Introduction, AboutPartner, Footer} from './components';

function App() {
  const [scrollToContent, contentRef] = useScroll()

  return (
    <div className="box-border">
      <div id='scroll-container' className="flex flex-col">
        <Header/>
        <Landing onScroll={scrollToContent}/>
        <div ref={contentRef}>
          <Introduction/>
          <AboutPartner/>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
