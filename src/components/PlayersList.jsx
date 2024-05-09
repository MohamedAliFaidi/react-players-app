import Player from "./Player";

function PlayersList({ players }) {
  console.log(players);
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding:"30px"  }}>
      {players?.map((e, i) => {
        const { name, team, nationality, jerseyNumber, imageURL, age } = e;
        return (
          <Player
            key={i}
            name={name}
            team={team}
            nationality={nationality}
            age={age}
            jerseyNumber={jerseyNumber}
            imageURL={imageURL}
          />
        );
      })}
    </div>
  );
}

export default PlayersList;
