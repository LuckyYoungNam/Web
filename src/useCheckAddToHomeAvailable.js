// useCheckAddToHomeAvailable.js
import { useState, useEffect } from 'react';

const useCheckAddToHomeAvailable = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  // Check if the event is a BeforeInstallPromptEvent
  const isBeforeInstallPromptEvent = (e) => {
    return 'platforms' in e && 'userChoice' in e && 'prompt' in e;
  };

  useEffect(() => {
    const handler = (e) => {
      if (isBeforeInstallPromptEvent(e)) {
        e.preventDefault();
        setDeferredPrompt(e); // Store the event for triggering later
      }
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  return deferredPrompt;
};

export default useCheckAddToHomeAvailable;