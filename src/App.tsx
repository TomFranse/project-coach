import React, { useState } from 'react';
import './App.css';
import InteractionCard from './components/InteractionCard';
import flowchart from './data/flowchartData';
import { Node } from './types/flowchart';

function App() {
  const [currentNodeId, setCurrentNodeId] = useState('start');
  const currentNode: Node = flowchart[currentNodeId];

  const handleAnswer = (answer: 'yes' | 'no') => {
    if (answer === 'yes' && currentNode.yes) {
      setCurrentNodeId(currentNode.yes);
    } else if (answer === 'no' && currentNode.no) {
      setCurrentNodeId(currentNode.no);
    }
  };

  const handleNext = () => {
    if (currentNode.next) {
      setCurrentNodeId(currentNode.next);
    }
  };

  const handleButtonClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="App">
      <div className="project-coach">
        <h1>Project Coach</h1>
        <div className="visualization">
          {/* SVG visualization will go here */}
        </div>
        <InteractionCard
          node={currentNode}
          onAnswer={handleAnswer}
          onNext={handleNext}
          onButtonClick={handleButtonClick}
        />
      </div>
    </div>
  );
}

export default App; 