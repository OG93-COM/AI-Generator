import React from 'react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Recognition = () => {
    // const startListening = () => SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
    // const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    // if (!browserSupportsSpeechRecognition) {
    //     return null;
    // }

    return (
        <div className='text-center mt-3'>
            {/* <p>{transcript}</p> */}
            <button
                // onClick={startListening}
                className='bg-green-700 text-white rounded h-14 w-24 px-6 m-2 hover:bg-green-600 duration-300'>
                Start
            </button>
            <button
                // onClick={SpeechRecognition.stopListening}
                className='bg-red-700 text-white rounded h-14 w-24 px-6 m-2 hover:bg-red-600 duration-300'>
                Stop
            </button>
        </div>
    );
};

export default Recognition;
