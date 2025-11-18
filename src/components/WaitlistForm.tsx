'use client';

import { useState } from 'react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setMessage('Adding you to the waitlist...');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus('success');
      setMessage('You are in! We will keep you posted before launch.');
      setEmail('');
    } catch (error) {
      console.error(error);
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="w-full space-y-3">
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur md:flex-row md:p-5"
      >
        <label className="sr-only" htmlFor="waitlist-email">
          Email address
        </label>
        <input
          id="waitlist-email"
          type="email"
          placeholder="you@email.com"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status !== 'idle') {
              setStatus('idle');
              setMessage('');
            }
          }}
          className="h-14 flex-1 rounded-xl border border-white/10 bg-white/10 px-4 text-base text-white placeholder:text-white/60 outline-none transition focus:border-white/40"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="h-14 rounded-xl bg-white px-8 text-base font-semibold text-slate-900 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'loading' ? 'Joining…' : 'Join the waitlist'}
        </button>
      </form>
      {message && (
        <p className={`text-sm ${status === 'error' ? 'text-red-200' : 'text-emerald-200'}`}>
          {message}
        </p>
      )}
    </div>
  );
}

