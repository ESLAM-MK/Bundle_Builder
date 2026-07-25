import React from 'react';
import StepList from '../components/features/builder/StepList';
import ReviewPanel from '../components/features/review/ReviewPanel';

const BundleBuilder = () => {
  return (
   <div className=" bg-[#ffffff] py-6 md:py-8   lg:pt-[49.36px]">
      <div className="max-w-[1440px] mx-auto"> 
        <div className="text-center mb-6 lg:hidden">
          <h1 className="text-2xl font-black text-gray-900 tracking-tight">
            Let’s get started!
          </h1>
        </div>
        <div className="flex flex-col   lg:flex-row gap-[19px] justify-center items-start">
          <section className="w-full lg:w-[768px] space-y-4">
            <StepList />
          </section>
          <aside className="w-full lg:w-[399px] sticky top-6 ">
            <ReviewPanel />
          </aside>

        </div>
      </div>
    </div>
  );
};

export default BundleBuilder;