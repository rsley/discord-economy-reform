import EconomyOptions from '../../interfaces/EconomyOptions'

import ShopOperationInfo from '../../interfaces/ShopOperationInfo'
import SellingOperationInfo from '../../interfaces/SellingOperationInfo'

import InventoryItem from '../InventoryItem'


declare class Items {

    /**
     * User Items.
     * @param {string} memberID Member ID.
     * @param {string} guildID Guild ID.
     * @param {EconomyOptions} ecoOptions Economy configuratuion.
     */
    public constructor(memberID: string, guildID: string, ecoOptions: EconomyOptions)

    /**
     * Buys the item from the shop.
     * @param {string} itemID Item ID or name.
     * @param {number} [quantity=1] Quantity of items to buy. Default: 1.
     * 
     * @param {string} [reason='received the item from the shop'] 
     * The reason why the money was subtracted. Default: 'received the item from the shop'.
     * 
     * @returns {ShopOperationInfo} Operation information object.
     */
    public buy<
        T extends object = any
    >(itemID: string | number, quantity?: number, reason?: string): ShopOperationInfo<T>

    /**
     * Adds the item from the shop to user's inventory.
     * @param {string} itemID Item ID or name.
     * @param {number} [quantity=1] Quantity of items to add. Default: 1.
     * @returns {ShopOperationInfo} If added successfully: true, else: false.
     */
    public add<
        T extends object = any
    >(itemID: string | number, quantity?: number): ShopOperationInfo<T>

    /**
     * Gets the specified item from the user's inventory.
     * @param {string} itemID Item ID or name.
     * @returns {InventoryItem} User's inventory array.
     */
    public get<T extends object = any>(itemID: string | number): InventoryItem<T>

    /**
     * Uses the item from user's inventory.
     * @param {number | string} itemID Item ID or name.
     * @param {Client} [client] Discord Client [Specify if the role will be given in a Discord server].
     * @returns {string} Item message.
     */
    public use(itemID: number | string, client?: any): string

    /**
     * Sells the item from the user's inventory.
     * @param {string} itemID Item ID or name.
     * @param {number} [quantity=1] Quantity of items to sell. Default: 1.
     * 
     * @param {string} [reason='sold the item to the shop']
     * The reason why the money was added. Default: 'sold the item to the shop'.
     * 
     * @returns {SellingOperationInfo} Selling operation info.
     */
    public sell<
        T extends object = any
    >(itemID: string | number, quantity?: number, reason?: string): SellingOperationInfo<T>

    /**
     * Removes the item from user's inventory.
     * @param {string} itemID Item ID or name.
     * @returns {boolean} If removed successfully: true, else: false.
     */
    public remove(itemID: string | number): boolean

    /**
     * Removes the item from user's inventory.
     *
     * This method is an alias for 'Items.remove' method
     * @param {string} itemID Item ID or name.
     * @returns {boolean} If removed successfully: true, else: false.
     */
    public delete(itemID: string | number): boolean
}

export = Items