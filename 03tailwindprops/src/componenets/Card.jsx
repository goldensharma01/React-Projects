import React from 'react'

// function Card(props) {
// console.log(props.username);

function Card({username, btnText="visit me"}) {

    console.log(username);
  return (
    <div className="relative w-[320px] h-[450px] rounded-2xl overflow-hidden shadow-xl transition transform hover:scale-105 duration-500">

      <img src='https://www.imageconsultinginstitute.com/images/blogs/edwed-20240517130459-1_large.jpg'
      alt='AirMax Pro'
      className="w-full h-full object-cover"
      />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

      
      <div className="absolute bottom-6 left-6 right-6 text-white">
        <h1 className="text-2xl font-semibold mb-2 drop-shadow">{username}</h1>
        <p className="text-sm mb-4 leading-snug drop-shadow">
          Lorem ipsum dolor sit amet
          consectetur adipisicing 
          elit. Excepturi, debitis?
        </p>
        <button className="px-4 py-2 bg-white/10 border border-white rounded-md hover:bg-white/20 transition text-white text-sm font-semibold backdrop-blur">
          {btnText} →
        </button>
      </div>
     </div>
  )
}

export default Card;