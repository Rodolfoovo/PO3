import IYoutubeThirdParty from "./interfaces/IYoutubeThirdParty";

export default class ThirdPartyYoutubeClass implements IYoutubeThirdParty{
    listVideo(): void {
        console.log("LIsta de videos:");

    }
    getVideoInfo(id: any): void {
        console.log("Informação sobre o video adquirida.");
    }
    downloadVideo(id: any): void {
        console.log("Download inicando...");
    }

}