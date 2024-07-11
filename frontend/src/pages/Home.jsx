import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Header from '../components/Header'

const Home = () => {
  const url = "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
  const [data, setdata] = useState([])
  const [isFav, setIsFav] = useState(false)

  const fetehData = async () => {
    try {
      const res = await fetch(url);
      const result = await res.json();
      setdata(result)

    } catch (error) {
      console.log(error)

    }
  }
  useEffect(() => {
    fetehData();

  }, [])
  const handleAddtoFav = (id) => {
    console.log("hello", id)
    if (id) {
      setIsFav(!isFav)

    }


  }
  console.log(data.results)
  return (
    <div className='h-full w-full  border overflow-hidden  md:p-4 bg-black text-white'>
      <Header />
      <div className="flex flex-wrap gap-3 justify-center items-center " >
        {
          data?.results?.map((item) => <Card
            key={item.id}
            poster={item?.poster_path}
            title={item?.title}
            id={item?.id}
            handleAddtoFav={handleAddtoFav}
            isFav={isFav}

          />)
        }

      </div>


    </div>
  )
}

export default Home