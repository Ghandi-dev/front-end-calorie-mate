import useDailyLog from "./useDailyLog";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CardDaily from "@/components/ui/CardDaily";
import AddDailyLogModal from "./AddDailyLogModal";
import { useState } from "react";
import AddItem from "./AddDailyLogModal/AddItem/AddItem";

const DailyLog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [type, setType] = useState("");
  const [isModalItemOpen, setIsModalItemOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleOpenModalItem = (type: string) => {
    setType(type);
    setIsModalItemOpen(true);
  };

  const handleCloseModalItem = () => {
    setIsModalItemOpen(false);
  };

  const { dataDailyLog, isLoadingDailyLog, refecthDailyLog } = useDailyLog();

  return (
    <div className="w-full p-4 lg:p-10 mb-16 lg:mb-0">
      <Breadcrumbs />
      <div className="flex flex-col lg:flex-row mt-4 gap-4">
        <div className="card glass w-full lg:w-1/2  ">
          <div className="card-body">
            {!dataDailyLog && (
              <div className="flex justify-end">
                <label htmlFor="my_modal_6" className="btn btn-primary text-base-100" onClick={() => handleOpenModal()}>
                  Create Daily
                </label>
              </div>
            )}
            <h1 className="card-title text-2xl text-neutral">Let{"'"}s track your progress today!</h1>
            <div className="flex flex-col lg:flex-row gap-4 mt-4">
              {!isLoadingDailyLog ? (
                <>
                  <CardDaily type="food" data={dataDailyLog?.data[0]?.food} handleOpenModalItem={handleOpenModalItem} />
                  <CardDaily type="activity" data={dataDailyLog?.data[0]?.activity} handleOpenModalItem={handleOpenModalItem} />
                </>
              ) : (
                <>
                  <CardDaily type="food" data={dataDailyLog?.data[0]?.food} isLoading={true} />
                  <CardDaily type="activity" data={dataDailyLog?.data[0]?.activity} isLoading={true} />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <AddDailyLogModal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} refecthDailyLog={refecthDailyLog} />
      <AddItem
        isModalItemOpen={isModalItemOpen}
        refecthDailyLog={refecthDailyLog}
        type={type}
        handleCloseModal={handleCloseModalItem}
        id={dataDailyLog?.data[0]?._id}
      />
    </div>
  );
};

export default DailyLog;
