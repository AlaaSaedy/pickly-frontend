import React from 'react';
import PostSection from './index';

export default {
  title: 'Components/PostSection',
  component: PostSection
};

const Template = args => <PostSection {...args} />;

export const PostSectionCase = Template.bind({});
PostSectionCase.args = {
  userName: 'Someone Profile',
  postDate: 'simple subtitle here',
  userImage:
    'https://images.unsplash.com/photo-1602494518630-f51bfa4e8853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    postCaption:
    'One of the perks of working in an international company is sharing knowledge with your colleagues.',
  leftBgImage:
    'https://images.unsplash.com/photo-1602575910330-f9807b05f69d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  rightBgImage:
    'https://images.unsplash.com/photo-1602341612227-1612891401ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  popupActionOptions: [0],
  shareUrl: 'https://www.m3ntorship.com',
  votesNumbers: '120k',
  savesNumbers: '20'
};
