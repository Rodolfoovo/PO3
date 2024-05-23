import CachedYoutubeClass from "./Cache/CachedYoutubeClass";
import ThirdPartyYoutubeClass from "./platform/ThirdPartyYoutubeClass";
import YoutubeManager from "./platform/YoutubeManager";
import IYoutubeThirdParty from "./platform/interfaces/IYoutubeThirdParty";
function Application(){
    const aYoutubeService = new ThirdPartyYoutubeClass();
    const aYoutubeProxy = new CachedYoutubeClass(aYoutubeService);
    const manager = new YoutubeManager(aYoutubeProxy);
    const id: number = 1;
    manager.reactOnUserInput(id);
}
