import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export const Accordion = ({ children, title, className, classNameHead, classNameBody, defaultOpen }: IAccordion) => {

  return (
    <div className="w-full">
      <div className={` ${className ? `${className}` : 'mx-auto w-full max-w-md rounded-2xl bg-white mb-6'}`}>
        <Disclosure defaultOpen={defaultOpen == undefined ? true : defaultOpen == false ? false : true}>
          {({ open }) => (
            <>
              <Disclosure.Button className={`${classNameHead ? `${classNameHead} ` : 'flex w-full items-center justify-between rounded-lg bg-white text-left text-lg font-medium text-gray-800'}`}>
                <span>{title}</span>
                <ChevronUpIcon
                  className={`${
                    open ? "" : "rotate-180 transform"
                  } h-8 w-8 text-turnary-800`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className={` ${classNameBody ? classNameBody : 'text-sm text-gray-500'}`}>
                {children}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};
