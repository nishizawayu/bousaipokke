import React, { useState, useRef } from 'react';
import { AiFillCaretRight,AiFillCaretDown,AiFillQuestionCircle } from "react-icons/ai";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    contentRef.current.style.maxHeight = isOpen
      ? '0px'
      : `${contentRef.current.scrollHeight}px`;
  };

  return (
    <div className="accordion border m-4 bg-[#fff] rounded-[20px]">
      <div className="accordion-title flex justify-between items-center p-4 cursor-pointer" onClick={toggleAccordion}>
        <img src="./Q.png" alt="Q" className='w-[4%]'/>
        <h3 className='m-0 font-bold text-xl text-[#284F43] w-[90%]'>{title}</h3>
        <span className=' text-2xl'>{isOpen ? <AiFillCaretDown/> : <AiFillCaretRight/>}</span>
      </div>
      <div className="accordion-content max-h-0 overflow-hidden transition-all pt-0 pb-0 pl-4 pr-4 flex justify-between items-center border-t-2 w-full mx-auto" ref={contentRef}>
        <img src="./A.png" alt="Q" className='w-[4%] pt-[50px] pb-[50px]'/>
        <p className='m-0 p-[1rem 0] w-[94%] text-[20px]'>{content}</p>
      </div>
    </div>
  );
};

export default Accordion;