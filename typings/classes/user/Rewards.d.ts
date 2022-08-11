import RewardObject from '../../interfaces/RewardObject'
import EconomyOptions from '../../interfaces/EconomyOptions'
import DatabaseManager from '../../managers/DatabaseManager'

import { RewardType } from '../../interfaces/RewardTypes'


declare class Rewards {
    public constructor(memberID: string, guildID: string, options: EconomyOptions, database: DatabaseManager)

    /**
    * Adds a specified reward on user's balance
    * @param reward Reward to give.
    * @param reason The reason why the money was added.
    * @returns Reward object.
    */
    public receive<
        isRewardArray extends boolean = false
    >(reward: RewardType, reason?: string): RewardObject<isRewardArray, typeof reward>

    /**
    * Adds a daily reward on user's balance.
    * @param reason The reason why the money was added. Default: 'claimed the daily reward'
    * @returns Reward object information.
    */
    public getDaily<
        isRewardArray extends boolean = false
    >(reason?: string): RewardObject<isRewardArray, 'daily'>

    /**
    * Adds a work reward on user's balance.
    * @param reason The reason why the money was added. Default: 'claimed the work reward'
    * @returns Reward object information.
    */
    public getWork<
        isRewardArray extends boolean = true
    >(reason?: string): RewardObject<isRewardArray, 'work'>

    /**
    * Adds a weekly reward on user's balance.
    * @param reason The reason why the money was added. Default: 'claimed the weekly reward'
    * @returns Reward object information.
    */
    public getWeekly<
        isRewardArray extends boolean = false
    >(reason?: string): RewardObject<isRewardArray, 'weekly'>
}

export = Rewards