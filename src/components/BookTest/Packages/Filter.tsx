import { Accordion } from "@/components/shared/Accordion";
import { CheckBox } from "@/components/shared/CheckBox";
import HrLine from "@/components/shared/HrLine";

export const TestFilter = () => {
  return (
    <div className="sm:hidden xs:hidden max-h-[1300px] rounded-2xl border border-gray-200 w-[23%]">
      <div className="text-2xl font-semibold text-gray-800 py-5 px-6 bg-gray-50 border-b rounded-tl-2xl rounded-tr-2xl border-gray-200">
        Filter
      </div>
      <div className="p-6">
        <div className="flex flex-col gap-3">
          <Accordion title="Gender">
            <div className="mt-3 flex gap-2 flex-col">
              <CheckBox label="Men" />
              <CheckBox label="Women" />
              <CheckBox label="Other" />
            </div>
          </Accordion>
          <HrLine />
          <Accordion title="Tests by Health Risk">
            <div className="mt-3 flex gap-2 flex-col">
              <CheckBox label="Heart" />
              <CheckBox label="Bone & Joint" />
              <CheckBox label="Kidney" />
              <CheckBox label="Thyroid" />
              <CheckBox label="X-Ray" />
              <CheckBox label="Liver" />
              <CheckBox label="Eyes" />
            </div>
          </Accordion>
          <HrLine />
          <Accordion title="Test by Specialty">
            <div className="mt-3 flex gap-2 flex-col">
              <CheckBox label="Hematologist" />
              <CheckBox label="Oncologist" />
              <CheckBox label="Cardiologist" />
              <CheckBox label="Gynecologist" />
              <CheckBox label="Neurologist" />
              <CheckBox label="Anesthesiologists" />
              <CheckBox label="Pathologists" />
              <CheckBox label="Pulmonologists" />
              <CheckBox label="Radiologists" />
              <CheckBox label="Urologists" />
            </div>
          </Accordion>
          <HrLine />
          <Accordion title="Test by Symptoms">
            <div className="mt-3 flex gap-2 flex-col">
              <CheckBox label="Allergy" />
              <CheckBox label="Fever" />
              <CheckBox label="Cough" />
              <CheckBox label="Muscle pain" />
              <CheckBox label="Chest pain" />
              <CheckBox label="AIDS" />
            </div>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
export const TestMobileFilter = () => {
  return (
    <div className="rounded-2xl border border-gray-200 w-full">
      <div className="text-2xl font-semibold text-gray-800 py-5 px-6 bg-gray-50 border-b rounded-tl-2xl flex justify-between items-center rounded-tr-2xl border-gray-200">
        Filter
        <span className="text-base font-normal text-primary-300">Clear all</span>
      </div>
      <div className="p-6">
        <div className="flex flex-col gap-6">
          <Accordion title="Gender">
            <div className="mt-3 flex gap-2 flex-col">
              <CheckBox label="Men" />
              <CheckBox label="Women" />
              <CheckBox label="Other" />
            </div>
          </Accordion>
          <Accordion title="Tests by Health Risk">
            <div className="mt-3 flex gap-2 flex-col">
              <CheckBox label="Heart" />
              <CheckBox label="Bone & Joint" />
              <CheckBox label="Kidney" />
              <CheckBox label="Thyroid" />
              <CheckBox label="X-Ray" />
              <CheckBox label="Liver" />
              <CheckBox label="Eyes" />
            </div>
          </Accordion>
          <Accordion title="Test by Specialty">
            <div className="mt-3 flex gap-2 flex-col">
              <CheckBox label="Hematologist" />
              <CheckBox label="Oncologist" />
              <CheckBox label="Cardiologist" />
              <CheckBox label="Gynecologist" />
              <CheckBox label="Neurologist" />
              <CheckBox label="Anesthesiologists" />
              <CheckBox label="Pathologists" />
              <CheckBox label="Pulmonologists" />
              <CheckBox label="Radiologists" />
              <CheckBox label="Urologists" />
            </div>
          </Accordion>
          <Accordion title="Test by Symptoms">
            <div className="mt-3 flex gap-2 flex-col">
              <CheckBox label="Allergy" />
              <CheckBox label="Fever" />
              <CheckBox label="Cough" />
              <CheckBox label="Muscle pain" />
              <CheckBox label="Chest pain" />
              <CheckBox label="AIDS" />
            </div>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
