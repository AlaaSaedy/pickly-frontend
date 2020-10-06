import React, { useState } from 'react';
import cn from 'classnames';
// import PropTypes from 'prop-types';

export const ToggleButton = ({ title, selected, onToggle }) => {
  const [toggled, setToggled] = useState(selected);

  const toggle = () => {
    console.log('clicked');
    console.log(selected);
    const currentState = !toggled;
    setToggled(currentState);
    onToggle(currentState);
  };
  return (
    <div>
      <button
        className={cn(
          ' w-56 h-10 rounded-lg flex flex-row items-center absolute py-2 px-4 bg-c700 ',
          { 'bg-c100_op-15': toggled }
        )}
        onClick={toggle}
      >
        <div className="h-6 flex items-center relative">
          <div
            className={cn(
              {
                'bg-c100 right-0 ': toggled
              },
              ' bg-white  w-6 h-6  shadow rounded-full absolute z-10'
            )}
          ></div>
          <div
            className={cn(
              {
                'bg-c100 opacity-50': toggled
              },
              'w-10 h-4 rounded-lg bg-black opacity-25 z-0'
            )}
          ></div>
        </div>
        <p className=" font-semibold font-primary text-sm leading-5 tracking-wide text-c500 ml-2 ">
          {title}
        </p>
      </button>
    </div>
  );
};

// Icon.propTypes = {
//   /**
//    * this is the URL of the icon image!
//    */
//   iconURL: PropTypes.string.isRequired,
//   /**
//    * this to check this icon selected or not!
//    */
//   selected: PropTypes.bool
// };
