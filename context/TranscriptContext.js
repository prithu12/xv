"use client"

import React, { createContext, useContext, useState } from 'react';

// Create the context
const TranscriptContext = createContext();

// Provide the context to children components
export const TranscriptProvider = ({ children }) => {
  const [transcript, setTranscript] = useState("");  // Store the transcript

  return (
    <TranscriptContext.Provider value={{ transcript, setTranscript }}>
      {children}
    </TranscriptContext.Provider>
  );
};

// Custom hook to use the Transcript context
export const useTranscript = () => {
  return useContext(TranscriptContext);
};
