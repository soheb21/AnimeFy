import { Link } from 'react-router-dom'
import { IoIosHeart } from "react-icons/io";
import { useSelector } from 'react-redux';

const Card = ({ title, poster, id, removeiD, handleAddtoFav, isFav, handleDeleteAnime, handleUpdateAnime, handleremove }) => {
  const { user } = useSelector((state) => state.user);
  return (
    <div className=' hover:outline  my-4 hover:outline-yellow-600 w-60 h-80 rounded-md p-0 md:p-2  hover:border-none transition-all hover:scale-110 '>
      <div className="flex flex-col  gap-2 items-center ">
        <Link to={`/detail/${id}`}>
          <div className="w-[200px] h-[200px] overflow-hidden object-center rounded-md">
            <img className='rounded-sm overflow-hidden w-full h-full object-fill mb-2' src={poster} alt="poster" />
          </div>
        </Link>
        <div className="flex w-full justify-between h-full items-start">
          <p className='font-thin text-lg  '>{title}</p>
          <button onClick={() => handleAddtoFav(id)} className={isFav ? "text-red-600 scale-110 text-xl text-center" : "text-xl text-center"}><IoIosHeart /></button>
        </div>
        {
          user.role === "admin" && !removeiD
            ? <div className="flex px-4 pb-1 w-full justify-between h-full items-start">
              <Link to={`/edit-anime/${id}`}><button onClick={() => handleUpdateAnime(id)} className='px-2 w-fit bg-gray-50 text-black transition-all hover:scale-110 hover:bg-black hover:text-white font-thin text-sm'>Edit</button></Link>
              <button onClick={() => handleDeleteAnime(id)} className='px-2 w-fit bg-gray-50 text-black transition-all hover:scale-110 hover:bg-black hover:text-white font-thin text-sm'>delete</button>
            </div>
            : <button onClick={() => handleremove(removeiD)} className='px-2 w-fit bg-gray-50 text-black transition-all hover:scale-110 hover:bg-black hover:text-white font-thin text-sm'>remove</button>
        }




      </div>


    </div>
  )
}

export default Card