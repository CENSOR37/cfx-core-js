
import { Vector3 } from "../shared";
import { _i, _f, _v, _r, _ri, _rf, _rl, _s, _rv, _ro, _in, _ii, _fi, _ch, _obj, _ts, _fv, _mfr, _mv } from "../shared/header";




/**
 * Adds a listener for Console Variable changes.
 * 
 * The function called expects to match the following signature:
 * 
 * ```ts
 * function ConVarChangeListener(conVarName: string, reserved: any);
 * ```
 * 
 * *   **conVarName**: The ConVar that changed.
 * *   **reserved**: Currently unused.
 * @param conVarFilter
 * @param handler
 */
export function addConvarChangeListener(conVarFilter: string, handler: any): number { 
	return _in(0x00000000, 0xab7f7241, _ts(conVarFilter), _mfr(handler), _r, _ri); 
}


/**
 * Adds a handler for changes to a state bag.
 * 
 * The function called expects to match the following signature:
 * 
 * ```ts
 * function StateBagChangeHandler(bagName: string, key: string, value: any, reserved: number, replicated: boolean);
 * ```
 * 
 * *   **bagName**: The internal bag ID for the state bag which changed. This is usually `player:Source`, `entity:NetID`
 * or `localEntity:Handle`.
 * *   **key**: The changed key.
 * *   **value**: The new value stored at key. The old value is still stored in the state bag at the time this callback executes.
 * *   **reserved**: Currently unused.
 * *   **replicated**: Whether the set is meant to be replicated.
 * 
 * At this time, the change handler can't opt to reject changes.
 * 
 * If bagName refers to an entity, use [GET_ENTITY_FROM_STATE_BAG_NAME](?\_0x4BDF1868) to get the entity handle
 * If bagName refers to a player, use [GET_PLAYER_FROM_STATE_BAG_NAME](?\_0xA56135E0) to get the player handle
 * @param keyFilter
 * @param bagFilter
 * @param handler
 */
export function addStateBagChangeHandler(keyFilter: string, bagFilter: string, handler: any): number { 
	return _in(0x00000000, 0x5ba35aaf, _ts(keyFilter), _ts(bagFilter), _mfr(handler), _r, _ri); 
}


/**
 * Cancels the currently executing event.
 */
export function cancelEvent(): void { 
	return _in(0x00000000, 0xfa29d35d); 
}


export function deleteFunctionReference(referenceIdentity: string): void { 
	return _in(0x00000000, 0x1e86f206, _ts(referenceIdentity)); 
}


export function deleteResourceKvp(key: string): void { 
	return _in(0x00000000, 0x7389b5df, _ts(key)); 
}


/**
 * Nonsynchronous [DELETE_RESOURCE_KVP](#\_0x7389B5DF) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
 * @param key
 */
export function deleteResourceKvpNoSync(key: string): void { 
	return _in(0x00000000, 0x04152c90, _ts(key)); 
}


export function duplicateFunctionReference(referenceIdentity: string): string { 
	return _in(0x00000000, 0xf4e2079d, _ts(referenceIdentity), _r, _s); 
}


export function endFindKvp(handle: number): void { 
	return _in(0x00000000, 0xb3210203, handle); 
}


/**
 * Internal function for ensuring an entity has a state bag.
 * @param entity
 */
export function ensureEntityStateBag(entity: number): void { 
	return _in(0x00000000, 0x3bb78f05, entity); 
}


/**
 * Depending on your use case you may need to use `add_acl resource.<your_resource_name> command.<command_name> allow` to use this native in your resource.
 * @param commandString
 */
export function executeCommand(commandString: string): void { 
	return _in(0x00000000, 0x561c060b, _ts(commandString)); 
}


export function findKvp(handle: number): string { 
	return _in(0x00000000, 0xbd7bebc5, handle, _r, _s); 
}


/**
 * An internal function for converting a stack trace object to a string.
 * @param traceData
 */
export function formatStackTrace(traceData: any): string { 
	return _in(0x00000000, 0xd70c3bca, ...(_obj(traceData)), _r, _s); 
}


/**
 * Can be used to get a console variable of type `char*`, for example a string.
 * @param varName
 * @param default_
 */
export function getConvar(varName: string, default_: string): string { 
	return _in(0x00000000, 0x6ccd2564, _ts(varName), _ts(default_), _r, _s); 
}


/**
 * Can be used to get a console variable casted back to `bool`.
 * @param varName
 * @param defaultValue
 */
