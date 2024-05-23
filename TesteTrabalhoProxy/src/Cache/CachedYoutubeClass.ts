import IYoutubeThirdParty from "../platform/interfaces/IYoutubeThirdParty";
//Este é o proxy que comunica YoutubeManager com ThirdPartyYoutubeClass
export default class CachedYoutubeClass implements IYoutubeThirdParty{
    private service: IYoutubeThirdParty;
    private listCache: any;
    private videoCache : any;
    private needReset: boolean;

    constructor(service:IYoutubeThirdParty){
        this.service = service;
    }
    listVideo(): void {
        if(this.listCache == null || this.needReset){
            this.listCache = this.service.listVideo();
        }
        return this.listCache;
    }
    getVideoInfo(id: number): void {
        if(this.videoCache == null || this.needReset){
            this.videoCache = this.service.getVideoInfo(id);
        }
        return this.videoCache;
    }
    downloadVideo(id: number): void {
        if(this.needReset){
        this.service.downloadVideo(id);
        }
    }

}