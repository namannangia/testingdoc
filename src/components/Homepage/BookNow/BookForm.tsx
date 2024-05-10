import { baseURL, inquiryHome } from "@/components/ApiData/ApiFunctions";
import axios from "axios";

export const BookForm = () => {
  const submitHandlerHome2 = (event: any) => {
    event.preventDefault();
    const patient_name = event.target.patient_name.value;
    const patient_email = event.target.patient_email.value;
    const mobile_number = event.target.mobile_number.value;
    const message = event.target.message.value;

    const data = {
      patient_name,
      patient_email,
      mobile_number,
      message,
    };

    //const [resData, setResData] = useState();

    axios.post(baseURL + inquiryHome, data).then((response: any) => {
      console.log(response);
      event.target.reset();
      //setResData(response);
      alert(response.data.msg);
    }).catch((error: any) => {
      console.log(error);
    })
  }
  
  return (
    <form name="sendMessage" onSubmit={submitHandlerHome2}>
     <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <div className="flex w-full gap-4">
          <div className="w-full">
            <label
              htmlFor="last_name"
              className="block mb-1 text-base font-medium text-black ml-0"
            >
              First Name
            </label>
            <input
              type="text"
              id="last_name"
              name="patient_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  h-12"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="Mobile_No"
              className="block mb-1 text-base font-medium text-black ml-0"
            >
              Mobile Number
            </label>
            <input
              type="number"
              id="Mobile_No"
              name="mobile_number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  h-12"
              placeholder="Enter mobile number"
              required
            />
          </div>
        </div>
        <div className="flex w-full gap-4">
          <div className="w-full">
            <label
              htmlFor="Email"
              className="block mb-1 text-base font-medium text-black ml-0"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="patient_email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  h-12"
              placeholder="Enter email id"
              required
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="Querry"
              className="block mb-1 text-base font-medium text-black ml-0"
            >
              Querry
            </label>
            <input
              type="text"
              id="Message"
              name="message"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  h-12"
              placeholder="Message"
              required
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 sm:flex-col-reverse xs:items-start sm:items-start xs:flex-col-reverse">
      <button
          type="submit"
          className="text-white md:hidden lg:hidden xl:hidden 2xl:hidden 3xl:hidden bg-primary-300 hover:bg-primary-300 font-medium rounded-full xs:w-3/4 sm:w-3/4 w-32  text-center h-12 text-base"
        >
          Book An Appointment 
        </button>
        <button
          type="submit"
          className="text-white sm:hidden xs:hidden bg-primary-300 hover:bg-primary-300 font-medium rounded-full w-[170px] sm:w-auto text-center h-12 text-base"
        >
          Contact Us
        </button>
        <span className="text-base font-normal text-gray-500">
          Get Your Qute or Call: (080) 5332-253-184
        </span>
      </div>
    </div>
   </form>
  );
};