export function getConvarBool(varName: string, defaultValue: boolean): boolean { 
	return _in(0x00000000, 0x7e8ebfe5, _ts(varName), defaultValue, _r); 
}


/**
 * This will have floating point inaccuracy.
 * @param varName
 * @param defaultValue
 */
export function getConvarFloat(varName: string, defaultValue: number): number { 
	return _in(0x00000000, 0x009e666d, _ts(varName), _fv(defaultValue), _r, _rf); 
}


/**
 * Can be used to get a console variable casted back to `int` (an integer value).
 * @param varName
 * @param default_
 */
export function getConvarInt(varName: string, default_: number): number { 
	return _in(0x00000000, 0x935c0ab2, _ts(varName), default_, _r, _ri); 
}


/**
 * Returns the name of the currently executing resource.
 */
export function getCurrentResourceName(): string { 
	return _in(0x00000000, 0xe5e9ebbb, _r, _s); 
}


/**
 * ### Supported types
 * 
 * *   \[1] : Peds (including animals) and players.
 * *   \[2] : Vehicles.
 * *   \[3] : Objects (props), doors, and projectiles.
 * 
 * ### Coordinates need to be send unpacked (x,y,z)
 * 
 * ```lua
 * 
 * -- Define the allowed model hashes
 * local allowedModelHashes = { GetHashKey("p_crate03x"), GetHashKey("p_crate22x") }
 * 
 * -- Get the player's current coordinates
 * local playerCoords = GetEntityCoords(PlayerPedId())
 * 
 * -- Retrieve all entities of type Object (type 3) within a radius of 10.0 units
 * -- that match the allowed model hashes
 * -- and sort output entities by distance
 * local entities = GetEntitiesInRadius(playerCoords.x, playerCoords.y, playerCoords.z, 10.0, 3, true, allowedModelHashes)
 * 
 * -- Iterate through the list of entities and print their ids
 * for i = 1, #entities do
 * local entity = entities[i]
 * print(entity)
 * end
 * 
 * ```
 * @param x
 * @param y
 * @param z
 * @param radius
 * @param entityType
 * @param sortByDistance
 * @param models
 */
export function getEntitiesInRadius(x: number, y: number, z: number, radius: number, entityType: number, sortByDistance: boolean, models: any): any { 
	return _in(0x00000000, 0xdffba12f, _fv(x), _fv(y), _fv(z), _fv(radius), entityType, sortByDistance, ...(_obj(models)), _r, _ro); 
}


/**
 * Returns the entity handle for the specified state bag name. For use with [ADD_STATE_BAG_CHANGE_HANDLER](?\_0x5BA35AAF).
 * @param bagName
 */
export function getEntityFromStateBagName(bagName: string): number { 
	return _in(0x00000000, 0x4bdf1867, _ts(bagName), _r, _ri); 
}


/**
 * Returns the internal build number of the current game being executed.
 * 
 * Possible values:
 * 
 * *   FiveM
 * *   1604
 * *   2060
 * *   2189
 * *   2372
 * *   2545
 * *   2612
 * *   2699
 * *   2802
 * *   2944
 * *   3095
 * *   3258
 * *   3323
 * *   3407
 * *   RedM
 * *   1311
 * *   1355
 * *   1436
 * *   1491
 * *   LibertyM
 * *   43
 * *   FXServer
 * *   0
 */
export function getGameBuildNumber(): number { 
	return _in(0x00000000, 0x804b9f7b, _r, _ri); 
}


/**
 * Returns the current game being executed.
 * 
 * Possible values:
 * 
 * | Return value | Meaning                        |
 * | ------------ | ------------------------------ |
 * | `fxserver`   | Server-side code ('Duplicity') |
 * | `fivem`      | FiveM for GTA V                |
 * | `libertym`   | LibertyM for GTA IV            |
 * | `redm`       | RedM for Red Dead Redemption 2 |
 */
export function getGameName(): string { 
	return _in(0x00000000, 0xe8eaa18b, _r, _s); 
}


/**
 * Returns a list of entity handles (script GUID) for all entities in the specified pool - the data returned is an array as
 * follows:
 * 
 * ```json
 * [ 770, 1026, 1282, 1538, 1794, 2050, 2306, 2562, 2818, 3074, 3330, 3586, 3842, 4098, 4354, 4610, ...]
 * ```
 * 
 * ### Supported pools
 * 
 * *   `CPed`: Peds (including animals) and players.
 * *   `CObject`: Objects (props), doors, and projectiles.
 * *   `CNetObject`: Networked objects
 * *   `CVehicle`: Vehicles.
 * *   `CPickup`: Pickups.
 * @param poolName
 */
