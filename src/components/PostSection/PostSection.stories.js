import React from 'react';
import PostSection from './index';

export default {
  title: 'Components/PostSection',
  component: PostSection
};

const Template = args => <PostSection {...args} />;

export const PostSectionCase = Template.bind({});
PostSectionCase.args = {
  title: 'Someone Profile',
  subTitle: 'simple subtitle here',
  imgURL:
    'https://images.unsplash.com/photo-1602494518630-f51bfa4e8853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  paragraph:
    'One of the perks of working in an international company is sharing knowledge with your colleagues.',
  bgImageOne:
    'https://images.unsplash.com/photo-1602575910330-f9807b05f69d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  bgImageTwo:
    'https://images.unsplash.com/photo-1602341612227-1612891401ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  divWidth: '50%',
  divHeight: '400px',
  smallRound: true,
  bgColor: 'white',
  pickIcon: 'http://www.svgshare.com/i/QXB.svg',
  searchIcon: 'https://i.imgur.com/inlBQ6A.png',
  options: [0],
  url: 'https://www.m3ntorship.com',
  saveIcon: 'http://www.svgshare.com/i/QW7.svg'
};
