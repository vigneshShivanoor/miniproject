// src/Faq.js
import React, { useState } from 'react';


const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const faqData = [
    {
      question: 'What is IEEE?',
      answer: 'Institute of Electrical and Electronics Engineering is the worlds largest technical professional organization. It believes in the advancement of technology and has set its sight on the betterment of mankind through it.',
    },
    {
      question: 'How can I get involved?',
      answer: 'Join our IEEE SB Community, attend events, and network with industry leaders to supercharge your career.',
    },
    {
      question: 'Why choose IEEE Geethanjali ?',
      answer: 'We offer unparalleled opportunities for growth, learning, and fun in the tech world.',
    },
    {
      question: 'What events can I expect?',
      answer: 'From hackathons to tech talks, our calendar is packed with exciting opportunities to expand your horizons.',
    },
    {
      question: 'How do I contact you?',
      answer: 'Reach out to us through social media or contact  us!',
    },
  ];

  return (
    <div className="container1">
      <div className="title">Curious Minds Ask</div>
      <div className="faq">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? 'open' : ''}`}
            onClick={() => toggleItem(index)}
          >
            <div className="question">{item.question}</div>
            <div className="answer">{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