export function getGamePool(poolName: string): any { 
	return _in(0x00000000, 0x2b9d4f50, _ts(poolName), _r, _ro); 
}


export function getInstanceId(): number { 
	return _in(0x00000000, 0x9f1c4383, _r, _ri); 
}


export function getInvokingResource(): string { 
	return _in(0x00000000, 0x4d52fe5b, _r, _s); 
}


/**
 * Gets the amount of metadata values with the specified key existing in the specified resource's manifest.
 * See also: [Resource manifest](https://docs.fivem.net/docs/scripting-reference/resource-manifest/resource-manifest/)
 * @param resourceName
 * @param metadataKey
 */
export function getNumResourceMetadata(resourceName: string, metadataKey: string): number { 
	return _in(0x00000000, 0x0776e864, _ts(resourceName), _ts(metadataKey), _r, _ri); 
}


export function getNumResources(): number { 
	return _in(0x00000000, 0x0863f27b, _r, _ri); 
}


/**
 * On the server this will return the players source, on the client it will return the player handle.
 * @param bagName
 */
export function getPlayerFromStateBagName(bagName: string): number { 
	return _in(0x00000000, 0xa56135e0, _ts(bagName), _r, _ri); 
}


/**
 * A getter for [SET_PLAYER_MELEE_WEAPON_DAMAGE_MODIFIER](#\_0x4A3DC7ECCC321032).
 * @param playerId
 */
export function getPlayerMeleeWeaponDamageModifier(playerId: number): number { 
	return _in(0x00000000, 0x8689a825, playerId, _r, _rf); 
}


/**
 * A getter for [SET_PLAYER_WEAPON_DAMAGE_MODIFIER](#\_0xCE07B9F7817AADA3).
 * @param playerId
 */
export function getPlayerWeaponDamageModifier(playerId: number): number { 
	return _in(0x00000000, 0x2a3d7cda, playerId, _r, _rf); 
}


/**
 * A getter for [SET_PLAYER_WEAPON_DEFENSE_MODIFIER](#\_0x2D83BC011CA14A3C).
 * @param playerId
 */
export function getPlayerWeaponDefenseModifier(playerId: number): number { 
	return _in(0x00000000, 0xf1543251, playerId, _r, _rf); 
}


/**
 * A getter for [\_SET_PLAYER_WEAPON_DEFENSE_MODIFIER\_2](#\_0xBCFDE9EDE4CF27DC).
 * @param playerId
 */
export function getPlayerWeaponDefenseModifier2(playerId: number): number { 
	return _in(0x00000000, 0x986b65ff, playerId, _r, _rf); 
}


/**
 * Returns all commands that are registered in the command system.
 * The data returned adheres to the following layout:
 * 
 * ```
 * [
 * {
 * "name": "cmdlist",
 * "resource": "resource",
 * "arity" = -1,
 * },
 * {
 * "name": "command1"
 * "resource": "resource_2",
 * "arity" = -1,
 * }
 * ]
 * ```
 */
export function getRegisteredCommands(): any { 
	return _in(0x00000000, 0xd4bef069, _r, _ro); 
}


export function getResourceByFindIndex(findIndex: number): string { 
	return _in(0x00000000, 0x387246b7, findIndex, _r, _s); 
}


/**
 * Returns all commands registered by the specified resource.
 * The data returned adheres to the following layout:
 * 
 * ```
 * [
 * {
 * "name": "cmdlist",
 * "resource": "example_resource",
 * "arity" = -1,
 * },
 * {
 * "name": "command1"
 * "resource": "example_resource2",
 * "arity" = -1,
 * }
 * ]
 * ```
 * @param resource
 */
export function getResourceCommands(resource: string): any { 
	return _in(0x00000000, 0x97628584, _ts(resource), _r, _ro); 
}


/**
 * A getter for [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938).
 * @param key
 */
export function getResourceKvpFloat(key: string): number { 
	return _in(0x00000000, 0x35bdceea, _ts(key), _r, _rf); 
}


/**
 * A getter for [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8).
 * @param key
 */
export function getResourceKvpInt(key: string): number { 
	return _in(0x00000000, 0x557b586a, _ts(key), _r, _ri); 
}


