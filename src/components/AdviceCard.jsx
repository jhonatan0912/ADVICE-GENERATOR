import React from 'react'

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
        <img className='m-auto' src="/src/assets/images/pattern-divider-mobile.svg" alt="" />
      </div>
      <button
        className='advice-button p-4 rounded-full'
        onClick={() => getAdvice()}
      >
        <img src="/src/assets/images/icon-dice.svg" alt="button" />
      </button>
    </div>
  )
}

export default AdviceCard