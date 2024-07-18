import React, { useState } from 'react';
import style from './Faq.module.css'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is digital marketing, and why is it important for businesses?",
      answer: "Digital marketing encompasses all online strategies used to promote products or services. It's crucial for businesses as it allows for precise targeting, better engagement, and measurable results, ultimately boosting brand visibility and revenue."
    },
    {
      question: "What role does mobile optimization play in digital marketing?",
      answer: "Mobile optimization ensures that your website and content are accessible and easy to use on mobile devices. This is crucial as a significant portion of users access the internet via mobile devices, and a poor mobile experience can lead to lost customers."
    },
    {
      question: "What is the difference between SEO and PPC?",
      answer: "SEO (Search Engine Optimization) involves optimizing your website to rank higher in organic search results, while PPC (Pay-Per-Click) is a paid advertising model where advertisers pay a fee each time their ad is clicked."
    },
    {
      question: "How do I measure the success of my digital marketing campaigns?",
      answer: "Success can be measured using various metrics such as website traffic, conversion rates, click-through rates, and return on investment (ROI). Tools like Google Analytics can help track these metrics."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    
    <div className={style.faq}>
      {faqs.map((faq, index) => (
        <div key={index} className={style.section}>
          <h3 onClick={() => toggleFAQ(index)}>{faq.question}</h3>
          {openIndex === index && <p>{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
