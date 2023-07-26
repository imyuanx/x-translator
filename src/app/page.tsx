"use client";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowDownUp } from "lucide-react";
import { useState } from "react";

const X_FONT = {
  a: "𝔸",
  b: "𝔹",
  c: "ℂ",
  d: "𝔻",
  e: "𝔼",
  f: "𝔽",
  g: "𝔾",
  h: "ℍ",
  i: "𝕀",
  j: "𝕁",
  k: "𝕂",
  l: "𝕃",
  m: "𝕄",
  n: "ℕ",
  o: "𝕆",
  p: "ℙ",
  q: "ℚ",
  r: "ℝ",
  s: "𝕊",
  t: "𝕋",
  u: "𝕌",
  v: "𝕍",
  w: "𝕎",
  x: "𝕏",
  y: "𝕐",
  z: "ℤ",
};

export default function Home() {
  const [originText, setOriginText] = useState("");
  const [XText, setXText] = useState("");

  function translate(origin: string) {
    let xText = origin;
    for (let i = 97; i < 97 + 26; i++) {
      const letter = String.fromCharCode(i) as keyof typeof X_FONT;
      const letterUp = String.fromCharCode(i - 32) as keyof typeof X_FONT;
      xText = xText.replaceAll(letter, X_FONT[letter]);
      xText = xText.replaceAll(letterUp, X_FONT[letter]);
    }
    return xText;
  }

  return (
    <main className="flex flex-col items-center p-10 pb-3 min-h-screen">
      <div className="max-w-[600px] w-full flex flex-1 flex-col items-center gap-12">
        <div className="flex flex-col w-full items-center gap-3">
          <h1 className="text-4xl font-black">{translate("X Translator")}</h1>
          <h3>
            {translate("Translate ")}
            <span className="border-black border-b-2 border-double">
              {translate("Twitter")}
            </span>
            {translate(" to ")}
            <span className="border-black border-b-2 border-double">
              {translate("X")}
            </span>
          </h3>
        </div>
        <div className="w-full flex flex-col items-center gap-4">
          <Textarea
            className="w-full min-h-[200px]"
            onChange={(e) => setOriginText(e.target.value)}
          />
          <Button onClick={(_) => setXText(translate(originText))}>
            <ArrowDownUp className="mr-2 h-4 w-4" />
            {translate("Translate")}
          </Button>
          <Textarea value={XText} className="x-font w-full min-h-[200px]" readOnly />
        </div>
      </div>
      <div className="w-full flex gap-3">
        <a className="underline" href="http://yuanx.me" target="_blank">
          @yuanx
        </a>
        <a
          className="underline"
          href="https://twitter.com/imyuanx"
          target="_blank"
        >
          twitter
        </a>
        <a
          className="underline"
          href="https://github.com/imyuanx/x-translator"
          target="_blank"
        >
          github
        </a>
      </div>
    </main>
  );
}
