"use client";
import { useEffect, useState } from "react";

export default function SceneLoader() {
  const [scene, setScene] = useState<React.ReactNode>(null);

  useEffect(() => {
    let mounted = true;
    import("./scene").then((m) => {
      if (mounted) {
        const Scene = m.default;
        setScene(<Scene />);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  return scene ?? null;
}
