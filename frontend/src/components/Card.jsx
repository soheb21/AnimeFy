import { Link, useLocation } from 'react-router-dom'
import { IoIosHeart } from "react-icons/io";
import { useSelector } from 'react-redux';

const Card = ({ title, poster, id, removeiD, handleAddtoFav, handleDeleteAnime, handleUpdateAnime, handleremove }) => {
  const { user, favs } = useSelector((state) => state.user);
  const { pathname } = useLocation()
  return (
    <div className=' hover:outline  my-4 hover:outline-yellow-600 w-60 h-80 shadow-sm shadow-lime-100 rounded-md p-0 md:p-2  hover:border-none transition-all hover:scale-110 '>
      <div className="flex flex-col  gap-1 items-center ">
        <Link to={`/detail/${id}`}>
          <div className="w-[200px] h-[250px] overflow-hidden object-center rounded-md">
            <img className='rounded-sm overflow-hidden w-full h-full object-fill mb-2' src={poster} alt="poster" />
          </div>
        </Link>
        <div className="flex w-full justify-between h-full items-start">
          <p className='font-thin text-lg text-center w-full  '>{title}</p>
          {!removeiD && <button onClick={() => handleAddtoFav(id)} className={`${favs.findIndex(i => i._id === id) > -1 ? "text-red-600 text-2xl" : "text-white text-xl"}  scale-110  text-center mr-4 mt-2`}><IoIosHeart /></button>}

        </div>
        {
          user.role === "admin" && !removeiD
            ? <div className="flex px-4 pb-1 w-full justify-between h-full items-start">
              <Link to={`/edit-anime/${id}`}><button onClick={() => handleUpdateAnime(id)} className='px-2 w-fit bg-gray-50 text-black transition-all hover:scale-110 hover:bg-black hover:text-white font-thin text-sm'>Edit</button></Link>
              <button onClick={() => handleDeleteAnime(id)} className='px-2 w-fit bg-gray-50 text-black transition-all hover:scale-110 hover:bg-black hover:text-white font-thin text-sm'>delete</button>
            </div>
            : pathname !== "/" && <button onClick={() => handleremove(id)} className='px-2 w-fit bg-gray-50 text-black transition-all hover:scale-110 hover:bg-black hover:text-white font-thin text-sm'>remove</button>
        }




      </div>


    </div>
  )
}

export default Card