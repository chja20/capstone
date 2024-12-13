import React from 'react';
import './Menu.css';

const Menu = ({ currentSection, setCurrentSection }) => {
  return (
    <div className="menu">
      <ul>
        {/* 각 버튼에 currentSection 값에 따라 active 클래스를 적용 */}
        <li
          className={currentSection === 0 ? 'active' : ''}
          onClick={() => setCurrentSection(0)}
        >
          
        </li>
        <li
          className={currentSection === 1 ? 'active' : ''}
          onClick={() => setCurrentSection(1)}
        >
          
        </li>
        <li
          className={currentSection === 2 ? 'active' : ''}
          onClick={() => setCurrentSection(2)}
        >
          
        </li>
        <li
          className={currentSection === 3 ? 'active' : ''}
          onClick={() => setCurrentSection(3)}
        >
            
        </li>
        <li
          className={currentSection === 4 ? 'active' : ''}
          onClick={() => setCurrentSection(4)}
        >
          
        </li>
        <li
          className={currentSection === 5 ? 'active' : ''}
          onClick={() => setCurrentSection(5)}
        >
          
        </li>
      </ul>
    </div>
  );
};

export default Menu;
