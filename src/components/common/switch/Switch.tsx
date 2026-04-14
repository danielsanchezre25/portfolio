import { useState } from 'react';
import './Switch.css';
import type { Theme } from '../../../hooks/ThemeContext/ThemeContext';

interface SwitchProps {
  defaultOn?: boolean;
  onChange?: (theme: Theme) => void;
}

export const Switch: React.FC<SwitchProps> = ({ defaultOn, onChange }) => {
  const [isOn, setIsOn] = useState(defaultOn);

  const toggleSwitch = () => {
    onChange?.(isOn ? 'light' : 'dark');
    setIsOn(!isOn);
  };

  return (
    <label className="switch">
      <input type="checkbox" checked={isOn} onChange={toggleSwitch} />
      <span className="slider"></span>
    </label>
  );
};

export default Switch;