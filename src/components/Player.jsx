function Player({ name, team, nationality, jerseyNumber, imageURL, age }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mt-[30px] w-[360px]">
      <img className="w-full h-[240px]" src={imageURL} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <div className="font-bold text-xl mb-2">Age : {age}</div>

        <p className="text-gray-700 text-base">Team : {team}</p>
        <p className="text-gray-700 text-base">Nationality : {nationality}</p>
        <p className="text-gray-700 text-base">
          Jersey Number : {jerseyNumber}
        </p>
      </div>
    </div>
  );
}

export default Player;
