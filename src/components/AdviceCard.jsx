import React from 'react'
import divider from "./../../public/images/pattern-divider-mobile.svg";
import iconDice from "./../../public/images/icon-dice.svg";

const AdviceCard = ({ item, getAdvice }) => {

  return (
    <div className='advice-card w-11/12 m-auto p-10 rounded-lg relative md:w-3/12'>
      <p className='advice-number text-xs font-medium'>
        ADVICE #{item.id}
      </p>
      <h2 className='text-2xl font-bold p-4'>
        ❝{item.advice}❞
      </h2>
      <div className="line">
        <img className='m-auto' src={divider} alt="divider" />
      </div>
      <button
        className='advice-button p-4 rounded-full'
        onClick={() => getAdvice()}
      >
        <img src={iconDice} alt="button" />
      </button>
    </div>
  )
}

export default AdviceCard