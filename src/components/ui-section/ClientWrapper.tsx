"use client";

import Loader from "@/components/ui-section/Loader";
import { useState, useEffect } from "react";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., logo animation)
    const timer = setTimeout(() => setLoading(false), 500); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <Loader /> : children}</>;
}
