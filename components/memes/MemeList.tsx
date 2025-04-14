"use client";

import { useState, useEffect } from "react";
import { type Meme, getMemes } from "@/lib/memes";
import { MemeCard } from "./MemeCard";

export function MemeList() {
  const [memes, setMemes] = useState<Meme[]>([]);

  useEffect(() => {
    setMemes(getMemes());
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Meme Directory - List View</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {memes.map((meme) => (
          <MemeCard key={meme.id} meme={meme} />
        ))}
      </div>
    </div>
  );
}
