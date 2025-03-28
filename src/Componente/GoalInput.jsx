import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useTheme } from '../Context/ThemeContext';

const GoalInput = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const [inputValue, setInputValue] = useState('');
  const [goals, setGoals] = useState(() => {
    const storedGoals = localStorage.getItem('myGoals');
    return storedGoals ? JSON.parse(storedGoals) : [];
  });
  const [counter, setCounter] = useState(() => {
    const storedCounter = localStorage.getItem('myCounter');
    return storedCounter ? parseInt(storedCounter, 10) : 0;
  });

  useEffect(() => {
    document.title = ` ${counter}`;
  }, [counter]);

  useEffect(() => {
    localStorage.setItem('myGoals', JSON.stringify(goals));
    localStorage.setItem('myCounter', counter.toString());
  }, [goals, counter]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddGoal = () => {
    if (inputValue.trim() !== '') {
      setGoals([...goals, { text: inputValue, id: counter }]);
      setCounter(counter + 1);
      setInputValue('');
    }
  };

  return (
    <div style={{ backgroundColor: isDarkMode ? 'blue' : 'white', minHeight: '100vh', transition: 'background-color 0.3s' }}>
      <Form.Check
        type="switch"
        id="custom-switch"
        label="Cambiar Color"
        checked={isDarkMode}
        onChange={toggleTheme}
      />

      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddGoal}>Add Goal</button>
      
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>{goal.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default GoalInput;
