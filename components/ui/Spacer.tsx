import React from 'react';
import { View } from 'react-native';

type SpacerProps = {
    height?: number;
    width?: number;
};

const Spacer: React.FC<SpacerProps> = ({ height = 0, width = 0 }) => {
    return <View style={{ height, width }} />;
};

export default Spacer;