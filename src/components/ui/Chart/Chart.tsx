import { PolarArea } from "react-chartjs-2";
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from "chart.js";
import { useTranslations } from "next-intl";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

interface PropTypes {
  intake: number;
  burn: number;
  tdee: number;
}

const Chart = ({ intake, burn, tdee }: PropTypes) => {
  const t = useTranslations("dashboard");
  const data = {
    labels: ["Calories Intake", "Calories Burn"],
    datasets: [
      {
        label: "Calories",
        data: [intake, burn],
        backgroundColor: ["#2196F3", "#D32F2F"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "top" as const, // Menentukan posisi legend
      },
    },
    scales: {
      r: {
        suggestedMin: 0, // Nilai minimum
        suggestedMax: tdee, // Ganti dengan nilai maksimal yang diinginkan
        ticks: {
          stepSize: 500, // Jarak antar nilai pada sumbu
        },
      },
    },
  };

  if (!intake && !burn) {
    return (
      <div className="min-h-[250px] flex items-center justify-center text-center">
        <h1 className="text-gray-400">{t("notFound")}</h1>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[250px] md:max-w-[400px] lg:max-w-[500px] h-auto">
      <PolarArea data={data} options={options} />
    </div>
  );
};

export default Chart;
