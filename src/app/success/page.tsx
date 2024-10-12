"use client";
import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center min-h-dvh">
      <Button
        variant={"success"}
        onClick={() => {
          window.location.href = "/billing";
        }}
      >
        Success
      </Button>
    </div>
  );
};

export default page;
