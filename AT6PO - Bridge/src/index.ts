import Playstation from "./consoles/Playstation";
import IConsole from "./consoles/interfaces/IConsole";
import AdvancedPlay from "./runGame/AdvancedPlay";
import Play from "./runGame/Play";

function play(consoles:IConsole){
    consoles.configureGame();
    const start = new Play(consoles);
    start.playing();
    start.result();
}
function advancedPlay(consoles: IConsole){
    consoles.configureGame()
    const start = new AdvancedPlay(consoles);
    start.playing();
    start.result();
    start.challenge();
}

advancedPlay(new Playstation());