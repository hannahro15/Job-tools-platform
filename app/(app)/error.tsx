"use client";

import Link from "next/link";

import { useEffect } from "react";

export default function Error({
  error,
  retry,
}: {
  error: Error;
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h1>Something went wrong</h1>
      <button onClick={retry}>Retry</button>
      <Link href="/">Go to Homepage</Link>
    </div>
  );
}
