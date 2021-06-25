import { ContextModel } from './../contextos/context.model';
import { UserModel } from "../auth/session/user.model";
import { ChallengeModel } from "../contextos/context.model";

export interface DesafioModel{
    id: number,
    word : string,
    creator: UserModel,
    imageUrl: string,
    name: string,
    soundUrl: string,
    videoUrl: string,
    contexts: ContextModel[]
}
