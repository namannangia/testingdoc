export const Card = ({ children, className }: isCard) => {
    return (
      <div className={`xs:py-12 sm:py-12 md:py-12 lg:py-[100px] ${className}`}>{children}</div>
    );
  };

  export const Card64 = ({ children, className }: isCard) => {
    return (
      <div className={`xs:py-12 sm:py-12 md:py-12 lg:py-16 ${className}`}>{children}</div>
    );
  };

  
  export const BorderBox = ({ children, className }: isCard) => {
    return (
      <div className={`border-[1px] border-solid border-grey-200  ${className}`}>{children}</div>
    );
  };
