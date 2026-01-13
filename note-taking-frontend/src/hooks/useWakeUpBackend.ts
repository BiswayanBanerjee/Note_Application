import { useEffect, useState } from "react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_API_BASE_URL;

export const useWakeUpBackend = () => {
  const [waking, setWaking] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const ping = async () => {
      try {
        await axios.get(`${BACKEND_URL}/health`, {
          timeout: 3000,
        });
        setWaking(false);
        clearInterval(interval);
      } catch {
        // backend still sleeping
      }
    };

    ping(); // immediate first attempt
    interval = setInterval(ping, 2000); // every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return waking;
};
