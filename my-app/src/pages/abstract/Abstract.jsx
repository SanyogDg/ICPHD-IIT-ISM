import React from 'react';
import '../abstract/abstract.css'
import { FiDownload } from 'react-icons/fi';
function abstracttemp() {
  const fileUrl = './Abstract_Template.pdf';
  window.open(fileUrl, '_blank');
};

const emailfun = () => {
  window.location.href = "mailto:icphd24@gmail.com";
}

function Abstract() {
  return (
    <div className='flex flex-col justify-center items-center '>
     
      <div className='max-w-5xl mx-2 mt-20 p-4 gradient-border'>
        <h1 className='text-xl font-bold text-center'>
        Exciting Update ! 
        </h1>
        <div className='mt-2 font-semibold'>
        We are thrilled to announce that selected papers from ICPHD2024 will have the opportunity to be published in a special issue of 𝐒𝐩𝐫𝐢𝐧𝐠𝐞𝐫 𝐍𝐚𝐭𝐮𝐫𝐞 𝐉𝐨𝐮𝐫𝐧𝐚𝐥𝐬 following a detailed evaluation by the conference's technical committee.
        </div>
      </div>


      <div className="max-w-5xl mx-auto px-4 py-8 bg-white shadow-md  abstract " >
        <div className="text-center mb-6">
          <div className='h-abst'>

            <h1 className="text-3xl font-bold text-white">ABSTRACT SUBMISSION</h1>
          </div>

        </div>


        <div className="text-gray-700 mb-6 mx-auto max-w-4xl px-8 guidelines">
          <h2 className="text-3xl font-bold mb-6 ">Abstract Submission Guidelines</h2>

          <h3 className="text-2xl font-bold mt-4 mb-2 ">Author Information:</h3>
          <p className="text-lg leading-relaxed">
            Provide the full name and email address of the corresponding author.
          </p>

          <h3 className="text-2xl font-bold mt-4 mb-2">Title of the Abstract:</h3>
          <p className="text-lg leading-relaxed">
            Title should be concise and reflective of the research content.
          </p>

          <h3 className="text-2xl font-bold mt-4 mb-2">Submission Theme:</h3>
          <p className="text-lg leading-relaxed">
            Select the most appropriate theme for your abstract from the provided list (e.g., Drilling and Production Technologies, Geomechanics & Hydraulic Fracturing, etc.).
          </p>

          <h3 className="text-2xl font-bold mt-4 mb-2">Abstract Content:</h3>
          <p className="text-lg leading-relaxed">
            The abstract should be up to 300 words, summarizing the research objectives, methods, results, and conclusions.
          </p>

          <h3 className="text-2xl font-bold mt-4 mb-2">Additional Information:</h3>
          <p className="text-lg leading-relaxed">
            Abstract is original and has not been submitted to another conference or journal.
          </p>
          <div className='mt-5'>
            <span className="text-lg leading-relaxed p-btn">
              If you encounter any errors while submitting your abstract, please mail here
            </span>
            <span className="font-bold emailcss cursor-pointer text-lg" onClick={emailfun}>
              : icphd24@gmail.com
            </span>
          </div>



          <div>
            <a
              className='down-btn'
              target="_blank"
              rel="noopener noreferrer"
              onClick={abstracttemp}
            >
              <span className="mr-2 p-6 down-span ">Abstract Template</span>
              <FiDownload className="w-5 h-5 btn-down " />
            </a>


          </div>

        </div>
        <a
          className="my-[1rem] button-abs h-[3rem] text-[1.5rem] font-semibold text-white rounded-[2rem] flex items-center justify-center animate-color-load"
          href="https://forms.gle/NaZKUwMDTGwPjQiM9"
          target="_blank"
          rel="noopener noreferrer"
        >
          Submit Abstract
        </a>

      </div>
    </div>
  );
}

export default Abstract;
