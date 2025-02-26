import Breadcrumbs from "@/components/ui/Breadcrumbs";
import useReport from "./useReport";
import Image from "next/image";
import { cn } from "@/utils/cn";

const Report = () => {
  const { dataReport, isLoadingDataReport } = useReport();

  return (
    <div className="w-full p-4 lg:p-10 mb-16 lg:mb-0">
      <Breadcrumbs />
      <div className={cn("card flex md:flex-row gap-4 w-full glass mt-4 text-justify p-2 lg:p-6")}>
        <div className="card bg-base-100 w-full md:w-1/4 flex items-center justify-center p-4">
          <Image src="/images/report.svg" alt="report-logo" layout="responsive" width={1} height={1} />
        </div>
        <div
          className={cn("card flex bg-base-100 w-full p-4", {
            "text-center items-center justify-center text-gray-400": !dataReport && isLoadingDataReport,
          })}
        >
          {dataReport ?? "No records found for today"}
        </div>
      </div>
      <div className="card flex md:flex-row gap-4 w-full glass mt-4 text-justify p-2 lg:p-6">
        <div className="card bg-base-100 w-full flex p-4 gap-4">
          <h1 className="text-center text-2xl font-semibold">Glossary</h1>
          <div className="grid grid-col-1  items-center gap-2">
            <h1 className="text-start">1. BMR</h1>
            <h1>
              Basal Metabolic Rate (BMR) is the amount of energy your body needs at rest to maintain essential functions like breathing, circulation, and cell
              production. It is influenced by factors such as age, gender, muscle mass, and genetics. BMR represents the minimum calories required to sustain
              life without physical activity and differs from Total Daily Energy Expenditure (TDEE), which includes movement and exercise.
            </h1>
          </div>
          <div className="grid grid-col-1  items-center gap-2">
            <h1 className="text-start">2. TDEE</h1>
            <h1>
              Total Daily Energy Expenditure (TDEE) is the total number of calories your body burns in a day, including Basal Metabolic Rate (BMR), physical
              activity, and the energy used for digestion (Thermic Effect of Food, TEF). TDEE varies based on factors like age, weight, activity level, and
              metabolism. It is essential for determining calorie intake for weight maintenance, loss, or gain.
            </h1>
          </div>
          <div className="grid grid-col-1  items-center gap-2">
            <h1 className="text-start">2. BMI</h1>
            <h1>
              Body Mass Index (BMI) is a numerical value calculated from a person{"'"}s weight and height used to assess whether an individual has a healthy
              body weight. It is commonly used as a screening tool to categorize people into different weight groups such as underweight normal weight
              overweight and obesity. While BMI provides a general indication of body fat levels it does not consider muscle mass bone density or fat
              distribution making it an estimate rather than a precise measurement of health.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
