import GenreList from "./GenreList";

const SideBar = () => {
    return (
        <>
            <div className="sidebar-app ">
                <h3 className="font-bold text-white mt-4">Genres</h3>
                <GenreList />
            </div>
        </>
    );
};

export default SideBar;
