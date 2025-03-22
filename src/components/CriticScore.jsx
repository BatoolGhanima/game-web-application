const CriticScore = ({ score }) => {
    // let color = score > 75 ? "text-orange-500" : score > 60 ? "text-yellow-600" : "text-red-600";
    return (
        <span className={` text-sm font-medium me-2  px-2.5 py-0.5 rounded  `}>
            {score}
        </span>
    );
};

export default CriticScore;
