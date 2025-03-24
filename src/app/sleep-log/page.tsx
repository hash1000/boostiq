import WeeklyBarChart from '@/components/BarChart';
import Container from '@/components/container';
import React from 'react';

export default function Page() {
  return (
    <Container>
      <div className="p-6 3xl:p-14">
        <header>
          <div className="text-xl md:text-4xl 3xl:text-6xl pb-5 text-center text-right">
            Log Sleep
          </div>
        </header>

        <div className="flex flex-col lg:flex-row">
          {/* Sleep Hours Section */}
          <div className="bg-[#A0E4FF] px-4 py-5 flex-1">
            <h2 className="text-xl md:text-2xl 3xl:text-4xl">How many hours did you sleep?</h2>
            <div className="flex flex-col pt-6 3xl:pt-9 gap-6 3xl:gap-10">
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(
                (day) => (
                  <div key={day} className="bg-[#DFF2FF] py-3 3xl:py-5 px-3">
                    <span className="text-lg md:text-xl 3xl:text-4xl">{day}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Chart Section */}
          <div className="flex-1 flex justify-center lg:items-end">
            <WeeklyBarChart />
          </div>

          {/* Sleep Quality Section */}
          <div className="bg-[#A0E4FF] px-4 py-5 flex-1">
            <h2 className="text-xl md:text-2xl 3xl:text-4xl">How would you rate the quality of sleep?</h2>
            <div className="flex flex-col justify-between pt-6 3xl:pt-9 gap-6 3xl:gap-10">
              {['Good', 'Okay', 'Poor'].map((quality) => (
                <div key={quality} className="bg-[#DFF2FF] py-3 3xl:py-5 px-3">
                  <span className="text-lg md:text-xl 3xl:text-4xl">{quality}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
