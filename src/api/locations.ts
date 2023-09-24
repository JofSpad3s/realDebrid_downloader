/*
 * API url locations based on documentation found at https://api.real-debrid.com/
*/

class realDebridAPI{
    readonly baseURL: string = "https://api.real-debrid.com/rest/1.0/";
    // Basic commands for use in RealDbrid
    readonly getDisableAccess: string = this.baseURL + "/disable_access_token";
    readonly getTime: string = this.baseURL + "/time";
    readonly getTimeIso: string = this.getTime + "/iso";
    // User commands
    readonly getUser: string = this.baseURL + "/user";
    // Unrestrict commands
    readonly unrestrictBase : string =  this.baseURL + "/unrestrict";
    readonly postUnrestrictCheck: string = this.unrestrictBase + "/check";
    readonly postUnrestrictLink: string = this.unrestrictBase + "/link";
    readonly postUnrestrictFolder: string = this.unrestrictBase + "/folder";
    readonly putUnrestrictContainerFile: string = this.unrestrictBase + "/containerFile";
    readonly postUnrestrictContainerLink: string = this.unrestrictBase + "/containerLink";
    // Traffic commands
    readonly trafficBase: string = this.baseURL + "/traffic";
    readonly getTraffic: string = this.trafficBase;
    readonly getTrafficDetails: string = this.trafficBase + "/details";
    // Streaming commands
    readonly streamingBase: string = this.baseURL + "/streaming";
    // The following two require an ID
    readonly getStreamingTranscode: string = this.streamingBase + "/transcode/";
    readonly getStreamingMediaInfo: string = this.streamingBase + "/mediaInfos/";
    // Download commands
    readonly downloadBase: string = this.baseURL + "/downloads";
    readonly getDownloads: string = this.downloadBase;
    // Requires and ID
    readonly deleteDownload: string = this.downloadBase + "/delete/";
    
}

