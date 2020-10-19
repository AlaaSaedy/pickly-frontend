import React from 'react';
import { Heading, HEADING_OPTIONS } from '../Heading';
import { Button, BUTTON_OPTIONS } from '../Button';
import Icon2 from './Icon2.svg';
import { NavLink } from 'react-router-dom';

export const OneImageBtn = () => {
  return (
    <NavLink exact to="/post">
      <Button
        shadow={true}
        isRounded={true}
        color={BUTTON_OPTIONS.BACKGROUND_COLOR.PrimaryBlack}
        className="flex flex-shrink py-3 px-4  md:px-12 ml-2"
      >
        <i className="mr-3 hidden sm:block">
          <img src={Icon2} alt="choose one"></img>
        </i>
        <Heading
          textAlign={HEADING_OPTIONS.TEXT_ALIGN.LEFT}
          fontSize={HEADING_OPTIONS.FONT_SIZE.XSMALL}
          fontWeight={HEADING_OPTIONS.FONT_WEIGHT.SEMIBOLD}
          lineHeight={HEADING_OPTIONS.LINE_HEIGHT.LOOSE}
          className="sm:text-base"
        >
          One Image
        </Heading>
      </Button>
    </NavLink>
  );
};
