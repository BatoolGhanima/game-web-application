import useGenres from "../hooks/useGenres";
import useGenreStore from '../state-managment/genreStore'
import Loading from "./loading";
import { useState } from 'react'
import '../styles/genreListStyle.css'
import DataError from "./DataError";
import { HiOutlineViewList } from "react-icons/hi";

const GenreList = () => {

    // get data from api
    const { data, isError, isLoading } = useGenres();

    // to open and close genre list in mini screen
    const [isOpen, setIsOpen] = useState(false)


    const setSelectGenre = useGenreStore((state) => state.setSelectGenre)
    if (isLoading)
        return <div className="mt-32">  <Loading></Loading></div>;
 
 
     if (isError)
       return <div> <DataError error={isError}></DataError></div> 
 

    return (
        <>

            <button
                className="genre-switch lg:hidden"
                onClick={() => setIsOpen(!isOpen)}>
               
                <HiOutlineViewList />
            </button>

            <div className="genre-container sm:hidden md:hidden lg:block ">


                {data?.map((genre) => (
                    <button
                        key={genre.id}
                        type="button"
                        onClick={() => setSelectGenre(genre)}
                        className="genre"
                    >
                        <div>
                            <img src={genre.image_background} alt="" />
                            <h2>
                                {genre.name}
                            </h2>

                        </div>



                    </button>
                ))}
            
            </div>
            {
                    isOpen && (
                        <div className=" mobile-genre  ">
                            {data?.map((genre) => (
                                <button
                                    key={genre.id}
                                    type="button"
                                    onClick={() => setSelectGenre(genre)}
                                    className="genre"
                                >
                                    <div  onClick={() => setIsOpen(false)}>
                                        <img src={genre.image_background} alt="" />
                                        <h2>
                                            {genre.name}
                                        </h2>
                                       

                                    </div>



                                </button>
                            ))}

                        </div>
                    )
                }

        </>);
};

export default GenreList;
