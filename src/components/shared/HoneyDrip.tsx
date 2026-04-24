"use client";

import { useState } from "react";

/**
 * Decorative honey drip at the top of the hero section.
 * Animates once on mount: pour reveal + staggered droplet growth.
 * Remounts on every homepage visit (mount-key ensures fresh animation).
 *
 * Uses SVG goo filter (gaussian blur + alpha threshold) so the band and
 * droplets visually fuse into a single liquid mass where they overlap.
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
      className="block md:hidden w-full h-[110px] animate-honey-pour-left overflow-visible"
      viewBox="0 0 400 110"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="honey-grad-m" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D19956" />
          <stop offset="45%" stopColor="#BA8749" />
          <stop offset="100%" stopColor="#A07130" />
        </linearGradient>
        <linearGradient id="honey-hl-m" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F4D9A8" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#F4D9A8" stopOpacity="0" />
        </linearGradient>
        <filter id="goo-m" x="-5%" y="-5%" width="110%" height="130%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
        <filter id="shadow-m" x="-5%" y="-5%" width="110%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1.8" />
          <feOffset dx="0" dy="2.5" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#shadow-m)">
        <g filter="url(#goo-m)">
          {/* Organic band with varying thickness */}
          <path
            d="M0,0 L400,0 L400,18 C388,24 375,26 362,22 C348,18 332,28 318,26 C302,22 288,32 272,24 C256,18 240,30 222,22 C204,18 188,28 170,26 C152,22 136,30 118,22 C100,18 84,26 66,22 C50,20 30,24 12,18 L0,16 Z"
            fill="url(#honey-grad-m)"
          />

          {/* Droplet 1 — short */}
          <g
            className="animate-honey-drip animate-delay-500"
            style={{ transformOrigin: "38px 20px" }}
          >
            <path
              d="M28,14 C28,30 25,48 28,56 C30,62 34,64 38,64 C42,64 46,62 48,56 C51,48 48,30 48,14 Z"
              fill="url(#honey-grad-m)"
            />
          </g>

          {/* Droplet 2 */}
          <g
            className="animate-honey-drip animate-delay-600"
            style={{ transformOrigin: "92px 22px" }}
          >
            <path
              d="M81,16 C81,42 77,70 80,80 C82,86 87,88 92,88 C97,88 102,86 104,80 C107,70 103,42 103,16 Z"
              fill="url(#honey-grad-m)"
            />
          </g>

          {/* Droplet 3 — tallest */}
          <g
            className="animate-honey-drip animate-delay-700"
            style={{ transformOrigin: "158px 24px" }}
          >
            <path
              d="M146,18 C146,48 141,85 144,98 C146,104 151,106 158,106 C165,106 170,104 172,98 C175,85 170,48 170,18 Z"
              fill="url(#honey-grad-m)"
            />
          </g>

          {/* Droplet 4 */}
          <g
            className="animate-honey-drip animate-delay-800"
            style={{ transformOrigin: "218px 22px" }}
          >
            <path
              d="M208,16 C208,36 203,58 206,68 C208,74 213,76 218,76 C223,76 228,74 230,68 C233,58 228,36 228,16 Z"
              fill="url(#honey-grad-m)"
            />
          </g>

          {/* Droplet 5 — medium-tall */}
          <g
            className="animate-honey-drip animate-delay-900"
            style={{ transformOrigin: "278px 22px" }}
          >
            <path
              d="M267,16 C267,44 262,74 265,86 C267,92 272,94 278,94 C284,94 289,92 291,86 C294,74 289,44 289,16 Z"
              fill="url(#honey-grad-m)"
            />
          </g>

          {/* Droplet 6 */}
          <g
            className="animate-honey-drip animate-delay-1000"
            style={{ transformOrigin: "332px 20px" }}
          >
            <path
              d="M322,14 C322,34 318,54 321,62 C323,68 328,70 332,70 C336,70 341,68 343,62 C346,54 342,34 342,14 Z"
              fill="url(#honey-grad-m)"
            />
          </g>

          {/* Droplet 7 — shortest */}
          <g
            className="animate-honey-drip animate-delay-1100"
            style={{ transformOrigin: "378px 18px" }}
          >
            <path
              d="M370,12 C370,26 367,40 369,46 C371,50 374,52 378,52 C382,52 385,50 387,46 C389,40 386,26 386,12 Z"
              fill="url(#honey-grad-m)"
            />
          </g>
        </g>

        {/* Highlights — layered on top, not inside goo filter, so they stay crisp */}
        <g>
          <g
            className="animate-honey-drip animate-delay-500"
            style={{ transformOrigin: "38px 20px" }}
          >
            <ellipse cx="34" cy="36" rx="1.8" ry="14" fill="url(#honey-hl-m)" />
          </g>
          <g
            className="animate-honey-drip animate-delay-600"
            style={{ transformOrigin: "92px 22px" }}
          >
            <ellipse cx="87" cy="48" rx="2" ry="22" fill="url(#honey-hl-m)" />
          </g>
          <g
            className="animate-honey-drip animate-delay-700"
            style={{ transformOrigin: "158px 24px" }}
          >
            <ellipse cx="152" cy="58" rx="2.2" ry="30" fill="url(#honey-hl-m)" />
          </g>
          <g
            className="animate-honey-drip animate-delay-800"
            style={{ transformOrigin: "218px 22px" }}
          >
            <ellipse cx="213" cy="42" rx="1.9" ry="18" fill="url(#honey-hl-m)" />
          </g>
          <g
            className="animate-honey-drip animate-delay-900"
            style={{ transformOrigin: "278px 22px" }}
          >
            <ellipse cx="273" cy="52" rx="2" ry="26" fill="url(#honey-hl-m)" />
          </g>
          <g
            className="animate-honey-drip animate-delay-1000"
            style={{ transformOrigin: "332px 20px" }}
          >
            <ellipse cx="327" cy="38" rx="1.8" ry="16" fill="url(#honey-hl-m)" />
          </g>
          <g
            className="animate-honey-drip animate-delay-1100"
            style={{ transformOrigin: "378px 18px" }}
          >
            <ellipse cx="374" cy="30" rx="1.6" ry="10" fill="url(#honey-hl-m)" />
          </g>
        </g>
      </g>
    </svg>
  );
}

