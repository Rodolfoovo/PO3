import GameLocation from "../location/GameLocation";
import Location from "../location/Location";
import MovieLocation from "../location/MovieLocation";

declare var process;

let location : Location;

if(process.argv.includes('movie')){
    location = new MovieLocation()
}else if(process.argv.includes('game')){
    location = new GameLocation();
}else{
    console.log("Selecione algo que possa ser localizavel.");
}

if(location){
    location.startItem()
}