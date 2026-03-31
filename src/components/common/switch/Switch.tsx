import { useState } from 'react';
import './Switch.css';

interface SwitchProps {
  defaultOn?: boolean;
  onChange?: (isOn: boolean) => void;
}

export const Switch: React.FC<SwitchProps> = ({ defaultOn = false, onChange }) => {
  const [isOn, setIsOn] = useState(defaultOn);

  const toggleSwitch = () => {
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