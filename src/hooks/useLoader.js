import { useEffect, useState } from "react";

export default function useLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("load", () => {
      setTimeout(() => setLoading(false), 800);
    });
  }, []);

  return loading;
}
