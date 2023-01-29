import React from 'react';
import { Popover } from '@headlessui/react';
import { useRouter } from 'next/router';

// Components
import Button from '../Button';

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();

  return (
    <div className="max-w-4xl mx-auto">
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between laptop:p-0">
              <h1
                onClick={() => router.push('/')}
                className="font-medium laptop:p-0 link"
              >
                Chetan Verma
              </h1>

              <div className="flex items-center">
                <Popover.Button>
                  <img
                    className="h-5"
                    src={`/images/${!open ? 'menu.svg' : 'cancel.svg'}`}
                  ></img>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute top-8 right-0 w-8/12 z-10 p-2 bg-white shadow-md rounded-md`}
            >
              <div className="grid grid-cols-1">
                <Button classes="bg-white" onClick={() => router.push('/')}>
                  Home
                </Button>
                <Button classes="bg-white" onClick={() => router.push('/blog')}>
                  Blog
                </Button>
                <Button classes="bg-white" onClick={handleWorkScroll}>
                  Work
                </Button>
                <Button classes="bg-white" onClick={handleAboutScroll}>
                  About
                </Button>
                <Button classes="bg-white" onClick={() => router.push('/blog')}>
                  Blog
                </Button>
                <Button
                  classes="bg-white"
                  onClick={() => window.open('mailto:hello@chetanverma.com')}
                >
                  Resume
                </Button>
                <Button
                  type="primary"
                  onClick={() => window.open('mailto:hello@chetanverma.com')}
                >
                  Contact
                </Button>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`mt-6 hidden flex-row items-center justify-between sticky top-0 z-10 tablet:flex`}
      >
        <div className="w-full flex justify-between">
          <div className="flex">
            <Button onClick={() => router.push('/')} classes="first:ml-0">
              Home
            </Button>
            <Button onClick={handleWorkScroll}>Work</Button>
            <Button onClick={handleAboutScroll}>About</Button>
            <Button onClick={() => router.push('/blog')}>Blog</Button>
            <Button onClick={() => router.push('/resume')} classes="first:ml-1">
              Resume
            </Button>
          </div>
          <Button
            type="primary"
            onClick={() => window.open('mailto:hello@chetanverma.com')}
          >
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
