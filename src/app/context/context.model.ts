import { UserModel } from "../auth/session/user.model";

export interface ContextModel{
    challenges: ChallengeModel [],
    creator: UserModel,
    id: number,
    imageURL: string,
    name: string,
    soundUrl: string,
    videoUrl: string
}

export interface ChallengeModel{}