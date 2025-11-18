import Countdown from '@/components/Countdown';
import WaitlistForm from '@/components/WaitlistForm';
import Beams from '@/components/Beams';
import { Github } from 'lucide-react';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-gradient-to-b from-sky-500/20 via-cyan-400/10 to-transparent blur-3xl" />
      <a
        href="https://github.com/9prabhjot9"
        target="_blank"
        rel="noreferrer"
        className="absolute right-6 top-6 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-white/40 hover:bg-white/10"
        aria-label="Prabhjot Singh on GitHub"
      >
        <Github className="h-5 w-5" />
      </a>
      <div className="absolute inset-0 opacity-60">
        <Beams
          beamHeight={18}
          beamNumber={14}
          beamWidth={1.4}
          lightColor="#f5f5f5"
          noiseIntensity={1.4}
          rotation={12}
          scale={0.22}
          speed={1.2}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-10 px-6 py-16 text-center">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Multi-lingual Layout Fixer</p>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            UniLayout keeps every language looking intentional
          </h1>
          <p className="text-lg text-white/70">
            An AI layout assistant that repairs overflow, balances multilingual text, and keeps your design flawless
            across every language.
          </p>
        </div>

        <Countdown />

        <WaitlistForm />
      </div>
    </main>
  );
}
