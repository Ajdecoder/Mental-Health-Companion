import React, { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import { motion, AnimatePresence } from "framer-motion";
import { CameraIcon, ArrowPathIcon, ArrowDownTrayIcon, CheckIcon } from "@heroicons/react/24/outline";
import { FaAccessibleIcon, FaDownload, FaLongArrowAltRight } from "react-icons/fa";

export const FaceScan = () => {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countdown, setCountdown] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const videoConstraints = {
    facingMode: "user",
    aspectRatio: 1,
  };

  const capture = () => {
    setCountdown(3);
    console.log(image)
  };

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (countdown === 0 && webcamRef.current) {
      const imgSrc = webcamRef.current.getScreenshot();
      setImage(imgSrc);
      setIsAnalyzing(true);
      setTimeout(() => setIsAnalyzing(false), 2000);
    }
    return () => clearInterval(timer);
  }, [countdown]);

  const handleRetake = () => {
    setImage(null);
    console.log(image)
    setCountdown(0);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.download = "face-scan.jpg";
    link.href = image;
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center justify-center p-4 text-white">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold mb-2">Face Analysis</h1>
        <p className="text-gray-400">Position your face within the frame</p>
      </motion.div>

      <div className="relative w-80 h-80 mb-8">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-full h-full border-4 border-blue-400/30 rounded-full shadow-xl" />
          <motion.div
            className="absolute w-[105%] h-[105%] border-4 border-blue-400 rounded-full"
            animate={{ scale: [0.9, 1.1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>

        {image ? (
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full h-full rounded-full overflow-hidden"
          >
            <img src={image} alt="Captured face" className="w-full h-full object-cover" />
            <AnimatePresence>
              {isAnalyzing && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black/50 flex items-center justify-center"
                >
                  <div className="animate-pulse text-xl">Analyzing...</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full h-full rounded-full overflow-hidden"
          >
            <Webcam
              ref={webcamRef}
              audio={false}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
              onUserMedia={() => setIsLoading(false)}
              onUserMediaError={() => setError("Camera access denied")}
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}

        <AnimatePresence>
          {countdown > 0 && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full"
            >
              <div className="text-6xl font-bold text-blue-400">{countdown}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex gap-4 flex-wrap justify-center">
        {!image ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={capture}
            disabled={countdown > 0 || isLoading}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 disabled:opacity-50"
          >
            <CameraIcon className="w-6 h-6" />
            {isLoading ? "Initializing..." : "Capture Face"}
          </motion.button>
        ) : (
          <>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleRetake}
              className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-semibold flex items-center gap-2"
            >
              <FaLongArrowAltRight className="w-6 h-6" />
              Retake
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl font-semibold flex items-center gap-2"
            >
              <FaDownload className="w-6 h-6" />
              Download
            </motion.button>
          </>
        )}
      </div>

      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 p-4 bg-red-500/20 text-red-300 rounded-lg flex items-center gap-2"
        >
          ⚠️ {error}. Please enable camera access in your browser settings.
        </motion.div>
      )}

      {image && !isAnalyzing && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 p-6 bg-gray-700/30 rounded-xl backdrop-blur-sm"
        >
          <div className="flex items-center gap-2 text-green-400">
            <CheckIcon className="w-6 h-6" />
            <h3 className="text-xl font-semibold">Analysis Complete</h3>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div className="p-4 bg-gray-800/50 rounded-lg">
              <div className="text-gray-400">Face Detection</div>
              <div className="text-lg font-semibold">98% Confidence</div>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-lg">
              <div className="text-gray-400">Symmetry</div>
              <div className="text-lg font-semibold">94% Balanced</div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};