import React from 'react';
import PostPreview from './PostPreview';
import { PostPreviewProps } from './types';
import { View } from 'react-native';
import type { ComponentMeta, StoryFn, StoryObj } from '@storybook/react-native';
import { ImageSourcePropType } from 'react-native';

const meta: ComponentMeta<typeof PostPreview> = {
    title: 'Design System/components/post/PostPreview',
    component: PostPreview,
    decorators: [
        (Story: StoryFn): JSX.Element => (
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
                }}>
                <Story />
            </View>
        ),
    ],
};

export default meta;

type Story = StoryObj<PostPreviewProps>;

export const Default: Story = {
    args: {
        width: 390,
        height: 74,
        imageLink: require('../../assets/images/chick.png') as ImageSourcePropType,
        groupName: "벤쿠버 유학생 방",
        title: "오늘 저녁 뭐 먹을지 고르는거 도와주셈",
        contentPreview: "모짜솔솔김볶밥 vs 차돌돌돌만불닭볶밥",
        timestamp: new Date(),
        numOfLikes: 13,
        numOfComments: 5,
        authorSchoolName: "UBC",
        authorName: "unknown123",
    },
};