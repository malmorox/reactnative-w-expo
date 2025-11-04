import { useTheme } from '@/hooks/useTheme';
import React, { ReactNode } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

type ThemedViewProps = ViewProps & {
  children: ReactNode;
};

const ThemedView = ({ children, style, ...rest }: ThemedViewProps) => {
  const { theme } = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.background }, style]}
      {...rest}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ThemedView;