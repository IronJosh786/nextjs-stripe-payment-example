"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const CheckoutButton = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const handleCheckout = async (id: string) => {
    setLoading(true);
    setError(undefined);

    const response = await fetch("/api/create-stripe-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    if (!response.ok) {
      setError(`Failed to create Checkout Session: ${response.statusText}`);
      setLoading(false);
      return;
    }

    const { url } = await response.json();

    window.location.href = url;
  };

  return (
    <div className="flex flex-col gap-8 justify-center items-center min-h-dvh">
      <p className="text-3xl font-semibold">Choose a plan</p>
      <div className="flex gap-8">
        <Button
          onClick={() => handleCheckout("price_1Q8lv2SHE0m8jtxUc9zoQjZV")}
          disabled={loading}
        >
          {loading ? "Loading..." : "₹1,000"}
        </Button>
        <Button
          onClick={() => handleCheckout("price_1Q8mCNSHE0m8jtxUcU9RE5B8")}
          disabled={loading}
        >
          {loading ? "Loading..." : "₹1,500"}
        </Button>
        <Button
          onClick={() => handleCheckout("price_1Q8mCcSHE0m8jtxUbPYa2ROl")}
          disabled={loading}
        >
          {loading ? "Loading..." : "₹2,000"}
        </Button>
      </div>
      {error && <div>{error}</div>}
    </div>
  );
};

export default CheckoutButton;
