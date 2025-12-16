'use client';

import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('../app/components/Navbar'), {
  ssr: false,
});

export default function NavbarWrapper() {
  return <Navbar />;
}
