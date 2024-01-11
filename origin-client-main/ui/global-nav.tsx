'use client';

import { links, type Item } from '#/lib/links';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { MenuAlt2Icon, XIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import { useState } from 'react';
import { FullOriginLogo } from './origin-logo';

export function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div className="fixed top-0 z-20 flex w-full items-center justify-between border-b border-gray-600 bg-[#161616] p-5 md:flex-col md:justify-start md:bg-[rgba(0,0,0,0.25)] lg:bottom-0 lg:z-auto lg:w-80 lg:border-b-0 lg:border-r lg:border-gray-600">
      <div className="flex h-14 items-center px-4 py-4 lg:h-auto">
        <Link
          href="/"
          className="group flex w-full items-center gap-x-2.5"
          onClick={close}
        >
          <FullOriginLogo />
        </Link>
      </div>
      <button
        type="button"
        className="group right-0 top-0 flex h-14 items-center gap-x-2 px-4 md:fixed lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="font-medium text-gray-100 group-hover:text-gray-400">
          Menu
        </div>
        {isOpen ? (
          <XIcon className="block w-6 text-gray-400" />
        ) : (
          <MenuAlt2Icon className="block w-6 text-gray-400" />
        )}
      </button>

      <div
        className={clsx('overflow-y-auto md:w-full lg:static lg:block', {
          'fixed inset-x-0 bottom-0 top-20 z-40 mt-px bg-black': isOpen,
          hidden: !isOpen,
        })}
      >
        <nav className="space-y-6 px-2 pb-24 pt-5">
          {links.map((section) => {
            return (
              <div key={section.name}>
                <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400/80">
                  <div>{section.name}</div>
                </div>

                <div className="space-y-1">
                  {section.items.map((item) => (
                    <GlobalNavItem key={item.slug} item={item} close={close} />
                  ))}
                </div>
              </div>
            );
          })}
        </nav>
        {/**  switcher */}
      </div>
    </div>
  );
}

function GlobalNavItem({
  item,
  close,
}: {
  item: Item;
  close: () => false | void;
}) {
  let segment = useSelectedLayoutSegment();
  segment === null && (segment = 'dashboard');
  const isActive = item.slug === segment;

  return (
    <Link
      onClick={close}
      href={`/${item.slug}`}
      className={clsx(
        'flex items-center gap-x-2.5 rounded-md p-3 text-base text-[color:var(--text-color)]',
        {
          'hover:bg-[color:var(--comp-bg-1)] hover:font-medium hover:text-white':
            !isActive,
          'bg-[color:var(--comp-bg-1)] font-medium text-white': isActive,
        },
      )}
    >
      {item.icon} {item.name}
    </Link>
  );
}
