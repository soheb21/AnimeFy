import { Link } from 'react-router-dom'
import { IoIosHeart } from "react-icons/io";

const Card = ({ title, poster, id, handleAddtoFav, isFav }) => {
  return (
    <div className=' hover:outline  mt-4 hover:outline-yellow-600 w-60 h-80 rounded-md p-0 md:p-2  hover:border-none transition-all hover:scale-110 '>
      <div className="flex flex-col  gap-2 items-center ">
        <Link to={`/detail/${id}`}>
          <div className="w-full h-60 overflow-hidden object-center rounded-md">
            <img src={`http://image.tmdb.org/t/p/w500/${poster}`} alt="poster" />
          </div>
        </Link>
        <div className="flex w-full justify-between h-full items-start">
          <p className='font-thin text-lg  '>{title}</p>
          <button onClick={() => handleAddtoFav(id)} className='text-xl text-center '><IoIosHeart /></button>
        </div>
      </div>


    </div>
  )
}

export default Card