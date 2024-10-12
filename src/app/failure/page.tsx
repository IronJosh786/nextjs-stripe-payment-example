"use client";
import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center min-h-dvh">
      <Button
        variant={"destructive"}
        onClick={() => {
          window.location.href = "/billing";
        }}
      >
        Failure
      </Button>
    </div>
  );
};

export default page;
