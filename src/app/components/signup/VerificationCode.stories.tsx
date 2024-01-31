import React from 'react';
import { View } from 'react-native';
import { ComponentMeta, StoryFn, StoryObj } from '@storybook/react-native';
import EmailInput from '../signup/EmailInput';
import VerificationCode from '../signup/VerificationCode';
import IdAndPasswordInput from '../signup/IdAndPasswordInput';
import Navigator from './Navigator';

const screens = {
    EmailInput: EmailInput,
    VerificationCode: VerificationCode, 
    IdAndPasswordInput: IdAndPasswordInput
  };
  
  const meta: ComponentMeta<typeof VerificationCode> = {
    title: 'Components/VerificationCode',
    component: VerificationCode,
    decorators: [
        (Story: StoryFn): JSX.Element => (
          <View
              style={{
                  flex: 1,
              }}>
              <Story />
          </View>
    
        ),
      ],
    parameters: {
      layout: 'centered',
    },
  };
  
  export default meta;
  
  type Story = StoryObj<typeof VerificationCode>;
  
  export const Default: Story = {
    render: () => (
      <Navigator screens={screens} />
    ),
  };