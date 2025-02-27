import useDailyLog from "./useDailyLog";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CardDaily from "@/components/ui/CardDaily";
import AddDailyLogModal from "./AddDailyLogModal";
import { useState } from "react";
import AddItem from "./AddDailyLogModal/AddItem/AddItem";
import DeleteItem from "./DeleteDailyLogModal/DeleteItem";
import DataPersonalCard from "./DataPersonalCard";
import Chart from "@/components/ui/Chart";
import { useTranslations } from "next-intl";

const DailyLog = () => {
  const t = useTranslations("dailyLog");
  const [modal, setModal] = useState({ isOpen: false, type: "", isAddItemOpen: false, isDeleteItemOpen: false });
  const [selectedId, setIdSelectedId] = useState("");

  const openModal = () => setModal((prev) => ({ ...prev, isOpen: true }));
  const closeModal = () => setModal((prev) => ({ ...prev, isOpen: false }));

  const openModalItem = (type: string) => setModal((prev) => ({ ...prev, type, isAddItemOpen: true }));
  const closeModalItem = () => setModal((prev) => ({ ...prev, isAddItemOpen: false }));

  const openModalDeleteItem = (type: string) => setModal((prev) => ({ ...prev, type, isDeleteItemOpen: true }));
  const closeModalDeleteItem = () => setModal((prev) => ({ ...prev, isDeleteItemOpen: false }));

  const { dataDailyLog, isLoadingDailyLog, refecthDailyLog } = useDailyLog();

  return (
    <div className="w-full p-4 lg:p-10 mb-16 lg:mb-0">
      <Breadcrumbs />
      <div className="flex flex-col lg:flex-row mt-4 gap-4">
        <div className="card glass w-full lg:w-1/2 ">
          <div className="card-body p-2 lg:p-8">
            <h1 className="font-bold text-2xl text-neutral text-center">{t("description")}</h1>
            {!isLoadingDailyLog ? (
              <DataPersonalCard data={dataDailyLog?.data[0]} openModal={openModal} isLoading={isLoadingDailyLog} />
            ) : (
              <div className="skeleton min-h-[178px]"></div>
            )}
            <div className="flex flex-col lg:flex-row gap-4 mt-4">
              {!isLoadingDailyLog ? (
                <>
                  <CardDaily
                    type="food"
                    data={dataDailyLog?.data[0]?.food}
                    handleOpenModalItem={openModalItem}
                    handleOpenDeleteModalItem={openModalDeleteItem}
                    setSelectedId={setIdSelectedId}
                  />
                  <CardDaily
                    type="activity"
                    data={dataDailyLog?.data[0]?.activity}
                    handleOpenModalItem={openModalItem}
                    handleOpenDeleteModalItem={openModalDeleteItem}
                    setSelectedId={setIdSelectedId}
                  />
                </>
              ) : (
                <>
                  <CardDaily isLoading={true} />
                  <CardDaily isLoading={true} />
                </>
              )}
            </div>
          </div>
        </div>
        <div className="card glass w-full lg:w-1/2">
          <div className="card-body p-2 lg:p-8">
            <h1 className="text-2xl font-bold text-center">{t("chart")}</h1>
            {!isLoadingDailyLog ? (
              <div className="card w-full h-full bg-base-100">
                <div className="card-body p-0 lg:p-4 flex justify-center items-center">
                  <Chart intake={dataDailyLog?.data[0]?.totalCaloriesIn} burn={dataDailyLog?.data[0]?.totalCaloriesOut} tdee={dataDailyLog?.data[0]?.tdee} />
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <div className="card w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-full lg:h-[567px] skeleton" />
              </div>
            )}
          </div>
        </div>
      </div>
      <AddDailyLogModal isModalOpen={modal.isOpen} handleCloseModal={closeModal} refecthDailyLog={refecthDailyLog} />
      <AddItem
        isModalItemOpen={modal.isAddItemOpen}
        refecthDailyLog={refecthDailyLog}
        type={modal.type}
        handleCloseModal={closeModalItem}
        id={dataDailyLog?.data[0]?._id}
      />
      <DeleteItem
        handleCloseModal={closeModalDeleteItem}
        selectedId={selectedId}
        isModalItemOpen={modal.isDeleteItemOpen}
        refecthDailyLog={refecthDailyLog}
        dailyLogId={dataDailyLog?.data[0]?._id}
        type={modal.type}
      />
    </div>
  );
};

export default DailyLog;
