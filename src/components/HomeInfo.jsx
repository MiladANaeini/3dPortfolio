import React from 'react'
import { Link } from 'react-router-dom'

const PopUpBox = ({text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
        </Link>
    </div>
)

const renderPopUp = {
    1: (
        <h1 className={`sm:text-xl sm:leading-snug text-center
         neo-brutalism-blue py-4 px-8 opacity-40 hover:opacity-100 ease-in-out duration-300
          text-white mx-5`}>Hi I am 
         <span className='font-semibold'> Milad</span> 👋
         <br/>
         I Develop Websites and Games
         </h1>
    ),
    2: (
        <PopUpBox
        text="Worked with many companies and picked up 
        many skills on the way"
        link='/about'
        btnText={'Learn more'}
        />
    ),
    3: (
        <PopUpBox
        text="Let multiple projects to success ovet the years"
        link='/projects'
        btnText={'Learn more'}
        />
    ),
    4: (
        <PopUpBox
        text="I'm egar to have a conversation with you about Web/Game development"
        link='/contact'
        btnText={"Let's talk"}
        />
    )
}


const HomeInfo = ({currentStage}) => {
  return (
    <>
    {renderPopUp[currentStage] || null}
    </>
  )
}

export default HomeInfo