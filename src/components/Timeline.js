import React from "react";
import "../App.css";

const TimelineItem = ({ title, subtitle, description, date }) => (
  <div className='mb-1 section-sm typo'>
    <div className='p-5'>
      <div className='flex items-center mb-1'>
        <div className='rounded-full h-8 w-8 flex items-center justify-center'>
          <span className='text-white text-sm'>{date}</span>
        </div>
        <div className='ml-4'>
          <h2 className='text-lg font-semibold'>{title}</h2>
          <h3 className='text-sm text-neutral-500'>{subtitle}</h3>
        </div>
      </div>
      <p className=''>{description}</p>
    </div>
  </div>
);

const Timeline = () => {
  return (
    <div className=''>
      <div className='grid grid-cols-2 gap-5'>
        <TimelineItem
          title='Woodies'
          subtitle='Sales'
          description='Interned at Diversitude, gaining experience in software development and project management.'
          date='2022-2023'
        />
        <TimelineItem
          title='BlueRaccoon'
          subtitle='Web Developer'
          description='Worked as a web developer for 8 months, focusing on frontend development and client-side scripting.'
          date='2023-2024'
        />
        <TimelineItem
          title='Diversitude'
          subtitle='Internship'
          description='Interned at Diversitude, gaining experience in software development and project management.'
          date='2022-2023'
        />
        <TimelineItem
          title='Shannanigans'
          subtitle='Sales'
          description='Interned at Diversitude, gaining experience in software development and project management.'
          date='2022-2023'
        />
        {/* Add more TimelineItems for other experiences */}
      </div>
    </div>
  );
};

export default Timeline;
