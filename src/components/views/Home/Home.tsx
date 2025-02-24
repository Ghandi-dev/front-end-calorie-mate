import Image from "next/image";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const router = useRouter();

  return (
    <Fragment>
      <div className="hero bg-base-100 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image src="/images/logo.png" alt="hero" width={800} height={800} />
          <div>
            <motion.h1
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
              className="text-2xl md:text-5xl font-bold text-secondary"
            >
              Track Your Calories, Achieve Your Health Goals!
            </motion.h1>
            <p className="py-6 ">
              CalorieMate helps you monitor your daily calorie intake and activities effortlessly, so you can stay fit and healthy every day.
            </p>
            <div className="flex items-center gap-4">
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
                className="btn btn-primary text-base-100"
                onClick={() => router.push("/auth/register")}
              >
                👉 Get Started Now
              </motion.button>
              <p className="text-sm font-semibold leading-tight hidden md:block">- Become the best version of yourself!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mx-auto bg-primary py-10">
        <h2 className="text-xl md:text-3xl font-bold text-base-100">Why CalorieMate?</h2>
      </div>
      <section className="text-center m-0 px-4 py-16">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true }}
              className="glass rounded-2xl shadow-xl mr-5"
            >
              <Image src="/images/logo.png" alt="hero" width={400} height={400} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true }}
              className="text-left flex flex-col gap-4"
            >
              <h3 className="text-xl md:text-3xl text-primary font-bold">1. AI Integration</h3>
              <p className="text-neutral max-w-2xl">
                CalorieMate leverages artificial intelligence to optimize your health journey. AI analyzes your dietary habits and workout patterns to provide
                personalized recommendations, ensuring you stay on track with your health goals effortlessly.
              </p>

              <h3 className="text-xl md:text-3xl text-primary font-bold">2. Easy Calorie Tracking</h3>
              <p className="text-neutral max-w-2xl">
                Track your calorie intake with ease! CalorieMate allows you to input meals and receive accurate calorie estimates instantly. Whether you{"'"}re
                dining out or cooking at home, logging your meals has never been simpler.
              </p>

              <h3 className="text-xl md:text-3xl text-primary font-bold">3. Workout & Calorie Burn Tracking</h3>
              <p className="text-neutral max-w-2xl">
                Stay informed about your calorie expenditure. CalorieMate integrates with fitness trackers to monitor your workouts, helping you understand how
                much energy you{"'"}re burning daily. This enables you to maintain a balanced calorie intake and optimize your fitness routine.
              </p>

              <h3 className="text-xl md:text-3xl text-primary font-bold">4. AI-Powered Recipe Suggestions</h3>
              <p className="text-neutral max-w-2xl">
                Struggling with meal planning? Let AI assist you! CalorieMate suggests personalized recipes based on your nutritional goals and dietary
                preferences. Whether you{"'"}re aiming for weight loss, muscle gain, or balanced nutrition, AI tailors meal ideas that align with your health
                objectives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <div className="flex items-center justify-center mx-auto bg-primary py-10">
        <h2 className="text-xl md:text-3xl font-bold text-base-100">Hit your health goals in 1-2-3</h2>
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
            <div className="w-64 h-64 rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/logo.png" alt="Track food, fitness & fasting" width={256} height={256} />
            </div>
            <div className="text-left">
              <h3 className="text-3xl text-primary font-bold">1</h3>
              <h4 className="text-xl font-semibold">Track food, fitness & fasting</h4>
              <p className="text-neutral max-w-2xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda aut sed quos ab consequuntur, facilis rem reprehenderit possimus magni
                voluptatem, voluptatum voluptas blanditiis nam aliquam quod nesciunt iure, aspernatur illo?
              </p>
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
            <div className="w-64 h-64 rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/logo.png" alt="Learn what works" width={256} height={256} />
            </div>
            <div className="text-left">
              <h3 className="text-3xl text-primary font-bold">2</h3>
              <h4 className="text-xl font-semibold">Learn what works</h4>
              <p className="text-neutral max-w-2xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda aut sed quos ab consequuntur, facilis rem reprehenderit possimus magni
                voluptatem, voluptatum voluptas blanditiis nam aliquam quod nesciunt iure, aspernatur illo?
              </p>
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
            <div className="w-64 h-64 rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/logo.png" alt="Track food, fitness & fasting" width={256} height={256} />
            </div>
            <div className="text-left">
              <h3 className="text-3xl text-primary font-bold">3</h3>
              <h4 className="text-xl font-semibold">Track food, fitness & fasting</h4>
              <p className="text-neutral max-w-2xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda aut sed quos ab consequuntur, facilis rem reprehenderit possimus magni
                voluptatem, voluptatum voluptas blanditiis nam aliquam quod nesciunt iure, aspernatur illo?
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
