'use client';
import Title from '../../ui/title';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Page() {
  const [posts, setPosts] = useState([
    {
      posterSmallIcon: '/posterSmallIcon.png',
      posterLargerIcon: '/posterLargerIcon.png',
      posterName: 'OneSignal',
      postTitle: 'We’re blasting off 🚀',
      post: 'OneSignal announces 500% growth, delivering 2 trillion messages annually & delivery rates of 1.75 million per second.',
      postImage: '/postImage.png',
      postTime: new Date(),
    },
    {
      posterSmallIcon: '/posterSmallIcon.png',
      posterLargerIcon: '/posterLargerIcon.png',
      posterName: 'OneSignal',
      postTitle: 'We’re blasting off 🚀',
      post: 'OneSignal announces 500% growth, delivering 2 trillion messages annually & delivery rates of 1.75 million per second.',
      postImage: '/postImage.png',
      postTime: new Date(),
    },
    {
      posterSmallIcon: '/posterSmallIcon.png',
      posterLargerIcon: '/posterLargerIcon.png',
      posterName: 'OneSignal',
      postTitle: 'We’re blasting off 🚀',
      post: 'OneSignal announces 500% growth, delivering 2 trillion messages annually & delivery rates of 1.75 million per second.',
      postImage: '/postImage.png',
      postTime: new Date(),
    },
    {
      posterSmallIcon: '/posterSmallIcon.png',
      posterLargerIcon: '/posterLargerIcon.png',
      posterName: 'OneSignal',
      postTitle: 'We’re blasting off 🚀',
      post: 'OneSignal announces 500% growth, delivering 2 trillion messages annually & delivery rates of 1.75 million per second.',
      postImage: '/postImage.png',
      postTime: new Date(),
    },
    {
      posterSmallIcon: '/posterSmallIcon.png',
      posterLargerIcon: '/posterLargerIcon.png',
      posterName: 'OneSignal',
      postTitle: 'We’re blasting off 🚀',
      post: 'OneSignal announces 500% growth, delivering 2 trillion messages annually & delivery rates of 1.75 million per second.',
      postImage: '/postImage.png',
      postTime: new Date(),
    },
    {
      posterSmallIcon: '/posterSmallIcon.png',
      posterLargerIcon: '/posterLargerIcon.png',
      posterName: 'OneSignal',
      postTitle: 'We’re blasting off 🚀',
      post: 'OneSignal announces 500% growth, delivering 2 trillion messages annually & delivery rates of 1.75 million per second.',
      postImage: '/postImage.png',
      postTime: new Date(),
    },
  ]);
  return (
    <div className="space-y-8">
      <Title>Latest Posts</Title>
      <div className="space-y-10 text-white">
        <div className="flex flex-wrap gap-6">
          {posts.map((post, key) => (
            <motion.div
              key={key}
              className="relative flex w-full shrink-0 flex-col gap-3 rounded-lg p-6 md:w-[32%]"
              style={{
                background: 'rgba(255, 230, 198, 0.25)',
                boxShadow:
                  '0px 1.328px 0.664px 0px rgba(0, 0, 0, 0.12), 0px 0px 0.664px 0px rgba(0, 0, 0, 0.21)',
              }}
              animate={{ scale: 1, opacity: 1, top: 0 }}
              initial={{ opacity: 0, top: '100px' }}
              transition={{ duration: 0.5, delay: key * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex gap-1 text-xs font-medium text-[#AAA]">
                <img src={post.posterSmallIcon} className="w-4" />
                <span>{post.posterName}</span>
                <span>·</span>
                <span>
                  {
                    // convert time to now, minutes ago ans so on format
                    post.postTime.toLocaleDateString('en-US', {
                      weekday: 'short',
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })
                  }{' '}
                </span>
                <span>^</span>
              </div>
              <div className="flex justify-between">
                <div className="w-[87%]">
                  <h4 className="text-xl font-medium">{post.postTitle}</h4>
                  <p className="text-lg text-[#B2B2B2]">{post.post}</p>
                </div>
                <div className="w-[12%]">
                  <img src={post.posterLargerIcon} className="w-full" />
                </div>
              </div>
              <div className="w-full">
                <img src={post.postImage} className="w-full" />
              </div>
              <div className="mt-3 flex gap-7">
                <motion.button
                  className="text-lg font-medium text-[#F0BB90]"
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  View Post
                </motion.button>
                <motion.button
                  className="text-lg font-medium text-[#F0BB90]"
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
