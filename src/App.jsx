import { useState } from 'react';
import Choice from './Choice';
// import Recommender from './Recommender/Recommender';
// import Manual from './Manual/Manual';
import './App.css';
import Manual from './Manual/Manual';
import Recommender from './Recommender/Recommender';

function App() {
  const [chosenOption, setChosenOption] = useState(null);

  const handleOptionSelect = (option) => {
    setChosenOption(option);
  };

  return (
    <div className='init'>
      {chosenOption ? (
        chosenOption === 'manual' ? (
          <Manual />
        ) : (
          <Recommender />
        )
      ) : (
        <Choice onOptionSelect={handleOptionSelect} />
      )}
    </div>
  );
}

export default App;