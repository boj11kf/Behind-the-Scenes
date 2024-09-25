import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import ConfigureCounter from './components/Counter/ConfigureCounter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';

function App() {
  log('<App /> rendered');

  
  const [chosenCount, setChosenCount] = useState(0);

  const handleSetCount = (newCount) => {
    /* 
      2 egymást követő state módosítás nem von magaután
      2 renderinget, a react batching miatt. Ezeket ő automatikusan
      egyesíti.

      Így ezesetben az <App /> csak egyszer fog re-renderelődni, 
      hiába a 2 setter.
    */
    
    setChosenCount(newCount);
    setChosenCount((prevState) => prevState + 1);

  }

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSetCount={handleSetCount}/>
        <Counter key={chosenCount} initialCount={chosenCount} />
        <Counter initialCount={0} />
        
      </main>
    </>
  );
}

export default App;
