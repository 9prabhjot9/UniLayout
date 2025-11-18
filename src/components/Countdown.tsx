'use client';

import { useEffect, useMemo, useState } from 'react';

type TimeParts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const TARGET_DATE = new Date('2026-05-01T00:00:00Z').getTime();

function getTimeParts(): TimeParts {
  const now = Date.now();
  const diff = Math.max(TARGET_DATE - now, 0);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

export default function Countdown() {
  const [timeParts, setTimeParts] = useState<TimeParts>(() => getTimeParts());

  useEffect(() => {
    const interval = setInterval(() => setTimeParts(getTimeParts()), 1000);
    return () => clearInterval(interval);
  }, []);

  const countdownItems = useMemo(
    () => [
      { label: 'Days', value: timeParts.days },
      { label: 'Hours', value: timeParts.hours },
      { label: 'Minutes', value: timeParts.minutes },
      { label: 'Seconds', value: timeParts.seconds },
    ],
    [timeParts],
  );

  return (
    <div className="grid w-full grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur md:grid-cols-4">
      {countdownItems.map((item) => (
        <div key={item.label} className="space-y-1 text-center">
          <div className="text-4xl font-semibold tabular-nums text-white md:text-5xl">
            {item.value.toString().padStart(2, '0')}
          </div>
          <p className="text-sm uppercase tracking-wide text-white/70">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

