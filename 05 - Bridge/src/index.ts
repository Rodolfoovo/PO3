import Facebook from "./platforms/Facebook";
import Twitch from "./platforms/Twitch";
import Youtube from "./platforms/Youtube";
import IPlatform from "./platforms/interfaces/IPlatform";
import AdvancedLive from "./transmission/AdvancedLive";
import Live from "./transmission/Live";

function startLive(platform:IPlatform){
    console.log("Aguarde...");
    const live = new Live(platform);
    live.broadcasting();
    live.result();
}

function startAdvanceLive(platform:IPlatform){
    console.log("Aguarde...");
    const live = new AdvancedLive(platform);
    live.broadcasting();
    live.result();
    live.subtitles();
    live.comments();
    console.log("-----------------------------");
}
/*
startLive(new Youtube());
startLive(new Twitch());
startLive(new Facebook());*/
startAdvanceLive(new Youtube());