/**
 * A getter for [SET_RESOURCE_KVP](#\_0x21C7A35B).
 * @param key
 */
export function getResourceKvpString(key: string): string { 
	return _in(0x00000000, 0x5240da5a, _ts(key), _r, _s); 
}


/**
 * Gets the metadata value at a specified key/index from a resource's manifest.
 * See also: [Resource manifest](https://docs.fivem.net/docs/scripting-reference/resource-manifest/resource-manifest/)
 * @param resourceName
 * @param metadataKey
 * @param index
 */
export function getResourceMetadata(resourceName: string, metadataKey: string, index: number): string { 
	return _in(0x00000000, 0x964bab1d, _ts(resourceName), _ts(metadataKey), index, _r, _s); 
}


/**
 * Returns the current state of the specified resource.
 * @param resourceName
 */
export function getResourceState(resourceName: string): string { 
	return _in(0x00000000, 0x4039b485, _ts(resourceName), _r, _s); 
}


export function getStateBagKeys(bagName: string): any { 
	return _in(0x00000000, 0x78d864c7, _ts(bagName), _r, _ro); 
}


/**
 * Returns the value of a state bag key.
 * @param bagName
 * @param key
 */
export function getStateBagValue(bagName: string, key: string): any { 
	return _in(0x00000000, 0x637f4c75, _ts(bagName), _ts(key), _r, _ro); 
}


export function getVehicleHandbrake(vehicle: number): boolean { 
	return _in(0x00000000, 0x483b013c, vehicle, _r); 
}


export function getVehicleSteeringAngle(vehicle: number): number { 
	return _in(0x00000000, 0x1382fcea, vehicle, _r, _rf); 
}


/**
 * Returns the type of the passed vehicle.
 * 
 * For client scripts, reference the more detailed [GET_VEHICLE_TYPE_RAW](#\_0xDE73BC10) native.
 * 
 * ### Vehicle types
 * 
 * *   automobile
 * *   bike
 * *   boat
 * *   heli
 * *   plane
 * *   submarine
 * *   trailer
 * *   train
 * @param vehicle
 */
export function getVehicleType(vehicle: number): string { 
	return _in(0x00000000, 0xa273060e, vehicle, _r, _s); 
}


export function isAceAllowed(object: string): boolean { 
	return _in(0x00000000, 0x7ebb9929, _ts(object), _r); 
}


/**
 * Gets whether or not this is the CitizenFX server.
 */
export function isDuplicityVersion(): boolean { 
	return _in(0x00000000, 0xcf24c52e, _r); 
}


/**
 * A getter for [FREEZE_ENTITY_POSITION](#\_0x428CA6DBD1094446).
 * @param entity
 */
export function isEntityPositionFrozen(entity: number): boolean { 
	return _in(0x00000000, 0xedbe6add, entity, _r); 
}


export function isPrincipalAceAllowed(principal: string, object: string): boolean { 
	return _in(0x00000000, 0x37cf52ce, _ts(principal), _ts(object), _r); 
}


export function isVehicleEngineStarting(vehicle: number): boolean { 
	return _in(0x00000000, 0xbb340d04, vehicle, _r); 
}


/**
 * Reads the contents of a text file in a specified resource.
 * If executed on the client, this file has to be included in `files` in the resource manifest.
 * Example: `local data = LoadResourceFile("devtools", "data.json")`
 * @param resourceName
 * @param fileName
 */
export function loadResourceFile(resourceName: string, fileName: string): string { 
	return _in(0x00000000, 0x76a9ee1f, _ts(resourceName), _ts(fileName), _r, _s); 
}


/**
 * Returns the owner ID of the specified entity.
 * @param entity
 */
export function networkGetEntityOwner(entity: number): number { 
	return _in(0x00000000, 0x526fee31, entity, _r, _ri); 
}


/**
 * Scope entry for profiler.
 * @param scopeName
 */
export function profilerEnterScope(scopeName: string): void { 
	return _in(0x00000000, 0xc795a4a9, _ts(scopeName)); 
}


/**
 * Scope exit for profiler.
 */
export function profilerExitScope(): void { 
	return _in(0x00000000, 0xb39ca35c); 
}


/**
 * Returns true if the profiler is active.
 */
export function profilerIsRecording(): boolean { 
	return _in(0x00000000, 0xf8b7d7bb, _r); 
}


