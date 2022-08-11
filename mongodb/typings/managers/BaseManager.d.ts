import DatabaseManager from './DatabaseManager'
import UtilsManager from './UtilsManager'

import EconomyOptions from '../interfaces/EconomyOptions'

/**
 * The default manager with its default methods.
 * 
 * [!] This manager cannot be used directly.
 * 
 * [!] When extending this manager, make sure to have an `all()` method in your child class.
 * 
 * [!] Make sure to specify your main item class (EconomyUser, ShopItem, etc.) 
 * in a second argument in super() for a manager to work with.
 * 
 * Type parameters:
 * 
 * - T: The main item class.
 * - E: The class to replace the result if it is empty.
 * 
 * @example
 * const BaseManager = require('./BaseManager')
 * 
 * const DatabaseManager = require('./DatabaseManager')
 * const ShopItem = require('./ShopItem') // must be a class
 * 
 * class ShopManager extends BaseManager {
 *    constructor(options, memberID, guildID, database, cache) {
 *       super(options, memberID, guildID, ShopItem, database)
 * 
 *       this.database = database
 *       this.cache = cache
 *   }
 *  
 *  async all() {
 *      const shop = (await this.database.fetch(`${this.guildID}.shop`)) || []
        return shop.map(item => new ShopItem(this.guildID, item, this.database, this.cache))
 *  }
 * }
 */
declare class BaseManager<T, E = any> {

    /**
     * Base Manager.
     * @param {EconomyOptions} options Economy configuration.
     * @param {string} memberID Member ID.
     * @param {string} guildID Guild ID.
     * @param {T} constructor A constructor (EconomyUser, ShopItem, etc.) to work with.
     * @param {DatabaseManager} database Database manager.
     * @param {CacheManager} cache Cache Manager.
     * 
     * @param {E} [emptyBaseConstructor] 
     * An empty constructor (EmptyEconomyUser, EmptyEconomyGuild, etc.) to replace the `undefined` value with.
     */
    public constructor(
        options: EconomyOptions,
        memberID: string,
        guildID: string,
        constructor: T,
        database: DatabaseManager,
        cache: CacheManager,
        emptyBaseConstructor?: E
    )

    /**
     * Member ID.
     * @type {string}
     */
    public memberID: string

    /**
     * Guild ID.
     * @type {string}
     */
    public guildID: string

    /**
     * Economy configuration.
     * @type {EconomyOptions}
     * @private
     */
    private options: EconomyOptions

    /**
     * Database Manager.
     * @type {DatabaseManager}
     * @private
     */
    private database: DatabaseManager

    /**
     * Utils Manager.
     * @type {UtilsManager}
     * @private
     */
    private utils: UtilsManager

    /**
     * Number of specific element in database.
     * @type {number}
     */
    public length: number

    /**
     * Gets the first user in specified guild.
     * @returns {Promise<P>} First object in the array.
     */
    public first<P = T>(): Promise<E extends any ? P : P | E>

    /**
     * Gets the last user in specified guild.
     * @returns {Promise<P>} Last object in the array.
     */
    public last<P = T>(): Promise<E extends any ? P : P | E>

    /**
     * Gets the element at the specified index in the elements array.
     * @param {number} index Index of the user.
     * @returns {P} Object at the specified index.
     */
    public at<P = T>(index: number): Promise<E extends any ? P : P | E>

    /**
     * Returns an array of elements in specified guild.
     * @returns {Promise<P[]>} Array of elements in specified guild.
     */
    public toArray<P = T>(): Promise<P[]>

    /**
     * This method is the same as `Array.find()`.
     * 
     * Finds the element in array and returns it.
     * @param {(value: T, index: number, array: T[]) => boolean} predicate 
     * A function that accepts up to three arguments. 
     * The filter method calls the predicate function one time for each element in the array.
     * @param {P} [thisArg] 
     * An object to which the this keyword can refer in the callbackfn function. 
     * If thisArg is omitted, undefined is used as the this value.
     * @returns {Promise<P>} Economy user object.
     */
    public find<P = T>(predicate: (
        value: P,
        index: number,
        array: P[]) => boolean,
        thisArg?: P
    ): Promise<E extends any ? P : P | E>

    /**
     * This method is the same as `Array.findIndex()`. 
     * 
     * Finds the element's index in array and returns it.
     * @param {(value: T, index: number, array: T[]) => boolean} predicate 
     * A function that accepts up to three arguments. 
     * The findIndex method calls the predicate function one time for each element in the array.
     * @param {P} [thisArg]
     * An object to which the this keyword can refer in the callbackfn function. 
     * If thisArg is omitted, undefined is used as the this value.
     * @returns {Promise<number>} Element index.
     */
    public findIndex<P = T>(predicate: (
        value: P,
        index: number,
        array: P[]) => boolean,
        thisArg?: P
    ): Promise<number>

    /**
     * This method is the same as `Array.includes()`. 
     * 
     * Determines whether an array includes a certain element, returning true or false as appropriate.
     * @param {P} searchElement The element to search for.
     * @param {number} [fromIndex] The position in this array at which to begin searching for searchElement.
     * @returns {Promise<boolean>} Is the specified element included or not.
     */
    public includes<P = T>(searchElement: P, fromIndex?: number): Promise<boolean>

