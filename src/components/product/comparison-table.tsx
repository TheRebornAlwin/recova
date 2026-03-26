"use client";

import ScrollReveal from "@/components/ui/scroll-reveal";

const Check = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal mx-auto"><polyline points="20 6 9 17 4 12"/></svg>
);
const Cross = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 mx-auto"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
);

const rows = [
  { label: "Price", values: ["$39.99", "$0-50/session", "$60-120/visit"] },
  { label: "Use it anytime", values: [true, false, false] },
  { label: "Gets deep into the muscle", values: [true, false, true] },
  { label: "Portable", values: [true, false, false] },
  { label: "Works while you do other things", values: [true, false, false] },
  { label: "No recurring costs", values: [true, false, false] },
];

const headers = ["NeckRelieve Pulse", "Regular Massage", "Chiropractor"];

export default function ComparisonTable() {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-teal mb-3">Compare</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
              NeckRelieve Pulse vs Alternatives
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="overflow-x-auto min-w-0">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr>
                  <th className="text-left p-4 text-sm font-medium text-slate" />
                  {headers.map((h, i) => (
                    <th
                      key={h}
                      className={`p-4 text-center text-sm font-bold ${
                        i === 0
                          ? "text-white bg-teal rounded-t-2xl"
                          : "text-navy"
                      }`}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, ri) => (
                  <tr key={row.label} className={ri % 2 === 0 ? "bg-gray-50/50" : ""}>
                    <td className="p-4 text-sm font-medium text-navy">{row.label}</td>
                    {row.values.map((val, vi) => (
                      <td
                        key={vi}
                        className={`p-4 text-center text-sm ${
                          vi === 0 ? "bg-teal/5 font-bold text-navy" : "text-slate"
                        }`}
                      >
                        {typeof val === "boolean" ? (
                          val ? <Check /> : <Cross />
                        ) : (
                          <span className={vi === 0 ? "text-teal font-bold" : ""}>{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td className="p-4" />
                  <td className="p-4 bg-teal rounded-b-2xl" />
                  <td className="p-4" />
                  <td className="p-4" />
                </tr>
              </tfoot>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
