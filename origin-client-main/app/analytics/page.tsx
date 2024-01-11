'use client';
import { FiCalendar } from 'react-icons/fi';
import { GoPerson } from 'react-icons/go';
import { IoIosList } from 'react-icons/io';
import { HiOutlineStar } from 'react-icons/hi';

import Link from 'next/link';
import { useState } from 'react';
import { FaDiscord, FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { PiWarningCircleLight } from 'react-icons/pi';
import { AmountCard } from '#/ui/amount-card';
import { motion } from 'framer-motion';

export default function Page() {
  return (
    <div className="md:p-5">
      <ProjectAnalytics />
      <InfluencerAnalytics />
      <motion.button
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
        className="mx-auto flex w-full flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-[#939393] bg-[#2B2621] py-14 md:w-[75%]"
      >
        <h1 className="text-[30px] font-bold">Add Another Project</h1>
        <h4 className="text-[20px] font-medium">
          Compare multiple projects together
        </h4>
      </motion.button>
    </div>
  );
}

function ProjectAnalytics() {
  const [userLiked, setUserLiked] = useState(false);
  const tokeStatistics = [
    {
      desc: 'Market Cap from $2,302',
      amount: '$204,320',
      img: '/market-cap.png',
      popup: 'This project made a 100X from starting market cap.',
    },
    {
      desc: 'Volume',
      amount: '$1.2M',
      img: '/volume.png',
      popup: 'This project made 1.2M Volume since launch.',
    },
    {
      desc: 'Tax Revenue',
      amount: '$203,302',
      img: '/tax-revenue.png',
      popup: (
        <>
          2nd Highest Tax raised on their launch day.
          <br /> <br />
          158th Highest total tax raised on launch day.
        </>
      ),
    },
  ];
  const marketingStatics = [
    {
      desc: 'Influencer Mentions',
      amount: '323',
      img: '/influencer-mentions.png',
      popup: 'This project raised X Telegram mentions and X Twitter mentions.',
    },
    {
      desc: 'Marketing Budget',
      amount: '$43,000',
      img: '/marketing-budget.png',
      popup: 'This project spent approximately $43,000 on their campaign.',
    },
    {
      desc: 'P&L on Marketing',
      amount: '$203,302',
      img: '/pl-marketing.png',
      popup: (
        <>
          This project made a X ROI (return on investment) from their initial
          marketing budget.
          <br />
          <br />
          2nd Highest P&L from marketing.
        </>
      ),
    },
  ];
  return (
    <div className="flex flex-col gap-4 space-y-10 text-white">
      <div className="flex flex-wrap justify-between gap-3">
        <div className="flex w-full flex-col gap-4 md:w-[25%]">
          <div className="flex items-center gap-4">
            <img src="/avatar.png" />
            <h4 className="text-lg font-bold">Swift Ecosystem</h4>
            <motion.button
              className="flex h-11 w-11 items-center justify-center rounded-full bg-black"
              animate={{ scale: 1, opacity: userLiked ? 1 : 0.5 }}
              initial={{ opacity: 0.5 }}
              whileHover={{ scale: 1.1 }}
              onClick={() => setUserLiked(!userLiked)}
            >
              <svg
                width="27"
                height="26"
                viewBox="0 0 27 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.0236 15.9605C19.8866 16.0809 19.7847 16.2362 19.7288 16.4098C19.6729 16.5835 19.6651 16.769 19.7061 16.9468L21.3961 24.2643C21.4408 24.4554 21.4282 24.6554 21.36 24.8394C21.2918 25.0235 21.1709 25.1833 21.0124 25.2992C20.854 25.415 20.6649 25.4816 20.4689 25.4907C20.2728 25.4999 20.0784 25.4511 19.9099 25.3505L13.5224 21.4755C13.3672 21.3811 13.189 21.3312 13.0074 21.3312C12.8257 21.3312 12.6476 21.3811 12.4924 21.4755L6.10488 25.3505C5.93635 25.4511 5.74194 25.4999 5.54588 25.4907C5.34982 25.4816 5.16079 25.415 5.00233 25.2992C4.84387 25.1833 4.723 25.0235 4.65477 24.8394C4.58654 24.6554 4.57397 24.4554 4.61863 24.2643L6.30863 16.9468C6.34971 16.769 6.34188 16.5835 6.28598 16.4098C6.23008 16.2362 6.12819 16.0809 5.99113 15.9605L0.352381 11.0418C0.201631 10.9136 0.0922746 10.7437 0.0381494 10.5534C-0.0159759 10.3631 -0.0124374 10.161 0.048317 9.97271C0.109071 9.78442 0.224311 9.61839 0.379455 9.49562C0.534598 9.37285 0.722673 9.29885 0.919881 9.283L8.35238 8.6405C8.53372 8.62435 8.7072 8.559 8.85413 8.45151C9.00105 8.34401 9.11585 8.19844 9.18613 8.0305L12.0899 1.1105C12.1674 0.931594 12.2956 0.779262 12.4586 0.672256C12.6216 0.565251 12.8124 0.50824 13.0074 0.50824C13.2024 0.50824 13.3931 0.565251 13.5561 0.672256C13.7192 0.779262 13.8473 0.931594 13.9249 1.1105L16.8286 8.0305C16.8989 8.19844 17.0137 8.34401 17.1606 8.45151C17.3076 8.559 17.481 8.62435 17.6624 8.6405L25.0949 9.283C25.2921 9.29885 25.4802 9.37285 25.6353 9.49562C25.7905 9.61839 25.9057 9.78442 25.9664 9.97271C26.0272 10.161 26.0307 10.3631 25.9766 10.5534C25.9225 10.7437 25.8131 10.9136 25.6624 11.0418L20.0236 15.9605Z"
                  fill="url(#paint0_linear_9_785)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_9_785"
                    x1="13.0074"
                    y1="0.50824"
                    x2="13.0074"
                    y2="25.4918"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color={userLiked ? '#F4DBBA' : 'gray'} />
                    <stop
                      offset="1"
                      stop-color={userLiked ? '#965A2A' : 'gray'}
                    />
                  </linearGradient>
                </defs>
              </svg>
            </motion.button>
          </div>
          <div>
            <p className="text-md text-[#BCBCBC]">
              Trade and snipe tokens with lightning speeds using our
              multi-platform software.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="/" className="flex items-center gap-1">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.8335 7.58329C6.34039 8.26095 7.11661 8.68504 7.96071 8.74549C8.8048 8.80594 9.63354 8.4968 10.2318 7.89829L11.9818 6.14829C13.0872 5.00386 13.0714 3.18471 11.9463 2.05966C10.8212 0.934599 9.0021 0.918791 7.85766 2.02413L6.85433 3.02163"
                  stroke="#3E69FF"
                  stroke-width="1.16667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.16678 6.41666C7.65989 5.73901 6.88367 5.31492 6.03957 5.25447C5.19547 5.19402 4.36674 5.50316 3.76845 6.10166L2.01845 7.85166C0.913115 8.9961 0.928923 10.8152 2.05398 11.9403C3.17904 13.0654 4.99818 13.0812 6.14262 11.9758L7.14012 10.9783"
                  stroke="#3E69FF"
                  stroke-width="1.16667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="text-[#3E69FF]">Website</span>
            </Link>
            <motion.button
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              className="full flex h-8 w-8 items-center justify-center rounded-full bg-black"
            >
              <FaTelegramPlane />
            </motion.button>
            <motion.button
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              className="full flex h-8 w-8 items-center justify-center rounded-full bg-black"
            >
              <FaXTwitter />
            </motion.button>
            <motion.button
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              className="full flex h-8 w-8 items-center justify-center rounded-full bg-black"
            >
              <FaDiscord />
            </motion.button>
          </div>
        </div>
        <div className="flex w-full flex-wrap items-center gap-4 md:w-fit">
          <motion.div
            className="relative flex h-[200px] w-full flex-col justify-end overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.1)] p-5 md:w-[400px]"
            style={{
              background: "url('/project-rank.png') no-repeat",
              backgroundSize: 'cover',
            }}
            animate={{ scale: 1, opacity: 1, top: 0 }}
            initial={{ opacity: 0, top: '100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <h1 className="text-5xl font-bold">31st</h1>
            <p className="">Project Rank</p>
            <div className="absolute bottom-4 right-4">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM26.9538 15H21.975C21.7988 11.4425 20.6913 8.06625 18.835 5.375C21.009 5.95867 22.9523 7.1938 24.4036 8.91443C25.855 10.6351 26.7449 12.7587 26.9538 15ZM16 26.9862C13.6588 24.4525 12.2388 20.8612 12.0288 17H19.9713C19.7613 20.8587 18.3413 24.4525 16 26.9862ZM12.0288 15C12.2388 11.1412 13.6538 7.5475 16 5.01375C18.3413 7.5475 19.7613 11.1388 19.9713 15H12.0288ZM13.165 5.375C11.3088 8.06625 10.2013 11.4425 10.025 15H5.04626C5.25511 12.7587 6.14501 10.6351 7.59637 8.91443C9.04773 7.1938 10.991 5.95867 13.165 5.375ZM5.04626 17H10.025C10.2013 20.5575 11.3088 23.9338 13.165 26.625C10.991 26.0413 9.04773 24.8062 7.59637 23.0856C6.14501 21.3649 5.25511 19.2413 5.04626 17ZM18.835 26.625C20.6913 23.93 21.7988 20.5537 21.975 17H26.9538C26.7449 19.2413 25.855 21.3649 24.4036 23.0856C22.9523 24.8062 21.009 26.0413 18.835 26.625Z"
                  fill="white"
                />
              </svg>
            </div>
          </motion.div>
          <motion.div
            animate={{ scale: 1, opacity: 1, top: 0 }}
            initial={{ opacity: 0, top: '100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="relative flex h-[200px] w-full flex-col justify-end overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.1)] p-5 md:w-[200px]"
            style={{
              background: "url('/members.png') no-repeat",
              backgroundSize: 'cover',
            }}
          >
            <h1 className="text-5xl font-bold">460</h1>
            <p className="">Members</p>
            <div className="absolute bottom-4 right-4">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.6098 3.27376C29.4549 3.13997 29.2664 3.051 29.0646 3.01641C28.8629 2.98183 28.6555 3.00296 28.4648 3.07751L3.13233 12.9913C2.77331 13.1309 2.46936 13.3833 2.26623 13.7106C2.06311 14.0379 1.97181 14.4224 2.00607 14.806C2.04034 15.1897 2.19831 15.5519 2.45622 15.838C2.71413 16.1241 3.058 16.3187 3.43608 16.3925L9.99983 17.6813V25C9.99854 25.3987 10.117 25.7885 10.3399 26.119C10.5628 26.4496 10.8798 26.7055 11.2498 26.8538C11.6193 27.0046 12.0257 27.0409 12.416 26.9577C12.8064 26.8746 13.1627 26.6759 13.4386 26.3875L16.6036 23.105L21.6248 27.5C21.9871 27.8213 22.4543 27.9992 22.9386 28C23.1508 27.9998 23.3617 27.9665 23.5636 27.9013C23.8935 27.7966 24.1903 27.6073 24.4243 27.3522C24.6583 27.0971 24.8214 26.7852 24.8973 26.4475L29.9711 4.37501C30.0165 4.17595 30.0068 3.96829 29.9432 3.77429C29.8795 3.58029 29.7643 3.40727 29.6098 3.27376ZM21.9673 7.77376L10.7686 15.7938L4.56858 14.5775L21.9673 7.77376ZM11.9998 25V19.065L15.0986 21.7825L11.9998 25ZM22.9411 26L12.6061 16.9375L27.4811 6.27626L22.9411 26Z"
                  fill="white"
                />
              </svg>
            </div>
          </motion.div>
          <motion.div
            animate={{ scale: 1, opacity: 1, top: 0 }}
            initial={{ opacity: 0, top: '100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="relative flex h-[200px] w-full flex-col justify-end overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.1)] p-5 md:w-[200px]"
            style={{
              background: "url('/followers.png') no-repeat",
              backgroundSize: 'cover',
            }}
          >
            <h1 className="text-5xl font-bold">434</h1>
            <p className="">Followers</p>
            <div className="absolute bottom-4 right-4">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.9237 8.61752C30.8481 8.43478 30.72 8.27857 30.5555 8.16866C30.3911 8.05875 30.1978 8.00006 30 8.00002H26.1963C25.6644 7.09524 24.9076 6.34346 23.9992 5.81777C23.0909 5.29208 22.0619 5.01037 21.0125 5.00002C20.2306 4.98976 19.4546 5.13598 18.7301 5.43008C18.0056 5.72418 17.3472 6.16021 16.7937 6.71252C16.2241 7.27154 15.7719 7.93883 15.4639 8.67512C15.1559 9.41142 14.9981 10.2019 15 11V11.7613C9.9675 10.4338 5.85125 6.34002 5.8075 6.29627C5.67334 6.16092 5.5033 6.06672 5.3174 6.02477C5.1315 5.98283 4.93748 5.99487 4.7582 6.05949C4.57891 6.12411 4.42183 6.23862 4.30544 6.38952C4.18905 6.54043 4.11821 6.72145 4.10125 6.91127C3.5625 12.885 5.2975 16.8825 6.85125 19.1838C7.60885 20.3214 8.53048 21.3407 9.58625 22.2088C7.6825 24.4 4.685 25.5513 4.6525 25.5638C4.51139 25.6166 4.38405 25.7007 4.27999 25.8097C4.17594 25.9186 4.09785 26.0497 4.05158 26.1931C4.0053 26.3365 3.99203 26.4885 4.01275 26.6378C4.03347 26.787 4.08765 26.9296 4.17125 27.055C4.265 27.195 4.64 27.6863 5.55625 28.145C6.68875 28.7125 8.185 29 10 29C18.8337 29 26.215 22.1975 26.9688 13.445L30.7075 9.70752C30.8473 9.56759 30.9425 9.38934 30.981 9.19532C31.0195 9.0013 30.9995 8.80022 30.9237 8.61752ZM25.2987 12.2938C25.1273 12.4656 25.0242 12.694 25.0088 12.9363C24.5 20.8225 17.91 27 10 27C8.68 27 7.75 26.825 7.0975 26.615C8.53625 25.8338 10.5425 24.49 11.8325 22.555C11.9082 22.4412 11.9598 22.3131 11.9841 22.1786C12.0083 22.0442 12.0048 21.9061 11.9736 21.773C11.9425 21.64 11.8844 21.5147 11.8029 21.405C11.7214 21.2952 11.6184 21.2034 11.5 21.135C11.4412 21.1013 6.01125 17.8425 6 9.13502C8 10.76 11.6562 13.2813 15.8337 13.9838C15.9769 14.0079 16.1236 14.0006 16.2637 13.9623C16.4037 13.924 16.5338 13.8557 16.6448 13.7621C16.7558 13.6684 16.845 13.5518 16.9064 13.4202C16.9677 13.2886 16.9997 13.1452 17 13V11C16.9989 10.4666 17.1045 9.9383 17.3105 9.44628C17.5166 8.95426 17.819 8.50842 18.2 8.13502C18.5652 7.76914 19 7.48018 19.4788 7.28524C19.9576 7.09029 20.4706 6.99331 20.9875 7.00002C22.57 7.02002 24.0487 7.98502 24.6675 9.40127C24.7455 9.57932 24.8737 9.73079 25.0364 9.83713C25.1992 9.94347 25.3894 10.0001 25.5837 10H27.5837L25.2987 12.2938Z"
                  fill="white"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <h4 className="flex items-center gap-3 font-bold">
          Token Statistics{' '}
          <span className="text-lg text-[#EBEBF54D]">
            <PiWarningCircleLight />
          </span>
        </h4>
        <div className="flex flex-wrap items-center justify-between gap-4">
          {tokeStatistics.map((item, i) => (
            <AmountCard key={i} item={item} i={i} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <h4 className="flex items-center gap-3 font-bold">
          Marketing Statistics{' '}
          <span className="text-lg text-[#EBEBF54D]">
            <PiWarningCircleLight />
          </span>
        </h4>
        <div className="flex flex-wrap items-center justify-between gap-4">
          {marketingStatics.map((item, i) => (
            <AmountCard key={i} item={item} i={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function InfluencerAnalytics() {
  const TABS = {
    PRELAUNCH: 'Pre-Launch',
    BOTH: 'Both',
    POSTLAUNCH: 'Post-Launch',
  };
  const [activeTab, setActiveTab] = useState(TABS.BOTH);
  const anlytics = [
    {
      schedule: TABS.PRELAUNCH,
      influencer: 'Markus Suzak',
      platforms: ['Twitter', 'Telegram'],
      rating: 4,
    },
    {
      schedule: TABS.PRELAUNCH,
      influencer: 'George R.R Martin',
      platforms: ['Telegram'],
      rating: 3,
    },
    {
      schedule: TABS.POSTLAUNCH,
      influencer: 'Ankur Warikoo',
      platforms: ['Twitter'],
      rating: 5,
    },
    {
      schedule: TABS.PRELAUNCH,
      influencer: 'Jodi Picoult',
      platforms: ['Twitter', 'Telegram'],
      rating: 5,
    },
    {
      schedule: TABS.POSTLAUNCH,
      influencer: 'James Clear',
      platforms: ['Telegram'],
      rating: 5,
    },
    {
      schedule: TABS.POSTLAUNCH,
      influencer: 'James Clear',
      platforms: ['Telegram'],
      rating: 4,
    },
  ];
  return (
    <div className="my-20 flex flex-col gap-5">
      <h1 className=" text-center text-2xl font-bold">Influencer Analytics</h1>
      <div className="my-5 flex items-center justify-center">
        <div
          className="w-fit rounded-full bg-[#282B30]"
          style={{
            border: '2px solid #191A1D',
            boxShadow: '0px 3px 20px 0px rgba(0, 0, 0, 0.15) inset',
          }}
        >
          {Object.values(TABS).map((tab) => (
            <button
              key={tab}
              className={`${
                tab === activeTab
                  ? 'border-[2px] border-[#4F4F4F] bg-[#000] text-white'
                  : 'bg-[none] text-[#5F6265]'
              } rounded-full px-4 py-4 text-lg font-bold md:px-20 md:text-xl`}
              style={{
                textShadow: '0px 0px 3px rgba(0, 0, 0, 0.80)',
              }}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full overflow-auto">
        <table className="m-auto w-[90%] min-w-[900px] rounded-lg bg-[#222222] text-xl font-medium">
          <thead className="text-center">
            <tr className="border-b border-white">
              <th>
                <span className="flex items-center justify-center gap-2">
                  <FiCalendar /> Schedule
                </span>
              </th>
              <th>
                <span className="flex items-center justify-center gap-2">
                  <GoPerson /> Influencer
                </span>
              </th>
              <th>
                <span className="flex items-center justify-center gap-2">
                  <IoIosList /> Platforms
                </span>
              </th>
              <th className="border-none">
                <span className="flex items-center justify-center gap-2">
                  <HiOutlineStar /> Rating
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {anlytics
              .filter(
                (item) =>
                  item.schedule === activeTab || activeTab === TABS.BOTH,
              )
              .map((item, i) => (
                <tr
                  key="i"
                  className={`${
                    i !== anlytics.length - 1 && 'border-b border-white'
                  }`}
                >
                  <td>{item.schedule}</td>
                  <td>{item.influencer}</td>
                  <td>
                    <div className="flex">
                      {item.platforms.map((platform) => (
                        <span
                          className={`m-1 block rounded-lg px-2 py-1 font-medium text-[#222222] ${
                            platform === 'Twitter'
                              ? 'bg-[#4285F4]'
                              : 'bg-[#FBBC05]'
                          }`}
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="flex items-center justify-center border-none">
                    <span className="flex w-fit gap-2 rounded-lg bg-[#FFF0BB] p-2">
                      {Array.from(Array(item.rating).keys()).map((i) => (
                        <motion.span
                          animate={{ rotate: 0 }}
                          initial={{ rotate: -360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                          }}
                        >
                          <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.1871 15.7926C12.9929 15.7926 12.7996 15.733 12.6333 15.6143L8.7228 12.8099L4.81231 15.6143C4.65029 15.7308 4.45559 15.7932 4.256 15.7925C4.05641 15.7918 3.86214 15.7281 3.70093 15.6104C3.53957 15.4934 3.41922 15.3285 3.357 15.1392C3.29477 14.9498 3.29384 14.7457 3.35435 14.5558L4.81279 9.84876L0.937391 7.11791C0.776781 6.99938 0.657502 6.83335 0.596427 6.64331C0.535352 6.45327 0.535572 6.24884 0.597056 6.05893C0.659026 5.86948 0.778965 5.7043 0.939924 5.58673C1.10088 5.46916 1.29472 5.40515 1.49404 5.40374L6.29382 5.39653L7.82197 0.80633C7.88503 0.617235 8.00599 0.452773 8.1677 0.336233C8.32942 0.219693 8.5237 0.156982 8.72304 0.156982C8.92237 0.156982 9.11666 0.219693 9.27837 0.336233C9.44009 0.452773 9.56104 0.617235 9.62411 0.80633L11.1263 5.39653L15.9506 5.40374C16.1502 5.40486 16.3443 5.46885 16.5054 5.58659C16.6665 5.70434 16.7864 5.86986 16.8481 6.05965C16.9098 6.24944 16.9101 6.45384 16.849 6.64381C16.7879 6.83379 16.6685 6.99968 16.5077 7.11791L12.6323 9.84876L14.0908 14.5558C14.1514 14.7456 14.1506 14.9498 14.0884 15.1391C14.0263 15.3285 13.906 15.4934 13.7447 15.6104C13.583 15.729 13.3876 15.7929 13.1871 15.7926Z"
                              fill="#FFAC33"
                            />
                          </svg>
                        </motion.span>
                      ))}
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
