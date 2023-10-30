import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

export default function Button({ type = 'primary', to, children }) {
  const className = clsx(
    'px-6 py-3 rounded-lg font-bold',
    type === 'primary' &&
      'bg-[#1A8BF2] text-white hover:text-white hover:no-underline',
  );

  if (to && to.startsWith('http')) {
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    );
  }

  return <button className={className}>{children}</button>;
}
