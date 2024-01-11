import { PiWarningCircleLight } from 'react-icons/pi';
import { Interface } from 'readline';
import { motion } from 'framer-motion';
import { Button, Popup } from 'semantic-ui-react';
import Image from 'next/image';
interface IAmountCardProps {
  i: number;
  item: {
    img: string;
    amount: string;
    desc: string;
    popup: any;
  };
}

export function AmountCard({ item, i }: IAmountCardProps) {
  return (
    <motion.div
      className="relative flex h-[200px] w-full flex-col justify-end overflow-hidden rounded-xl p-5 md:w-[29%]"
      animate={{ scale: 1, opacity: 1, top: 0 }}
      initial={{ opacity: 0, top: '100px' }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <Image
        src={item.img}
        alt=""
        fill
        className="absolute left-0 top-0 -z-[1] h-full w-full object-cover"
      />
      <h1 className="text-3xl font-bold md:text-5xl">{item.amount}</h1>
      <p className="">{item.desc}</p>
      <button className="absolute bottom-[7%] right-[7%]">
        <Popup
          content="Add users to your feed"
          trigger={<PiWarningCircleLight size={'30px'} />}
          hoverable
          // top center if not the third one on any row
          position={i % 3 !== 2 ? 'top center' : 'top right'}
          size="large"
          offset={[0, 10]}
        >
          <Popup.Content>
            <div className="flex max-w-[200px] flex-col items-center justify-center rounded-lg bg-[#ffffff25] p-5 font-bold text-white backdrop-blur-sm">
              <p className="text-center text-sm">{item.popup}</p>
            </div>
          </Popup.Content>
        </Popup>
      </button>
    </motion.div>
  );
}
