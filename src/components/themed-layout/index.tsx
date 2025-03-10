"use client";

import { Header } from "@components/header";
import { ThemedLayoutV2 } from "@refinedev/mui";
import React from "react";
import logo from "./logo.png";
import icon from "./icon.png";

export const ThemedLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemedLayoutV2 Header={() => <Header sticky />} Title={({ collapsed }) => (
      <>
        {collapsed ? (
          <img
            src={icon.src}
            style={{ height: 30 }}
            alt="logo"
          />
        ) : (
          <img
            src={logo.src}
            style={{ width: 180 }}
            alt="logo"
          />
        )}
      </>
    )}>{children}</ThemedLayoutV2>
  );
};
