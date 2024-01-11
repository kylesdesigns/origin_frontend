'use client';

import '#/styles/globals.css';
import { GlobalNav } from '#/ui/global-nav';
import { useEffect, useRef, useState } from 'react';
import { Metadata } from 'next';
import { FaTimes, FaSearch } from 'react-icons/fa';
import { VscBellDot } from 'react-icons/vsc';
import { RxExit } from 'react-icons/rx';
import { PiWalletBold } from 'react-icons/pi';
import ThemeRegistry from '#/ui/ThemeRegistry/ThemeRegistry';
import { motion } from 'framer-motion';

const metadata: Metadata = {
  title: {
    default: 'Origin',
    template: '%s | Origin',
  },
  description: 'Origin',
  openGraph: {
    title: 'Origin',
    description: 'Origin',
    images: [`/api/og?title=Origin`],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isFilterOpen, setisFilterOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const filterRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        filterRef.current &&
        !(filterRef.current as any).contains(event.target)
      ) {
        setisFilterOpen(false);
      }
    };

    const handleProfileOutsideClick = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !(profileRef.current as any).contains(event.target)
      ) {
        setIsProfileOpen(false);
      }
    };

    window.addEventListener('mousedown', handleOutsideClick);
    window.addEventListener('mousedown', handleProfileOutsideClick);

    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener('mousedown', handleProfileOutsideClick);
    };
  }, []);

  const [selectedFilters, setSelectedFilters] = useState([] as string[]);

  const selecteFilter = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((item) => item !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  const filters = [
    {
      type: 'Project Filters',
      filters: ['Meme Projects', 'Utility Projects'],
    },
    {
      type: 'Influencer Type Filters',
      filters: ['Token Influencer', 'NFT Influencer'],
    },
    {
      type: 'Influencer Type Filters',
      filters: ['Twitter', 'Telegram'],
    },
  ];
  const bgImages = [
    'active-percentage.png',
    'followers.png',
    'hit-rate.png',
    'influencer-mentions.png',
    'market-cap.png',
    'marketing-budget.png',
    'members.png',
    'pl-marketing.png',
    'project-rank.png',
    'tax-revenue.png',
    'volume.png',
  ];
  return (
    <html lang="en" className="[color-scheme:dark]">
      <head></head>
      <body className="overflow-y-scroll bg-[color:var(--main-bg)] pb-36">
        <ThemeRegistry>
          <GlobalNav />

          <div className="lg:pl-80">
            <div className="mx-auto space-y-8 pt-24 md:pt-0">
              <div className="sticky top-24 z-10 md:top-0 ">
                <div className="top-bar relative flex flex-wrap items-center gap-4 border-b border-gray-600 p-2 lg:px-8 lg:py-8">
                  <div className="relative flex w-full flex-col md:w-3/6">
                    <input
                      type="text"
                      className="h-14 w-full rounded-full border-none bg-[#161616] px-6"
                      placeholder="Search an Influencer or Project"
                    />
                    <div className="absolute right-7 top-[30%] cursor-pointer text-xl opacity-50 transition-all hover:scale-110 hover:opacity-100">
                      <FaSearch />
                    </div>
                    {selectedFilters.length > 0 && (
                      <div className="absolute -bottom-[32px] flex items-center gap-1 text-[12px]">
                        {' '}
                        <span className="text-[rgba(255,255,255,0.5)]">
                          Applied Filters -
                        </span>
                        {selectedFilters.map((filter, id) => (
                          <button
                            className="rounded-full bg-black px-3 py-1 text-[rgba(255,230,198,1)]"
                            key={id}
                          >
                            {filter}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <div
                    className={'relative h-fit w-fit rounded-lg'}
                    ref={filterRef}
                  >
                    <button
                      type="button"
                      className="relative z-[2] flex h-full cursor-pointer gap-2 p-3"
                      onClick={() => setisFilterOpen(!isFilterOpen)}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.75 11.25V20.25C12.75 20.4489 12.671 20.6397 12.5303 20.7803C12.3897 20.921 12.1989 21 12 21C11.8011 21 11.6103 20.921 11.4697 20.7803C11.329 20.6397 11.25 20.4489 11.25 20.25V11.25C11.25 11.0511 11.329 10.8603 11.4697 10.7197C11.6103 10.579 11.8011 10.5 12 10.5C12.1989 10.5 12.3897 10.579 12.5303 10.7197C12.671 10.8603 12.75 11.0511 12.75 11.25ZM18.75 18C18.5511 18 18.3603 18.079 18.2197 18.2197C18.079 18.3603 18 18.5511 18 18.75V20.25C18 20.4489 18.079 20.6397 18.2197 20.7803C18.3603 20.921 18.5511 21 18.75 21C18.9489 21 19.1397 20.921 19.2803 20.7803C19.421 20.6397 19.5 20.4489 19.5 20.25V18.75C19.5 18.5511 19.421 18.3603 19.2803 18.2197C19.1397 18.079 18.9489 18 18.75 18ZM21 15H19.5V3.75C19.5 3.55109 19.421 3.36032 19.2803 3.21967C19.1397 3.07902 18.9489 3 18.75 3C18.5511 3 18.3603 3.07902 18.2197 3.21967C18.079 3.36032 18 3.55109 18 3.75V15H16.5C16.3011 15 16.1103 15.079 15.9697 15.2197C15.829 15.3603 15.75 15.5511 15.75 15.75C15.75 15.9489 15.829 16.1397 15.9697 16.2803C16.1103 16.421 16.3011 16.5 16.5 16.5H21C21.1989 16.5 21.3897 16.421 21.5303 16.2803C21.671 16.1397 21.75 15.9489 21.75 15.75C21.75 15.5511 21.671 15.3603 21.5303 15.2197C21.3897 15.079 21.1989 15 21 15ZM5.25 15C5.05109 15 4.86032 15.079 4.71967 15.2197C4.57902 15.3603 4.5 15.5511 4.5 15.75V20.25C4.5 20.4489 4.57902 20.6397 4.71967 20.7803C4.86032 20.921 5.05109 21 5.25 21C5.44891 21 5.63968 20.921 5.78033 20.7803C5.92098 20.6397 6 20.4489 6 20.25V15.75C6 15.5511 5.92098 15.3603 5.78033 15.2197C5.63968 15.079 5.44891 15 5.25 15ZM7.5 12H6V3.75C6 3.55109 5.92098 3.36032 5.78033 3.21967C5.63968 3.07902 5.44891 3 5.25 3C5.05109 3 4.86032 3.07902 4.71967 3.21967C4.57902 3.36032 4.5 3.55109 4.5 3.75V12H3C2.80109 12 2.61032 12.079 2.46967 12.2197C2.32902 12.3603 2.25 12.5511 2.25 12.75C2.25 12.9489 2.32902 13.1397 2.46967 13.2803C2.61032 13.421 2.80109 13.5 3 13.5H7.5C7.69891 13.5 7.88968 13.421 8.03033 13.2803C8.17098 13.1397 8.25 12.9489 8.25 12.75C8.25 12.5511 8.17098 12.3603 8.03033 12.2197C7.88968 12.079 7.69891 12 7.5 12ZM14.25 7.5H12.75V3.75C12.75 3.55109 12.671 3.36032 12.5303 3.21967C12.3897 3.07902 12.1989 3 12 3C11.8011 3 11.6103 3.07902 11.4697 3.21967C11.329 3.36032 11.25 3.55109 11.25 3.75V7.5H9.75C9.55109 7.5 9.36032 7.57902 9.21967 7.71967C9.07902 7.86032 9 8.05109 9 8.25C9 8.44891 9.07902 8.63968 9.21967 8.78033C9.36032 8.92098 9.55109 9 9.75 9H14.25C14.4489 9 14.6397 8.92098 14.7803 8.78033C14.921 8.63968 15 8.44891 15 8.25C15 8.05109 14.921 7.86032 14.7803 7.71967C14.6397 7.57902 14.4489 7.5 14.25 7.5Z"
                          fill="#FFE6C6"
                        />
                      </svg>
                      Advanced Filter
                    </button>
                    {isFilterOpen && (
                      <div className="absolute -top-1 z-[1]">
                        <div className=" relative min-w-[300px] rounded-xl p-3 filter">
                          <div className="h-[45px]"></div>
                          <div
                            className="absolute right-4 top-4"
                            onClick={() => setisFilterOpen(!isFilterOpen)}
                          >
                            <FaTimes
                              size={'15px'}
                              className="cursor-pointer transition-all hover:scale-110"
                            />
                          </div>
                          {filters.map((filter, id) => (
                            <div
                              className="flex flex-col gap-2 border-t border-gray-400 py-3"
                              key={id}
                            >
                              <div className="text-sm">
                                <span className="text-[rgba(255,255,255,0.5)]">
                                  {filter.type} -
                                </span>
                                <div className="mt-2 flex flex-row flex-nowrap items-center gap-1">
                                  {filter.filters.map((item, iid) => (
                                    <button
                                      className={`rounded-full bg-black px-4 py-2 ${
                                        selectedFilters.includes(item)
                                          ? 'text-[rgba(255,230,198,1)]'
                                          : 'text-[rgba(255,255,255,0.5)]'
                                      }`}
                                      onClick={() => selecteFilter(item)}
                                      key={iid}
                                    >
                                      {item}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div
                    className={`relative flex flex-1 flex-row-reverse`}
                    ref={profileRef}
                  >
                    <div
                      className={`${
                        isProfileOpen && 'bg-[rgba(255,255,255,0.1)]'
                      } flex h-full w-fit items-center justify-end gap-14 rounded-lg p-3`}
                    >
                      <div
                        className="h-10 w-10 cursor-pointer overflow-hidden rounded-full bg-white"
                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                      >
                        <img
                          src="profile-avatar.png"
                          alt=""
                          className="w-full"
                        />
                      </div>
                    </div>
                    {isProfileOpen && (
                      <div className="absolute right-0 top-[120%] z-[3] w-[80%] min-w-[300px]">
                        <div className="profile-dialog  w-full rounded-xl px-10 py-5">
                          <div className="text-md mb-5 flex flex-col gap-3 border-b border-gray-400 py-4 font-medium">
                            <button className="flex items-center justify-between rounded-full bg-[#383532] px-7 py-5 text-[rgba(255,230,198,0.8)] transition-all hover:scale-110 hover:text-[rgba(255,230,198,0.93)]">
                              Disconect twitter <RxExit size={'22px'} />
                            </button>
                            <button className="flex items-center justify-between rounded-full bg-[#000] px-5 py-3 text-[rgba(255,255,255,0.8)] transition-all hover:scale-110 hover:bg-[#000000b2] hover:text-white">
                              Add wallet <PiWalletBold size={'22px'} />
                            </button>
                          </div>
                          <button className="text-base transition-all hover:scale-110">
                            Logout
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <motion.div className="relative rounded-lg p-px">
                <div className="rounded-lg p-3.5 lg:p-6">{children}</div>
              </motion.div>
            </div>
          </div>
        </ThemeRegistry>
      </body>
    </html>
  );
}
