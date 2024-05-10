export const Stepper = ({ activeStep, completeStep }: IStepper) => {
  return (
    <div className="py-12 flex  flex-col gap-3 justify-center items-center w-full border border-gray-200 rounded-3xl bg-gray-50">
      <div className="flex items-center w-full justify-center">
        <div
          className={`w-16 h-16 rounded-full border ${
            activeStep >= 1 ? "border-turnary-800" : "border-gray-200"
          } flex items-center justify-center`}
        >
          <div
            className={`w-10 h-10  rounded-full ${
              activeStep >= 1 ? "bg-turnary-800 border" : "bg-transparent"
            } flex items-center justify-center`}
          >
            <span
              className={`text-2xl font-bold ${
                activeStep >= 1 ? "text-white" : "text-gray-700"
              }`}
            >
              1
            </span>
          </div>
        </div>
        <div
          className={`h-3 w-[30%] border border-gray-200 ${
            completeStep >= 1 ? "bg-turnary-800" : "bg-transparent"
          }`}
        ></div>
        <div
          className={`w-16 h-16 rounded-full border ${
            activeStep >= 2 ? "border-turnary-800" : "border-gray-200"
          } flex items-center justify-center`}
        >
          <div
            className={`w-10 h-10  rounded-full ${
              activeStep >= 2 ? "bg-turnary-800 border" : "bg-transparent"
            } flex items-center justify-center`}
          >
            <span
              className={`text-2xl font-bold ${
                activeStep >= 2 ? "text-white" : "text-gray-700"
              }`}
            >
              2
            </span>
          </div>
        </div>
        <div
          className={`h-3 w-[30%] border border-gray-200 ${
            completeStep >= 2 ? "bg-turnary-800" : "bg-transparent"
          }`}
        ></div>
        <div
          className={`w-16 h-16 rounded-full border ${
            activeStep >= 3 ? "border-turnary-800" : "border-gray-200"
          } flex items-center justify-center`}
        >
          <div
            className={`w-10 h-10  rounded-full ${
              activeStep >= 3 ? "bg-turnary-800 border" : "bg-transparent"
            } flex items-center justify-center`}
          >
            <span
              className={`text-2xl font-bold ${
                activeStep >= 3 ? "text-white" : "text-gray-700"
              }`}
            >
              3
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-[80%]">
        <span className="text-xl text-gray-800 font-medium">
        Test Overview
        </span>
        <span className="text-xl text-gray-800 font-medium pr-2">
          Select Address & Patient
        </span>
        <span className="text-xl text-gray-800 font-medium pr-6">Payment</span>
      </div>
    </div>
  );
};
