import React from 'react'

const ExperienceCard = ({ company, role, date, description }) => {
  return (
    <div className="card w-full group flex">
      <div className="w-10 h-[6px] bg-primary-light dark:bg-ternary-dark mt-16 relative hidden sm:block">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-primary-light dark:bg-ternary-dark bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-secondary-light dark:bg-primary-dark inline-flex group-hover:bg-[#6A8D17] dark:group-hover:bg-[#C4EF00] duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-primary-light dark:bg-ternary-dark bg-opacity-50 dark:hover:hover-opacity hover:hover-opacity duration-300 rounded-lg px-6 lg:px-10 flex flex-col justify-center gap-6 lg:gap-8 shadow-lg pt-8 pb-10">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="flex flex-col justify-between text-center sm:text-start">
            <h3 className="text-2xl sm:text-2xl font-semibold">
              {company}
            </h3>
            <p className="sm:text-sm mt-2 mb-4 sm:mb-0 text-[#6A8D17] dark:text-[#C4EF00]">
              {role}
            </p>
          </div>
          <div>
            <p className="px-4 py-2 bg-ternary-light bg-opacity-10 dark:bg-primary-dark rounded-lg shadow-lg justify-center items-center sm:text-sm font-medium text-[#6A8D17] dark:text-[#C4EF00]">
              {date}
            </p>
          </div>
        </div>
        <p className="text-base font-medium text-justify">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ExperienceCard