import useGenres from "../hooks/useGenres";
import store from '../state-managment/store'
import Loading from "./loading";
import { useState } from 'react'
import '../styles/genreListStyle.css'
import { HiOutlineViewList } from "react-icons/hi";

const GenreList = () => {
    const { data, isLoading } = useGenres();
    const [isOpen, setIsOpen] = useState(false)
    const setSelectGenre = store((state) => state.setSelectGenre)
    if (isLoading)
        return (
            <div role="status">
                <Loading></Loading>

                <span className="sr-only">Loading...</span>

            </div>
        );

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
