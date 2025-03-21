import { useRef, useState } from "react";
import store from '../state-managment/store'

import '../styles/searchStyle.css'

import { IoIosSearch } from "react-icons/io";
const SearchInput = () => {
    const setSearchText = store((state) => state.setSearchText)
    const ref = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <form
            className="w-full"
            onSubmit={(event) => {
                event.preventDefault();
                if (ref.current) setSearchText(ref.current.value);
            }}
        >

            {/* search icon */}
            {/* <span className="searchIcon">
                <IoIosSearch  onClick={() => { setIsOpen(!isOpen) }} />
            </span>
             */}

            {/* {isOpen && (

                <div>
                    <div className="relative">
                        
                        <input
                            ref={ref}
                            type="search"
                            id="default-search"
                            className="search-input"
                            placeholder="Search ..."
                            required
                        />
                    </div>
                </div>

            ) */}

            <div>
                <div className="relative">

                    <input
                        ref={ref}
                        type="search"
                        id="default-search"
                        className="search-input"
                        placeholder="Search ..."
                        required
                    />
                </div>
            </div>





        </form>
    );
};

export default SearchInput;
