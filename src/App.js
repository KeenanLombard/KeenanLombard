import "./App.css";
import Timeline from "./components/Timeline";
import Education from "./components/Education";

function App() {
  const text = {
    about:
      "I am an aspiring software engineer with a strong foundation in software development and sales. I am looking for a role that allows me to grow my skills as an engineer and provide me with mentorship. I believe I am a fast learner with a good work ethic and always focus on producing the best work I can. I am not afraid to ask questions and critique my own code. In my experience with software jobs, I mostly worked with JavaScript (my first internship I worked with Vue and in my second internship I worked with React and a little python). Some personal hobbies I have are going to the gym, fishing, gaming and driving motorcycles. Well, that’s me...",
    skills: [
      "SQL",
      "Javascript",
      "C# .Net",
      "Python",
      "UI/UX",
      "React",
      "Vue",
      "Next",
      "Nuxt",
      "mangodb",
      "Agile",
    ],
  };
  const skillBlock = text.skills.map((skill) => (
    <div className='section-sm text-sm font-semibold cursor-pointer'>
      {skill}
    </div>
  ));
  return (
    <div className='App topo'>
      <section className='section p-5 m-5 w-5/6 mx-auto my-auto'>
        <div className='flex flex-col justify-between h-full'>
          <div className='flex justify-between'>
            <h1 className='text-xl my-5 text-blue-500'>Keenan Lombard</h1>
            <button className='my-auto mx-4 hover:text-blue-500'>
              Download PDF CV
            </button>
          </div>
          <div className='flex flex-col'>
            <h1 className='text-3xl my-5 text-blue-500'>A little about me</h1>
            <p className='m-auto'>{text.about}</p>
          </div>
          <div className='flex justify-between my-5'>
            <div className='flex hover:text-blue-500'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                class='size-6'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z'
                />
              </svg>
              <p className='mx-5'> keenanlombardd2@gmail</p>
            </div>
            <div className='flex hover:text-blue-500'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                class='size-6'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z'
                />
              </svg>
              <p className='mx-5'>071 586 8386</p>
            </div>
            <div className='flex hover:text-blue-500'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                class='size-6'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5'
                />
              </svg>
              <p className='mx-5'>github/keenanlombard</p>
            </div>
          </div>
        </div>
      </section>
      <section className='section p-5 m-5 w-5/6 mx-auto my-auto'>
        <div className='flex justify-between'>
          <h1 className='text-3xl my-5 text-blue-500'>Education</h1>
          <button className='my-auto mx-4 hover:text-blue-500'>
            Download PDF Transcripts
          </button>
        </div>
        <Education />
      </section>
      <section className='section p-5 m-5 w-5/6 mx-auto my-auto'>
        <h1 className='text-3xl my-5 text-blue-500'>Experience</h1>
        <Timeline />
      </section>
      <section className='section p-5 pb-10 w-5/6 mx-auto my-auto'>
        <h1 className='text-3xl my-5 text-blue-500'>Technical Skills</h1>
        <div className='grid grid-cols-5 gap-5 text-center'>{skillBlock}</div>
      </section>
    </div>
  );
}

export default App;
