import { Features, WhatGPT3, Blog, Header, Footer, Possibility} from './containers';
import { CTA, Brand, NavBar} from './components';
import './App.css';
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
};

export default App;
