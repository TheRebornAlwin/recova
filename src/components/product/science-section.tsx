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

              {/* Custom SVG: Neck cross-section with EMS pulses */}
              <div className="relative mx-auto" style={{ maxWidth: 360 }}>
                <svg viewBox="0 0 360 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                  {/* Background glow */}
                  <defs>
                    <radialGradient id="glow" cx="50%" cy="45%" r="45%">
                      <stop offset="0%" stopColor="#0d9488" stopOpacity="0.08"/>
                      <stop offset="100%" stopColor="#0d9488" stopOpacity="0"/>
                    </radialGradient>
                    <linearGradient id="pulseGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0d9488" stopOpacity="0"/>
                      <stop offset="40%" stopColor="#0d9488" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#0d9488" stopOpacity="0.2"/>
                    </linearGradient>
                    <linearGradient id="skinGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#fde8d0"/>
                      <stop offset="50%" stopColor="#f5d5b8"/>
                      <stop offset="100%" stopColor="#fde8d0"/>
                    </linearGradient>
                  </defs>

                  <ellipse cx="180" cy="200" rx="160" ry="180" fill="url(#glow)"/>

                  {/* Neck silhouette */}
                  <path d="M120 50 Q120 20 150 10 Q180 0 210 10 Q240 20 240 50 L250 140 Q250 170 240 200 L240 320 Q240 360 210 380 Q180 400 150 380 Q120 360 120 320 L120 200 Q110 170 110 140 Z" fill="url(#skinGrad)" stroke="#e8c9a8" strokeWidth="1"/>

                  {/* Spine */}
                  <g opacity="0.15">
                    <rect x="168" y="80" width="24" height="18" rx="4" fill="#8B7355"/>
                    <rect x="168" y="104" width="24" height="18" rx="4" fill="#8B7355"/>
                    <rect x="168" y="128" width="24" height="18" rx="4" fill="#8B7355"/>
                    <rect x="168" y="152" width="24" height="18" rx="4" fill="#8B7355"/>
                    <rect x="168" y="176" width="24" height="18" rx="4" fill="#8B7355"/>
                    <rect x="168" y="200" width="24" height="18" rx="4" fill="#8B7355"/>
                    <rect x="168" y="224" width="24" height="18" rx="4" fill="#8B7355"/>
                  </g>

                  {/* Muscle layers - left */}
                  <path d="M125 90 Q130 85 140 90 L140 260 Q130 265 125 260 Z" fill="#d4756b" opacity="0.25" rx="4"/>
                  <path d="M140 80 Q145 75 155 80 L155 270 Q145 275 140 270 Z" fill="#c4655b" opacity="0.3" rx="4"/>

                  {/* Muscle layers - right */}
                  <path d="M220 90 Q225 85 235 90 L235 260 Q225 265 220 260 Z" fill="#d4756b" opacity="0.25" rx="4"/>
                  <path d="M205 80 Q210 75 220 80 L220 270 Q210 275 205 270 Z" fill="#c4655b" opacity="0.3" rx="4"/>

                  {/* EMS Pad - left */}
                  <rect x="98" y="120" width="28" height="80" rx="6" fill="#0d9488" opacity="0.9"/>
                  <rect x="102" y="128" width="20" height="8" rx="2" fill="white" opacity="0.3"/>
                  <rect x="102" y="142" width="20" height="8" rx="2" fill="white" opacity="0.3"/>
                  <rect x="102" y="156" width="20" height="8" rx="2" fill="white" opacity="0.3"/>
                  <rect x="102" y="170" width="20" height="8" rx="2" fill="white" opacity="0.3"/>
                  <rect x="102" y="184" width="20" height="8" rx="2" fill="white" opacity="0.2"/>

                  {/* EMS Pad - right */}
                  <rect x="234" y="120" width="28" height="80" rx="6" fill="#0d9488" opacity="0.9"/>
                  <rect x="238" y="128" width="20" height="8" rx="2" fill="white" opacity="0.3"/>
                  <rect x="238" y="142" width="20" height="8" rx="2" fill="white" opacity="0.3"/>
                  <rect x="238" y="156" width="20" height="8" rx="2" fill="white" opacity="0.3"/>
                  <rect x="238" y="170" width="20" height="8" rx="2" fill="white" opacity="0.3"/>
                  <rect x="238" y="184" width="20" height="8" rx="2" fill="white" opacity="0.2"/>

                  {/* Pulse waves from left pad */}
                  <line x1="126" y1="135" x2="155" y2="140" stroke="#0d9488" strokeWidth="2" strokeDasharray="4 3" opacity="0.7"/>
                  <line x1="126" y1="150" x2="155" y2="155" stroke="#0d9488" strokeWidth="2" strokeDasharray="4 3" opacity="0.6"/>
                  <line x1="126" y1="165" x2="155" y2="170" stroke="#0d9488" strokeWidth="2" strokeDasharray="4 3" opacity="0.5"/>
                  <line x1="126" y1="180" x2="155" y2="185" stroke="#0d9488" strokeWidth="2" strokeDasharray="4 3" opacity="0.4"/>

                  {/* Pulse waves from right pad */}
                  <line x1="234" y1="135" x2="205" y2="140" stroke="#0d9488" strokeWidth="2" strokeDasharray="4 3" opacity="0.7"/>
                  <line x1="234" y1="150" x2="205" y2="155" stroke="#0d9488" strokeWidth="2" strokeDasharray="4 3" opacity="0.6"/>
                  <line x1="234" y1="165" x2="205" y2="170" stroke="#0d9488" strokeWidth="2" strokeDasharray="4 3" opacity="0.5"/>
                  <line x1="234" y1="180" x2="205" y2="185" stroke="#0d9488" strokeWidth="2" strokeDasharray="4 3" opacity="0.4"/>

                  {/* Pulse impact rings in muscle */}
                  <circle cx="155" cy="155" r="8" stroke="#0d9488" strokeWidth="1.5" fill="none" opacity="0.4"/>
                  <circle cx="155" cy="155" r="14" stroke="#0d9488" strokeWidth="1" fill="none" opacity="0.2"/>
                  <circle cx="205" cy="155" r="8" stroke="#0d9488" strokeWidth="1.5" fill="none" opacity="0.4"/>
                  <circle cx="205" cy="155" r="14" stroke="#0d9488" strokeWidth="1" fill="none" opacity="0.2"/>

                  {/* Labels */}
                  <text x="180" y="310" textAnchor="middle" fill="#1e293b" fontSize="11" fontWeight="700" letterSpacing="0.1em">DEEP MUSCLE</text>
                  <text x="180" y="324" textAnchor="middle" fill="#1e293b" fontSize="11" fontWeight="700" letterSpacing="0.1em">PENETRATION</text>

                  {/* Pad labels */}
                  <text x="70" y="165" textAnchor="middle" fill="#0d9488" fontSize="9" fontWeight="700" letterSpacing="0.05em">EMS</text>
                  <text x="70" y="176" textAnchor="middle" fill="#0d9488" fontSize="9" fontWeight="700" letterSpacing="0.05em">PAD</text>
                  <text x="290" y="165" textAnchor="middle" fill="#0d9488" fontSize="9" fontWeight="700" letterSpacing="0.05em">EMS</text>
                  <text x="290" y="176" textAnchor="middle" fill="#0d9488" fontSize="9" fontWeight="700" letterSpacing="0.05em">PAD</text>

                  {/* Pointer lines to pads */}
                  <line x1="82" y1="160" x2="98" y2="160" stroke="#0d9488" strokeWidth="1" opacity="0.5"/>
                  <line x1="278" y1="160" x2="262" y2="160" stroke="#0d9488" strokeWidth="1" opacity="0.5"/>

                  {/* Tags at bottom */}
                  <rect x="55" y="350" width="80" height="26" rx="13" fill="#0d9488" opacity="0.08" stroke="#0d9488" strokeWidth="0.5" strokeOpacity="0.2"/>
                  <text x="95" y="367" textAnchor="middle" fill="#0d9488" fontSize="8" fontWeight="700">CLINICALLY</text>
                  <text x="95" y="376" textAnchor="middle" fill="#0d9488" fontSize="8" fontWeight="700">PROVEN</text>

                  <rect x="145" y="350" width="70" height="26" rx="13" fill="#0d9488" opacity="0.08" stroke="#0d9488" strokeWidth="0.5" strokeOpacity="0.2"/>
                  <text x="180" y="367" textAnchor="middle" fill="#0d9488" fontSize="8" fontWeight="700">DRUG</text>
                  <text x="180" y="376" textAnchor="middle" fill="#0d9488" fontSize="8" fontWeight="700">FREE</text>

                  <rect x="225" y="350" width="80" height="26" rx="13" fill="#0d9488" opacity="0.08" stroke="#0d9488" strokeWidth="0.5" strokeOpacity="0.2"/>
                  <text x="265" y="367" textAnchor="middle" fill="#0d9488" fontSize="8" fontWeight="700">PHYSIO</text>
                  <text x="265" y="376" textAnchor="middle" fill="#0d9488" fontSize="8" fontWeight="700">GRADE</text>
                </svg>

                {/* Animated pulse rings overlay */}
                <div className="absolute top-[34%] left-[40%] w-5 h-5">
                  <div className="w-full h-full rounded-full border border-teal/30 animate-ping" />
                </div>
                <div className="absolute top-[34%] right-[40%] w-5 h-5">
                  <div className="w-full h-full rounded-full border border-teal/30 animate-ping" style={{ animationDelay: "0.5s" }} />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
