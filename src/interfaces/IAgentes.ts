type MediaList = {
    id: number,
    wwise: string,
    wave: string
}

type VoiceLine = {
    minDuration: number,
    maxDuration: number,
    mediaList: MediaList[]
}

type Abilities = {
    slot: string
    displayName: string
    description: string
    displayIcon: string
}

type Role = {
    uuid: string
    displayName: string
    description: string
    displayIcon: string
    assetPath: string
}

export interface IAgents {
    uuid:string,
    displayName:string,
    description:string,
    developerName:string,
    characterTags:any,
    displayIcon:string,
    displayIconSmall:string,
    bustPortrait:string,
    fullPortrait:string,
    fullPortraitV2:string,
    killfeedPortrait:string,
    background:string,
    assetPath: string,
    isFullPortraitRightFacing: boolean,
    isPlayableCharacter: boolean,
    isAvailableForTest: boolean,
    isBaseContent: boolean,
    backgroundGradientColors: any,
    role: Role,
    abilities: Abilities[],
    voiceLine: VoiceLine[]
}