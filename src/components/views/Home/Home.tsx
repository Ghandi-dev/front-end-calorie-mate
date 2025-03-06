import Image from "next/image";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Home = () => {
  const router = useRouter();
  const t = useTranslations("home");

  return (
    <Fragment>
      <div className="hero bg-base-100 lg:min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse mb-12">
          <Image src="/images/logo.png" alt="hero" width={800} height={800} />
          <div>
            <motion.h1
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
              className="text-2xl md:text-5xl font-bold text-accent"
            >
              {t("hero.title")}
            </motion.h1>
            <p className="py-6 lg:text-xl">{t("hero.description")}</p>
            <div className="flex items-center gap-4">
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
                className="btn btn-primary text-base-100"
                onClick={() => router.push("/auth/register")}
              >
                {t("hero.getStarted")}
              </motion.button>
              <p className="text-sm font-semibold leading-tight hidden md:block">{t("hero.motivation")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mx-auto bg-primary py-10">
        <h2 className="text-xl md:text-3xl font-bold text-base-100">{t("whySection.title")}</h2>
      </div>
      <section className="text-center m-0 px-4 py-16">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true }}
              className="glass rounded-2xl shadow-xl mr-5 p-4 flex items-center justify-center"
            >
              <Image src="/images/illustration/analys.svg" alt="hero" width={400} height={400} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true }}
              className="text-left flex flex-col gap-4"
            >
              <h3 className="text-xl md:text-3xl text-primary font-bold">{t("whySection.feature1.title")}</h3>
              <p className="text-content max-w-2xl">{t("whySection.feature1.description")}</p>

              <h3 className="text-xl md:text-3xl text-primary font-bold">{t("whySection.feature2.title")}</h3>
              <p className="text-content max-w-2xl">{t("whySection.feature2.description")}</p>

              <h3 className="text-xl md:text-3xl text-primary font-bold">{t("whySection.feature3.title")}</h3>
              <p className="text-content max-w-2xl">{t("whySection.feature3.description")}</p>

              <h3 className="text-xl md:text-3xl text-primary font-bold">{t("whySection.feature4.title")}</h3>
              <p className="text-content max-w-2xl">{t("whySection.feature4.description")}</p>
            </motion.div>
          </div>
        </div>
      </section>
      <div className="flex items-center justify-center mx-auto bg-primary py-10">
        <h2 className="text-xl md:text-3xl font-bold text-base-100 text-center">{t("stepsSection.title")}</h2>
      </div>
      <section className="text-center m-0 px-4 py-16 ">
        <div className="flex flex-col items-center justify-center gap-12 mt-12">
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-6"
          >
            <div className="w-64 h-64 rounded-lg overflow-hidden shadow-lg p-4 flex items-center justify-center">
              <Image src="/images/illustration/fitness.svg" alt={t("stepsSection.step1.title")} width={256} height={256} />
            </div>
            <div className="text-left">
              <h3 className="text-3xl text-primary font-bold">{t("stepsSection.step1.number")}</h3>
              <h4 className="text-xl font-semibold">{t("stepsSection.step1.title")}</h4>
              <p className="text-content max-w-2xl">{t("stepsSection.step1.description")}</p>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row-reverse items-center gap-6"
          >
            <div className="w-64 h-64 rounded-lg overflow-hidden shadow-lg p-4 flex items-center justify-center">
              <Image src="/images/illustration/personal_goal.svg" alt={t("stepsSection.step2.title")} width={256} height={256} />
            </div>
            <div className="text-left">
              <h3 className="text-3xl text-primary font-bold">{t("stepsSection.step2.number")}</h3>
              <h4 className="text-xl font-semibold">{t("stepsSection.step2.title")}</h4>
              <p className="text-content max-w-2xl">{t("stepsSection.step2.description")}</p>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-6"
          >
            <div className="w-64 h-64 rounded-lg overflow-hidden shadow-lg p-4 flex items-center justify-center">
              <Image src="/images/illustration/target.svg" alt={t("stepsSection.step3.title")} width={256} height={256} />
            </div>
            <div className="text-left">
              <h3 className="text-3xl text-primary font-bold">{t("stepsSection.step3.number")}</h3>
              <h4 className="text-xl font-semibold">{t("stepsSection.step3.title")}</h4>
              <p className="text-content max-w-2xl">{t("stepsSection.step3.description")}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
