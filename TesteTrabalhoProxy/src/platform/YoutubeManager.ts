import IYoutubeThirdParty from "./interfaces/IYoutubeThirdParty";

export default class YoutubeManager{
    protected service: IYoutubeThirdParty;

    constructor(service: IYoutubeThirdParty){
        this.service = service;
    }

    public  renderVideoPage(id: number): void{
        console.log("Procurando informação do Video...")
        this.service.getVideoInfo(id);
    }
    public renderListPanel(): void{
        this.service.listVideo();
    }
    public reactOnUserInput(id:number): void{
        this.renderVideoPage(id);
        this.renderListPanel();

    }
    

}