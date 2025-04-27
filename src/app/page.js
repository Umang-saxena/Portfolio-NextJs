import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import CallToAction from '../components/CallToAction';
export default function Home() {
  return (
    <main>
      <Navbar />
      <CallToAction />
    </main>
  );
}