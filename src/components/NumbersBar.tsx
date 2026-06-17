"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { NUMBERS } from "@/lib/constants";

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

export default function NumbersBar() {
  return (
    <section style={{ backgroundColor: "#2C3B35", padding: "4rem 0" }}>
      <div className="container-custom">
        <div className="grid grid-cols-3 gap-4 md:gap-4">
          {NUMBERS.map((item, i) => (
            <div
              key={i}
              className="text-center px-1 md:px-2"
              style={{
                borderRight: i < NUMBERS.length - 1 ? "1px solid rgba(201,169,110,0.2)" : "none",
              }}
            >
              <p
                className="font-serif"
                style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)", fontWeight: 300, color: "#E5C896", lineHeight: 1 }}
              >
                <CountUp target={item.value} suffix={item.suffix} />
              </p>
              <p
                className="mt-2 uppercase tracking-wide"
                style={{ fontSize: "clamp(0.5rem, 1.8vw, 0.75rem)", color: "rgba(245,240,234,0.6)", fontWeight: 500 }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
