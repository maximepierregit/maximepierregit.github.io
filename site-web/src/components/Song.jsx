import React, { useState, useContext } from "react";
import { ACTIONS } from "../reducers/reducer";

import PlaylistContext from "../contexts/PlaylistContext";

export default function Song({ song, index, isOnPlaylist }) {
  const { dispatch } = useContext(PlaylistContext);
  const [liked, setLiked] = useState(song.liked);
  // TODO : envoyer une demande de modification au serveur et mettre l'interface à jour.
  useContext(PlaylistContext).api;
  const toggleLike = () => {
    setLiked(!liked);
    dispatch({type: ACTIONS.TOGGLE_LIKE, payload: { index },});
  };

  // TODO : envoyer une action PLAY avec le bon index au reducer.
  const playSong = () => {
    dispatch({type: ACTIONS.PLAY, payload: { index },});
  };
  if (!isOnPlaylist) {
    return (
      <section
        className="song-item flex-row"
        onClick={() => {
          if (index) {
            playSong();
          }
          
        }}
      >
        {index ? <span>{index}</span> : <></>}
        {/*TODO : ajouter les bonnes informations de la chanson */}
        
        <p>{song.name}</p>
        <p>{song.genre}</p>
        <p>{song.artist}</p>
  
        {/*TODO : modifier le statut aimé seulement si index n'existe pas */}
        <button
          className={`${liked ? "fa" : "fa-regular"} fa-2x fa-heart`}
          onClick={toggleLike}
        ></button>
      </section>
    );
  }


  /* ATTENTION, J'ESSAIE DE FAIRE EN SORTE QUE LE SONG EST DEUX COMPORTEMENTS DIFFERENTS MAIS J AI PO FINIS*/



  else{
    return (
      <section
        className="song-item flex-row"
        onClick={() => {
          if (index) {
            playSong();
          }
          
        }}
      >
        {index ? <span>{index}</span> : <></>}
        {/*TODO : ajouter les bonnes informations de la chanson */}
        
        <p>{song.name}</p>
        <p>{song.genre}</p>
        <p>{song.duration}</p>
  
        {/*TODO : modifier le statut aimé seulement si index n'existe pas */}
        <button
          className={`${liked ? "fa" : "fa-regular"} fa-2x fa-heart`}
          onClick={toggleLike}
        ></button>
      </section>
    );
  }
}


