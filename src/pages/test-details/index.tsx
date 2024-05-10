import { baseURL, testDetailsById } from '@/components/ApiData/ApiFunctions'
import AdditionalInfo from '@/components/TestDetails/AdditionalInfo'
import HeroTestDetails from '@/components/TestDetails/HeroSec'
import Reports from '@/components/TestDetails/Reports'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import { useParams } from "react-router-dom";

const index = () => {
  const [testDetails, setTestDetails] = useState<any[]>([]);
  const router = useRouter();
  ///const params = useParams();
  console.log(router.query.id && router.query.CatId);
  //console.log(router.query.CatId);
  //console.log(params.query);

  // useEffect(() => { 
  //   axios.get(baseURL + testDetailsById).then((res) => {
  //     setTestDetails(res.data.data);
  //   });
  // }, []);

  useEffect(() => {
    //axios.get(baseURL + testDetailsById).then((res) => {
    axios.get(`http://65.2.95.0:3004/v1/test/get-test-byId/${router.query.id}`).then((res) => {
      //axios.get(`http://65.2.95.0:3004/v1/test/get-test-byId/65239b68738c10fddae0bebc`).then((res) => {
      setTestDetails(res.data.data);
    });
  }, []);

  //FaqSectionAPI
  const [faqDetails, setFaqDetails] = useState<any[]>([]);
  useEffect(() => {
    axios.get(`http://65.2.95.0:3004/v1/faq/getBy-testID/${router.query.id}`).then((res) => {
      setFaqDetails(res.data.data.faqTestIdData);
    });
  }, []);

  //TestByCategory
  const [testbyCategory, setTestbyCategory] = useState<any[]>([]);
  useEffect(() => {
    axios.get(`http://65.2.95.0:3004/v1/test/bycategory/${router.query.CatId}`).then((res) => {
      setTestbyCategory(res.data.data.categoryData);
    });
  }, []);

  // const router = useRouter();
  // console.log(router.query.id);
  // console.log(router.query.Catid);

  return (
    <>
      <Header />
      {testDetails.map((item, key) => {
        return (
          <HeroTestDetails
            key={item._id}
            title={item.meta_title}
            description={item.test_components}
            discount={Math.round(((item.mrp - item.offer_price) / item.mrp) * 100).toString()}
            sellingPrice={item.offer_price}
            purchasePrice={item.mrp}
          />
        );
      })}
      {testDetails.map((item, key) => {
        return (
          <AdditionalInfo
            key={item._id}
            SampleType={item.collection_type}
            TestComponents={item.test_components}
            Method={item.test_type}
            ReportTime={item.report}
            NoOfParameters={item.no_of_parameters}
            Availability="Availability"
            Speciality={item.department}
            SampleReport={item.reporting}
          />
        );
      })}

      {testDetails.map((item, key) => {
        return (
          <Reports
            key={item._id}
            reportHrs={item.no_of_parameters}
            CategoryId={item.cat_id}
            TestNum={item.number_of_star}
            Preparation={item.preparation}
            AlsoKnownAs={item.also_known_as}
            FaqData={faqDetails}
            TestbyCategory={testbyCategory}
          />
        );
      })}
      <Footer />
    </>
  )
}

export default index