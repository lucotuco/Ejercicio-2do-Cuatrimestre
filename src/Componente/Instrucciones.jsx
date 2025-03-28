
import React from 'react';
import { useTheme } from '../Context/ThemeContext';

const Instructions = () => {
  const { isDarkMode } = useTheme();

  return (
    <div style={{ backgroundColor: isDarkMode ? 'blue' : 'white', minHeight: '100vh', transition: 'background-color 0.3s' }}>
      <h2>Instructions</h2>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id nunc justo. Morbi at enim et turpis faucibus fermentum. Ut consequat in nisi tempus dapibus. Proin arcu nunc, vestibulum sit amet ultricies eget, congue in arcu. Pellentesque pulvinar nisi nibh, vel scelerisque nibh tincidunt egestas. Mauris malesuada ultricies erat, ac vehicula diam elementum ut. Nulla sit amet massa in arcu consectetur aliquet. Nam sit amet augue nec nibh faucibus luctus. Sed orci nunc, elementum eu tempor eget, faucibus condimentum felis. Nam non neque vel nisi maximus tristique. Duis quis euismod lacus. Vivamus id vestibulum purus. Sed quis nulla elit. In arcu leo, congue non elit vitae, gravida pretium metus.

      </p>
    </div>
  );
};

export default Instructions;
