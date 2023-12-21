import React from 'react';
import close from '../public/close.png';
import min from '../public/min.png';
import minimize from '../public/minimize.png';
import Image from 'next/image';
import CustomText from './CustomText';
import CustomButton from './CustomButton';
const NewMessageWindow = () => {
  return (
    <div
      style={{
        border: '1px solid#383737',
      }}
      className='w-[1024px] bg-[#181818] mt-16 rounded-xl'
    >
      <div className='mt-4 relative z-1'>
        <div className='flex flex-row items-center justify-between'>
          <div className='ml-4'>
            <div className='flex flex-row items-center'>
              <div
                style={{
                  border: '2px solid #D62929',
                }}
                className='mr-2 w-3 h-3 rounded-full bg-[#F63636] flex flex-col items-center justify-center'
              >
                <Image width={6} height={6} src={close} alt='close' />
              </div>
              <div
                style={{
                  border: '2px solid #CEA435',
                }}
                className='
                 mr-2 w-3 h-3 rounded-full bg-[#F6C136] ml-1 flex flex-col items-center justify-center'
              >
                <Image width={6} height={6} src={min} alt='min' />
              </div>
              <div
                style={{
                  border: '2px solid #53CC28',
                }}
                className='w-3 h-3 rounded-full bg-[#68F636] ml-1 flex flex-col items-center justify-center'
              >
                <Image width={6} height={6} src={minimize} alt='minimize' />
              </div>
            </div>
            <div className='absolute left-[450px] top-[-5px] flex flex-row items-center justify-center'>
              <CustomText
                fontWeight={500}
                style={{
                  fontSize: 16,
                  color: '#FFFFFF',
                }}
              >
                New message
              </CustomText>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.10)',
            height: 1,
            marginTop: 16,
          }}
          className='w-[1024px] z-0 self-center'
        />
        <div className='mr-8 ml-8 mt-4'>
          <div className='flex flex-row items-center'>
            <CustomText
              fontWeight={500}
              style={{ fontSize: 16, color: '#FFFFFF' }}
            >
              Email:
            </CustomText>
            <input
              style={{
                color: 'rgba(255, 255, 255, 0.75)',
              }}
              placeholder='Enter your email address'
              className='w-[900px] h-5 ml-2 bg-transparent outline-none placeholder-zinc-700'
            />
          </div>
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.10)',
              height: 1,
              marginTop: 16,
            }}
            className='w-[960px] self-center'
          />
          <div className='flex flex-row items-center mt-4'>
            <CustomText
              fontWeight={500}
              style={{ fontSize: 16, color: '#FFFFFF' }}
            >
              Name:
            </CustomText>
            <input
              style={{
                color: 'rgba(255, 255, 255, 0.75)',
              }}
              placeholder='Enter your name'
              className='w-[900px] h-5 ml-2 bg-transparent outline-none placeholder-zinc-700'
            />
          </div>
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.10)',
              height: 1,
              marginTop: 16,
            }}
            className='w-[960px] self-center'
          />
          <div className='flex flex-row items-center mt-4'>
            <CustomText
              fontWeight={500}
              style={{ fontSize: 16, color: '#FFFFFF' }}
            >
              Subject:
            </CustomText>
            <input
              style={{
                color: 'rgba(255, 255, 255, 0.75)',
              }}
              placeholder='Enter subject'
              className='w-[900px] h-5 ml-2 bg-transparent outline-none placeholder-zinc-700'
            />
          </div>
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.10)',
              height: 1,
              marginTop: 32,
            }}
            className='w-[960px] self-center'
          />
          <div
            className='w-[960px] h-[320px] mt-8 bg-[#0D0D0D] rounded-xl'
            style={{
              boxShadow: '0px 19px 30px 0px rgba(0, 0, 0, 0.20)',
            }}
          >
            <textarea
              style={{
                width: '90%',
                height: 240,
              }}
              placeholder='Write your message here'
              className='m-8 bg-[#0D0D0D]  outline-none placeholder-zinc-700'
            />
          </div>
          <div className='mt-3 ml-14 mb-14 flex flex-row self-end items-end justify-end'>
            <CustomButton
              style={{
                width: 110,
                height: 60,
                borderRadius: 8,
                alignSelf: 'flex-end',
                marginTop: 16,
                backgroundColor: '#131313',
              }}
            >
              Send
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMessageWindow;
