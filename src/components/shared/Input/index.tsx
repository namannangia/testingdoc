const Input = ({
  label,
  type,
  placeholder,
  className,
  classNameLabel,
  classNameParent
}: isInput) => {
  return (
    <div className={classNameParent ? classNameParent : "mb-4 w-full"}>
      {label &&
        <label
          htmlFor={label}
          className={`block mb-2 ml-0 text-sm font-medium text-gray-900 ${classNameLabel}`}
        >
          {label}
        </label>
      }
      {type == "tel" ? (
        <input
          type={"tel"}
          id={label}
          className={`bg-white border border-gray-300 text-grey-500 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-[14px] px-4 focus:ring-0 ${className}`}
          placeholder="011-4725-2000"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        />
      ) : (
        <input
          type={type ? type : 'text'}
          id={label}
          className={`bg-white border border-gray-300 text-grey-500 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-[14px] px-4 focus:ring-0 ${className}`}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default Input;
