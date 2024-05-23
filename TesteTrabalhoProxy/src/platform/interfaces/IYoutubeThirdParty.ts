export default interface IYoutubeThirdParty{
    listVideo():void;
    getVideoInfo(id): void;
    downloadVideo(id): void;
}