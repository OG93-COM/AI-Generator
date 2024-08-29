import { useRef, useEffect } from 'react'
import * as faceapi from 'face-api.js'

function FaceAI() {
    const videoRef = useRef()
    const canvasRef = useRef()

    // LOAD FROM USEEFFECT
    useEffect(() => {
        startVideo()
        videoRef && loadModels()

    }, [])

    // OPEN YOU FACE WEBCAM
    const startVideo = () => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((currentStream) => {
                videoRef.current.srcObject = currentStream
            })
            .catch((err) => {
                console.log(err)
            })
    }

    // LOAD MODELS FROM FACE API
    const loadModels = () => {
        Promise.all([
            // THIS FOR FACE DETECT AND LOAD FROM YOU PUBLIC/MODELS DIRECTORY
            faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
            faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
            faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
            faceapi.nets.faceExpressionNet.loadFromUri("/models")

        ]).then(() => {
            faceMyDetect()
        })
    }

    const faceMyDetect = () => {
        setInterval(async () => {
            const detections = await faceapi.detectAllFaces(videoRef.current,
                new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()

            // DRAW YOU FACE IN WEBCAM
            canvasRef.current.innerHtml = faceapi.createCanvasFromMedia(videoRef.current)
            faceapi.matchDimensions(canvasRef.current, {
                width: 940,
                height: 650
            })

            const resized = faceapi.resizeResults(detections, {
                width: 940,
                height: 650
            })

            faceapi.draw.drawDetections(canvasRef.current, resized)
            faceapi.draw.drawFaceLandmarks(canvasRef.current, resized)
            faceapi.draw.drawFaceExpressions(canvasRef.current, resized)


        }, 1000)
    }

    return (
        <>
            <h1 className="text-2xl text-slate-300 font-bold text-center my-5">
                Facial Recognition System 🙈
            </h1>
            <div className="flex justify-center items-center p-2 bg-slate-600">
                <div>
                    <video crossOrigin="anonymous" ref={videoRef} autoPlay className='rounded-lg shadow-lg'></video>
                    <canvas ref={canvasRef} width="940" height="650"
                        className="appcanvas top-10" />
                </div>
            </div>
        </>
    )
}

export default FaceAI;