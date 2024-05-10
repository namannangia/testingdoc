import { useRouter } from "next/router";
import { Container } from "../container";
import { LeftTab } from "./LeftTab";
import { PersonalInformation } from "./PersonalInformation";
import { MyReport } from "./MyReport";
import MyBookings from "./MyBookings";
import { ManageAddress } from "./ManageAddress";
import { ManagePatien } from "./ManagePatient";
import { Card, Card64 } from "../shared/card";

export const TabPages = (props: any) => {
  const renderTabComponent = (value: any) => {
    switch (value) {
      case "personal-information":
        return (
          <>
            <PersonalInformation />
          </>
        );
      case "my-bookings":
        return (
          <>
            <MyBookings />
          </>
        );
      case "my-report":
        return (
          <>
            <MyReport />
          </>
        );
      case "manage-address":
        return (
          <>
            <ManageAddress />
          </>
        );
      case "manage-patients":
        return (
          <>
            <ManagePatien />
          </>
        );

      default:
        return (
          <>
            <PersonalInformation />
          </>
        );
    }
  };
  const router = useRouter();

  return (
    <>
    <Card64>
      <Container>
        <div className="flex gap-12 md:flex-wrap md:flex-col sm:flex-col xs:flex-col md:mx-[30px]">
          <LeftTab />
          <div className="w-full">{renderTabComponent(router?.query?.tab)}</div>
        </div>
      </Container>
     
    </Card64>
    {router.asPath == "/dashboard?tab=my-report" ? (
        <Card64 className="bg-[#F9FAFB]">
          <Container>
            <div className="flex flex-col gap-3 sm:mx-[30px]">
              <h3 className="text-2xl text-gray-800 font-bold">
                IMPORTANT NOTE:
              </h3>
              <p className="text-gray-500 text-lg font-normal">
                Our reports will be available online for a period of 7 days from
                the date given on your report collection slip. After that, you
                can collect the report from your nearest City Center Online
                reports cannot be accessed in following cases:
              </p>
              <ul className="list-disc flex flex-col gap-3 text-gray-500 pl-4">
                <li>Partial or unpaid payments</li>
                <li>Patients on credit basis</li>
                <li>Corporate clients under Pre-employment check-up</li>
                <li>Insurance clients</li>
                <li>Use only internet explore 7.0 or higher version</li>
                <li>Adobe reader 8.0 or higher version must installed.</li>
              </ul>
            </div>
          </Container>
        </Card64>
      ) : (
        ""
      )}
    </>
  );
};
