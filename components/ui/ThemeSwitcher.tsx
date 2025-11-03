import { useTheme } from '@/hooks/useTheme';
import { useState } from 'react';
import { Switch } from 'react-native';

export const ThemeSwitcher = () => {
    const { toggleTheme } = useTheme();
    const [isEnabled, setIsEnabled] = useState(false);
    
    const toggleSwitch = () => {
        setIsEnabled(isEnabled => !isEnabled);
        toggleTheme()
    }

    return (
        <Switch 
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    );
};