function DesktopDrip() {
  return (
    <svg
      className="hidden md:block w-full h-[160px] animate-honey-pour-center overflow-visible"
      viewBox="0 0 1200 160"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="honey-grad-d" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D19956" />
          <stop offset="45%" stopColor="#BA8749" />
          <stop offset="100%" stopColor="#A07130" />
        </linearGradient>
        <linearGradient id="honey-hl-d" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F4D9A8" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#F4D9A8" stopOpacity="0" />
        </linearGradient>
        <filter id="goo-d" x="-2%" y="-5%" width="104%" height="130%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
        <filter id="shadow-d" x="-2%" y="-5%" width="104%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dx="0" dy="4" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.32" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#shadow-d)">
        <g filter="url(#goo-d)">
          {/* Organic centered pour band — varying thickness, thicker where droplets hang */}
          <path
            d="M240,0 L960,0 L960,20 C945,30 925,28 905,32 C880,38 855,30 830,36 C800,44 770,32 740,42 C705,52 670,34 635,46 C600,56 565,34 530,44 C495,52 465,32 440,40 C410,50 380,34 355,38 C325,42 300,30 280,26 L240,20 Z"
            fill="url(#honey-grad-d)"
          />

          {/* Droplet 1 — outer left, short */}
          <g
            className="animate-honey-drip animate-delay-700"
            style={{ transformOrigin: "330px 32px" }}
          >
            <path
              d="M316,24 C316,52 311,82 314,94 C317,102 323,104 330,104 C337,104 343,102 346,94 C349,82 344,52 344,24 Z"
              fill="url(#honey-grad-d)"
            />
          </g>

          {/* Droplet 2 — inner left, taller */}
          <g
            className="animate-honey-drip animate-delay-900"
            style={{ transformOrigin: "490px 38px" }}
          >
            <path
              d="M474,30 C474,66 468,108 471,122 C474,132 481,134 490,134 C499,134 506,132 509,122 C512,108 506,66 506,30 Z"
              fill="url(#honey-grad-d)"
            />
          </g>

          {/* Droplet 3 — center, deepest */}
          <g
            className="animate-honey-drip animate-delay-1100"
            style={{ transformOrigin: "620px 44px" }}
          >
            <path
              d="M600,34 C600,72 592,120 596,138 C600,148 608,152 620,152 C632,152 640,148 644,138 C648,120 640,72 640,34 Z"
              fill="url(#honey-grad-d)"
            />
          </g>

          {/* Droplet 4 — inner right, medium */}
          <g
            className="animate-honey-drip animate-delay-1300"
            style={{ transformOrigin: "760px 40px" }}
          >
            <path
              d="M745,32 C745,64 740,98 743,110 C746,120 752,122 760,122 C768,122 774,120 777,110 C780,98 775,64 775,32 Z"
              fill="url(#honey-grad-d)"
            />
          </g>

          {/* Droplet 5 — outer right, short */}
          <g
            className="animate-honey-drip animate-delay-1500"
            style={{ transformOrigin: "890px 30px" }}
          >
            <path
              d="M876,22 C876,46 872,70 874,82 C876,90 882,92 890,92 C898,92 904,90 906,82 C908,70 904,46 904,22 Z"
              fill="url(#honey-grad-d)"
            />
          </g>
        </g>

        {/* Highlights — outside goo group so they render crisp on top */}
        <g>
          <g
            className="animate-honey-drip animate-delay-700"
            style={{ transformOrigin: "330px 32px" }}
          >
            <ellipse cx="324" cy="56" rx="2.4" ry="22" fill="url(#honey-hl-d)" />
          </g>
          <g
            className="animate-honey-drip animate-delay-900"
            style={{ transformOrigin: "490px 38px" }}
          >
            <ellipse cx="483" cy="70" rx="2.8" ry="32" fill="url(#honey-hl-d)" />
          </g>
          <g
            className="animate-honey-drip animate-delay-1100"
            style={{ transformOrigin: "620px 44px" }}
          >
            <ellipse cx="611" cy="82" rx="3" ry="42" fill="url(#honey-hl-d)" />
          </g>
          <g
            className="animate-honey-drip animate-delay-1300"
            style={{ transformOrigin: "760px 40px" }}
          >
            <ellipse cx="753" cy="68" rx="2.6" ry="28" fill="url(#honey-hl-d)" />
          </g>
          <g
            className="animate-honey-drip animate-delay-1500"
            style={{ transformOrigin: "890px 30px" }}
          >
            <ellipse cx="884" cy="52" rx="2.4" ry="20" fill="url(#honey-hl-d)" />
          </g>
        </g>
      </g>
    </svg>
  );
}