/**
 * Registered commands can be executed by entering them in the client console (this works for client side and server side registered commands). Or by entering them in the server console/through an RCON client (only works for server side registered commands). Or if you use a supported chat resource, like the default one provided in the cfx-server-data repository, then you can enter the command in chat by prefixing it with a `/`.
 * 
 * Commands registered using this function can also be executed by resources, using the [`ExecuteCommand` native](#\_0x561C060B).
 * 
 * The restricted bool is not used on the client side. Permissions can only be checked on the server side, so if you want to limit your command with an ace permission automatically, make it a server command (by registering it in a server script).
 * 
 * **Example result**:
 * 
 * ![](https://i.imgur.com/TaCnG09.png)
 * @param commandName
 * @param handler
 * @param restricted
 */
export function registerCommand(commandName: string, handler: any, restricted: boolean): void { 
	return _in(0x00000000, 0x5fa79b0f, _ts(commandName), _mfr(handler), restricted); 
}


/**
 * An internal function which allows the current resource's HLL script runtimes to receive state for the specified event.
 * @param eventName
 */
export function registerResourceAsEventHandler(eventName: string): void { 
	return _in(0x00000000, 0xd233a168, _ts(eventName)); 
}


export function removeConvarChangeListener(cookie: number): void { 
	return _in(0x00000000, 0xeac49841, cookie); 
}


/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * 
 * Removes a handler for changes to a state bag.
 * @param cookie
 */
export function removeStateBagChangeHandler(cookie: number): void { 
	return _in(0x00000000, 0xd36be661, cookie); 
}


/**
 * A setter for [GET_RESOURCE_KVP_STRING](#\_0x5240DA5A).
 * @param key
 * @param value
 */
export function setResourceKvp(key: string, value: string): void { 
	return _in(0x00000000, 0x21c7a35b, _ts(key), _ts(value)); 
}


/**
 * A setter for [GET_RESOURCE_KVP_FLOAT](#\_0x35BDCEEA).
 * @param key
 * @param value
 */
export function setResourceKvpFloat(key: string, value: number): void { 
	return _in(0x00000000, 0x9add2938, _ts(key), _fv(value)); 
}


/**
 * Nonsynchronous [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
 * @param key
 * @param value
 */
export function setResourceKvpFloatNoSync(key: string, value: number): void { 
	return _in(0x00000000, 0x3517bfbe, _ts(key), _fv(value)); 
}


/**
 * A setter for [GET_RESOURCE_KVP_INT](#\_0x557B586A).
 * @param key
 * @param value
 */
export function setResourceKvpInt(key: string, value: number): void { 
	return _in(0x00000000, 0x06a2b1e8, _ts(key), value); 
}


/**
 * Nonsynchronous [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
 * @param key
 * @param value
 */
export function setResourceKvpIntNoSync(key: string, value: number): void { 
	return _in(0x00000000, 0x26aeb707, _ts(key), value); 
}


/**
 * Nonsynchronous [SET_RESOURCE_KVP](#\_0x21C7A35B) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
 * @param key
 * @param value
 */
export function setResourceKvpNoSync(key: string, value: string): void { 
	return _in(0x00000000, 0x0cf9a2ff, _ts(key), _ts(value)); 
}


/**
 * Internal function for setting a state bag value.
 * @param bagName
 * @param keyName
 * @param valueData
 * @param valueLength
 * @param replicated
 */
export function setStateBagValue(bagName: string, keyName: string, valueData: string, valueLength: number, replicated: boolean): void { 
	return _in(0x00000000, 0x8d50e33a, _ts(bagName), _ts(keyName), _ts(valueData), valueLength, replicated); 
}


export function startFindKvp(prefix: string): number { 
	return _in(0x00000000, 0xdd379006, _ts(prefix), _r, _ri); 
}


export function stateBagHasKey(bagName: string, key: string): boolean { 
	return _in(0x00000000, 0x0012a330, _ts(bagName), _ts(key), _r); 
}


/**
 * The backing function for TriggerEvent.
 * @param eventName
 * @param eventPayload
 * @param payloadLength
 */
export function triggerEventInternal(eventName: string, eventPayload: string, payloadLength: number): void { 
	return _in(0x00000000, 0x91310870, _ts(eventName), _ts(eventPayload), payloadLength); 
}


/**
 * Returns whether or not the currently executing event was canceled.
 */
export function wasEventCanceled(): boolean { 
	return _in(0x00000000, 0x58382a19, _r); 
}
