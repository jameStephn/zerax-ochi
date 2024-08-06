import React, { useState } from 'react';

// JSON data
const reviewsData = [
  {
    "company": "Karman Ventures",
    "services": [
      "Investor Deck",
      "Sales Desk"
    ],
    "review": {
      "name": "William Barnes",
      "feedback": "They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5"
    }
  },
  {
    "company": "Planetly",
    "services": [
      "Agency",
      "Big News Deck",
      "Branded Template",
      "Investor Deck",
      "Product Presentation",
      "Sales Deck",
      "Startup pitch"
    ],
    "review": {
      "name": "Nina Walloch",
      "feedback": "Ihor and his team tackled the projects with great professionalism and creativity. They understood our brand value and turned this into excellent slide designs. The process was seamless and very effective, so we decided to roll this out across all our presentation decks. Furthermore, their understanding, professionalism, and creativity have secured a continued partnership."
    }
  },
  {
    "company": "Workiz Easy",
    "services": [
      "Company Presentation",
      "Onboarding presentation",
      "Policy Deck & Playbook",
      "Redesign",
      "Sales Deck"
    ],
    "review": {
      "name": "Tomer Levy",
      "feedback": "OCHI brought a certain level of professionalism into our presentations that we were lacking before. When I showed our management and HR teams the presentations OCHI developed, they were amazed — the final product was exactly what we needed to create a better experience for new employees and our clients."
    }
  },
  {
    "company": "Premium Blend",
    "services": [
      "Branded Template",
      "Illustrations"
    ],
    "review": {
      "name": "Ellen Kim",
      "feedback": "They are truly changing the landscape of presentations!! Fast, effective, and nice humans that listened to every detail of our needs. Creating a deck with their template brings so much joy and ease. We proudly showcase their design in our calls and presentations."
    }
  },
  {
    "company": "Hypercare Systems",
    "services": [
      "Investor Deck",
      "Startup pitch"
    ],
    "review": {
      "name": "Brendan Goss",
      "feedback": "The service received from OCHI was absolutely first-class. Their close attention to detail, and deep thought in terms of narrative, flow, and aesthetics, completely exceeded my expectations, which were very high from the outset. Especially loved and appreciated the creation of visuals, animation, and advice around the look and feel that we are after. We will definitely continue working with Ihor and his team. I cannot recommend them highly enough."
    }
  },
  {
    "company": "Officevibe",
    "services": [
      "Branded Template"
    ],
    "review": {
      "name": "Raff Labrie",
      "feedback": "Ochi has an impressive understanding of what’s needed to do an effective presentation. The stakeholders at work said it’s the best most complete PP template they’ve ever seen. Ochi delivered more than I was expecting and we were really surprised with the quality of his work. Will work with Ochi design again for sure!"
    }
  },
  {
    "company": "Orderlion",
    "services": [
      "Agency",
      "Investor Deck",
      "Product Presentation",
      "Review",
      "Sales Deck"
    ],
    "review": {
      "name": "Stefan Strohmer",
      "feedback": "The result was just amazing! For me, a designer is exceptional when you are so satisfied with the result that you want to look at it the whole day like a kid with a new toy. Ihor and his team delivered exactly that! They are very talented designers who understand the real business problem we are trying to solve and iterate over many drafts to achieve the best possible outcome. We are looking for a long-lasting working relationship!"
    }
  },
  {
    "company": "Black Book",
    "services": [
      "Review",
      "Startup pitch"
    ],
    "review": {
      "name": "Jaci Smith",
      "feedback": "They nailed what our product was all about. We found their ability to workshop all the angles and take on feedback was great and it shows in the final product. Everything moved with a milestone dynamic brief via Notion which was handy to track progress. We’re very happy with the process and the final product. All was handled well and professionally."
    }
  },
  {
    "company": "Trawa Energy",
    "services": [
      "Branding",
      "Investor Deck",
      "Startup pitch"
    ],
    "review": {
      "name": "David Budde",
      "feedback": "We were surprised by the accuracy with which Ochi Design nailed the overall design language that perfectly aligned with our personal preferences and the vision that we have for our young company."
    }
  }
];

const Review = () => {
  const [show, setShow] = useState(Array(reviewsData.length).fill(true));

  const handleClick = (index) => {
    setShow(show.map((s, i) => (i === index ? !s : s)));
  };

  return (
    <div
      data-section
      data-scroll-speed="-.1"
      className="w-full min-h-screen p-10 bg-gray-100"
    >
      <div className="heading mx-10">
        <h3 className="text-5xl font-bold text-gray-800">Clients’ reviews</h3>
      </div>
      <hr className="border-slate-400 mt-10" />
      {reviewsData.map((review, index) => (
        <div key={index}>
          <div className="list">
            <div className="flex justify-between my-3">
              <div className="case">
                <span>{review.company}</span>
                <span className={`left-72 ${show[index] ? "opacity-0" : "relative opacity-100 transition-opacity duration-500"}`}>service</span>
              </div>
              <div className="name">{review.review.name}</div>
              <div className="button relative group">
                <button onClick={() => handleClick(index)}>READ</button>
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></div>
              </div>
            </div>
          </div>
          <div
            className={`listDescrip w-full h-full items-start pt-10 transition-all duration-500 ease-in-out transform ${show[index] ? "opacity-0 scale-95" : "opacity-100 transition-opacity duration-500 leading-loose scale-100 flex"}`}
            style={{ display: show[index] ? 'none' : 'flex' }}
          >
            <div className="flex flex-col justify-end items-end gap-5 w-full pr-28">
              {review.services.map((service, i) => (
                <span key={i} className='border-[1px] px-4 border-zinc-900 rounded-full uppercase tracking-tighter'>{service}</span>
              ))}
            </div>
            <div className="flex flex-col p-2 w-full">
              <img src={`https://ochi.design/wp-content/uploads/2023/02/${review.review.name.replace(" ", "-")}-1-300x300.png`} className='rounded-lg w-20 h-20 mb-3' alt="" />
              <p className="text-start text-gray-600 w-[28vw] text-sm">
                {review.review.feedback}
              </p>
            </div>
          </div>
          <hr className='border-slate-400' />
        </div>
      ))}
    </div>
  );
};

export default Review;
