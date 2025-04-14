"use client";

import React, { ReactNode, useEffect, useState } from "react";

export const IsClient = ({ children }: { children: ReactNode }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures code is only executed on the client side
  }, []);
  return <>{isClient ? <div> {children} </div> : null}</>;
};
