"use client";

import { useState } from "react";

type BuyButtonProps = {
  templateId: string;
};

export function BuyButton({ templateId }: BuyButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleBuy = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ templateId }),
      });
      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("購入処理でエラーが発生しました。もう一度お試しください。");
      }
    } catch {
      alert("購入処理でエラーが発生しました。もう一度お試しください。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleBuy}
      disabled={loading}
      className="btn-primary text-sm !py-2 !px-4 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? "処理中..." : "購入する"}
    </button>
  );
}
