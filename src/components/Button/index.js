import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

export default function Button({
  className: classNameProp,
  type = 'primary',
  to,
  children,
}) {
  const className = clsx(
    'px-6 py-3 rounded-lg font-bold hover:no-underline cursor-pointer text-base',
    type === 'primary' &&
      'border-solid border-[#1A8BF2] bg-[#1A8BF2] text-white hover:text-white',
    type === 'secondary' &&
      'border-solid border-[#1A8BF2] bg-white text-[#1A8BF2] hover:text-[#1A8BF2]',
    classNameProp,
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
