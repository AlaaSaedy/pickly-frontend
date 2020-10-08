import React, { useState } from 'react';
import { UploadingProgress } from './../Uploading-progress';
export const InputField = ({ imageURL, progress }) => {
  const [postText, setPostText] = useState(null);

  const handleOnchange = e => {
    const value = e.target.value;
    setPostText(value);
    console.log(postText);
  };
  return (
    <div className=" w-full h-20 rounded-lg border border-solid border-c700 flex items-center p-4 z-10 ">
      <img src={imageURL} alt="" className="w-8 h-8 rounded-full " />
      <textarea
        name="postText"
        id=""
        placeholder={'What’s on your mind?'}
        onChange={handleOnchange}
        className="mx-4 z-0 h-16 md:h-10 md:mt-2  flex-auto min-w-0 text-c500 text-base font-primary font-regular leading-6 tracking-tighter md:tracking-wider resize-none"
      ></textarea>
      <UploadingProgress className="right-0" progress={progress} />
    </div>
  );
};
