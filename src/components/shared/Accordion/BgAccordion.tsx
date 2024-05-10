import { Disclosure } from "@headlessui/react";
import { PlusIcon, MinusIcon } from "@heroicons/react/20/solid";

export const BgAccordion = ({
  children,
  title,
  className,
  classNameHead,
  classNameBody,
  open
}: IAccordion) => {
  return (
    <div className="w-full">
      <div
        className={`11mx-auto gap-4  w-full 11max-w-md rounded-2xl bg-white`}
      >
        <Disclosure defaultOpen={open}>
          {({ open }) => (
            <div
              className={`${
                open ? "bg-gray-200" : "bg-white"
              } border border-gray-200 py-7 px-10 xs:p-4 sm:p-4 ${className}`}
            >
              <Disclosure.Button
                className={`flex w-full items-center justify-between rounded-lg bg-transparent text-left text-xl font-medium text-gray-950 sm:text-lg xs:text-lg ${classNameHead}`}
              >
                <span className="text-base lg:text-xl">{title}</span>
                {open ? (
                  <MinusIcon className="w-6 text-primary-300" />
                ) : (
                  <PlusIcon className="w-6 text-turnary-800" />
                )}
              </Disclosure.Button>
              <Disclosure.Panel
                className={`text-lg sm:text-base xs:text-base mt-4 text-gray-500  ${classNameBody}`}
              >
                <p className="text-base lg:text-lg">{children}</p>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      </div>
    </div>
  );
};
