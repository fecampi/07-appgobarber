import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Container } from './styles';
// --------Styles--------

interface KeyboardScrollView {
  padding: number;
}

const KeyboardScrollView: React.FC<KeyboardScrollView> = ({
  padding,
  children,
}) => {
  return (
    <>
      {/* move o conteúdo para cima, em caso de uso do teclado */}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container padding={padding}>{children}</Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default KeyboardScrollView;
