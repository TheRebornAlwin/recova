"use client";

import ScrollReveal from "@/components/ui/scroll-reveal";

export default function ScienceSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: How it works copy */}
          <ScrollReveal className="min-w-0 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-black text-navy tracking-tight uppercase mb-8">
              How Does It Work?
            </h2>
            <p className="text-slate leading-relaxed mb-5">
              <span className="font-bold text-navy">Recova&trade;</span> uses
              advanced EMS (Electrical Muscle Stimulation) technology to send
              gentle, targeted pulses directly into your{" "}
              <span className="font-bold text-navy">neck muscles, relieving
              tension, stiffness, headaches,</span> and{" "}
              <span className="font-bold text-navy">more</span>.
            </p>
            <p className="text-slate leading-relaxed mb-5">
              The <span className="font-bold text-navy">EMS pulse pads</span>{" "}
              deliver controlled electrical signals that penetrate past the skin
              and into the deep muscle fiber, triggering natural contractions and
              relaxation cycles. This stimulates blood flow, loosens tight
              muscles, and releases the built-up tension that stretching, heat
              pads, and painkillers simply cannot reach.
            </p>
            <p className="text-slate leading-relaxed">
              It is the same technology used by physiotherapists and sports
              recovery professionals around the world, now available in a
              compact device you can use at home, at work, or anywhere you need
              relief.
            </p>
          </ScrollReveal>

          {/* Right: Custom SVG visualization */}
          <ScrollReveal delay={0.15} className="min-w-0">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-black text-navy uppercase tracking-tight mb-1">
                The Science
              </h3>
              <p className="text-lg md:text-xl font-bold text-slate mb-8">
                Behind <span className="text-teal">Recova&trade;</span> NeckRelieve Pulse
              </p>

              {/* Custom SVG: Anatomical neck side-view with EMS */}
              <div className="relative mx-auto" style={{ maxWidth: 380 }}>
                <svg viewBox="0 0 380 440" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                  <defs>
                    <radialGradient id="sciGlow" cx="50%" cy="40%" r="50%">
                      <stop offset="0%" stopColor="#0d9488" stopOpacity="0.06"/>
                      <stop offset="100%" stopColor="#0d9488" stopOpacity="0"/>
                    </radialGradient>
                    <linearGradient id="skinTone" x1="0" y1="0" x2="1" y2="0.3">
                      <stop offset="0%" stopColor="#f5d5b8"/>
                      <stop offset="100%" stopColor="#fde8d0"/>
                    </linearGradient>
                    <linearGradient id="muscleGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#e88b7a"/>
                      <stop offset="100%" stopColor="#d4756b"/>
                    </linearGradient>
                  </defs>

                  {/* Ambient glow */}
                  <ellipse cx="190" cy="200" rx="170" ry="190" fill="url(#sciGlow)"/>

                  {/* Head (side-ish profile, simplified) */}
                  <ellipse cx="190" cy="65" rx="70" ry="60" fill="url(#skinTone)" stroke="#dbb89c" strokeWidth="1"/>

                  {/* Ear hint */}
                  <ellipse cx="260" cy="65" rx="10" ry="16" fill="#f0c9a8" stroke="#dbb89c" strokeWidth="0.8"/>

                  {/* Neck - natural curved shape */}
                  <path d="M148 110 C148 110 135 160 130 220 C127 260 128 300 135 340 L245 340 C252 300 253 260 250 220 C245 160 232 110 232 110" fill="url(#skinTone)" stroke="#dbb89c" strokeWidth="1"/>

                  {/* Shoulders */}
                  <path d="M135 340 C120 345 80 355 40 365 C30 368 25 375 30 380 L350 380 C355 375 350 368 340 365 C300 355 260 345 245 340" fill="url(#skinTone)" stroke="#dbb89c" strokeWidth="1"/>

                  {/* Spine - curved vertebrae */}
                  <g opacity="0.18">
                    <rect x="178" y="110" width="24" height="14" rx="5" fill="#7a6550" transform="rotate(-1 190 117)"/>
                    <rect x="177" y="130" width="24" height="14" rx="5" fill="#7a6550" transform="rotate(0 189 137)"/>
                    <rect x="176" y="150" width="24" height="14" rx="5" fill="#7a6550" transform="rotate(1 188 157)"/>
                    <rect x="175" y="170" width="24" height="14" rx="5" fill="#7a6550" transform="rotate(1 187 177)"/>
                    <rect x="175" y="190" width="24" height="14" rx="5" fill="#7a6550" transform="rotate(0 187 197)"/>
                    <rect x="175" y="210" width="24" height="14" rx="5" fill="#7a6550" transform="rotate(0 187 217)"/>
                    <rect x="176" y="230" width="24" height="14" rx="5" fill="#7a6550" transform="rotate(-1 188 237)"/>
                    <rect x="177" y="250" width="24" height="14" rx="5" fill="#7a6550" transform="rotate(-1 189 257)"/>
                    <rect x="178" y="270" width="24" height="14" rx="5" fill="#7a6550" transform="rotate(0 190 277)"/>
                  </g>

                  {/* Deep muscle layers - left side */}
                  <path d="M140 130 C145 125 155 128 158 135 L155 290 C152 295 142 292 140 285 Z" fill="url(#muscleGrad)" opacity="0.22"/>
                  <path d="M155 122 C160 118 168 120 170 128 L168 295 C165 300 157 297 155 290 Z" fill="url(#muscleGrad)" opacity="0.28"/>

                  {/* Deep muscle layers - right side */}
                  <path d="M240 130 C235 125 225 128 222 135 L225 290 C228 295 238 292 240 285 Z" fill="url(#muscleGrad)" opacity="0.22"/>
                  <path d="M225 122 C220 118 212 120 210 128 L212 295 C215 300 223 297 225 290 Z" fill="url(#muscleGrad)" opacity="0.28"/>

                  {/* EMS Pad - left */}
                  <rect x="110" y="155" width="26" height="90" rx="8" fill="#0d9488" opacity="0.92"/>
                  <g opacity="0.35">
                    <rect x="115" y="163" width="16" height="5" rx="2" fill="white"/>
                    <rect x="115" y="174" width="16" height="5" rx="2" fill="white"/>
                    <rect x="115" y="185" width="16" height="5" rx="2" fill="white"/>
                    <rect x="115" y="196" width="16" height="5" rx="2" fill="white"/>
                    <rect x="115" y="207" width="16" height="5" rx="2" fill="white"/>
                    <rect x="115" y="218" width="16" height="5" rx="2" fill="white"/>
                    <rect x="115" y="229" width="16" height="5" rx="2" fill="white"/>
                  </g>

                  {/* EMS Pad - right */}
                  <rect x="244" y="155" width="26" height="90" rx="8" fill="#0d9488" opacity="0.92"/>
                  <g opacity="0.35">
                    <rect x="249" y="163" width="16" height="5" rx="2" fill="white"/>
                    <rect x="249" y="174" width="16" height="5" rx="2" fill="white"/>
                    <rect x="249" y="185" width="16" height="5" rx="2" fill="white"/>
                    <rect x="249" y="196" width="16" height="5" rx="2" fill="white"/>
                    <rect x="249" y="207" width="16" height="5" rx="2" fill="white"/>
                    <rect x="249" y="218" width="16" height="5" rx="2" fill="white"/>
                    <rect x="249" y="229" width="16" height="5" rx="2" fill="white"/>
                  </g>

                  {/* Pulse waves - left pad into muscle */}
                  <line x1="136" y1="175" x2="158" y2="178" stroke="#0d9488" strokeWidth="1.8" strokeDasharray="3 3" opacity="0.7"/>
                  <line x1="136" y1="190" x2="158" y2="193" stroke="#0d9488" strokeWidth="1.8" strokeDasharray="3 3" opacity="0.6"/>
                  <line x1="136" y1="205" x2="158" y2="208" stroke="#0d9488" strokeWidth="1.8" strokeDasharray="3 3" opacity="0.5"/>
                  <line x1="136" y1="220" x2="158" y2="223" stroke="#0d9488" strokeWidth="1.8" strokeDasharray="3 3" opacity="0.4"/>

                  {/* Pulse waves - right pad into muscle */}
                  <line x1="244" y1="175" x2="222" y2="178" stroke="#0d9488" strokeWidth="1.8" strokeDasharray="3 3" opacity="0.7"/>
                  <line x1="244" y1="190" x2="222" y2="193" stroke="#0d9488" strokeWidth="1.8" strokeDasharray="3 3" opacity="0.6"/>
                  <line x1="244" y1="205" x2="222" y2="208" stroke="#0d9488" strokeWidth="1.8" strokeDasharray="3 3" opacity="0.5"/>
                  <line x1="244" y1="220" x2="222" y2="223" stroke="#0d9488" strokeWidth="1.8" strokeDasharray="3 3" opacity="0.4"/>

                  {/* Impact points in muscle */}
                  <circle cx="160" cy="195" r="6" stroke="#0d9488" strokeWidth="1.5" fill="#0d9488" fillOpacity="0.1"/>
                  <circle cx="160" cy="195" r="12" stroke="#0d9488" strokeWidth="0.8" fill="none" opacity="0.3"/>
                  <circle cx="160" cy="195" r="19" stroke="#0d9488" strokeWidth="0.5" fill="none" opacity="0.15"/>
                  <circle cx="220" cy="195" r="6" stroke="#0d9488" strokeWidth="1.5" fill="#0d9488" fillOpacity="0.1"/>
                  <circle cx="220" cy="195" r="12" stroke="#0d9488" strokeWidth="0.8" fill="none" opacity="0.3"/>
                  <circle cx="220" cy="195" r="19" stroke="#0d9488" strokeWidth="0.5" fill="none" opacity="0.15"/>

                  {/* Labels */}
                  <text x="80" y="200" textAnchor="middle" fill="#0d9488" fontSize="8" fontWeight="800" letterSpacing="0.05em">EMS</text>
                  <text x="80" y="210" textAnchor="middle" fill="#0d9488" fontSize="8" fontWeight="800" letterSpacing="0.05em">PAD</text>
                  <line x1="92" y1="202" x2="110" y2="200" stroke="#0d9488" strokeWidth="0.8" opacity="0.5"/>

                  <text x="300" y="200" textAnchor="middle" fill="#0d9488" fontSize="8" fontWeight="800" letterSpacing="0.05em">EMS</text>
                  <text x="300" y="210" textAnchor="middle" fill="#0d9488" fontSize="8" fontWeight="800" letterSpacing="0.05em">PAD</text>
                  <line x1="288" y1="202" x2="270" y2="200" stroke="#0d9488" strokeWidth="0.8" opacity="0.5"/>

                  <text x="190" y="320" textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="800" letterSpacing="0.12em">DEEP MUSCLE PENETRATION</text>

                  {/* Bottom tags */}
                  <rect x="50" y="395" width="85" height="28" rx="14" fill="#0d9488" fillOpacity="0.06" stroke="#0d9488" strokeWidth="0.5" strokeOpacity="0.15"/>
                  <text x="92" y="413" textAnchor="middle" fill="#0d9488" fontSize="8.5" fontWeight="700">CLINICALLY PROVEN</text>

                  <rect x="148" y="395" width="84" height="28" rx="14" fill="#0d9488" fillOpacity="0.06" stroke="#0d9488" strokeWidth="0.5" strokeOpacity="0.15"/>
                  <text x="190" y="413" textAnchor="middle" fill="#0d9488" fontSize="8.5" fontWeight="700">DRUG FREE</text>

                  <rect x="245" y="395" width="90" height="28" rx="14" fill="#0d9488" fillOpacity="0.06" stroke="#0d9488" strokeWidth="0.5" strokeOpacity="0.15"/>
                  <text x="290" y="413" textAnchor="middle" fill="#0d9488" fontSize="8.5" fontWeight="700">PHYSIO GRADE</text>
                </svg>

                {/* Animated pulse rings */}
                <div className="absolute top-[42%] left-[40%] w-4 h-4">
                  <div className="w-full h-full rounded-full border border-teal/40 animate-ping" />
                </div>
                <div className="absolute top-[42%] right-[40%] w-4 h-4">
                  <div className="w-full h-full rounded-full border border-teal/40 animate-ping" style={{ animationDelay: "0.6s" }} />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
