import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name, hp, front, back}) {
  
  const [clicked, setClicked] = useState(false)

  function onClick(e){
    setClicked(!clicked)
  }
  
  return (
    <Card>
      <div>
        <div onClick= {onClick} className="image">
          <img src = {clicked? back: front} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
