import React, { useRef, useState } from 'react';
import defaultImg from '../../assets/GenAI-Default.png';

const GenAI = () => {
  const searchRefImg = useRef();
  const [imgUrl, setImgUrl] = useState("/");
  const [errorMessage, setErrorMessage] = useState("");

  const imgGenerator = async (e) => {
    e.preventDefault();
    if (searchRefImg.current.value === "") {
      return;
    }

    try {
      const response = await fetch('https://api.openai.com/v1/images/generations', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer ",
        },
        body: JSON.stringify({
          model: "dall-e-3",
          prompt: searchRefImg.current.value,
          n: 1,
          size: "1024x1024",
        }),
      });

      const data = await response.json();
      console.log(data);

      if (data && data.data && data.data.length > 0) {
        setImgUrl(data.data[0].url);
      } else if (data.error) {
        setErrorMessage(data.error.message);
      }
    } catch (error) {
      console.error('Error generating image:', error);
      setErrorMessage('An error occurred while generating the image.');
    }
  };

  return (
    <div className='bg-slate-800 min-h-screen min-w-full text-slate-100 p-2 mx-auto'>
      <h1 className="text-2xl text-slate-300 font-bold text-center my-5">
        Generative Image From AI 🤖
      </h1>
      {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
      <img src={imgUrl === "/" ? defaultImg : imgUrl}
        alt='Image Generative'
        className='rounded-lg mx-auto my-6 w-[500px]' />
      <form className='flex justify-center items-center max-w-[800px] mx-auto' onSubmit={imgGenerator}>
        <input
          ref={searchRefImg}
          type='text'
          placeholder='Imagine Something!'
          className='relative w-full rounded-bl h-14 text-slate-700 p-3' />
        <button
          type='submit'
          className='bg-green-800 rounded-br h-14 px-6 hover:bg-slate-600 duration-300'>
          Create
        </button>
      </form>
    </div>
  );
}

export default GenAI;
