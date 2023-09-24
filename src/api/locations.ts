/*
 * API url locations based on documentation found at https://api.real-debrid.com/
*/

class realDebridAPI {
    readonly baseURL: string = "https://api.real-debrid.com/rest/1.0/";
    // Basic commands for use in RealDbrid
    readonly getDisableAccess: string = this.baseURL + "/disable_access_token";
    readonly getTime: string = this.baseURL + "/time";
    readonly getTimeIso: string = this.getTime + "/iso";
    // OAuth commands
    readonly oauthBase: string = this.baseURL + "/oauth/v2";
    readonly getDeviceCode: string = this.oauthBase + "/device/code";
    readonly getDeviceCredentials: string = this.oauthBase + "/device/credentials";
    readonly getToken: string = this.oauthBase + "/token";
    // User commands
    readonly getUser: string = this.baseURL + "/user";
    // Unrestrict commands
    readonly unrestrictBase: string = this.baseURL + "/unrestrict";
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
    readonly getStreamingTranscode: string = this.streamingBase + "/transcode/";
    readonly getStreamingMediaInfo: string = this.streamingBase + "/mediaInfos/";
    // Download commands
    readonly downloadBase: string = this.baseURL + "/downloads";
    readonly getDownloads: string = this.downloadBase;
    readonly deleteDownload: string = this.downloadBase + "/delete/";
    // Torrents commands
    readonly torrentBase: string = this.baseURL + "/torrents";
    readonly getTorrents: string = this.torrentBase;
    readonly getTorrentsInfo: string = this.torrentBase + "/info/";
    readonly getTorrentsInstantAvailablility: string = this.torrentBase + "/instantAvailability/";
    readonly getTorrentsActiveCount: string = this.torrentBase + "/activeCount";
    readonly getTorrentsAvailableHosts: string = this.torrentBase + "/availableHosts";
    readonly putAddTorrent: string = this.torrentBase + "/addTorrent";
    readonly postAddMagnet: string = this.torrentBase + "/addMagnet";
    readonly postSelectFiles: string = this.torrentBase + "/selectFiles/";
    readonly deleteTorrents: string = this.torrentBase + "/delete/";
    // Hosts commands
    readonly hostsBase: string = this.baseURL + "/hosts";
    readonly getHosts: string = this.hostsBase;
    readonly getHostsStatus: string = this.hostsBase + "/status";
    readonly getHostsRegex: string = this.hostsBase + "/regex";
    readonly getHostsRegexFolder: string = this.hostsBase + "/regexFolder";
    readonly getHostsDomains: string = this.hostsBase + "/domains";
    // Settings commands
    readonly settingsBase: string = this.baseURL + "/settings";
    readonly getSettings: string = this.settingsBase;
    readonly postSettingsUpdate: string = this.settingsBase + "/update";
    readonly postSettingsConvertPoints: string = this.settingsBase + "/convertPoints";
    readonly postSettingsChangePassword: string = this.settingsBase + "/changePassword";
    readonly putSettingsAvatarFile: string = this.settingsBase + "/avatarFile";
    readonly deleteSettingsAvatarFile: string = this.settingsBase + "/avatarDelete";
}

