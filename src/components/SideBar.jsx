import GenreList from "./GenreList";
import React from 'react'

const SideBar = () => {
    return (
        <>
            <div className="sidebar-app ">
                <h3 className="text-bold">Genres</h3>
                <GenreList />
            </div>
        </>
    );
};

export default SideBar;
