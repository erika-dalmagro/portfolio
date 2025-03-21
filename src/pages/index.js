import { FiArrowDownCircle } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import anime from "animejs";

const AppBanner = () => {
  const { t, i18n } = useTranslation();
  const lettersRef = useRef(null);
  const [isReady, setIsReady] = useState(false); 

  useEffect(() => {
    if (lettersRef.current) {
      lettersRef.current.innerHTML = lettersRef.current.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
      
      anime({
        targets: ".letter",
        translateY: ['1.3em', 0],
        translateZ: 0,
        opacity: [0, 1],
        duration: 750,
        delay: (el, i) => 80 * i,
      })

      anime
      .timeline({ loop: false })
      .add({
        targets: '.presentation',
        translateY: ['1.3em', 0],
        translateZ: 0,
        opacity: [0, 1],
        duration: 950,
        delay: (el, i) => 1400 + 80 * i,
      })
      .add({
        targets: ['.header', '.description', '.resume', '.footer'],
        translateX: ['-1.3em', 0],
        translateZ: 0,
        opacity: [0, 1],
        duration: 950,
        delay: (el, i) => 80 * i,
      }) 
      
      
      setIsReady(true);
    }
  }, [t]);
  
  return (
   <div className="border-b-2 border-primary-light dark:border-secondary-dark container mx-auto py-8 sm:pt-16 sm:pb-20 transition duration-300">
      <section className="flex flex-col gap-10 sm:justify-between items-center sm:flex-row mt-14 md:mt-2">
        <div className="w-full flex flex-col justify-center items-center">
          <p
            ref={lettersRef}
            className={`letters font-general-semibold text-3xl lg:text-4xl xl:text-5xl text-center sm:text-left text-ternary-dark dark:text-white transition-opacity duration-300 ${isReady ? 'opacity-100' : 'opacity-0'}`}
          >
            {t("home.title")}
          </p>

          <p className="presentation font-general-medium mt-8 text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left leading-normal text-[#6A8D17] dark:text-[#C4EF00]">
            {t("home.subtitle")}
          </p>

          <p className="description font-general-medium mt-12 text-lg md:text-xl text-center leading-normal text-ternary-dark dark:text-white w-2/3">
            {t("home.text")}
          </p>

          <div className="resume flex gap-4">
            <a
              download="erika.pdf"
              href={`/files/erika_${i18n.language}.pdf`}
              className="font-general-medium flex justify-center items-center w-48 mt-14 mb-8 sm:mb-0 text-lg border border-[#6A8D17] dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-secondary-light text-[#6A8D17] duration-500"
              aria-label="Download Resume"
            >
              <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100" />

              <span className="sm:text-lg font-general-medium duration-100">
                {t("home.downloadCV")}
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppBanner;
