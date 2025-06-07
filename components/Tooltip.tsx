'use client';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';

export default function Tooltip({ children, content }: { children: React.ReactNode, content: React.ReactNode }) {
  return (
    <Popover className="relative inline-block">
      <Popover.Button className="focus:outline-none">{children}</Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-150"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute z-20 left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded shadow-lg">
          {content}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
