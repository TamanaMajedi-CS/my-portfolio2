import { createContext, useContext, useEffect, useReducer } from "react";

const FavoritesContext = createContext();
export const useFavorites = () => useContext(FavoritesContext);

function reducer(state, action){
  switch(action.type){
    case "toggle":{
      const next = new Set(state);
      next.has(action.id) ? next.delete(action.id) : next.add(action.id);
      return next;
    }
    case "hydrate":
      return new Set(action.ids || []);
    default:
      return state;
  }
}

export function FavoritesProvider({ children }){
  const [fav, dispatch] = useReducer(reducer, new Set());
  useEffect(()=>{
    const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
    dispatch({ type:"hydrate", ids:saved });
  },[]);
  useEffect(()=>{
    localStorage.setItem("favorites", JSON.stringify([...fav]));
  },[fav]);
  return <FavoritesContext.Provider value={{fav, dispatch}}>{children}</FavoritesContext.Provider>;
}