    /**
     * This method is the same as `Array.includes()`.
     * 
     * This method is an alias for `BaseManager.includes()` method.
     * 
     * Determines whether an array includes a certain element, returning true or false as appropriate.
     * @param {P} searchElement The element to search for.
     * @param {number} [fromIndex] 
     * The array index at which to begin the search. 
     * If fromIndex is omitted, the search starts at index 0.
     * @returns {Promise<boolean>} Is the specified element included or not.
     */
    public has<P = T>(searchElement: P, fromIndex?: number): Promise<boolean>

    /**
     * This method is the same as `Array.indexOf()`. 
     * 
     * @param {P} searchElement The value to locate in the array.
     * @param {number} [fromIndex] 
     * The array index at which to begin the search. 
     * If fromIndex is omitted, the search starts at index 0.
     * @returns {Promise<number>} Element index in the array.
     */
    public indexOf<P = T>(searchElement: P, fromIndex?: number): Promise<number>

    /**
     * This method is the same as `Array.lastIndexOf()`. 
     * 
     * @param {P} searchElement The value to locate in the array.
     * @param {number} [fromIndex] 
     * The array index at which to begin searching backward. 
     * If fromIndex is omitted, the search starts at the last index in the array.
     * @returns {Promise<number>} Element index in the array.
     */
    public lastIndexOf<P = T>(searchElement: P, fromIndex?: number): Promise<number>

    /**
     * This method is the same as `Array.reverse()`. 
     * 
     * Reverses the array of all elements and returns it.
     * @returns {Promise<P[]>} Reversed elements array.
     */
    public reverse<P = T>(): Promise<P[]>

    /**
     * This method is the same as `Array.sort()`.
     * 
     * Sorts an array in place. This method mutates the array and returns a reference to the same array.
     * @param {(a: P, b:  P) => number} [compareFn] 
     * Function used to determine the order of the elements. 
     * It is expected to return a negative value if first argument is less than second argument, 
     * zero if they're equal and a positive value otherwise. 
     * If omitted, the elements are sorted in ascending, ASCII character order.
     * @returns {Promise<P[]>} Sorted elements array.
     */
    public sort<P = T>(compareFn?: (a: P, b: P) => number): Promise<P[]>

    /**
     * This method is the same as `Array.filter()`.
     * 
     * Filters the array by specified condition and returns the array.
     * @param {(value: T, index: number, array: T[]) => boolean} predicate 
     * A function that accepts up to three arguments. 
     * The filter method calls the predicate function one time for each element in the array.
     * @param {P} [thisArg] 
     * An object to which the this keyword can refer in the callbackfn function. 
     * If thisArg is omitted, undefined is used as the this value.
     * @returns {Promise<P[]>}
     */
    public filter<P = T>(predicate: (
        value: P,
        index: number,
        array: P[]) => boolean,
        thisArg?: P
    ): Promise<P[]>

    /**
     * This method is the same as `Array.map()`. 
     * 
     * Calls a defined callback function on each element of an array, 
     * and returns an array that contains the results.
     * @param {(value: T, index: number, array: T[]) => boolean} callbackfn 
     * A function that accepts up to three arguments. 
     * The map method calls the callbackfn function one time for each element in the array.
     * @param {P} [thisArg] 
     * An object to which the this keyword can refer in the callbackfn function. 
     * If thisArg is omitted, undefined is used as the this value.
     * @returns {Promise<D[]>}
     */
    public map<P, D = any>(callbackfn: (
        value: P,
        index: number,
        array: P[]) => boolean,
        thisArg?: P
    ): Promise<D[]>

    /**
     * This method is the same as `Array.forEach()`. 
     * 
     * Calls a defined callback function on each element of an array, 
     * and returns an array that contains the results.
     * @param {(value: T, index: number, array: T[]) => boolean} callbackfn 
     * A function that accepts up to three arguments. 
     * The map method calls the callbackfn function one time for each element in the array.
     * @param {P} [thisArg] 
     * An object to which the this keyword can refer in the callbackfn function. 
     * If thisArg is omitted, undefined is used as the this value.
     * @returns {void}
     */
    public forEach<P = T>(callbackfn: (
        value: P,
        index: number,
        array: P[]) => boolean,
        thisArg?: P
    ): void

    /**
     * This method is the same as `Array.some()`. 
     * 
     * Determines whether the specified callback function returns true for any element of an array.
     * @param {(this: void, value: T, index: number, obj: T[]) => boolean} predicate 
     * A function that accepts up to three arguments. 
     * The some method calls the predicate function for each element in the array
     * until the predicate returns a value which is coercible to the Boolean value true, 
     * or until the end of the array.
     * @param {P} [thisArg] 
     * An object to which the this keyword can refer in the callbackfn function. 
     * If thisArg is omitted, undefined is used as the this value.
     * @returns {Promise<boolean>} Is any of the elements returns true or not.
     */
    public some<P = T>(predicate: (
        this: void,
        value: P,
        index: number,
        obj: P[]) => boolean,
        thisArg?: T
    ): Promise<boolean>

    /**
     * Returns an iterable of values in the array.
     * @returns {IterableIterator<T>} An iterable of values in the array.
     */
    public values<P = T>(): IterableIterator<P>

    /**
     * Returns a string representation of an array.
     * @returns {Promise<string>} String representation of an array.
     */
    public toString(): Promise<string>
}

export = BaseManager
