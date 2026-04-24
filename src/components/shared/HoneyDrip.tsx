"use client";

import { useState } from "react";

/**
 * Decorative honey drip at the top of the hero section.
 * Animates once on mount: pour reveal + staggered droplet growth.
 * Remounts on every homepage visit (mount-key ensures fresh animation).
 */
export function HoneyDrip() {
  const [mountKey] = useState(() => Date.now());

  return (
    <div
      key={mountKey}
      aria-hidden="true"
      className="absolute top-0 left-0 right-0 z-[5] pointer-events-none select-none"
    >
      <MobileDrip />
      <DesktopDrip />
    </div>
  );
}

function MobileDrip() {
  return (
    <svg
      className="block md:hidden w-full h-[100px] animate-honey-pour-left"
      viewBox="0 0 400 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="honey-grad-m" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#BA8749" />
          <stop offset="100%" stopColor="#885A2E" />
        </linearGradient>
        <filter id="honey-shadow-m" x="-5%" y="-5%" width="110%" height="130%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
          <feOffset dx="0" dy="2" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.25" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#honey-shadow-m)">
        <path
          d="M0,0 L400,0 L400,22 C380,30 360,28 340,22 C320,18 300,26 280,22 C260,18 240,28 220,22 C200,18 180,28 160,22 C140,18 120,30 100,22 C80,18 60,26 40,22 C20,20 10,22 0,20 Z"
          fill="url(#honey-grad-m)"
        />

        <g
          className="animate-honey-drip animate-delay-500"
          style={{ transformOrigin: "40px 18px" }}
        >
          <path
            d="M34,18 C34,40 34,58 40,58 C46,58 46,40 46,18 Z"
            fill="url(#honey-grad-m)"
          />
          <path
            d="M36,22 C35,30 35,40 35,48"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        <g
          className="animate-honey-drip animate-delay-600"
          style={{ transformOrigin: "95px 18px" }}
        >
          <path
            d="M88,18 C88,48 88,72 95,72 C102,72 102,48 102,18 Z"
            fill="url(#honey-grad-m)"
          />
          <path
            d="M90,22 C89,34 89,50 89,62"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        <g
          className="animate-honey-drip animate-delay-700"
          style={{ transformOrigin: "155px 18px" }}
        >
          <path
            d="M147,18 C147,55 147,92 155,92 C163,92 163,55 163,18 Z"
            fill="url(#honey-grad-m)"
          />
          <path
            d="M149,22 C148,38 148,62 148,80"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="1.3"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        <g
          className="animate-honey-drip animate-delay-800"
          style={{ transformOrigin: "215px 18px" }}
        >
          <path
            d="M208,18 C208,42 208,64 215,64 C222,64 222,42 222,18 Z"
            fill="url(#honey-grad-m)"
          />
          <path
            d="M210,22 C209,32 209,46 209,56"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        <g
          className="animate-honey-drip animate-delay-900"
          style={{ transformOrigin: "275px 18px" }}
        >
          <path
            d="M268,18 C268,50 268,78 275,78 C282,78 282,50 282,18 Z"
            fill="url(#honey-grad-m)"
          />
          <path
            d="M270,22 C269,36 269,54 269,68"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        <g
          className="animate-honey-drip animate-delay-1000"
          style={{ transformOrigin: "330px 18px" }}
        >
          <path
            d="M323,18 C323,40 323,58 330,58 C337,58 337,40 337,18 Z"
            fill="url(#honey-grad-m)"
          />
          <path
            d="M325,22 C324,30 324,40 324,48"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        <g
          className="animate-honey-drip animate-delay-1100"
          style={{ transformOrigin: "380px 18px" }}
        >
          <path
            d="M374,18 C374,38 374,50 380,50 C386,50 386,38 386,18 Z"
            fill="url(#honey-grad-m)"
          />
        </g>
      </g>
    </svg>
  );
}

function DesktopDrip() {
  return (
    <svg
      className="hidden md:block w-full h-[140px] animate-honey-pour-center"
      viewBox="0 0 1200 140"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="honey-grad-d" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#BA8749" />
          <stop offset="100%" stopColor="#885A2E" />
        </linearGradient>
        <filter id="honey-shadow-d" x="-2%" y="-5%" width="104%" height="130%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2.5" />
          <feOffset dx="0" dy="3" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.28" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#honey-shadow-d)">
        <path
          d="M240,0 L960,0 L960,18 C940,28 915,32 890,30 C860,28 830,34 800,32 C760,30 720,36 680,34 C640,30 600,36 560,34 C520,30 480,36 440,34 C400,30 370,36 340,34 C310,30 280,32 260,26 L240,22 Z"
          fill="url(#honey-grad-d)"
        />

        <g
          className="animate-honey-drip animate-delay-700"
          style={{ transformOrigin: "340px 28px" }}
        >
          <path
            d="M330,28 C330,60 330,88 340,88 C350,88 350,60 350,28 Z"
            fill="url(#honey-grad-d)"
          />
          <path
            d="M333,34 C331,48 331,68 331,78"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="1.4"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        <g
          className="animate-honey-drip animate-delay-900"
          style={{ transformOrigin: "500px 32px" }}
        >
          <path
            d="M488,32 C488,75 488,110 500,110 C512,110 512,75 512,32 Z"
            fill="url(#honey-grad-d)"
          />
          <path
            d="M491,38 C489,56 489,82 489,100"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        <g
          className="animate-honey-drip animate-delay-1100"
          style={{ transformOrigin: "620px 34px" }}
        >
          <path
            d="M606,34 C606,88 606,130 620,130 C634,130 634,88 634,34 Z"
            fill="url(#honey-grad-d)"
          />
          <path
            d="M609,42 C607,62 607,92 607,118"
            stroke="white"
            strokeOpacity="0.35"
            strokeWidth="1.6"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        <g
          className="animate-honey-drip animate-delay-1300"
          style={{ transformOrigin: "740px 33px" }}
        >
          <path
            d="M729,33 C729,70 729,100 740,100 C751,100 751,70 751,33 Z"
            fill="url(#honey-grad-d)"
          />
          <path
            d="M732,40 C730,54 730,76 730,92"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="1.4"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        <g
          className="animate-honey-drip animate-delay-1500"
          style={{ transformOrigin: "860px 30px" }}
        >
          <path
            d="M850,30 C850,55 850,78 860,78 C870,78 870,55 870,30 Z"
            fill="url(#honey-grad-d)"
          />
          <path
            d="M853,36 C851,46 851,62 851,70"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="1.4"
            strokeLinecap="round"
            fill="none"
          />
        </g>
      </g>
    </svg>
  );
}
