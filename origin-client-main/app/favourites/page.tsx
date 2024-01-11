'use client';

import Title from '#/ui/title';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Page() {
  const pagination = {
    totalPages: 10,
  };
  const [currentPage, setCurrentPage] = useState(1);

  const [results, setResults] = useState([
    {
      name: 'Bethany Cremin',
      marketCap: '5,24,400',
      tokenPrice: '32.45*',
      type: 'NFT',
      thumbnail: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 5.76087C16.5225 5.76087 18.2241 6.85047 19.1942 7.76095L22.9854 4.05932C20.657 1.89506 17.627 0.56665 14 0.56665C8.74609 0.56665 4.20861 3.58169 1.99957 7.96991L6.34302 11.3432C7.43261 8.10424 10.4476 5.76087 14 5.76087Z"
            fill="#EA4335"
          />
          <path
            d="M26.896 14.2992C26.896 13.1946 26.8064 12.3886 26.6124 11.5528H14V16.5381H21.4033C21.254 17.7769 20.448 19.6426 18.6569 20.8964L22.8959 24.1801C25.4333 21.8368 26.896 18.3889 26.896 14.2992Z"
            fill="#4285F4"
          />
          <path
            d="M6.35791 16.6573C6.07432 15.8214 5.91013 14.9259 5.91013 14.0005C5.91013 13.0751 6.07432 12.1795 6.34298 11.3437L1.99954 7.9704C1.08906 9.79136 0.56665 11.8362 0.56665 14.0005C0.56665 16.1647 1.08906 18.2096 1.99954 20.0305L6.35791 16.6573Z"
            fill="#FBBC05"
          />
          <path
            d="M14 27.4335C17.627 27.4335 20.6719 26.2394 22.8958 24.1796L18.6569 20.8959C17.5225 21.687 16.0001 22.2393 14 22.2393C10.4476 22.2393 7.43258 19.8959 6.35791 16.657L2.01447 20.0302C4.2235 24.4185 8.74606 27.4335 14 27.4335Z"
            fill="#34A853"
          />
        </svg>
      ),
      favorite: false,
    },
    {
      name: 'Bethany Cremin',
      marketCap: '5,24,400',
      tokenPrice: '32.45*',
      type: 'NFT',
      thumbnail: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 5.76087C16.5225 5.76087 18.2241 6.85047 19.1942 7.76095L22.9854 4.05932C20.657 1.89506 17.627 0.56665 14 0.56665C8.74609 0.56665 4.20861 3.58169 1.99957 7.96991L6.34302 11.3432C7.43261 8.10424 10.4476 5.76087 14 5.76087Z"
            fill="#EA4335"
          />
          <path
            d="M26.896 14.2992C26.896 13.1946 26.8064 12.3886 26.6124 11.5528H14V16.5381H21.4033C21.254 17.7769 20.448 19.6426 18.6569 20.8964L22.8959 24.1801C25.4333 21.8368 26.896 18.3889 26.896 14.2992Z"
            fill="#4285F4"
          />
          <path
            d="M6.35791 16.6573C6.07432 15.8214 5.91013 14.9259 5.91013 14.0005C5.91013 13.0751 6.07432 12.1795 6.34298 11.3437L1.99954 7.9704C1.08906 9.79136 0.56665 11.8362 0.56665 14.0005C0.56665 16.1647 1.08906 18.2096 1.99954 20.0305L6.35791 16.6573Z"
            fill="#FBBC05"
          />
          <path
            d="M14 27.4335C17.627 27.4335 20.6719 26.2394 22.8958 24.1796L18.6569 20.8959C17.5225 21.687 16.0001 22.2393 14 22.2393C10.4476 22.2393 7.43258 19.8959 6.35791 16.657L2.01447 20.0302C4.2235 24.4185 8.74606 27.4335 14 27.4335Z"
            fill="#34A853"
          />
        </svg>
      ),
      favorite: false,
    },
    {
      name: 'Bethany Cremin',
      marketCap: '5,24,400',
      tokenPrice: '32.45*',
      type: 'NFT',
      thumbnail: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 5.76087C16.5225 5.76087 18.2241 6.85047 19.1942 7.76095L22.9854 4.05932C20.657 1.89506 17.627 0.56665 14 0.56665C8.74609 0.56665 4.20861 3.58169 1.99957 7.96991L6.34302 11.3432C7.43261 8.10424 10.4476 5.76087 14 5.76087Z"
            fill="#EA4335"
          />
          <path
            d="M26.896 14.2992C26.896 13.1946 26.8064 12.3886 26.6124 11.5528H14V16.5381H21.4033C21.254 17.7769 20.448 19.6426 18.6569 20.8964L22.8959 24.1801C25.4333 21.8368 26.896 18.3889 26.896 14.2992Z"
            fill="#4285F4"
          />
          <path
            d="M6.35791 16.6573C6.07432 15.8214 5.91013 14.9259 5.91013 14.0005C5.91013 13.0751 6.07432 12.1795 6.34298 11.3437L1.99954 7.9704C1.08906 9.79136 0.56665 11.8362 0.56665 14.0005C0.56665 16.1647 1.08906 18.2096 1.99954 20.0305L6.35791 16.6573Z"
            fill="#FBBC05"
          />
          <path
            d="M14 27.4335C17.627 27.4335 20.6719 26.2394 22.8958 24.1796L18.6569 20.8959C17.5225 21.687 16.0001 22.2393 14 22.2393C10.4476 22.2393 7.43258 19.8959 6.35791 16.657L2.01447 20.0302C4.2235 24.4185 8.74606 27.4335 14 27.4335Z"
            fill="#34A853"
          />
        </svg>
      ),
      favorite: false,
    },
    {
      name: 'Bethany Cremin',
      marketCap: '5,24,400',
      tokenPrice: '32.45*',
      type: 'NFT',
      thumbnail: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 5.76087C16.5225 5.76087 18.2241 6.85047 19.1942 7.76095L22.9854 4.05932C20.657 1.89506 17.627 0.56665 14 0.56665C8.74609 0.56665 4.20861 3.58169 1.99957 7.96991L6.34302 11.3432C7.43261 8.10424 10.4476 5.76087 14 5.76087Z"
            fill="#EA4335"
          />
          <path
            d="M26.896 14.2992C26.896 13.1946 26.8064 12.3886 26.6124 11.5528H14V16.5381H21.4033C21.254 17.7769 20.448 19.6426 18.6569 20.8964L22.8959 24.1801C25.4333 21.8368 26.896 18.3889 26.896 14.2992Z"
            fill="#4285F4"
          />
          <path
            d="M6.35791 16.6573C6.07432 15.8214 5.91013 14.9259 5.91013 14.0005C5.91013 13.0751 6.07432 12.1795 6.34298 11.3437L1.99954 7.9704C1.08906 9.79136 0.56665 11.8362 0.56665 14.0005C0.56665 16.1647 1.08906 18.2096 1.99954 20.0305L6.35791 16.6573Z"
            fill="#FBBC05"
          />
          <path
            d="M14 27.4335C17.627 27.4335 20.6719 26.2394 22.8958 24.1796L18.6569 20.8959C17.5225 21.687 16.0001 22.2393 14 22.2393C10.4476 22.2393 7.43258 19.8959 6.35791 16.657L2.01447 20.0302C4.2235 24.4185 8.74606 27.4335 14 27.4335Z"
            fill="#34A853"
          />
        </svg>
      ),
      favorite: false,
    },
    {
      name: 'Bethany Cremin',
      marketCap: '5,24,400',
      tokenPrice: '32.45*',
      type: 'NFT',
      thumbnail: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 5.76087C16.5225 5.76087 18.2241 6.85047 19.1942 7.76095L22.9854 4.05932C20.657 1.89506 17.627 0.56665 14 0.56665C8.74609 0.56665 4.20861 3.58169 1.99957 7.96991L6.34302 11.3432C7.43261 8.10424 10.4476 5.76087 14 5.76087Z"
            fill="#EA4335"
          />
          <path
            d="M26.896 14.2992C26.896 13.1946 26.8064 12.3886 26.6124 11.5528H14V16.5381H21.4033C21.254 17.7769 20.448 19.6426 18.6569 20.8964L22.8959 24.1801C25.4333 21.8368 26.896 18.3889 26.896 14.2992Z"
            fill="#4285F4"
          />
          <path
            d="M6.35791 16.6573C6.07432 15.8214 5.91013 14.9259 5.91013 14.0005C5.91013 13.0751 6.07432 12.1795 6.34298 11.3437L1.99954 7.9704C1.08906 9.79136 0.56665 11.8362 0.56665 14.0005C0.56665 16.1647 1.08906 18.2096 1.99954 20.0305L6.35791 16.6573Z"
            fill="#FBBC05"
          />
          <path
            d="M14 27.4335C17.627 27.4335 20.6719 26.2394 22.8958 24.1796L18.6569 20.8959C17.5225 21.687 16.0001 22.2393 14 22.2393C10.4476 22.2393 7.43258 19.8959 6.35791 16.657L2.01447 20.0302C4.2235 24.4185 8.74606 27.4335 14 27.4335Z"
            fill="#34A853"
          />
        </svg>
      ),
      favorite: false,
    },
  ]);

  const like = (index: number) => {
    let temp = [...results];
    temp[index].favorite = !temp[index].favorite;
    setResults(temp);
  };

  return (
    <div className="space-y-8">
      <Title>Search results</Title>
      <div className="space-y-6 overflow-auto text-white md:overflow-visible">
        <div className="flex min-w-[900px] flex-col gap-5">
          {results.map((result, i) => (
            <motion.div
              className={`flex items-center justify-between rounded-xl p-5`}
              animate={{
                scale: 1,
              }}
              whileHover={{
                scale: 1.02,
              }}
              style={{
                background:
                  'linear-gradient(274deg, rgba(122, 83, 55, 0.10) -5.56%, rgba(244, 219, 186, 0.10) 100.58%)',
              }}
              key={i}
            >
              <div
                className="flex items-center gap-14
              "
              >
                <div className="flex flex-col items-start justify-center">
                  <span className="  text-gray-500">Rank No</span>
                  <span className="text-xl font-medium text-[#FFE6C6]">
                    #{(i + 1).toString().padStart(3, '0')}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-white">
                    {result.thumbnail}
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <span className=" text-gray-500">Name</span>
                    <span className="text-xl font-medium">{result.name}</span>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-center">
                  <span className=" text-gray-500">Market Cap</span>
                  <span className="text-xl font-medium">
                    ${result.marketCap}
                  </span>
                </div>
                <div className="flex flex-col items-start justify-center">
                  <span className=" text-gray-500">Token Price</span>
                  <span className="text-xl font-medium">
                    {result.tokenPrice}
                  </span>
                </div>
                <div className="flex flex-col items-start justify-center">
                  <span className=" text-gray-500">Type</span>
                  <span className="text-xl font-medium">{result.type}</span>
                </div>
              </div>
              <div className="flex items-center gap-7">
                <motion.button
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.5 }}
                  className={'cursor-pointer'}
                >
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.5312 9.70495L16.0312 2.20495C15.8739 2.04749 15.6734 1.94022 15.4552 1.89671C15.2369 1.8532 15.0107 1.8754 14.805 1.96051C14.5994 2.04561 14.4236 2.1898 14.2999 2.37482C14.1763 2.55985 14.1102 2.7774 14.1102 2.99995V6.44432C11.6952 6.73682 9.07961 7.93401 6.91493 9.76963C4.18117 12.089 2.47867 15.0843 2.12055 18.2071C2.08427 18.5205 2.14771 18.8373 2.30186 19.1126C2.45601 19.3878 2.69301 19.6075 2.97916 19.7403C3.26532 19.8731 3.58606 19.9123 3.89577 19.8523C4.20548 19.7923 4.4884 19.6362 4.7043 19.4062C5.68493 18.3618 9.11055 15.1181 14.1102 14.6793V17.9999C14.1104 18.2223 14.1765 18.4396 14.3002 18.6244C14.4238 18.8093 14.5994 18.9533 14.8049 19.0384C15.0103 19.1234 15.2363 19.1457 15.4544 19.1024C15.6725 19.0591 15.8729 18.9521 16.0302 18.7949L23.5302 11.2949C23.741 11.0841 23.8595 10.7983 23.8597 10.5001C23.8599 10.202 23.7417 9.91601 23.5312 9.70495ZM16.3602 15.2812V13.4999C16.3602 13.2016 16.2417 12.9154 16.0307 12.7045C15.8198 12.4935 15.5336 12.3749 15.2352 12.3749C10.6415 12.3749 7.1193 14.3962 4.94243 16.1353C5.61086 14.4328 6.78274 12.8334 8.37086 11.4862C10.4821 9.69463 13.0481 8.62495 15.2352 8.62495C15.5336 8.62495 15.8198 8.50642 16.0307 8.29544C16.2417 8.08446 16.3602 7.79832 16.3602 7.49995V5.7187L21.1415 10.4999L16.3602 15.2812Z"
                      fill="url(#paint0_linear_1_1260)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1_1260"
                        x1="12.9852"
                        y1="1.875"
                        x2="12.9852"
                        y2="19.8796"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#F4DBBA" />
                        <stop offset="1" stop-color="#965A2A" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.button>
                <div>
                  <motion.button
                    initial={{ rotate: 0, opacity: 0.5 }}
                    animate={{
                      rotate: 360,
                      scale: 1,
                      opacity: result.favorite ? 1 : 0.5,
                    }}
                    whileHover={{ rotate: 0, scale: 1.1 }}
                    className={`flex h-16 w-16 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#363636]`}
                    onClick={() => like(i)}
                  >
                    <svg
                      width="27"
                      height="26"
                      viewBox="0 0 27 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.0089 15.9605C20.8718 16.0809 20.7699 16.2362 20.714 16.4098C20.6581 16.5835 20.6503 16.769 20.6914 16.9468L22.3814 24.2643C22.426 24.4554 22.4135 24.6554 22.3452 24.8394C22.277 25.0235 22.1561 25.1833 21.9977 25.2992C21.8392 25.415 21.6502 25.4816 21.4541 25.4907C21.2581 25.4999 21.0636 25.4511 20.8951 25.3505L14.5076 21.4755C14.3524 21.3811 14.1743 21.3312 13.9926 21.3312C13.811 21.3312 13.6328 21.3811 13.4776 21.4755L7.09011 25.3505C6.92158 25.4511 6.72717 25.4999 6.53111 25.4907C6.33505 25.4816 6.14602 25.415 5.98756 25.2992C5.8291 25.1833 5.70823 25.0235 5.64 24.8394C5.57177 24.6554 5.5592 24.4554 5.60386 24.2643L7.29386 16.9468C7.33494 16.769 7.32711 16.5835 7.27121 16.4098C7.21531 16.2362 7.11342 16.0809 6.97636 15.9605L1.33761 11.0418C1.18686 10.9136 1.0775 10.7437 1.02338 10.5534C0.969254 10.3631 0.972792 10.161 1.03355 9.97271C1.0943 9.78442 1.20954 9.61839 1.36468 9.49562C1.51983 9.37285 1.7079 9.29885 1.90511 9.283L9.33761 8.6405C9.51895 8.62435 9.69243 8.559 9.83936 8.45151C9.98628 8.34401 10.1011 8.19844 10.1714 8.0305L13.0751 1.1105C13.1527 0.931594 13.2808 0.779262 13.4439 0.672256C13.6069 0.565251 13.7976 0.50824 13.9926 0.50824C14.1876 0.50824 14.3784 0.565251 14.5414 0.672256C14.7044 0.779262 14.8326 0.931594 14.9101 1.1105L17.8139 8.0305C17.8841 8.19844 17.9989 8.34401 18.1459 8.45151C18.2928 8.559 18.4663 8.62435 18.6476 8.6405L26.0801 9.283C26.2773 9.29885 26.4654 9.37285 26.6205 9.49562C26.7757 9.61839 26.8909 9.78442 26.9517 9.97271C27.0124 10.161 27.016 10.3631 26.9618 10.5534C26.9077 10.7437 26.7984 10.9136 26.6476 11.0418L21.0089 15.9605Z"
                        fill="url(#paint0_linear_1_1263)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1_1263"
                          x1="13.9926"
                          y1="0.50824"
                          x2="13.9926"
                          y2="25.4918"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#F4DBBA" />
                          <stop offset="1" stop-color="#965A2A" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex gap-3">
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#363636] text-white"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <FaChevronLeft />
          </button>
          <button
            className={`flex h-10 w-10 items-center justify-center rounded-md bg-[${
              currentPage === 1 ? '#000' : '#363636'
            }] text-white`}
            onClick={() => setCurrentPage(1)}
          >
            1
          </button>
          {currentPage > 3 && (
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-md bg-[#363636] text-white`}
            >
              ...
            </div>
          )}
          {currentPage > 2 && (
            <button
              className={`flex h-10 w-10 items-center justify-center rounded-md bg-[#363636] text-white`}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              {currentPage - 1}
            </button>
          )}
          {currentPage != 1 && currentPage != pagination.totalPages && (
            <button
              className={`roundedmdm flex h-10 w-10 items-center justify-center
                bg-[#000] text-white`}
              onClick={() => setCurrentPage(currentPage)}
            >
              {currentPage}
            </button>
          )}
          {currentPage < pagination.totalPages - 1 && (
            <button
              className={`flex h-10 w-10 items-center justify-center rounded-md bg-[#363636] text-white`}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              {currentPage + 1}
            </button>
          )}
          {currentPage < pagination.totalPages - 2 && (
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-md bg-[#363636] text-white`}
            >
              ...
            </div>
          )}
          <button
            className={`flex h-10 w-10 items-center justify-center rounded-md bg-[${
              currentPage === pagination.totalPages ? '#000' : '#363636'
            }] text-white`}
            onClick={() => setCurrentPage(pagination.totalPages)}
          >
            {pagination.totalPages}
          </button>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#363636] text-white"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
