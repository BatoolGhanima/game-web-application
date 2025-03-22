import { useRef, useState } from "react";
import useSearchTextStore from '../state-managment/searchStore'

import '../styles/searchStyle.css'

// search component: return the result of search in games
const SearchInput = () => {

    // to get the search text from the store
    
    const setSearchText = useSearchTextStore((state) => state.setSearchText)

    // to get the search text from the form
    const ref = useRef(null);
   
    
    return (
        <form
            className="w-full"
            onSubmit={(event) => {
                event.preventDefault();
                if (ref.current) setSearchText(ref.current.value);
            }}
        >

            
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
