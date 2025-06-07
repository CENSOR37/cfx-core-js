
import { Vector3 } from "../shared";
import { _i, _f, _v, _r, _ri, _rf, _rl, _s, _rv, _ro, _in, _ii, _fi, _ch, _obj, _ts, _fv, _mfr, _mv } from "../shared/header";




/**
 * Adds a rectangular blip for the specified coordinates/area.
 * It is recommended to use [SET_BLIP_ROTATION](#\_0xF87683CDF73C3F6E) and [SET_BLIP_COLOUR](#\_0x03D7FB09E75D6B7E) to make the blip not rotate along with the camera.
 * By default, the blip will show as a *regular* blip with the specified color/sprite if it is outside of the minimap view.
 * Example image:
 * ![minimap](https://i.imgur.com/qLbXWcQ.png)
 * ![big map](https://i.imgur.com/0j7O7Rh.png)
 * (Native name is *likely* to actually be ADD_BLIP_FOR_AREA, but due to the usual reasons this can't be confirmed)
 * 
 * **This is the server-side RPC native equivalent of the client native [\_ADD_BLIP_FOR_AREA](?\_0xCE5D0E5E315DB238).**
 * @param x
 * @param y
 * @param z
 * @param width
 * @param height
 */
export function addBlipForArea(x: number, y: number, z: number, width: number, height: number): number { 
	return _in(0x00000000, 0x6228f159, _fv(x), _fv(y), _fv(z), _fv(width), _fv(height), _r, _ri); 
}


/**
 * Creates a blip for the specified coordinates. You can use `SET_BLIP_` natives to change the blip.
 * 
 * **This is the server-side RPC native equivalent of the client native [ADD_BLIP_FOR_COORD](?\_0x5A039BB0BCA604B6).**
 * @param x
 * @param y
 * @param z
 */
export function addBlipForCoord(x: number, y: number, z: number): number { 
	return _in(0x00000000, 0xc6f43d0e, _fv(x), _fv(y), _fv(z), _r, _ri); 
}


/**
 * Create a blip that by default is red (enemy), you can use [SET_BLIP_AS_FRIENDLY](#\_0xC6F43D0E) to make it blue (friend).\
 * Can be used for objects, vehicles and peds.
 * Example of enemy:
 * ![enemy](https://i.imgur.com/fl78svv.png)
 * Example of friend:
 * ![friend](https://i.imgur.com/Q16ho5d.png)
 * 
 * **This is the server-side RPC native equivalent of the client native [ADD_BLIP_FOR_ENTITY](?\_0x5CDE92C702A8FCE7).**
 * @param entity
 */
export function addBlipForEntity(entity: number): number { 
	return _in(0x00000000, 0x30822554, entity, _r, _ri); 
}


/**
 * Create a blip with a radius for the specified coordinates (it doesnt create the blip sprite, so you need to use [AddBlipCoords](#\_0xC6F43D0E))
 * Example image:
 * ![example](https://i.imgur.com/9hQl3DB.png)
 * 
 * **This is the server-side RPC native equivalent of the client native [ADD_BLIP_FOR_RADIUS](?\_0x46818D79B1F7499A).**
 * @param posX
 * @param posY
 * @param posZ
 * @param radius
 */
export function addBlipForRadius(posX: number, posY: number, posZ: number, radius: number): number { 
	return _in(0x00000000, 0x4626756c, _fv(posX), _fv(posY), _fv(posZ), _fv(radius), _r, _ri); 
}


/**
 * ```
 * Applies an Item from a PedDecorationCollection to a ped. These include tattoos and shirt decals.
 * collection - PedDecorationCollection filename hash
 * overlay - Item name hash
 * Example:
 * Entry inside "mpbeach_overlays.xml" -
 * <Item>
 * <uvPos x="0.500000" y="0.500000" />
 * <scale x="0.600000" y="0.500000" />
 * <rotation value="0.000000" />
 * <nameHash>FM_Hair_Fuzz</nameHash>
 * <txdHash>mp_hair_fuzz</txdHash>
 * <txtHash>mp_hair_fuzz</txtHash>
 * <zone>ZONE_HEAD</zone>
 * <type>TYPE_TATTOO</type>
 * <faction>FM</faction>
 * <garment>All</garment>
 * <gender>GENDER_DONTCARE</gender>
 * <award />
 * <awardLevel />
 * </Item>
 * Code:
 * PED::_0x5F5D1665E352A839(PLAYER::PLAYER_PED_ID(), MISC::GET_HASH_KEY("mpbeach_overlays"), MISC::GET_HASH_KEY("fm_hair_fuzz"))
 * ```
 * 
 * **This is the server-side RPC native equivalent of the client native [ADD_PED_DECORATION_FROM_HASHES](?\_0x5F5D1665E352A839).**
 * @param ped
 * @param collection
 * @param overlay
 */
export function addPedDecorationFromHashes(ped: number, collection: number, overlay: number): void { 
	return _in(0x00000000, 0x70559ac7, ped, collection, overlay); 
}


/**
 * ```cpp
 * enum eApplyForceTypes {
 * APPLY_TYPE_FORCE = 0,
 * APPLY_TYPE_IMPULSE = 1,
 * APPLY_TYPE_EXTERNAL_FORCE = 2,
 * APPLY_TYPE_EXTERNAL_IMPULSE = 3,
 * APPLY_TYPE_TORQUE = 4,
 * APPLY_TYPE_ANGULAR_IMPULSE = 5
 * }
 * ```
 * 
 * **This is the server-side RPC native equivalent of the client native [APPLY_FORCE_TO_ENTITY](?\_0xC5F68BE9613E2D18).**
 * @param entity
 * @param forceType
 * @param x
 * @param y
 * @param z
 * @param offX
 * @param offY
 * @param offZ
 * @param nComponent
 * @param bLocalForce
 * @param bLocalOffset
 * @param bScaleByMass
 * @param bPlayAudio
 * @param bScaleByTimeWarp
 */
export function applyForceToEntity(entity: number, forceType: number, x: number, y: number, z: number, offX: number, offY: number, offZ: number, nComponent: number, bLocalForce: boolean, bLocalOffset: boolean, bScaleByMass: boolean, bPlayAudio: boolean, bScaleByTimeWarp: boolean): void { 
	return _in(0x00000000, 0xc1c0855a, entity, forceType, _fv(x), _fv(y), _fv(z), _fv(offX), _fv(offY), _fv(offZ), nComponent, bLocalForce, bLocalOffset, bScaleByMass, bPlayAudio, bScaleByTimeWarp); 
}


/**
 * Returns whether or not the specified player has enough information to start a commerce session for.
 * @param playerSrc
 */
export function canPlayerStartCommerceSession(playerSrc: string): boolean { 
	return _in(0x00000000, 0x429461c3, _ts(playerSrc), _r); 
}


/**
 * CLEAR_PED_PROP
 * 
 * **This is the server-side RPC native equivalent of the client native [CLEAR_PED_PROP](?\_0x0943E5B8E078E76E).**
 * @param ped
 * @param propId
 */
export function clearPedProp(ped: number, propId: number): void { 
	return _in(0x00000000, 0x2d23d743, ped, propId); 
}


/**
 * CLEAR_PED_SECONDARY_TASK
 * 
 * **This is the server-side RPC native equivalent of the client native [CLEAR_PED_SECONDARY_TASK](?\_0x176CECF6F920D707).**
 * @param ped
 */
export function clearPedSecondaryTask(ped: number): void { 
	return _in(0x00000000, 0xa635f451, ped); 
}


/**
 * Clear a ped's tasks. Stop animations and other tasks created by scripts.
 * 
 * **This is the server-side RPC native equivalent of the client native [CLEAR_PED_TASKS](?\_0xE1EF3C1216AFF2CD).**
 * @param ped
 */
export function clearPedTasks(ped: number): void { 
	return _in(0x00000000, 0xde3316ab, ped); 
}


/**
 * Immediately stops the pedestrian from whatever it's doing. The difference between this and [CLEAR_PED_TASKS](#\_0xE1EF3C1216AFF2CD) is that this one teleports the ped but does not change the position of the ped.
 * 
 * **This is the server-side RPC native equivalent of the client native [CLEAR_PED_TASKS_IMMEDIATELY](?\_0xAAA34F8A7CB32098).**
 * @param ped
 */
export function clearPedTasksImmediately(ped: number): void { 
	return _in(0x00000000, 0xbc045625, ped); 
}


/**
 * ```
 * This executes at the same as speed as PLAYER::SET_PLAYER_WANTED_LEVEL(player, 0, false);
 * PLAYER::GET_PLAYER_WANTED_LEVEL(player); executes in less than half the time. Which means that it's worth first checking if the wanted level needs to be cleared before clearing. However, this is mostly about good code practice and can important in other situations. The difference in time in this example is negligible.
 * ```
 * 
 * **This is the server-side RPC native equivalent of the client native [CLEAR_PLAYER_WANTED_LEVEL](?\_0xB302540597885499).**
 * @param player
 */
export function clearPlayerWantedLevel(player: number): void { 
	return _in(0x00000000, 0x54ea5bcc, player); 
}


/**
 * Creates an object (prop) with the specified model at the specified position, offset on the Z axis by the radius of the object's model.
 * This object will initially be owned by the creating script as a mission entity, and the model should be loaded already (e.g. using REQUEST_MODEL).
 * 
 * **This is the server-side RPC native equivalent of the client native [CREATE_OBJECT](?\_0x509D5878EB39E842).**
 * @param modelHash
 * @param x
 * @param y
 * @param z
 * @param isNetwork
 * @param netMissionEntity
 * @param doorFlag
 */
export function createObject(modelHash: number, x: number, y: number, z: number, isNetwork: boolean, netMissionEntity: boolean, doorFlag: boolean): number { 
	return _in(0x00000000, 0x2f7aa05c, modelHash, _fv(x), _fv(y), _fv(z), isNetwork, netMissionEntity, doorFlag, _r, _ri); 
}


/**
 * Creates an object (prop) with the specified model centered at the specified position.
 * This object will initially be owned by the creating script as a mission entity, and the model should be loaded already (e.g. using REQUEST_MODEL).
 * 
 * **This is the server-side RPC native equivalent of the client native [CREATE_OBJECT_NO_OFFSET](?\_0x9A294B2138ABB884).**
 * @param modelHash
 * @param x
 * @param y
 * @param z
 * @param isNetwork
 * @param netMissionEntity
 * @param doorFlag
 */
export function createObjectNoOffset(modelHash: number, x: number, y: number, z: number, isNetwork: boolean, netMissionEntity: boolean, doorFlag: boolean): number { 
	return _in(0x00000000, 0x58040420, modelHash, _fv(x), _fv(y), _fv(z), isNetwork, netMissionEntity, doorFlag, _r, _ri); 
}


/**
 * Creates a ped (biped character, pedestrian, actor) with the specified model at the specified position and heading.
 * This ped will initially be owned by the creating script as a mission entity, and the model should be loaded already
 * (e.g. using REQUEST_MODEL).
 * 
 * **This is the server-side RPC native equivalent of the client native [CREATE_PED](?\_0xD49F9B0955C367DE).**
 * @param pedType
 * @param modelHash
 * @param x
 * @param y
 * @param z
 * @param heading
 * @param isNetwork
 * @param bScriptHostPed
 */
export function createPed(pedType: number, modelHash: number, x: number, y: number, z: number, heading: number, isNetwork: boolean, bScriptHostPed: boolean): number { 
	return _in(0x00000000, 0x0389ef71, pedType, modelHash, _fv(x), _fv(y), _fv(z), _fv(heading), isNetwork, bScriptHostPed, _r, _ri); 
}


/**
 * CREATE_PED_INSIDE_VEHICLE
 * 
 * **This is the server-side RPC native equivalent of the client native [CREATE_PED_INSIDE_VEHICLE](?\_0x7DD959874C1FD534).**
 * @param vehicle
 * @param pedType
 * @param modelHash
 * @param seat
 * @param isNetwork
 * @param bScriptHostPed
 */
export function createPedInsideVehicle(vehicle: number, pedType: number, modelHash: number, seat: number, isNetwork: boolean, bScriptHostPed: boolean): number { 
	return _in(0x00000000, 0x3000f092, vehicle, pedType, modelHash, seat, isNetwork, bScriptHostPed, _r, _ri); 
}


/**
 * Creates a vehicle with the specified model at the specified position. This vehicle will initially be owned by the creating
 * script as a mission entity, and the model should be loaded already (e.g. using REQUEST_MODEL).
 * 
 * ```
 * NativeDB Added Parameter 8: BOOL p7
 * ```
 * 
 * **This is the server-side RPC native equivalent of the client native [CREATE_VEHICLE](?\_0xAF35D0D2583051B0).**
 * @param modelHash
 * @param x
 * @param y
 * @param z
 * @param heading
 * @param isNetwork
 * @param netMissionEntity
 */
export function createVehicle(modelHash: number, x: number, y: number, z: number, heading: number, isNetwork: boolean, netMissionEntity: boolean): number { 
	return _in(0x00000000, 0xdd75460a, modelHash, _fv(x), _fv(y), _fv(z), _fv(heading), isNetwork, netMissionEntity, _r, _ri); 
}


/**
 * Equivalent to CREATE_VEHICLE, but it uses 'server setter' logic (like the former CREATE_AUTOMOBILE) as a workaround for
 * reliability concerns regarding entity creation RPC.
 * 
 * Unlike CREATE_AUTOMOBILE, this supports other vehicle types as well.
 * @param modelHash
 * @param type
 * @param x
 * @param y
 * @param z
 * @param heading
 */
export function createVehicleServerSetter(modelHash: number, type: string, x: number, y: number, z: number, heading: number): number { 
	return _in(0x00000000, 0x6ae51d4b, modelHash, _ts(type), _fv(x), _fv(y), _fv(z), _fv(heading), _r, _ri); 
}


/**
 * Deletes the specified entity.
 * 
 * **NOTE**: For trains this will only work if called on the train engine, it will not work on its carriages.
 * @param entity
 */
export function deleteEntity(entity: number): void { 
	return _in(0x00000000, 0xfaa3d236, entity); 
}


/**
 * Deletes the specified `entity` and any carriage its attached to, or that is attached to it.
 * @param entity
 */
export function deleteTrain(entity: number): void { 
	return _in(0x00000000, 0x523ba3da, entity); 
}


export function doesBoatSinkWhenWrecked(vehicle: number): boolean { 
	return _in(0x00000000, 0x43f15989, vehicle, _r); 
}


export function doesEntityExist(entity: number): boolean { 
	return _in(0x00000000, 0x3ac90869, entity, _r); 
}


/**
 * Returns whether or not the player exists
 * @param playerSrc
 */
export function doesPlayerExist(playerSrc: string): boolean { 
	return _in(0x00000000, 0x12038599, _ts(playerSrc), _r); 
}


/**
 * Requests whether or not the player owns the specified SKU.
 * @param playerSrc
 * @param skuId
 */
export function doesPlayerOwnSku(playerSrc: string, skuId: number): boolean { 
	return _in(0x00000000, 0x167aba27, _ts(playerSrc), skuId, _r); 
}


/**
 * Requests whether or not the player owns the specified package.
 * @param playerSrc
 * @param skuId
 */
export function doesPlayerOwnSkuExt(playerSrc: string, skuId: number): boolean { 
	return _in(0x00000000, 0xdef0480b, _ts(playerSrc), skuId, _r); 
}


export function dropPlayer(playerSrc: string, reason: string): void { 
	return _in(0x00000000, 0xba0613e1, _ts(playerSrc), _ts(reason)); 
}


export function enableEnhancedHostSupport(enabled: boolean): void { 
	return _in(0x00000000, 0xf97b1c93, enabled); 
}


export function flagServerAsPrivate(private_: boolean): void { 
	return _in(0x00000000, 0x13b6855d, private_); 
}


/**
 * Nonsynchronous operations will not wait for a disk/filesystem flush before returning from a write or delete call. They will be much faster than their synchronous counterparts (e.g., bulk operations), however, a system crash may lose the data to some recent operations.
 * 
 * This native ensures all `_NO_SYNC` operations are synchronized with the disk/filesystem.
 */
export function flushResourceKvp(): void { 
	return _in(0x00000000, 0xe27c97a0); 
}


/**
 * Freezes or unfreezes an entity preventing its coordinates to change by the player if set to `true`. You can still change the entity position using [`SET_ENTITY_COORDS`](#\_0x06843DA7060A026B).
 * 
 * **This is the server-side RPC native equivalent of the client native [FREEZE_ENTITY_POSITION](?\_0x428CA6DBD1094446).**
 * @param entity
 * @param toggle
 */
export function freezeEntityPosition(entity: number, toggle: boolean): void { 
	return _in(0x00000000, 0x65c16d57, entity, toggle); 
}


export function getAirDragMultiplierForPlayersVehicle(playerSrc: string): number { 
	return _in(0x00000000, 0x62fc38d0, _ts(playerSrc), _r, _rf); 
}


/**
 * Returns all object handles known to the server.
 * The data returned adheres to the following layout:
 * 
 * ```
 * [127, 42, 13, 37]
 * ```
 */
export function getAllObjects(): any { 
	return _in(0x00000000, 0x6886c3fe, _r, _ro); 
}


/**
 * Returns all peds handles known to the server.
 * The data returned adheres to the following layout:
 * 
 * ```
 * [127, 42, 13, 37]
 * ```
 */
export function getAllPeds(): any { 
	return _in(0x00000000, 0xb8584fef, _r, _ro); 
}


/**
 * Returns all vehicle handles known to the server.
 * The data returned adheres to the following layout:
 * 
 * ```
 * [127, 42, 13, 37]
 * ```
 */
export function getAllVehicles(): any { 
	return _in(0x00000000, 0x332169f5, _r, _ro); 
}


/**
 * Returns the current console output buffer.
 */
export function getConsoleBuffer(): string { 
	return _in(0x00000000, 0xe57429fa, _r, _s); 
}


/**
 * Returns the hash of weapon the Ped is currently using.
 * @param ped
 */
export function getCurrentPedWeapon(ped: number): number { 
	return _in(0x00000000, 0xb0237302, ped, _r, _ri); 
}


/**
 * Gets the entity that this entity is attached to.
 * @param entity
 */
export function getEntityAttachedTo(entity: number): number { 
	return _in(0x00000000, 0xfe1589f9, entity, _r, _ri); 
}


export function getEntityCollisionDisabled(entity: number): boolean { 
	return _in(0x00000000, 0xe8c0c629, entity, _r); 
}


/**
 * Gets the current coordinates for a specified entity. This native is used server side when using OneSync.
 * 
 * See [GET_ENTITY_COORDS](#\_0x3FEF770D40960D5A) for client side.
 * @param entity
 */
export function getEntityCoords(entity: number): Vector3 { 
	return _mv(_in(0x00000000, 0x1647f1cb, entity, _r, _rv)); 
}


export function getEntityHeading(entity: number): number { 
	return _in(0x00000000, 0x972cc383, entity, _r, _rf); 
}


/**
 * Only works for vehicle and peds
 * @param entity
 */
export function getEntityHealth(entity: number): number { 
	return _in(0x00000000, 0x8e3222b7, entity, _r, _ri); 
}


/**
 * Currently it only works with peds.
 * @param entity
 */
export function getEntityMaxHealth(entity: number): number { 
	return _in(0x00000000, 0xc7ae6aa1, entity, _r, _ri); 
}


export function getEntityModel(entity: number): number { 
	return _in(0x00000000, 0xdafcb3ec, entity, _r, _ri); 
}


export function getEntityOrphanMode(entity: number): number { 
	return _in(0x00000000, 0xd16ea02f, entity, _r, _ri); 
}


/**
 * This native gets an entity's population type.
 * @param entity
 */
export function getEntityPopulationType(entity: number): number { 
	return _in(0x00000000, 0xfc30ddff, entity, _r, _ri); 
}


export function getEntityRemoteSyncedScenesAllowed(entity: number): boolean { 
	return _in(0x00000000, 0x91b38fb6, entity, _r); 
}


export function getEntityRotation(entity: number): Vector3 { 
	return _mv(_in(0x00000000, 0x8ff45b04, entity, _r, _rv)); 
}


export function getEntityRotationVelocity(entity: number): Vector3 { 
	return _mv(_in(0x00000000, 0x9bf8a73f, entity, _r, _rv)); 
}


/**
 * Gets the routing bucket for the specified entity.
 * 
 * Routing buckets are also known as 'dimensions' or 'virtual worlds' in past echoes, however they are population-aware.
 * @param entity
 */
export function getEntityRoutingBucket(entity: number): number { 
	return _in(0x00000000, 0xed4b0486, entity, _r, _ri); 
}


export function getEntityScript(entity: number): string { 
	return _in(0x00000000, 0xb7f70784, entity, _r, _s); 
}


/**
 * Gets the current speed of the entity in meters per second.
 * 
 * ```
 * To convert to MPH: speed * 2.236936
 * To convert to KPH: speed * 3.6
 * ```
 * @param entity
 */
export function getEntitySpeed(entity: number): number { 
	return _in(0x00000000, 0x9e1e4798, entity, _r, _rf); 
}


/**
 * Gets the entity type (as an integer), which can be one of the following defined down below:
 * 
 * **The following entities will return type `1`:**
 * 
 * *   Ped
 * *   Player
 * *   Animal (Red Dead Redemption 2)
 * *   Horse (Red Dead Redemption 2)
 * 
 * **The following entities will return type `2`:**
 * 
 * *   Automobile
 * *   Bike
 * *   Boat
 * *   Heli
 * *   Plane
 * *   Submarine
 * *   Trailer
 * *   Train
 * *   DraftVeh (Red Dead Redemption 2)
 * 
 * **The following entities will return type `3`:**
 * 
 * *   Object
 * *   Door
 * *   Pickup
 * 
 * Otherwise, a value of `0` will be returned.
 * @param entity
 */
export function getEntityType(entity: number): number { 
	return _in(0x00000000, 0x0b1bd08d, entity, _r, _ri); 
}


export function getEntityVelocity(entity: number): Vector3 { 
	return _mv(_in(0x00000000, 0xc14c9b6b, entity, _r, _rv)); 
}


/**
 * Gets the current game timer in milliseconds.
 */
export function getGameTimer(): any { 
	return _in(0x00000000, 0xa4ea0691, _r, _rl); 
}


/**
 * This native converts the passed string to a hash.
 * @param model
 */
export function getHashKey(model: string): number { 
	return _in(0x00000000, 0x98eff6f1, _ts(model), _r, _ri); 
}


/**
 * **Note** This native will always return `1000.0` unless [SET_VEHICLE_BODY_HEALTH](#\_0xB77D05AC8C78AADB), [SET_VEHICLE_ENGINE_HEALTH](#\_0x45F6D8EEF34ABEF1), or [SET_VEHICLE_PETROL_TANK_HEALTH](#\_0x70DB57649FA8D0D8) have been called with a value greater than `1000.0`.
 * @param heli
 */
export function getHeliBodyHealth(heli: number): number { 
	return _in(0x00000000, 0xa886495d, heli, _r, _ri); 
}


/**
 * This is a getter for [SET_DISABLE_HELI_EXPLODE_FROM_BODY_DAMAGE](#\_0xEDBC8405B3895CC9)
 * @param heli
 */
export function getHeliDisableExplodeFromBodyDamage(heli: number): boolean { 
	return _in(0x00000000, 0x82afc0a3, heli, _r); 
}


/**
 * **Note** This native will always return `1000.0` unless [SET_VEHICLE_BODY_HEALTH](#\_0xB77D05AC8C78AADB), [SET_VEHICLE_ENGINE_HEALTH](#\_0x45F6D8EEF34ABEF1), or [SET_VEHICLE_PETROL_TANK_HEALTH](#\_0x70DB57649FA8D0D8) have been called with a value greater than `1000.0`.
 * @param heli
 */
export function getHeliEngineHealth(heli: number): number { 
	return _in(0x00000000, 0xa0fa0354, heli, _r, _ri); 
}


/**
 * **Note** This native will always return `1000.0` unless [SET_VEHICLE_BODY_HEALTH](#\_0xB77D05AC8C78AADB), [SET_VEHICLE_ENGINE_HEALTH](#\_0x45F6D8EEF34ABEF1), or [SET_VEHICLE_PETROL_TANK_HEALTH](#\_0x70DB57649FA8D0D8) have been called with a value greater than `1000.0`.
 * @param heli
 */
export function getHeliGasTankHealth(heli: number): number { 
	return _in(0x00000000, 0xd4ec7858, heli, _r, _ri); 
}


export function getHeliMainRotorDamageScale(heli: number): number { 
	return _in(0x00000000, 0x0c37d668, heli, _r, _rf); 
}


export function getHeliMainRotorHealth(vehicle: number): number { 
	return _in(0x00000000, 0xf01e2aab, vehicle, _r, _rf); 
}


export function getHeliPitchControl(heli: number): number { 
	return _in(0x00000000, 0x1944ac95, heli, _r, _rf); 
}


export function getHeliRearRotorDamageScale(heli: number): number { 
	return _in(0x00000000, 0xc40161e2, heli, _r, _rf); 
}


/**
 * This native is a getter for [SET_HELI_TAIL_ROTOR_HEALTH](#\_0xFE205F38AAA58E5B)
 * @param vehicle
 */
export function getHeliRearRotorHealth(vehicle: number): number { 
	return _in(0x00000000, 0x33ee6e2b, vehicle, _r, _rf); 
}


export function getHeliRollControl(heli: number): number { 
	return _in(0x00000000, 0x12948de9, heli, _r, _rf); 
}


export function getHeliTailRotorDamageScale(heli: number): number { 
	return _in(0x00000000, 0x22239130, heli, _r, _rf); 
}


/**
 * **Note**: This native is deprecated, please use [`GET_HELI_REAR_ROTOR_HEALTH`](#\_0x33EE6E2B) instead.
 * @param vehicle
 */
export function getHeliTailRotorHealth(vehicle: number): number { 
	return _in(0x00000000, 0xa41bc13d, vehicle, _r, _rf); 
}


export function getHeliThrottleControl(heli: number): number { 
	return _in(0x00000000, 0x8e86238d, heli, _r, _rf); 
}


export function getHeliYawControl(heli: number): number { 
	return _in(0x00000000, 0x8fdc0768, heli, _r, _rf); 
}


export function getHostId(): string { 
	return _in(0x00000000, 0x5f70f5a3, _r, _s); 
}


export function getIsHeliEngineRunning(heli: number): boolean { 
	return _in(0x00000000, 0x3efe38d1, heli, _r); 
}


export function getIsVehicleEngineRunning(vehicle: number): boolean { 
	return _in(0x00000000, 0x7dc6d022, vehicle, _r); 
}


export function getIsVehiclePrimaryColourCustom(vehicle: number): boolean { 
	return _in(0x00000000, 0xd7ec8760, vehicle, _r); 
}


export function getIsVehicleSecondaryColourCustom(vehicle: number): boolean { 
	return _in(0x00000000, 0x288ad228, vehicle, _r); 
}


/**
 * See the client-side [GET_LANDING_GEAR_STATE](#\_0x9B0F3DCA3DB0F4CD) native for a description of landing gear states.
 * @param vehicle
 */
export function getLandingGearState(vehicle: number): number { 
	return _in(0x00000000, 0xa6f02670, vehicle, _r, _ri); 
}


export function getLastPedInVehicleSeat(vehicle: number, seatIndex: number): number { 
	return _in(0x00000000, 0xf7c6792d, vehicle, seatIndex, _r, _ri); 
}


export function getNumPlayerIdentifiers(playerSrc: string): number { 
	return _in(0x00000000, 0xff7f66ab, _ts(playerSrc), _r, _ri); 
}


export function getNumPlayerIndices(): number { 
	return _in(0x00000000, 0x63d13184, _r, _ri); 
}


export function getNumPlayerTokens(playerSrc: string): number { 
	return _in(0x00000000, 0x619e4a3d, _ts(playerSrc), _r, _ri); 
}


export function getPasswordHash(password: string): string { 
	return _in(0x00000000, 0x23473ea4, _ts(password), _r, _s); 
}


export function getPedArmour(ped: number): number { 
	return _in(0x00000000, 0x2ce311a7, ped, _r, _ri); 
}


export function getPedCauseOfDeath(ped: number): number { 
	return _in(0x00000000, 0x63458c27, ped, _r, _ri); 
}


export function getPedDesiredHeading(ped: number): number { 
	return _in(0x00000000, 0xc182f76e, ped, _r, _rf); 
}


export function getPedInVehicleSeat(vehicle: number, seatIndex: number): number { 
	return _in(0x00000000, 0x388fde9a, vehicle, seatIndex, _r, _ri); 
}


export function getPedMaxHealth(ped: number): number { 
	return _in(0x00000000, 0xa45b6c8d, ped, _r, _ri); 
}


/**
 * Gets the current relationship group hash of a ped.
 * @param ped
 */
export function getPedRelationshipGroupHash(ped: number): number { 
	return _in(0x00000000, 0x354f283c, ped, _r, _ri); 
}


/**
 * Gets the script task command currently assigned to the ped.
 * @param ped
 */
export function getPedScriptTaskCommand(ped: number): number { 
	return _in(0x00000000, 0x084fe084, ped, _r, _ri); 
}


/**
 * Gets the stage of the peds scripted task.
 * @param ped
 */
export function getPedScriptTaskStage(ped: number): number { 
	return _in(0x00000000, 0x44b0e5e2, ped, _r, _ri); 
}


/**
 * Get the last entity that damaged the ped. This native is used server side when using OneSync.
 * @param ped
 */
export function getPedSourceOfDamage(ped: number): number { 
	return _in(0x00000000, 0x535db43f, ped, _r, _ri); 
}


/**
 * Get the entity that killed the ped. This native is used server side when using OneSync.
 * @param ped
 */
export function getPedSourceOfDeath(ped: number): number { 
	return _in(0x00000000, 0x84adf9eb, ped, _r, _ri); 
}


/**
 * Gets the type of a ped's specific task given an index of the CPedTaskSpecificDataNode nodes.
 * A ped will typically have a task at index 0, if a ped has multiple tasks at once they will be in the order 0, 1, 2, etc.
 * @param ped
 * @param index
 */
export function getPedSpecificTaskType(ped: number, index: number): number { 
	return _in(0x00000000, 0x7f4563d3, ped, index, _r, _ri); 
}


export function getPedStealthMovement(ped: number): boolean { 
	return _in(0x00000000, 0x40321b83, ped, _r); 
}


/**
 * Gets the current camera rotation for a specified player. This native is used server side when using OneSync.
 * @param playerSrc
 */
export function getPlayerCameraRotation(playerSrc: string): Vector3 { 
	return _mv(_in(0x00000000, 0x433c765d, _ts(playerSrc), _r, _rv)); 
}


export function getPlayerEndpoint(playerSrc: string): string { 
	return _in(0x00000000, 0xfee404f9, _ts(playerSrc), _r, _s); 
}


/**
 * Gets the current fake wanted level for a specified player. This native is used server side when using OneSync.
 * @param playerSrc
 */
export function getPlayerFakeWantedLevel(playerSrc: string): number { 
	return _in(0x00000000, 0x0098d244, _ts(playerSrc), _r, _ri); 
}


/**
 * Gets the focus position (i.e. the position of the active camera in the game world) of a player.
 * @param playerSrc
 */
export function getPlayerFocusPos(playerSrc: string): Vector3 { 
	return _mv(_in(0x00000000, 0x586f80ff, _ts(playerSrc), _r, _rv)); 
}


export function getPlayerFromIndex(index: number): string { 
	return _in(0x00000000, 0xc8a9ce08, index, _r, _s); 
}


export function getPlayerGuid(playerSrc: string): string { 
	return _in(0x00000000, 0xe52d9680, _ts(playerSrc), _r, _s); 
}


/**
 * To get the number of identifiers, use [GET_NUM_PLAYER_IDENTIFIERS](?\_0xFF7F66AB)
 * 
 * To get a specific type of identifier, use [GET_PLAYER_IDENTIFIER_BY_TYPE](?\_0xA61C8FC6)
 * @param playerSrc
 * @param identiferIndex
 */
export function getPlayerIdentifier(playerSrc: string, identiferIndex: number): string { 
	return _in(0x00000000, 0x7302dbcf, _ts(playerSrc), identiferIndex, _r, _s); 
}


/**
 * Get an identifier from a player by the type of the identifier.
 * Known [Identifiers](https://docs.fivem.net/docs/scripting-reference/runtimes/lua/functions/GetPlayerIdentifiers/#identifier-types)
 * @param playerSrc
 * @param identifierType
 */
export function getPlayerIdentifierByType(playerSrc: string, identifierType: string): string { 
	return _in(0x00000000, 0xa61c8fc6, _ts(playerSrc), _ts(identifierType), _r, _s); 
}


export function getPlayerInvincible(playerSrc: string): boolean { 
	return _in(0x00000000, 0x680c90ee, _ts(playerSrc), _r); 
}


export function getPlayerLastMsg(playerSrc: string): number { 
	return _in(0x00000000, 0x427e8e6a, _ts(playerSrc), _r, _ri); 
}


export function getPlayerMaxArmour(playerSrc: string): number { 
	return _in(0x00000000, 0x02a50657, _ts(playerSrc), _r, _ri); 
}


export function getPlayerMaxHealth(playerSrc: string): number { 
	return _in(0x00000000, 0x8154e470, _ts(playerSrc), _r, _ri); 
}


export function getPlayerName(playerSrc: string): string { 
	return _in(0x00000000, 0x406b4b20, _ts(playerSrc), _r, _s); 
}


/**
 * Used to get the player's Ped Entity ID when a valid `playerSrc` is passed.
 * @param playerSrc
 */
export function getPlayerPed(playerSrc: string): number { 
	return _in(0x00000000, 0x6e31e993, _ts(playerSrc), _r, _ri); 
}


/**
 * ```cpp
 * const int ENET_PACKET_LOSS_SCALE = 65536;
 * 
 * enum PeerStatistics
 * {
 * // PacketLoss will only update once every 10 seconds, use PacketLossEpoch if you want the time
 * // since the last time the packet loss was updated.
 * 
 * // the amount of packet loss the player has, needs to be scaled with PACKET_LOSS_SCALE
 * PacketLoss = 0,
 * // The variance in the packet loss
 * PacketLossVariance = 1,
 * // The time since the last packet update in ms, relative to the peers connection time
 * PacketLossEpoch = 2,
 * // The mean amount of time it takes for a packet to get to the client (ping)
 * RoundTripTime = 3,
 * // The variance in the round trip time
 * RoundTripTimeVariance = 4,
 * // Despite their name, these are only updated once every 5 seconds, you can get the last time this was updated with PacketThrottleEpoch
 * // The last recorded round trip time of a packet
 * LastRoundTripTime = 5,
 * // The last round trip time variance
 * LastRoundTripTimeVariance = 6,
 * // The time since the last packet throttle update, relative to the peers connection time
 * PacketThrottleEpoch = 7,
 * };
 * ```
 * 
 * These statistics only update once every 10 seconds.
 * @param playerSrc
 * @param peerStatistic
 */
export function getPlayerPeerStatistics(playerSrc: string, peerStatistic: number): number { 
	return _in(0x00000000, 0x9a928294, _ts(playerSrc), peerStatistic, _r, _ri); 
}


/**
 * See [GET_PLAYER_PEER_STATISTICS](#\_0x9A928294) if you want more detailed information, like packet loss, and packet/rtt variance
 * @param playerSrc
 */
export function getPlayerPing(playerSrc: string): number { 
	return _in(0x00000000, 0xff1290d4, _ts(playerSrc), _r, _ri); 
}


/**
 * Gets the routing bucket for the specified player.
 * 
 * Routing buckets are also known as 'dimensions' or 'virtual worlds' in past echoes, however they are population-aware.
 * @param playerSrc
 */
export function getPlayerRoutingBucket(playerSrc: string): number { 
	return _in(0x00000000, 0x52441c34, _ts(playerSrc), _r, _ri); 
}


export function getPlayerTeam(playerSrc: string): number { 
	return _in(0x00000000, 0x9873e404, _ts(playerSrc), _r, _ri); 
}


/**
 * ```
 * Gets the amount of time player has spent evading the cops.
 * Counter starts and increments only when cops are chasing the player.
 * If the player is evading, the timer will pause.
 * ```
 * @param playerSrc
 * @param lastPursuit
 */
export function getPlayerTimeInPursuit(playerSrc: string, lastPursuit: boolean): number { 
	return _in(0x00000000, 0x7ade63e1, _ts(playerSrc), lastPursuit, _r, _ri); 
}


/**
 * Gets the current time online for a specified player.
 * @param playerSrc
 */
export function getPlayerTimeOnline(playerSrc: string): number { 
	return _in(0x00000000, 0x67d2e605, _ts(playerSrc), _r, _ri); 
}


/**
 * Gets a player's token. Tokens can be used to enhance banning logic, however are specific to a server.
 * @param playerSrc
 * @param index
 */
export function getPlayerToken(playerSrc: string, index: number): string { 
	return _in(0x00000000, 0x54c06897, _ts(playerSrc), index, _r, _s); 
}


/**
 * Gets the current known coordinates for the specified player from cops perspective. This native is used server side when using OneSync.
 * @param playerSrc
 */
export function getPlayerWantedCentrePosition(playerSrc: string): Vector3 { 
	return _mv(_in(0x00000000, 0x821f2d2c, _ts(playerSrc), _r, _rv)); 
}


/**
 * ```
 * Returns given players wanted level server-side.
 * ```
 * @param playerSrc
 */
export function getPlayerWantedLevel(playerSrc: string): number { 
	return _in(0x00000000, 0xbdcdd163, _ts(playerSrc), _r, _ri); 
}


/**
 * Returns the physical on-disk path of the specified resource.
 * @param resourceName
 */
export function getResourcePath(resourceName: string): string { 
	return _in(0x00000000, 0x61dcf017, _ts(resourceName), _r, _s); 
}


/**
 * An alias of [GET_CURRENT_PED_WEAPON](#\_0xB0237302).
 * 
 * Note, the client-side [GET_SELECTED_PED_WEAPON](#\_0x0A6DB4965674D243) native returns the weapon selected via the HUD (weapon wheel). This data is not available to FXServer.
 * @param ped
 */
export function getSelectedPedWeapon(ped: number): number { 
	return _in(0x00000000, 0xd240123e, ped, _r, _ri); 
}


export function getThrusterSideRcsThrottle(jetpack: number): number { 
	return _in(0x00000000, 0x1c939e87, jetpack, _r, _rf); 
}


export function getThrusterThrottle(jetpack: number): number { 
	return _in(0x00000000, 0x94e24c96, jetpack, _r, _rf); 
}


export function getTrainCarriageEngine(train: number): number { 
	return _in(0x00000000, 0x095070fa, train, _r, _ri); 
}


export function getTrainCarriageIndex(train: number): number { 
	return _in(0x00000000, 0x4b8285cf, train, _r, _ri); 
}


export function getVehicleBodyHealth(vehicle: number): number { 
	return _in(0x00000000, 0x2b2fcc28, vehicle, _r, _rf); 
}


export function getVehicleColours(vehicle: number): [number, number] { 
	const [colorPrimary_out, colorSecondary_out] = _in(0x00000000, 0x40d82d88, vehicle, _i, _i);
	return [colorPrimary_out as number, colorSecondary_out as number]; 
}


export function getVehicleCustomPrimaryColour(vehicle: number): [number, number, number] { 
	const [r_out, g_out, b_out] = _in(0x00000000, 0x1c2b9fef, vehicle, _i, _i, _i);
	return [r_out as number, g_out as number, b_out as number]; 
}


export function getVehicleCustomSecondaryColour(vehicle: number): [number, number, number] { 
	const [r_out, g_out, b_out] = _in(0x00000000, 0x3ff247a2, vehicle, _i, _i, _i);
	return [r_out as number, g_out as number, b_out as number]; 
}


export function getVehicleDashboardColour(vehicle: number, color: number): number { 
	return _in(0x00000000, 0xa0dbd08d, vehicle, _ii(color)); 
}


export function getVehicleDirtLevel(vehicle: number): number { 
	return _in(0x00000000, 0xfd15c065, vehicle, _r, _rf); 
}


/**
 * ```lua
 * enum_VehicleLockStatus = {
 * None = 0,
 * Locked = 2,
 * LockedForPlayer = 3,
 * StickPlayerInside = 4, -- Doesn't allow players to exit the vehicle with the exit vehicle key.
 * CanBeBrokenInto = 7, -- Can be broken into the car. If the glass is broken, the value will be set to 1
 * CanBeBrokenIntoPersist = 8, -- Can be broken into persist
 * CannotBeTriedToEnter = 10, -- Cannot be tried to enter (Nothing happens when you press the vehicle enter key).
 * }
 * ```
 * 
 * It should be [noted](https://forum.cfx.re/t/4863241) that while the [client-side command](#\_0x25BC98A59C2EA962) and its
 * setter distinguish between states 0 (unset) and 1 (unlocked), the game will synchronize both as state 0, so the server-side
 * command will return only '0' if unlocked.
 * @param vehicle
 */
export function getVehicleDoorLockStatus(vehicle: number): number { 
	return _in(0x00000000, 0x0d72cef2, vehicle, _r, _ri); 
}


/**
 * Returns the open position of the specified door on the target vehicle.
 * @param vehicle
 * @param doorIndex
 */
export function getVehicleDoorStatus(vehicle: number, doorIndex: number): number { 
	return _in(0x00000000, 0x6e35c49c, vehicle, doorIndex, _r, _ri); 
}


/**
 * Currently it only works when set to "all players".
 * @param vehicle
 */
export function getVehicleDoorsLockedForPlayer(vehicle: number): number { 
	return _in(0x00000000, 0x1dc50247, vehicle, _r, _ri); 
}


export function getVehicleEngineHealth(vehicle: number): number { 
	return _in(0x00000000, 0x8880038a, vehicle, _r, _rf); 
}


export function getVehicleExtraColours(vehicle: number): [number, number] { 
	const [pearlescentColor_out, wheelColor_out] = _in(0x00000000, 0x80e4659b, vehicle, _i, _i);
	return [pearlescentColor_out as number, wheelColor_out as number]; 
}


/**
 * Gets the flight nozzel position for the specified vehicle. See the client-side [\_GET_VEHICLE_FLIGHT_NOZZLE_POSITION](#\_0xDA62027C8BDB326E) native for usage examples.
 * @param vehicle
 */
export function getVehicleFlightNozzlePosition(vehicle: number): number { 
	return _in(0x00000000, 0xad40ad55, vehicle, _r, _rf); 
}


export function getVehicleHeadlightsColour(vehicle: number): number { 
	return _in(0x00000000, 0xd7147656, vehicle, _r, _ri); 
}


/**
 * Gets the lock on state for the specified vehicle. See the client-side [GET_VEHICLE_HOMING_LOCKON_STATE](#\_0xE6B0E8CFC3633BF0) native for a description of lock on states.
 * @param vehicle
 */
export function getVehicleHomingLockonState(vehicle: number): number { 
	return _in(0x00000000, 0xfbde9fd8, vehicle, _r, _ri); 
}


/**
 * This is a getter for the client-side native [`START_VEHICLE_HORN`](https://docs.fivem.net/natives/?\_0x9C8C6504B5B63D2C), which allows you to return the horn type of the vehicle.
 * 
 * **Note**: This native only gets the hash value set with `START_VEHICLE_HORN`. If a wrong hash is passed into `START_VEHICLE_HORN`, it will return this wrong hash.
 * 
 * ```cpp
 * enum eHornTypes
 * {
 * NORMAL = 1330140148,
 * HELDDOWN = -2087385909,
 * AGGRESSIVE = -92810745
 * }
 * ```
 * @param vehicle
 */
export function getVehicleHornType(vehicle: number): number { 
	return _in(0x00000000, 0xdea49773, vehicle, _r, _ri); 
}


export function getVehicleInteriorColour(vehicle: number, color: number): number { 
	return _in(0x00000000, 0xccff3b6e, vehicle, _ii(color)); 
}


export function getVehicleLightsState(vehicle: number): [boolean, boolean, boolean] { 
	const [retval, lightsOn_out, highbeamsOn_out] = _in(0x00000000, 0x7c278621, vehicle, _i, _i, _r);
	return [retval as boolean, lightsOn_out as boolean, highbeamsOn_out as boolean]; 
}


export function getVehicleLivery(vehicle: number): number { 
	return _in(0x00000000, 0xec82a51d, vehicle, _r, _ri); 
}


/**
 * Gets the vehicle that is locked on to for the specified vehicle.
 * @param vehicle
 */
export function getVehicleLockOnTarget(vehicle: number): number { 
	return _in(0x00000000, 0x4a557117, vehicle, _r, _ri); 
}


/**
 * Getter to check the neon colour of a vehicle. This native is the server side getter of [GET_VEHICLE_NEON_LIGHTS_COLOUR](#\_0x7619EEE8C886757F).
 * @param vehicle
 * @param red
 * @param green
 * @param blue
 */
export function getVehicleNeonColour(vehicle: number): [number, number, number] { 
	const [red_out, green_out, blue_out] = _in(0x00000000, 0xd9319dcb, vehicle, _i, _i, _i);
	return [red_out as number, green_out as number, blue_out as number]; 
}


/**
 * Getter to check if one of the neon lights of a vehicle is enabled. This native is the server side getter of [IS_VEHICLE_NEON_LIGHT_ENABLED](#\_0x8C4B92553E4766A5).
 * 
 * ```cpp
 * enum neonIndex
 * {
 * NEON_BACK = 0,   // Back neon
 * NEON_RIGHT = 1,  // Right neon
 * NEON_LEFT = 2,   // Left neon
 * NEON_FRONT = 3   // Front neon
 * };
 * ```
 * @param vehicle
 * @param neonIndex
 */
export function getVehicleNeonEnabled(vehicle: number, neonIndex: number): boolean { 
	return _in(0x00000000, 0x684bdbf2, vehicle, neonIndex, _r); 
}


export function getVehicleNumberPlateText(vehicle: number): string { 
	return _in(0x00000000, 0xe8522d58, vehicle, _r, _s); 
}


export function getVehicleNumberPlateTextIndex(vehicle: number): number { 
	return _in(0x00000000, 0x499747b6, vehicle, _r, _ri); 
}


/**
 * Gets the vehicle the specified Ped is/was in depending on bool value. This native is used server side when using OneSync.
 * @param ped
 * @param lastVehicle
 */
export function getVehiclePedIsIn(ped: number, lastVehicle: boolean): number { 
	return _in(0x00000000, 0xafe92319, ped, lastVehicle, _r, _ri); 
}


export function getVehiclePetrolTankHealth(vehicle: number): number { 
	return _in(0x00000000, 0xe41595ce, vehicle, _r, _rf); 
}


export function getVehicleRadioStationIndex(vehicle: number): number { 
	return _in(0x00000000, 0x57037960, vehicle, _r, _ri); 
}


export function getVehicleRoofLivery(vehicle: number): number { 
	return _in(0x00000000, 0x0872cf42, vehicle, _r, _ri); 
}


export function getVehicleTotalRepairs(vehicle: number): number { 
	return _in(0x00000000, 0x9963d5f9, vehicle, _r, _ri); 
}


export function getVehicleTyreSmokeColor(vehicle: number): [number, number, number] { 
	const [r_out, g_out, b_out] = _in(0x00000000, 0x75280015, vehicle, _i, _i, _i);
	return [r_out as number, g_out as number, b_out as number]; 
}


export function getVehicleWheelType(vehicle: number): number { 
	return _in(0x00000000, 0xda58d7ae, vehicle, _r, _ri); 
}


export function getVehicleWindowTint(vehicle: number): number { 
	return _in(0x00000000, 0x13d53892, vehicle, _r, _ri); 
}


/**
 * GIVE_WEAPON_COMPONENT_TO_PED
 * 
 * **This is the server-side RPC native equivalent of the client native [GIVE_WEAPON_COMPONENT_TO_PED](?\_0xD966D51AA5B28BB9).**
 * @param ped
 * @param weaponHash
 * @param componentHash
 */
export function giveWeaponComponentToPed(ped: number, weaponHash: number, componentHash: number): void { 
	return _in(0x00000000, 0x3e1e286d, ped, weaponHash, componentHash); 
}


/**
 * GIVE_WEAPON_TO_PED
 * 
 * **This is the server-side RPC native equivalent of the client native [GIVE_WEAPON_TO_PED](?\_0xBF0FD6E56C964FCB).**
 * @param ped
 * @param weaponHash
 * @param ammoCount
 * @param isHidden
 * @param bForceInHand
 */
export function giveWeaponToPed(ped: number, weaponHash: number, ammoCount: number, isHidden: boolean, bForceInHand: boolean): void { 
	return _in(0x00000000, 0xc4d88a85, ped, weaponHash, ammoCount, isHidden, bForceInHand); 
}


export function hasEntityBeenMarkedAsNoLongerNeeded(vehicle: number): boolean { 
	return _in(0x00000000, 0x9c9a3be0, vehicle, _r); 
}


export function hasVehicleBeenDamagedByBullets(vehicle: number): boolean { 
	return _in(0x00000000, 0xb8af3137, vehicle, _r); 
}


export function hasVehicleBeenOwnedByPlayer(vehicle: number): boolean { 
	return _in(0x00000000, 0xe4e83a5b, vehicle, _r); 
}


export function isBoatAnchoredAndFrozen(vehicle: number): boolean { 
	return _in(0x00000000, 0xd5c39ee6, vehicle, _r); 
}


export function isBoatWrecked(vehicle: number): boolean { 
	return _in(0x00000000, 0x9049db44, vehicle, _r); 
}


/**
 * This native checks if the given entity is visible.
 * @param entity
 */
export function isEntityVisible(entity: number): boolean { 
	return _in(0x00000000, 0x120b4ed5, entity, _r); 
}


export function isFlashLightOn(ped: number): boolean { 
	return _in(0x00000000, 0x76876154, ped, _r); 
}


/**
 * This is a getter for [SET_HELI_TAIL_EXPLODE_THROW_DASHBOARD](#\_0x3EC8BF18AA453FE9)
 * @param heli
 */
export function isHeliTailBoomBreakable(heli: number): boolean { 
	return _in(0x00000000, 0x23e46bd7, heli, _r); 
}


export function isHeliTailBoomBroken(heli: number): boolean { 
	return _in(0x00000000, 0x2c59f987, heli, _r); 
}


/**
 * This native checks if the given ped is a player.
 * @param ped
 */
export function isPedAPlayer(ped: number): boolean { 
	return _in(0x00000000, 0x404794ca, ped, _r); 
}


export function isPedHandcuffed(ped: number): boolean { 
	return _in(0x00000000, 0x25865633, ped, _r); 
}


export function isPedRagdoll(ped: number): boolean { 
	return _in(0x00000000, 0xc833bbe1, ped, _r); 
}


export function isPedStrafing(ped: number): boolean { 
	return _in(0x00000000, 0xefeed13c, ped, _r); 
}


export function isPedUsingActionMode(ped: number): boolean { 
	return _in(0x00000000, 0x5ae7eda2, ped, _r); 
}


export function isPlayerAceAllowed(playerSrc: string, object: string): boolean { 
	return _in(0x00000000, 0xdedae23d, _ts(playerSrc), _ts(object), _r); 
}


/**
 * Requests whether or not the commerce data for the specified player has loaded.
 * @param playerSrc
 */
export function isPlayerCommerceInfoLoaded(playerSrc: string): boolean { 
	return _in(0x00000000, 0xbefe93f4, _ts(playerSrc), _r); 
}


/**
 * Requests whether or not the commerce data for the specified player has loaded from Tebex.
 * @param playerSrc
 */
export function isPlayerCommerceInfoLoadedExt(playerSrc: string): boolean { 
	return _in(0x00000000, 0x1d14f4fe, _ts(playerSrc), _r); 
}


/**
 * ```
 * This will return true if the player is evading wanted level, meaning that the wanted level stars are blink.
 * Otherwise will return false.
 * 
 * If the player is not wanted, it simply returns false.
 * ```
 * @param playerSrc
 */
export function isPlayerEvadingWantedLevel(playerSrc: string): boolean { 
	return _in(0x00000000, 0x89a3881a, _ts(playerSrc), _r); 
}


export function isPlayerInFreeCamMode(playerSrc: string): boolean { 
	return _in(0x00000000, 0x1f14f2ac, _ts(playerSrc), _r); 
}


export function isPlayerUsingSuperJump(playerSrc: string): boolean { 
	return _in(0x00000000, 0xc7d2c20c, _ts(playerSrc), _r); 
}


export function isVehicleExtraTurnedOn(vehicle: number, extraId: number): boolean { 
	return _in(0x00000000, 0x042098b5, vehicle, extraId, _r); 
}


export function isVehicleSirenOn(vehicle: number): boolean { 
	return _in(0x00000000, 0x25eb5873, vehicle, _r); 
}


export function isVehicleTyreBurst(vehicle: number, wheelID: number, completely: boolean): boolean { 
	return _in(0x00000000, 0x48c80210, vehicle, wheelID, completely, _r); 
}


/**
 * See the client-side [IS_VEHICLE_WINDOW_INTACT](https://docs.fivem.net/natives/?\_0x46E571A0E20D01F1) for a window indexes list.
 * @param vehicle
 * @param windowIndex
 */
export function isVehicleWindowIntact(vehicle: number, windowIndex: number): boolean { 
	return _in(0x00000000, 0xac4ef23d, vehicle, windowIndex, _r); 
}


/**
 * Requests the commerce data for the specified player, including the owned SKUs. Use `IS_PLAYER_COMMERCE_INFO_LOADED` to check if it has loaded.
 * @param playerSrc
 */
export function loadPlayerCommerceData(playerSrc: string): void { 
	return _in(0x00000000, 0xa8f63eab, _ts(playerSrc)); 
}


/**
 * Requests the commerce data from Tebex for the specified player, including the owned SKUs.
 * 
 * Use [`IS_PLAYER_COMMERCE_INFO_LOADED_EXT`](#\_0x1D14F4FE) to check if it has loaded.
 * 
 * This will not automatically update whenever a client purchases a package, if you want to fetch new purchases you will need to call this native again.
 * 
 * This native will temporarily cache the players commerce data for 10 seconds, a call to this native after 10 seconds will re-fetch the players commerce data.
 * @param playerSrc
 */
export function loadPlayerCommerceDataExt(playerSrc: string): void { 
	return _in(0x00000000, 0x7995539e, _ts(playerSrc)); 
}


/**
 * Create a permanent voice channel.
 * @param id
 */
export function mumbleCreateChannel(id: number): void { 
	return _in(0x00000000, 0x262663c5, id); 
}


/**
 * Checks if the player is currently muted
 * @param playerSrc
 */
export function mumbleIsPlayerMuted(playerSrc: number): boolean { 
	return _in(0x00000000, 0x1d5d50c2, playerSrc, _r); 
}


/**
 * Mutes or unmutes the specified player
 * @param playerSrc
 * @param toggle
 */
export function mumbleSetPlayerMuted(playerSrc: number, toggle: boolean): void { 
	return _in(0x00000000, 0xcc6c2eb1, playerSrc, toggle); 
}


export function networkGetEntityFromNetworkId(netId: number): number { 
	return _in(0x00000000, 0x5b912c3f, netId, _r, _ri); 
}


/**
 * Returns the first owner ID of the specified entity.
 * @param entity
 */
export function networkGetFirstEntityOwner(entity: number): number { 
	return _in(0x00000000, 0x1e546224, entity, _r, _ri); 
}


export function networkGetNetworkIdFromEntity(entity: number): number { 
	return _in(0x00000000, 0x9e35dab6, entity, _r, _ri); 
}


export function networkGetVoiceProximityOverrideForPlayer(playerSrc: string): Vector3 { 
	return _mv(_in(0x00000000, 0xffeef513, _ts(playerSrc), _r, _rv)); 
}


export function performHttpRequestInternal(requestData: string, requestDataLength: number): number { 
	return _in(0x00000000, 0x8e8cc653, _ts(requestData), requestDataLength, _r, _ri); 
}


export function performHttpRequestInternalEx(requestData: any): number { 
	return _in(0x00000000, 0x6b171e87, ...(_obj(requestData)), _r, _ri); 
}


/**
 * Prints 'structured trace' data to the server `file descriptor 3` channel. This is not generally useful outside of
 * server monitoring utilities.
 * @param jsonString
 */
export function printStructuredTrace(jsonString: string): void { 
	return _in(0x00000000, 0x90892ded, _ts(jsonString)); 
}


/**
 * Registers a listener for console output messages.
 * @param listener
 */
export function registerConsoleListener(listener: any): void { 
	return _in(0x00000000, 0x281b5448, _mfr(listener)); 
}


/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * 
 * Registers a cached resource asset with the resource system, similar to the automatic scanning of the `stream/` folder.
 * @param resourceName
 * @param fileName
 */
export function registerResourceAsset(resourceName: string, fileName: string): string { 
	return _in(0x00000000, 0x9862b266, _ts(resourceName), _ts(fileName), _r, _s); 
}


/**
 * Registers a build task factory for resources.
 * The function should return an object (msgpack map) with the following fields:
 * 
 * ```
 * {
 * // returns whether the specific resource should be built
 * shouldBuild = func(resourceName: string): bool,
 * 
 * // asynchronously start building the specific resource.
 * // call cb when completed
 * build = func(resourceName: string, cb: func(success: bool, status: string): void): void
 * }
 * ```
 * @param factoryId
 * @param factoryFn
 */
export function registerResourceBuildTaskFactory(factoryId: string, factoryFn: any): void { 
	return _in(0x00000000, 0x285b43ca, _ts(factoryId), _mfr(factoryFn)); 
}


/**
 * Parameter `p1` does not seem to be used or referenced in game binaries.\
 * **Note:** When called for networked entities, a `CRemoveAllWeaponsEvent` will be created per request.
 * 
 * **This is the server-side RPC native equivalent of the client native [REMOVE_ALL_PED_WEAPONS](?\_0xF25DF915FA38C5F3).**
 * @param ped
 * @param p1
 */
export function removeAllPedWeapons(ped: number, p1: boolean): void { 
	return _in(0x00000000, 0xa44ce817, ped, p1); 
}


/**
 * Removes the blip from your map.
 * **Note:** This function only works on the script that created the blip, if you wish to remove blips created by other scripts, see [`SET_THIS_SCRIPT_CAN_REMOVE_BLIPS_CREATED_BY_ANY_SCRIPT`](#\_0x86A652570E5F25DD).
 * 
 * **This is the server-side RPC native equivalent of the client native [REMOVE_BLIP](?\_0x86A652570E5F25DD).**
 * @param blip
 */
export function removeBlip(blip: number): number { 
	return _in(0x00000000, 0xd8c3c1cd, _ii(blip)); 
}


/**
 * REMOVE_WEAPON_COMPONENT_FROM_PED
 * 
 * **This is the server-side RPC native equivalent of the client native [REMOVE_WEAPON_COMPONENT_FROM_PED](?\_0x1E8BE90C74FB4C09).**
 * @param ped
 * @param weaponHash
 * @param componentHash
 */
export function removeWeaponComponentFromPed(ped: number, weaponHash: number, componentHash: number): void { 
	return _in(0x00000000, 0x412aa00d, ped, weaponHash, componentHash); 
}


/**
 * ```
 * This native removes a specified weapon from your selected ped.
 * Weapon Hashes: pastebin.com/0wwDZgkF
 * Example:
 * C#:
 * Function.Call(Hash.REMOVE_WEAPON_FROM_PED, Game.Player.Character, 0x99B507EA);
 * C++:
 * WEAPON::REMOVE_WEAPON_FROM_PED(PLAYER::PLAYER_PED_ID(), 0x99B507EA);
 * The code above removes the knife from the player.
 * ```
 * 
 * **This is the server-side RPC native equivalent of the client native [REMOVE_WEAPON_FROM_PED](?\_0x4899CB088EDF59B8).**
 * @param ped
 * @param weaponHash
 */
export function removeWeaponFromPed(ped: number, weaponHash: number): void { 
	return _in(0x00000000, 0x9c37f220, ped, weaponHash); 
}


/**
 * Requests the specified player to buy the passed SKU. This'll pop up a prompt on the client, which upon acceptance
 * will open the browser prompting further purchase details.
 * @param playerSrc
 * @param skuId
 */
export function requestPlayerCommerceSession(playerSrc: string, skuId: number): void { 
	return _in(0x00000000, 0x96f93cce, _ts(playerSrc), skuId); 
}


/**
 * Writes the specified data to a file in the specified resource.
 * Using a length of `-1` will automatically detect the length assuming the data is a C string.
 * @param resourceName
 * @param fileName
 * @param data
 * @param dataLength
 */
export function saveResourceFile(resourceName: string, fileName: string, data: string, dataLength: number): boolean { 
	return _in(0x00000000, 0xa09e7e7b, _ts(resourceName), _ts(fileName), _ts(data), dataLength, _r); 
}


/**
 * Scans the resources in the specified resource root. This function is only available in the 'monitor mode' process and is
 * not available for user resources.
 * @param rootPath
 * @param callback
 */
export function scanResourceRoot(rootPath: string, callback: any): void { 
	return _in(0x00000000, 0x636f097f, _ts(rootPath), _mfr(callback)); 
}


/**
 * Schedules the specified resource to run a tick as soon as possible, bypassing the server's fixed tick rate.
 * @param resourceName
 */
export function scheduleResourceTick(resourceName: string): void { 
	return _in(0x00000000, 0xb88a73ad, _ts(resourceName)); 
}


/**
 * Sets the displayed sprite for a specific blip.
 * There's a [list of sprites](https://docs.fivem.net/game-references/blips/) on the FiveM documentation site.
 * 
 * **This is the server-side RPC native equivalent of the client native [SET_BLIP_SPRITE](?\_0xDF735600A4696DAF).**
 * @param blip
 * @param spriteId
 */
export function setBlipSprite(blip: number, spriteId: number): void { 
	return _in(0x00000000, 0x8dbbb0b9, blip, spriteId); 
}


export function setConvar(varName: string, value: string): void { 
	return _in(0x00000000, 0x341b16d2, _ts(varName), _ts(value)); 
}


/**
 * Used to replicate a server variable onto clients.
 * @param varName
 * @param value
 */
export function setConvarReplicated(varName: string, value: string): void { 
	return _in(0x00000000, 0xf292858c, _ts(varName), _ts(value)); 
}


export function setConvarServerInfo(varName: string, value: string): void { 
	return _in(0x00000000, 0x9338d547, _ts(varName), _ts(value)); 
}


/**
 * SET_CURRENT_PED_WEAPON
 * 
 * **This is the server-side RPC native equivalent of the client native [SET_CURRENT_PED_WEAPON](?\_0xADF692B254977C0C).**
 * @param ped
 * @param weaponHash
 * @param bForceInHand
 */
export function setCurrentPedWeapon(ped: number, weaponHash: number, bForceInHand: boolean): void { 
	return _in(0x00000000, 0xb8278882, ped, weaponHash, bForceInHand); 
}


/**
 * Sets the coordinates (world position) for a specified entity, offset by the radius of the entity on the Z axis.
 * 
 * **This is the server-side RPC native equivalent of the client native [SET_ENTITY_COORDS](?\_0x06843DA7060A026B).**
 * @param entity
 * @param xPos
 * @param yPos
 * @param zPos
 * @param alive
 * @param deadFlag
 * @param ragdollFlag
 * @param clearArea
 */
export function setEntityCoords(entity: number, xPos: number, yPos: number, zPos: number, alive: boolean, deadFlag: boolean, ragdollFlag: boolean, clearArea: boolean): void { 
	return _in(0x00000000, 0xdf70b41b, entity, _fv(xPos), _fv(yPos), _fv(zPos), alive, deadFlag, ragdollFlag, clearArea); 
}


/**
 * It overrides the default distance culling radius of an entity. Set to `0.0` to reset.
 * If you want to interact with an entity outside of your players' scopes set the radius to a huge number.
 * 
 * **WARNING**: Culling natives are deprecated and have known, [unfixable issues](https://forum.cfx.re/t/issue-with-culling-radius-and-server-side-entities/4900677/4)
 * @param entity
 * @param radius
 */
export function setEntityDistanceCullingRadius(entity: number, radius: number): void { 
	return _in(0x00000000, 0xd3a183a3, entity, _fv(radius)); 
}


/**
 * Set the heading of an entity in degrees also known as "Yaw".
 * 
 * **This is the server-side RPC native equivalent of the client native [SET_ENTITY_HEADING](?\_0x8E2530AA8ADA980E).**
 * @param entity
 * @param heading
 */
export function setEntityHeading(entity: number, heading: number): void { 
	return _in(0x00000000, 0xe0ff064d, entity, _fv(heading)); 
}


/**
 * It allows to flag an entity to ignore the request control filter policy.
 * @param entity
 * @param ignore
 */
export function setEntityIgnoreRequestControlFilter(entity: number, ignore: boolean): void { 
	return _in(0x00000000, 0x9f7f8d36, entity, ignore); 
}


/**
 * ```cpp
 * enum EntityOrphanMode {
 * // Default, this will delete the entity when it isn't relevant to any players
 * // NOTE: this *doesn't* mean when they're no longer in scope
 * DeleteWhenNotRelevant = 0,
 * // The entity will be deleted whenever its original owner disconnects
 * // NOTE: if this is set when the entities original owner has already left it will be
 * // marked for deletion (similar to just calling DELETE_ENTITY)
 * DeleteOnOwnerDisconnect = 1,
 * // The entity will never be deleted by the server when it does relevancy checks
 * // you should only use this on entities that need to be relatively persistent
 * KeepEntity = 2
 * }
 * ```
 * 
 * Sets what the server will do when the entity no longer has its original owner. By default the server will cleanup entities that it considers "no longer relevant".
 * 
 * When used on trains, this native will recursively call onto all attached carriages.
 * 
 * **NOTE**: When used with `KeepEntity` (2) this native only guarantees that the ***server*** will not delete the entity, client requests to delete the entity will still work perfectly fine.
 * @param entity
 * @param orphanMode
 */
export function setEntityOrphanMode(entity: number, orphanMode: number): void { 
	return _in(0x00000000, 0x489e9162, entity, orphanMode); 
}


/**
 * Enables or disables the owner check for the specified entity in network-synchronized scenes. When set to `false`, the entity cannot participate in synced scenes initiated by clients that do not own the entity.
 * 
 * By default, this is `false` for all entities, meaning only the entity's owner can include it in networked synchronized scenes.
 * @param entity
 * @param allow
 */
export function setEntityRemoteSyncedScenesAllowed(entity: number, allow: boolean): void { 
	return _in(0x00000000, 0xd3fc9d88, entity, allow); 
}


/**
 * Sets the rotation of a specified entity in the game world.
 * 
 * ```
 * NativeDB Introduced: v323
 * ```
 * 
 * **This is the server-side RPC native equivalent of the client native [SET_ENTITY_ROTATION](?\_0x8524A8B0171D5E07).**
 * @param entity
 * @param pitch
 * @param roll
 * @param yaw
 * @param rotationOrder
 * @param bDeadCheck
 */
export function setEntityRotation(entity: number, pitch: number, roll: number, yaw: number, rotationOrder: number, bDeadCheck: boolean): void { 
	return _in(0x00000000, 0x0a345efe, entity, _fv(pitch), _fv(roll), _fv(yaw), rotationOrder, bDeadCheck); 
}


/**
 * Sets the routing bucket for the specified entity.
 * 
 * Routing buckets are also known as 'dimensions' or 'virtual worlds' in past echoes, however they are population-aware.
 * @param entity
 * @param bucket
 */
export function setEntityRoutingBucket(entity: number, bucket: number): void { 
	return _in(0x00000000, 0x635e5289, entity, bucket); 
}


/**
 * ```
 * Note that the third parameter(denoted as z) is "up and down" with positive numbers encouraging upwards movement.
 * ```
 * 
 * **This is the server-side RPC native equivalent of the client native [SET_ENTITY_VELOCITY](?\_0x1C99BB7B6E96D16F).**
 * @param entity
 * @param x
 * @param y
 * @param z
 */
export function setEntityVelocity(entity: number, x: number, y: number, z: number): void { 
	return _in(0x00000000, 0xff5a1988, entity, _fv(x), _fv(y), _fv(z)); 
}


export function setGameType(gametypeName: string): void { 
	return _in(0x00000000, 0xf90b7469, _ts(gametypeName)); 
}


/**
 * Sets the handler for HTTP requests made to the executing resource.
 * 
 * Example request URL: `http://localhost:30120/http-test/ping` - this request will be sent to the `http-test` resource with the `/ping` path.
 * 
 * The handler function assumes the following signature:
 * 
 * ```ts
 * function HttpHandler(
 * request: {
 * address: string;
 * headers: Record<string, string>;
 * method: string;
 * path: string;
 * setDataHandler(handler: (data: string) => void): void;
 * setDataHandler(handler: (data: ArrayBuffer) => void, binary: 'binary'): void;
 * setCancelHandler(handler: () => void): void;
 * },
 * response: {
 * writeHead(code: number, headers?: Record<string, string | string[]>): void;
 * write(data: string): void;
 * send(data?: string): void;
 * }
 * ): void;
 * ```
 * 
 * *   **request**: The request object.
 * *   **address**: The IP address of the request sender.
 * *   **path**: The path to where the request was sent.
 * *   **headers**: The headers sent with the request.
 * *   **method**: The request method.
 * *   **setDataHandler**: Sets the handler for when a data body is passed with the request. Additionally you can pass the `'binary'` argument to receive a `BufferArray` in JavaScript or `System.Byte[]` in C# (has no effect in Lua).
 * *   **setCancelHandler**: Sets the handler for when the request is cancelled.
 * *   **response**: An object to control the response.
 * *   **writeHead**: Sets the status code & headers of the response. Can be only called once and won't work if called after running other response functions.
 * *   **write**: Writes to the response body without sending it. Can be called multiple times.
 * *   **send**: Writes to the response body and then sends it along with the status code & headers, finishing the request.
 * @param handler
 */
export function setHttpHandler(handler: any): void { 
	return _in(0x00000000, 0xf5c6330c, _mfr(handler)); 
}


export function setMapName(mapName: string): void { 
	return _in(0x00000000, 0xb7ba82dc, _ts(mapName)); 
}


/**
 * ```
 * NativeDB Added Parameter 4: BOOL p3
 * ```
 * 
 * **This is the server-side RPC native equivalent of the client native [SET_PED_AMMO](?\_0x14E56BC5B5DB6A19).**
 * @param ped
 * @param weaponHash
 * @param ammo
 */
export function setPedAmmo(ped: number, weaponHash: number, ammo: number): void { 
	return _in(0x00000000, 0xbf90df1a, ped, weaponHash, ammo); 
}


/**
 * ```
 * Sets the armor of the specified ped.
 * ped: The Ped to set the armor of.
 * amount: A value between 0 and 100 indicating the value to set the Ped's armor to.
 * ```
 * 
 * **This is the server-side RPC native equivalent of the client native [SET_PED_ARMOUR](?\_0xCEA04D83135264CC).**
 * @param ped
 * @param amount
 */
export function setPedArmour(ped: number, amount: number): void { 
	return _in(0x00000000, 0x4e3a0cc4, ped, amount); 
}


/**
 * SET_PED_CAN_RAGDOLL
 * 
 * **This is the server-side RPC native equivalent of the client native [SET_PED_CAN_RAGDOLL](?\_0xB128377056A54E2A).**
 * @param ped
 * @param toggle
 */
export function setPedCanRagdoll(ped: number, toggle: boolean): void { 
	return _in(0x00000000, 0xcf1384c4, ped, toggle); 
}


/**
 * This native is used to set component variation on a ped. Components, drawables and textures IDs are related to the ped model.
 * 
 * ### MP Freemode list of components
 * 
 * **0**: Face
 * **1**: Mask
 * **2**: Hair
 * **3**: Torso
 * **4**: Leg
 * **5**: Parachute / bag
 * **6**: Shoes
 * **7**: Accessory
 * **8**: Undershirt
 * **9**: Kevlar
 * **10**: Badge
 * **11**: Torso 2
 * List of Component IDs
 * 
 * ```cpp
 * // Components
 * enum ePedVarComp
 * {
 * PV_COMP_INVALID = 0xFFFFFFFF,
 * PV_COMP_HEAD = 0, // "HEAD"
 * PV_COMP_BERD = 1, // "BEARD"
 * PV_COMP_HAIR = 2, // "HAIR"
 * PV_COMP_UPPR = 3, // "UPPER"
 * PV_COMP_LOWR = 4, // "LOWER"
 * PV_COMP_HAND = 5, // "HAND"
 * PV_COMP_FEET = 6, // "FEET"
 * PV_COMP_TEEF = 7, // "TEETH"
 * PV_COMP_ACCS = 8, // "ACCESSORIES"
 * PV_COMP_TASK = 9, // "TASK"
 * PV_COMP_DECL = 10, // "DECL"
 * PV_COMP_JBIB = 11, // "JBIB"
 * PV_COMP_MAX = 12,
 * };
 * ```
 * 
 * **This is the server-side RPC native equivalent of the client native [SET_PED_COMPONENT_VARIATION](?\_0x262B14F48D29DE80).**
 * @param ped
 * @param componentId
 * @param drawableId
 * @param textureId
 * @param paletteId
 */
export function setPedComponentVariation(ped: number, componentId: number, drawableId: number, textureId: number, paletteId: number): void { 
	return _in(0x00000000, 0xd4f7b05c, ped, componentId, drawableId, textureId, paletteId); 
}


/**
 * ```cpp
 * // Potential names and hash collisions included as comments
 * enum ePedConfigFlags {
 * CPED_CONFIG_FLAG_CreatedByFactory = 0,
 * CPED_CONFIG_FLAG_CanBeShotInVehicle = 1,
 * CPED_CONFIG_FLAG_NoCriticalHits = 2,
 * CPED_CONFIG_FLAG_DrownsInWater = 3,
 * CPED_CONFIG_FLAG_DrownsInSinkingVehicle = 4,
 * CPED_CONFIG_FLAG_DiesInstantlyWhenSwimming = 5,
 * CPED_CONFIG_FLAG_HasBulletProofVest = 6,
 * CPED_CONFIG_FLAG_UpperBodyDamageAnimsOnly = 7,
 * CPED_CONFIG_FLAG_NeverFallOffSkis = 8,
 * CPED_CONFIG_FLAG_NeverEverTargetThisPed = 9,
 * CPED_CONFIG_FLAG_ThisPedIsATargetPriority = 10,
 * CPED_CONFIG_FLAG_TargettableWithNoLos = 11,
 * CPED_CONFIG_FLAG_DoesntListenToPlayerGroupCommands = 12,
 * CPED_CONFIG_FLAG_NeverLeavesGroup = 13,
 * CPED_CONFIG_FLAG_DoesntDropWeaponsWhenDead = 14,
 * CPED_CONFIG_FLAG_SetDelayedWeaponAsCurrent = 15,
 * CPED_CONFIG_FLAG_KeepTasksAfterCleanUp = 16,
 * CPED_CONFIG_FLAG_BlockNonTemporaryEvents = 17,
 * CPED_CONFIG_FLAG_HasAScriptBrain = 18,
 * CPED_CONFIG_FLAG_WaitingForScriptBrainToLoad = 19,
 * CPED_CONFIG_FLAG_AllowMedicsToReviveMe = 20,
 * CPED_CONFIG_FLAG_MoneyHasBeenGivenByScript = 21,
 * CPED_CONFIG_FLAG_NotAllowedToCrouch = 22,
 * CPED_CONFIG_FLAG_DeathPickupsPersist = 23,
 * CPED_CONFIG_FLAG_IgnoreSeenMelee = 24,
 * CPED_CONFIG_FLAG_ForceDieIfInjured = 25,
 * CPED_CONFIG_FLAG_DontDragMeOutCar = 26,
 * CPED_CONFIG_FLAG_StayInCarOnJack = 27,
 * CPED_CONFIG_FLAG_ForceDieInCar = 28,
 * CPED_CONFIG_FLAG_GetOutUndriveableVehicle = 29,
 * CPED_CONFIG_FLAG_WillRemainOnBoatAfterMissionEnds = 30,
 * CPED_CONFIG_FLAG_DontStoreAsPersistent = 31,
 * CPED_CONFIG_FLAG_WillFlyThroughWindscreen = 32,
 * CPED_CONFIG_FLAG_DieWhenRagdoll = 33,
 * CPED_CONFIG_FLAG_HasHelmet = 34,
 * CPED_CONFIG_FLAG_UseHelmet = 35,
 * CPED_CONFIG_FLAG_DontTakeOffHelmet = 36,
 * CPED_CONFIG_FLAG_HideInCutscene = 37,
 * CPED_CONFIG_FLAG_PedIsEnemyToPlayer = 38,
 * CPED_CONFIG_FLAG_DisableEvasiveDives = 39,
 * CPED_CONFIG_FLAG_PedGeneratesDeadBodyEvents = 40,
 * CPED_CONFIG_FLAG_DontAttackPlayerWithoutWantedLevel = 41,
 * CPED_CONFIG_FLAG_DontInfluenceWantedLevel = 42,
 * CPED_CONFIG_FLAG_DisablePlayerLockon = 43,
 * CPED_CONFIG_FLAG_DisableLockonToRandomPeds = 44,
 * CPED_CONFIG_FLAG_AllowLockonToFriendlyPlayers = 45,
 * _0xDB115BFA = 46,
 * CPED_CONFIG_FLAG_PedBeingDeleted = 47,
 * CPED_CONFIG_FLAG_BlockWeaponSwitching = 48,
 * CPED_CONFIG_FLAG_BlockGroupPedAimedAtResponse = 49,
 * CPED_CONFIG_FLAG_WillFollowLeaderAnyMeans = 50,
 * CPED_CONFIG_FLAG_BlippedByScript = 51,
 * CPED_CONFIG_FLAG_DrawRadarVisualField = 52,
 * CPED_CONFIG_FLAG_StopWeaponFiringOnImpact = 53,
 * CPED_CONFIG_FLAG_DissableAutoFallOffTests = 54,
 * CPED_CONFIG_FLAG_SteerAroundDeadBodies = 55,
 * CPED_CONFIG_FLAG_ConstrainToNavMesh = 56,
 * CPED_CONFIG_FLAG_SyncingAnimatedProps = 57,
 * CPED_CONFIG_FLAG_IsFiring = 58,
 * CPED_CONFIG_FLAG_WasFiring = 59,
 * CPED_CONFIG_FLAG_IsStanding = 60,
 * CPED_CONFIG_FLAG_WasStanding = 61,
 * CPED_CONFIG_FLAG_InVehicle = 62,
 * CPED_CONFIG_FLAG_OnMount = 63,
 * CPED_CONFIG_FLAG_AttachedToVehicle = 64,
 * CPED_CONFIG_FLAG_IsSwimming = 65,
 * CPED_CONFIG_FLAG_WasSwimming = 66,
 * CPED_CONFIG_FLAG_IsSkiing = 67,
 * CPED_CONFIG_FLAG_IsSitting = 68,
 * CPED_CONFIG_FLAG_KilledByStealth = 69,
 * CPED_CONFIG_FLAG_KilledByTakedown = 70,
 * CPED_CONFIG_FLAG_Knockedout = 71,
 * CPED_CONFIG_FLAG_ClearRadarBlipOnDeath = 72,
 * CPED_CONFIG_FLAG_JustGotOffTrain = 73,
 * CPED_CONFIG_FLAG_JustGotOnTrain = 74,
 * CPED_CONFIG_FLAG_UsingCoverPoint = 75,
 * CPED_CONFIG_FLAG_IsInTheAir = 76,
 * CPED_CONFIG_FLAG_KnockedUpIntoAir = 77,
 * CPED_CONFIG_FLAG_IsAimingGun = 78,
 * CPED_CONFIG_FLAG_HasJustLeftCar = 79,
 * CPED_CONFIG_FLAG_TargetWhenInjuredAllowed = 80,
 * CPED_CONFIG_FLAG_CurrLeftFootCollNM = 81,
 * CPED_CONFIG_FLAG_PrevLeftFootCollNM = 82,
 * CPED_CONFIG_FLAG_CurrRightFootCollNM = 83,
 * CPED_CONFIG_FLAG_PrevRightFootCollNM = 84,
 * CPED_CONFIG_FLAG_HasBeenBumpedInCar = 85,
 * CPED_CONFIG_FLAG_InWaterTaskQuitToClimbLadder = 86,
 * CPED_CONFIG_FLAG_NMTwoHandedWeaponBothHandsConstrained = 87,
 * CPED_CONFIG_FLAG_CreatedBloodPoolTimer = 88,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromAnyPedImpact = 89,
 * CPED_CONFIG_FLAG_GroupPedFailedToEnterCover = 90,
 * CPED_CONFIG_FLAG_AlreadyChattedOnPhone = 91,
 * CPED_CONFIG_FLAG_AlreadyReactedToPedOnRoof = 92,
 * CPED_CONFIG_FLAG_ForcePedLoadCover = 93,
 * CPED_CONFIG_FLAG_BlockCoweringInCover = 94,
 * CPED_CONFIG_FLAG_BlockPeekingInCover = 95,
 * CPED_CONFIG_FLAG_JustLeftCarNotCheckedForDoors = 96,
 * CPED_CONFIG_FLAG_VaultFromCover = 97,
 * CPED_CONFIG_FLAG_AutoConversationLookAts = 98,
 * CPED_CONFIG_FLAG_UsingCrouchedPedCapsule = 99,
 * CPED_CONFIG_FLAG_HasDeadPedBeenReported = 100,
 * CPED_CONFIG_FLAG_ForcedAim = 101,
 * CPED_CONFIG_FLAG_SteersAroundPeds = 102,
 * CPED_CONFIG_FLAG_SteersAroundObjects = 103,
 * CPED_CONFIG_FLAG_OpenDoorArmIK = 104,
 * CPED_CONFIG_FLAG_ForceReload = 105,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromVehicleImpact = 106,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromBulletImpact = 107,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromExplosions = 108,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromFire = 109,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromElectrocution = 110,
 * CPED_CONFIG_FLAG_IsBeingDraggedToSafety = 111,
 * CPED_CONFIG_FLAG_HasBeenDraggedToSafety = 112,
 * CPED_CONFIG_FLAG_KeepWeaponHolsteredUnlessFired = 113,
 * CPED_CONFIG_FLAG_ForceScriptControlledKnockout = 114,
 * CPED_CONFIG_FLAG_FallOutOfVehicleWhenKilled = 115,
 * CPED_CONFIG_FLAG_GetOutBurningVehicle = 116,
 * CPED_CONFIG_FLAG_BumpedByPlayer = 117,
 * CPED_CONFIG_FLAG_RunFromFiresAndExplosions = 118,
 * CPED_CONFIG_FLAG_TreatAsPlayerDuringTargeting = 119,
 * CPED_CONFIG_FLAG_IsHandCuffed = 120,
 * CPED_CONFIG_FLAG_IsAnkleCuffed = 121,
 * CPED_CONFIG_FLAG_DisableMelee = 122,
 * CPED_CONFIG_FLAG_DisableUnarmedDrivebys = 123,
 * CPED_CONFIG_FLAG_JustGetsPulledOutWhenElectrocuted = 124,
 * CPED_CONFIG_FLAG_UNUSED_REPLACE_ME = 125,
 * CPED_CONFIG_FLAG_WillNotHotwireLawEnforcementVehicle = 126,
 * CPED_CONFIG_FLAG_WillCommandeerRatherThanJack = 127,
 * CPED_CONFIG_FLAG_CanBeAgitated = 128,
 * CPED_CONFIG_FLAG_ForcePedToFaceLeftInCover = 129,
 * CPED_CONFIG_FLAG_ForcePedToFaceRightInCover = 130,
 * CPED_CONFIG_FLAG_BlockPedFromTurningInCover = 131,
 * CPED_CONFIG_FLAG_KeepRelationshipGroupAfterCleanUp = 132,
 * CPED_CONFIG_FLAG_ForcePedToBeDragged = 133,
 * CPED_CONFIG_FLAG_PreventPedFromReactingToBeingJacked = 134,
 * CPED_CONFIG_FLAG_IsScuba = 135,
 * CPED_CONFIG_FLAG_WillArrestRatherThanJack = 136,
 * CPED_CONFIG_FLAG_RemoveDeadExtraFarAway = 137,
 * CPED_CONFIG_FLAG_RidingTrain = 138,
 * CPED_CONFIG_FLAG_ArrestResult = 139,
 * CPED_CONFIG_FLAG_CanAttackFriendly = 140,
 * CPED_CONFIG_FLAG_WillJackAnyPlayer = 141,
 * CPED_CONFIG_FLAG_BumpedByPlayerVehicle = 142,
 * CPED_CONFIG_FLAG_DodgedPlayerVehicle = 143,
 * CPED_CONFIG_FLAG_WillJackWantedPlayersRatherThanStealCar = 144,
 * CPED_CONFIG_FLAG_NoCopWantedAggro = 145,
 * CPED_CONFIG_FLAG_DisableLadderClimbing = 146,
 * CPED_CONFIG_FLAG_StairsDetected = 147,
 * CPED_CONFIG_FLAG_SlopeDetected = 148,
 * CPED_CONFIG_FLAG_HelmetHasBeenShot = 149,
 * CPED_CONFIG_FLAG_CowerInsteadOfFlee = 150,
 * CPED_CONFIG_FLAG_CanActivateRagdollWhenVehicleUpsideDown = 151,
 * CPED_CONFIG_FLAG_AlwaysRespondToCriesForHelp = 152,
 * CPED_CONFIG_FLAG_DisableBloodPoolCreation = 153,
 * CPED_CONFIG_FLAG_ShouldFixIfNoCollision = 154,
 * CPED_CONFIG_FLAG_CanPerformArrest = 155,
 * CPED_CONFIG_FLAG_CanPerformUncuff = 156,
 * CPED_CONFIG_FLAG_CanBeArrested = 157,
 * CPED_CONFIG_FLAG_MoverConstrictedByOpposingCollisions = 158,
 * CPED_CONFIG_FLAG_PlayerPreferFrontSeatMP = 159,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromImpactObject = 160,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromMelee = 161,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromWaterJet = 162,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromDrowning = 163,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromFalling = 164,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromRubberBullet = 165,
 * CPED_CONFIG_FLAG_IsInjured = 166,
 * CPED_CONFIG_FLAG_DontEnterVehiclesInPlayersGroup = 167,
 * CPED_CONFIG_FLAG_SwimmingTasksRunning = 168,
 * CPED_CONFIG_FLAG_PreventAllMeleeTaunts = 169,
 * CPED_CONFIG_FLAG_ForceDirectEntry = 170,
 * CPED_CONFIG_FLAG_AlwaysSeeApproachingVehicles = 171,
 * CPED_CONFIG_FLAG_CanDiveAwayFromApproachingVehicles = 172,
 * CPED_CONFIG_FLAG_AllowPlayerToInterruptVehicleEntryExit = 173,
 * CPED_CONFIG_FLAG_OnlyAttackLawIfPlayerIsWanted = 174,
 * CPED_CONFIG_FLAG_PlayerInContactWithKinematicPed = 175,
 * CPED_CONFIG_FLAG_PlayerInContactWithSomethingOtherThanKinematicPed = 176,
 * CPED_CONFIG_FLAG_PedsJackingMeDontGetIn = 177,
 * CPED_CONFIG_FLAG_AdditionalRappellingPed = 178,
 * CPED_CONFIG_FLAG_PedIgnoresAnimInterruptEvents = 179,
 * CPED_CONFIG_FLAG_IsInCustody = 180,
 * CPED_CONFIG_FLAG_ForceStandardBumpReactionThresholds = 181,
 * CPED_CONFIG_FLAG_LawWillOnlyAttackIfPlayerIsWanted = 182,
 * CPED_CONFIG_FLAG_IsAgitated = 183,
 * CPED_CONFIG_FLAG_PreventAutoShuffleToDriversSeat = 184,
 * CPED_CONFIG_FLAG_UseKinematicModeWhenStationary = 185,
 * CPED_CONFIG_FLAG_EnableWeaponBlocking = 186,
 * CPED_CONFIG_FLAG_HasHurtStarted = 187,
 * CPED_CONFIG_FLAG_DisableHurt = 188,
 * CPED_CONFIG_FLAG_PlayerIsWeird = 189,
 * CPED_CONFIG_FLAG_PedHadPhoneConversation = 190,
 * CPED_CONFIG_FLAG_BeganCrossingRoad = 191,
 * CPED_CONFIG_FLAG_WarpIntoLeadersVehicle = 192,
 * CPED_CONFIG_FLAG_DoNothingWhenOnFootByDefault = 193,
 * CPED_CONFIG_FLAG_UsingScenario = 194,
 * CPED_CONFIG_FLAG_VisibleOnScreen = 195,
 * CPED_CONFIG_FLAG_DontCollideWithKinematic = 196,
 * CPED_CONFIG_FLAG_ActivateOnSwitchFromLowPhysicsLod = 197,
 * CPED_CONFIG_FLAG_DontActivateRagdollOnPedCollisionWhenDead = 198,
 * CPED_CONFIG_FLAG_DontActivateRagdollOnVehicleCollisionWhenDead = 199,
 * CPED_CONFIG_FLAG_HasBeenInArmedCombat = 200,
 * CPED_CONFIG_FLAG_UseDiminishingAmmoRate = 201,
 * CPED_CONFIG_FLAG_Avoidance_Ignore_All = 202,
 * CPED_CONFIG_FLAG_Avoidance_Ignored_by_All = 203,
 * CPED_CONFIG_FLAG_Avoidance_Ignore_Group1 = 204,
 * CPED_CONFIG_FLAG_Avoidance_Member_of_Group1 = 205,
 * CPED_CONFIG_FLAG_ForcedToUseSpecificGroupSeatIndex = 206,
 * CPED_CONFIG_FLAG_LowPhysicsLodMayPlaceOnNavMesh = 207,
 * CPED_CONFIG_FLAG_DisableExplosionReactions = 208,
 * CPED_CONFIG_FLAG_DodgedPlayer = 209,
 * CPED_CONFIG_FLAG_WaitingForPlayerControlInterrupt = 210,
 * CPED_CONFIG_FLAG_ForcedToStayInCover = 211,
 * CPED_CONFIG_FLAG_GeneratesSoundEvents = 212,
 * CPED_CONFIG_FLAG_ListensToSoundEvents = 213,
 * CPED_CONFIG_FLAG_AllowToBeTargetedInAVehicle = 214,
 * CPED_CONFIG_FLAG_WaitForDirectEntryPointToBeFreeWhenExiting = 215,
 * CPED_CONFIG_FLAG_OnlyRequireOnePressToExitVehicle = 216,
 * CPED_CONFIG_FLAG_ForceExitToSkyDive = 217,
 * CPED_CONFIG_FLAG_SteersAroundVehicles = 218,
 * CPED_CONFIG_FLAG_AllowPedInVehiclesOverrideTaskFlags = 219,
 * CPED_CONFIG_FLAG_DontEnterLeadersVehicle = 220,
 * CPED_CONFIG_FLAG_DisableExitToSkyDive = 221,
 * CPED_CONFIG_FLAG_ScriptHasDisabledCollision = 222,
 * CPED_CONFIG_FLAG_UseAmbientModelScaling = 223,
 * CPED_CONFIG_FLAG_DontWatchFirstOnNextHurryAway = 224,
 * CPED_CONFIG_FLAG_DisablePotentialToBeWalkedIntoResponse = 225,
 * CPED_CONFIG_FLAG_DisablePedAvoidance = 226,
 * CPED_CONFIG_FLAG_ForceRagdollUponDeath = 227,
 * CPED_CONFIG_FLAG_CanLosePropsOnDamage = 228,
 * CPED_CONFIG_FLAG_DisablePanicInVehicle = 229,
 * CPED_CONFIG_FLAG_AllowedToDetachTrailer = 230,
 * CPED_CONFIG_FLAG_HasShotBeenReactedToFromFront = 231,
 * CPED_CONFIG_FLAG_HasShotBeenReactedToFromBack = 232,
 * CPED_CONFIG_FLAG_HasShotBeenReactedToFromLeft = 233,
 * CPED_CONFIG_FLAG_HasShotBeenReactedToFromRight = 234,
 * CPED_CONFIG_FLAG_AllowBlockDeadPedRagdollActivation = 235,
 * CPED_CONFIG_FLAG_IsHoldingProp = 236,
 * CPED_CONFIG_FLAG_BlocksPathingWhenDead = 237,
 * CPED_CONFIG_FLAG_ForcePlayNormalScenarioExitOnNextScriptCommand = 238,
 * CPED_CONFIG_FLAG_ForcePlayImmediateScenarioExitOnNextScriptCommand = 239,
 * CPED_CONFIG_FLAG_ForceSkinCharacterCloth = 240,
 * CPED_CONFIG_FLAG_LeaveEngineOnWhenExitingVehicles = 241,
 * CPED_CONFIG_FLAG_PhoneDisableTextingAnimations = 242,
 * CPED_CONFIG_FLAG_PhoneDisableTalkingAnimations = 243,
 * CPED_CONFIG_FLAG_PhoneDisableCameraAnimations = 244,
 * CPED_CONFIG_FLAG_DisableBlindFiringInShotReactions = 245,
 * CPED_CONFIG_FLAG_AllowNearbyCoverUsage = 246,
 * CPED_CONFIG_FLAG_InStrafeTransition = 247,
 * CPED_CONFIG_FLAG_CanPlayInCarIdles = 248,
 * CPED_CONFIG_FLAG_CanAttackNonWantedPlayerAsLaw = 249,
 * CPED_CONFIG_FLAG_WillTakeDamageWhenVehicleCrashes = 250,
 * CPED_CONFIG_FLAG_AICanDrivePlayerAsRearPassenger = 251,
 * CPED_CONFIG_FLAG_PlayerCanJackFriendlyPlayers = 252,
 * CPED_CONFIG_FLAG_OnStairs = 253,
 * CPED_CONFIG_FLAG_SimulatingAiming = 254,
 * CPED_CONFIG_FLAG_AIDriverAllowFriendlyPassengerSeatEntry = 255,
 * CPED_CONFIG_FLAG_ParentCarIsBeingRemoved = 256,
 * CPED_CONFIG_FLAG_AllowMissionPedToUseInjuredMovement = 257,
 * CPED_CONFIG_FLAG_CanLoseHelmetOnDamage = 258,
 * CPED_CONFIG_FLAG_NeverDoScenarioExitProbeChecks = 259,
 * CPED_CONFIG_FLAG_SuppressLowLODRagdollSwitchWhenCorpseSettles = 260,
 * CPED_CONFIG_FLAG_PreventUsingLowerPrioritySeats = 261,
 * CPED_CONFIG_FLAG_JustLeftVehicleNeedsReset = 262,
 * CPED_CONFIG_FLAG_TeleportIfCantReachPlayer = 263,
 * CPED_CONFIG_FLAG_PedsInVehiclePositionNeedsReset = 264,
 * CPED_CONFIG_FLAG_PedsFullyInSeat = 265,
 * CPED_CONFIG_FLAG_AllowPlayerLockOnIfFriendly = 266,
 * CPED_CONFIG_FLAG_UseCameraHeadingForDesiredDirectionLockOnTest = 267,
 * CPED_CONFIG_FLAG_TeleportToLeaderVehicle = 268,
 * CPED_CONFIG_FLAG_Avoidance_Ignore_WeirdPedBuffer = 269,
 * CPED_CONFIG_FLAG_OnStairSlope = 270,
 * CPED_CONFIG_FLAG_HasPlayedNMGetup = 271,
 * CPED_CONFIG_FLAG_DontBlipCop = 272,
 * CPED_CONFIG_FLAG_SpawnedAtExtendedRangeScenario = 273,
 * CPED_CONFIG_FLAG_WalkAlongsideLeaderWhenClose = 274,
 * CPED_CONFIG_FLAG_KillWhenTrapped = 275,
 * CPED_CONFIG_FLAG_EdgeDetected = 276,
 * CPED_CONFIG_FLAG_AlwaysWakeUpPhysicsOfIntersectedPeds = 277,
 * CPED_CONFIG_FLAG_EquippedAmbientLoadOutWeapon = 278,
 * CPED_CONFIG_FLAG_AvoidTearGas = 279,
 * CPED_CONFIG_FLAG_StoppedSpeechUponFreezing = 280,
 * CPED_CONFIG_FLAG_DisableGoToWritheWhenInjured = 281,
 * CPED_CONFIG_FLAG_OnlyUseForcedSeatWhenEnteringHeliInGroup = 282,
 * CPED_CONFIG_FLAG_ThrownFromVehicleDueToExhaustion = 283,
 * CPED_CONFIG_FLAG_UpdateEnclosedSearchRegion = 284,
 * CPED_CONFIG_FLAG_DisableWeirdPedEvents = 285,
 * CPED_CONFIG_FLAG_ShouldChargeNow = 286,
 * CPED_CONFIG_FLAG_RagdollingOnBoat = 287,
 * CPED_CONFIG_FLAG_HasBrandishedWeapon = 288,
 * CPED_CONFIG_FLAG_AllowMinorReactionsAsMissionPed = 289,
 * CPED_CONFIG_FLAG_BlockDeadBodyShockingEventsWhenDead = 290,
 * CPED_CONFIG_FLAG_PedHasBeenSeen = 291,
 * CPED_CONFIG_FLAG_PedIsInReusePool = 292,
 * CPED_CONFIG_FLAG_PedWasReused = 293,
 * CPED_CONFIG_FLAG_DisableShockingEvents = 294,
 * CPED_CONFIG_FLAG_MovedUsingLowLodPhysicsSinceLastActive = 295,
 * CPED_CONFIG_FLAG_NeverReactToPedOnRoof = 296,
 * CPED_CONFIG_FLAG_ForcePlayFleeScenarioExitOnNextScriptCommand = 297,
 * CPED_CONFIG_FLAG_JustBumpedIntoVehicle = 298,
 * CPED_CONFIG_FLAG_DisableShockingDrivingOnPavementEvents = 299,
 * CPED_CONFIG_FLAG_ShouldThrowSmokeNow = 300,
 * CPED_CONFIG_FLAG_DisablePedConstraints = 301,
 * CPED_CONFIG_FLAG_ForceInitialPeekInCover = 302,
 * CPED_CONFIG_FLAG_CreatedByDispatch = 303,
 * CPED_CONFIG_FLAG_PointGunLeftHandSupporting = 304,
 * CPED_CONFIG_FLAG_DisableJumpingFromVehiclesAfterLeader = 305,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromPlayerPedImpact = 306,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromAiRagdollImpact = 307,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromPlayerRagdollImpact = 308,
 * CPED_CONFIG_FLAG_DisableQuadrupedSpring = 309,
 * CPED_CONFIG_FLAG_IsInCluster = 310,
 * CPED_CONFIG_FLAG_ShoutToGroupOnPlayerMelee = 311,
 * CPED_CONFIG_FLAG_IgnoredByAutoOpenDoors = 312,
 * CPED_CONFIG_FLAG_PreferInjuredGetup = 313,
 * CPED_CONFIG_FLAG_ForceIgnoreMeleeActiveCombatant = 314,
 * CPED_CONFIG_FLAG_CheckLoSForSoundEvents = 315,
 * CPED_CONFIG_FLAG_JackedAbandonedCar = 316,
 * CPED_CONFIG_FLAG_CanSayFollowedByPlayerAudio = 317,
 * CPED_CONFIG_FLAG_ActivateRagdollFromMinorPlayerContact = 318,
 * CPED_CONFIG_FLAG_HasPortablePickupAttached = 319,
 * CPED_CONFIG_FLAG_ForcePoseCharacterCloth = 320,
 * CPED_CONFIG_FLAG_HasClothCollisionBounds = 321,
 * CPED_CONFIG_FLAG_HasHighHeels = 322,
 * CPED_CONFIG_FLAG_TreatAsAmbientPedForDriverLockOn = 323,
 * CPED_CONFIG_FLAG_DontBehaveLikeLaw = 324,
 * CPED_CONFIG_FLAG_SpawnedAtScenario = 325,
 * CPED_CONFIG_FLAG_DisablePoliceInvestigatingBody = 326,
 * CPED_CONFIG_FLAG_DisableWritheShootFromGround = 327,
 * CPED_CONFIG_FLAG_LowerPriorityOfWarpSeats = 328,
 * CPED_CONFIG_FLAG_DisableTalkTo = 329,
 * CPED_CONFIG_FLAG_DontBlip = 330,
 * CPED_CONFIG_FLAG_IsSwitchingWeapon = 331,
 * CPED_CONFIG_FLAG_IgnoreLegIkRestrictions = 332,
 * CPED_CONFIG_FLAG_ScriptForceNoTimesliceIntelligenceUpdate = 333,
 * CPED_CONFIG_FLAG_JackedOutOfMyVehicle = 334,
 * CPED_CONFIG_FLAG_WentIntoCombatAfterBeingJacked = 335,
 * CPED_CONFIG_FLAG_DontActivateRagdollForVehicleGrab = 336,
 * CPED_CONFIG_FLAG_ForcePackageCharacterCloth = 337,
 * CPED_CONFIG_FLAG_DontRemoveWithValidOrder = 338,
 * CPED_CONFIG_FLAG_AllowTaskDoNothingTimeslicing = 339,
 * CPED_CONFIG_FLAG_ForcedToStayInCoverDueToPlayerSwitch = 340,
 * CPED_CONFIG_FLAG_ForceProneCharacterCloth = 341,
 * CPED_CONFIG_FLAG_NotAllowedToJackAnyPlayers = 342,
 * CPED_CONFIG_FLAG_InToStrafeTransition = 343,
 * CPED_CONFIG_FLAG_KilledByStandardMelee = 344,
 * CPED_CONFIG_FLAG_AlwaysLeaveTrainUponArrival = 345,
 * CPED_CONFIG_FLAG_ForcePlayDirectedNormalScenarioExitOnNextScriptCommand = 346,
 * CPED_CONFIG_FLAG_OnlyWritheFromWeaponDamage = 347,
 * CPED_CONFIG_FLAG_UseSloMoBloodVfx = 348,
 * CPED_CONFIG_FLAG_EquipJetpack = 349,
 * CPED_CONFIG_FLAG_PreventDraggedOutOfCarThreatResponse = 350,
 * CPED_CONFIG_FLAG_ScriptHasCompletelyDisabledCollision = 351,
 * CPED_CONFIG_FLAG_NeverDoScenarioNavChecks = 352,
 * CPED_CONFIG_FLAG_ForceSynchronousScenarioExitChecking = 353,
 * CPED_CONFIG_FLAG_ThrowingGrenadeWhileAiming = 354,
 * CPED_CONFIG_FLAG_HeadbobToRadioEnabled = 355,
 * CPED_CONFIG_FLAG_ForceDeepSurfaceCheck = 356,
 * CPED_CONFIG_FLAG_DisableDeepSurfaceAnims = 357,
 * CPED_CONFIG_FLAG_DontBlipNotSynced = 358,
 * CPED_CONFIG_FLAG_IsDuckingInVehicle = 359,
 * CPED_CONFIG_FLAG_PreventAutoShuffleToTurretSeat = 360,
 * CPED_CONFIG_FLAG_DisableEventInteriorStatusCheck = 361,
 * CPED_CONFIG_FLAG_HasReserveParachute = 362,
 * CPED_CONFIG_FLAG_UseReserveParachute = 363,
 * CPED_CONFIG_FLAG_TreatDislikeAsHateWhenInCombat = 364,
 * CPED_CONFIG_FLAG_OnlyUpdateTargetWantedIfSeen = 365,
 * CPED_CONFIG_FLAG_AllowAutoShuffleToDriversSeat = 366,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromSmokeGrenade = 367,
 * CPED_CONFIG_FLAG_LinkMBRToOwnerOnChain = 368,
 * CPED_CONFIG_FLAG_AmbientFriendBumpedByPlayer = 369,
 * CPED_CONFIG_FLAG_AmbientFriendBumpedByPlayerVehicle = 370,
 * CPED_CONFIG_FLAG_InFPSUnholsterTransition = 371,
 * CPED_CONFIG_FLAG_PreventReactingToSilencedCloneBullets = 372,
 * CPED_CONFIG_FLAG_DisableInjuredCryForHelpEvents = 373,
 * CPED_CONFIG_FLAG_NeverLeaveTrain = 374,
 * CPED_CONFIG_FLAG_DontDropJetpackOnDeath = 375,
 * CPED_CONFIG_FLAG_UseFPSUnholsterTransitionDuringCombatRoll = 376,
 * CPED_CONFIG_FLAG_ExitingFPSCombatRoll = 377,
 * CPED_CONFIG_FLAG_ScriptHasControlOfPlayer = 378,
 * CPED_CONFIG_FLAG_PlayFPSIdleFidgetsForProjectile = 379,
 * CPED_CONFIG_FLAG_DisableAutoEquipHelmetsInBikes = 380,
 * CPED_CONFIG_FLAG_DisableAutoEquipHelmetsInAircraft = 381,
 * CPED_CONFIG_FLAG_WasPlayingFPSGetup = 382,
 * CPED_CONFIG_FLAG_WasPlayingFPSMeleeActionResult = 383,
 * CPED_CONFIG_FLAG_PreferNoPriorityRemoval = 384,
 * CPED_CONFIG_FLAG_FPSFidgetsAbortedOnFire = 385,
 * CPED_CONFIG_FLAG_ForceFPSIKWithUpperBodyAnim = 386,
 * CPED_CONFIG_FLAG_SwitchingCharactersInFirstPerson = 387,
 * CPED_CONFIG_FLAG_IsClimbingLadder = 388,
 * CPED_CONFIG_FLAG_HasBareFeet = 389,
 * CPED_CONFIG_FLAG_UNUSED_REPLACE_ME_2 = 390,
 * CPED_CONFIG_FLAG_GoOnWithoutVehicleIfItIsUnableToGetBackToRoad = 391,
 * CPED_CONFIG_FLAG_BlockDroppingHealthSnacksOnDeath = 392,
 * CPED_CONFIG_FLAG_ResetLastVehicleOnVehicleExit = 393,
 * CPED_CONFIG_FLAG_ForceThreatResponseToNonFriendToFriendMeleeActions = 394,
 * CPED_CONFIG_FLAG_DontRespondToRandomPedsDamage = 395,
 * CPED_CONFIG_FLAG_AllowContinuousThreatResponseWantedLevelUpdates = 396,
 * CPED_CONFIG_FLAG_KeepTargetLossResponseOnCleanup = 397,
 * CPED_CONFIG_FLAG_PlayersDontDragMeOutOfCar = 398,
 * CPED_CONFIG_FLAG_BroadcastRepondedToThreatWhenGoingToPointShooting = 399,
 * CPED_CONFIG_FLAG_IgnorePedTypeForIsFriendlyWith = 400,
 * CPED_CONFIG_FLAG_TreatNonFriendlyAsHateWhenInCombat = 401,
 * CPED_CONFIG_FLAG_DontLeaveVehicleIfLeaderNotInVehicle = 402,
 * CPED_CONFIG_FLAG_ChangeFromPermanentToAmbientPopTypeOnMigration = 403,
 * CPED_CONFIG_FLAG_AllowMeleeReactionIfMeleeProofIsOn = 404,
 * CPED_CONFIG_FLAG_UsingLowriderLeans = 405,
 * CPED_CONFIG_FLAG_UsingAlternateLowriderLeans = 406,
 * CPED_CONFIG_FLAG_UseNormalExplosionDamageWhenBlownUpInVehicle = 407,
 * CPED_CONFIG_FLAG_DisableHomingMissileLockForVehiclePedInside = 408,
 * CPED_CONFIG_FLAG_DisableTakeOffScubaGear = 409,
 * CPED_CONFIG_FLAG_IgnoreMeleeFistWeaponDamageMult = 410,
 * CPED_CONFIG_FLAG_LawPedsCanFleeFromNonWantedPlayer = 411,
 * CPED_CONFIG_FLAG_ForceBlipSecurityPedsIfPlayerIsWanted = 412,
 * CPED_CONFIG_FLAG_IsHolsteringWeapon = 413,
 * CPED_CONFIG_FLAG_UseGoToPointForScenarioNavigation = 414,
 * CPED_CONFIG_FLAG_DontClearLocalPassengersWantedLevel = 415,
 * CPED_CONFIG_FLAG_BlockAutoSwapOnWeaponPickups = 416,
 * CPED_CONFIG_FLAG_ThisPedIsATargetPriorityForAI = 417,
 * CPED_CONFIG_FLAG_IsSwitchingHelmetVisor = 418,
 * CPED_CONFIG_FLAG_ForceHelmetVisorSwitch = 419,
 * CPED_CONFIG_FLAG_IsPerformingVehicleMelee = 420,
 * CPED_CONFIG_FLAG_UseOverrideFootstepPtFx = 421,
 * CPED_CONFIG_FLAG_DisableVehicleCombat = 422,
 * CPED_CONFIG_FLAG_TreatAsFriendlyForTargetingAndDamage = 423,
 * CPED_CONFIG_FLAG_AllowBikeAlternateAnimations = 424,
 * CPED_CONFIG_FLAG_TreatAsFriendlyForTargetingAndDamageNonSynced = 425,
 * CPED_CONFIG_FLAG_UseLockpickVehicleEntryAnimations = 426,
 * CPED_CONFIG_FLAG_IgnoreInteriorCheckForSprinting = 427,
 * CPED_CONFIG_FLAG_SwatHeliSpawnWithinLastSpottedLocation = 428,
 * CPED_CONFIG_FLAG_DisableStartEngine = 429,
 * CPED_CONFIG_FLAG_IgnoreBeingOnFire = 430,
 * CPED_CONFIG_FLAG_DisableTurretOrRearSeatPreference = 431,
 * CPED_CONFIG_FLAG_DisableWantedHelicopterSpawning = 432,
 * CPED_CONFIG_FLAG_UseTargetPerceptionForCreatingAimedAtEvents = 433,
 * CPED_CONFIG_FLAG_DisableHomingMissileLockon = 434,
 * CPED_CONFIG_FLAG_ForceIgnoreMaxMeleeActiveSupportCombatants = 435,
 * CPED_CONFIG_FLAG_StayInDefensiveAreaWhenInVehicle = 436,
 * CPED_CONFIG_FLAG_DontShoutTargetPosition = 437,
 * CPED_CONFIG_FLAG_DisableHelmetArmor = 438,
 * CPED_CONFIG_FLAG_CreatedByConcealedPlayer = 439,
 * CPED_CONFIG_FLAG_PermanentlyDisablePotentialToBeWalkedIntoResponse = 440,
 * CPED_CONFIG_FLAG_PreventVehExitDueToInvalidWeapon = 441,
 * CPED_CONFIG_FLAG_IgnoreNetSessionFriendlyFireCheckForAllowDamage = 442,
 * CPED_CONFIG_FLAG_DontLeaveCombatIfTargetPlayerIsAttackedByPolice = 443,
 * CPED_CONFIG_FLAG_CheckLockedBeforeWarp = 444,
 * CPED_CONFIG_FLAG_DontShuffleInVehicleToMakeRoom = 445,
 * CPED_CONFIG_FLAG_GiveWeaponOnGetup = 446,
 * CPED_CONFIG_FLAG_DontHitVehicleWithProjectiles = 447,
 * CPED_CONFIG_FLAG_DisableForcedEntryForOpenVehiclesFromTryLockedDoor = 448,
 * CPED_CONFIG_FLAG_FiresDummyRockets = 449,
 * CPED_CONFIG_FLAG_PedIsArresting = 450,
 * CPED_CONFIG_FLAG_IsDecoyPed = 451,
 * CPED_CONFIG_FLAG_HasEstablishedDecoy = 452,
 * CPED_CONFIG_FLAG_BlockDispatchedHelicoptersFromLanding = 453,
 * CPED_CONFIG_FLAG_DontCryForHelpOnStun = 454,
 * CPED_CONFIG_FLAG_HitByTranqWeapon = 455,
 * CPED_CONFIG_FLAG_CanBeIncapacitated = 456,
 * CPED_CONFIG_FLAG_ForcedAimFromArrest = 457,
 * CPED_CONFIG_FLAG_DontChangeTargetFromMelee = 458,
 * _0x4376ABF2 = 459,
 * CPED_CONFIG_FLAG_RagdollFloatsIndefinitely = 460,
 * CPED_CONFIG_FLAG_BlockElectricWeaponDamage = 461,
 * _0x262A3B8E = 462,
 * _0x1AA79A25 = 463,
 * }
 * ```
 * 
 * **This is the server-side RPC native equivalent of the client native [SET_PED_CONFIG_FLAG](?\_0x1913FE4CBF41C463).**
 * @param ped
 * @param flagId
 * @param value
 */
export function setPedConfigFlag(ped: number, flagId: number, value: boolean): void { 
	return _in(0x00000000, 0x9cfbe10d, ped, flagId, value); 
}


/**
 * ```
 * Sets Ped Default Clothes
 * ```
 * 
 * **This is the server-side RPC native equivalent of the client native [SET_PED_DEFAULT_COMPONENT_VARIATION](?\_0x45EEE61580806D63).**
 * @param ped
 */
export function setPedDefaultComponentVariation(ped: number): void { 
	return _in(0x00000000, 0xc866a984, ped); 
}


/**
 * Used for freemode (online) characters.
 * Indices:
 * 
 * 1.  black
 * 2.  very light blue/green
 * 3.  dark blue
 * 4.  brown
 * 5.  darker brown
 * 6.  light brown
 * 7.  blue
 * 8.  light blue
 * 9.  pink
 * 10. yellow
 * 11. purple
 * 12. black
 * 13. dark green
 * 14. light brown
 * 15. yellow/black pattern
 * 16. light colored spiral pattern
 * 17. shiny red
 * 18. shiny half blue/half red
 * 19. half black/half light blue
 * 20. white/red perimter
 * 21. green snake
 * 22. red snake
 * 23. dark blue snake
 * 24. dark yellow
 * 25. bright yellow
 * 26. all black
 * 27. red small pupil
 * 28. devil blue/black
 * 29. white small pupil
 * 30. glossed over
 * 
 * **This is the server-side RPC native equivalent of the client native [\_SET_PED_EYE_COLOR](?\_0x50B56988B170AFDF).**
 * @param ped
 * @param index
 */
export function setPedEyeColor(ped: number, index: number): void { 
	return _in(0x00000000, 0xec09db1b, ped, index); 
}


/**
 * Sets the various freemode face features, e.g. nose length, chin shape.
 * **Indexes (From 0 to 19):**
 * Parentheses indicate morph scale/direction as in (-1.0 to 1.0)
 * 
 * *   **0**: Nose Width (Thin/Wide)
 * *   **1**: Nose Peak (Up/Down)
 * *   **2**: Nose Length (Long/Short)
 * *   **3**: Nose Bone Curveness (Crooked/Curved)
 * *   **4**: Nose Tip (Up/Down)
 * *   **5**: Nose Bone Twist (Left/Right)
 * *   **6**: Eyebrow (Up/Down)
 * *   **7**: Eyebrow (In/Out)
 * *   **8**: Cheek Bones (Up/Down)
 * *   **9**: Cheek Sideways Bone Size (In/Out)
 * *   **10**: Cheek Bones Width (Puffed/Gaunt)
 * *   **11**: Eye Opening (Both) (Wide/Squinted)
 * *   **12**: Lip Thickness (Both) (Fat/Thin)
 * *   **13**: Jaw Bone Width (Narrow/Wide)
 * *   **14**: Jaw Bone Shape (Round/Square)
 * *   **15**: Chin Bone (Up/Down)
 * *   **16**: Chin Bone Length (In/Out or Backward/Forward)
 * *   **17**: Chin Bone Shape (Pointed/Square)
 * *   **18**: Chin Hole (Chin Bum)
 * *   **19**: Neck Thickness (Thin/Thick)
 * **Note:**
 * You may need to call [`SetPedHeadBlendData`](#\_0x9414E18B9434C2FE) prior to calling this native in order for it to work.
 * 
 * **This is the server-side RPC native equivalent of the client native [\_SET_PED_FACE_FEATURE](?\_0x71A5C1DBA060049E).**
 * @param ped
 * @param index
 * @param scale
 */
export function setPedFaceFeature(ped: number, index: number, scale: number): void { 
	return _in(0x00000000, 0x6c8d4458, ped, index, _fv(scale)); 
}


/**
 * Sets the tint index for the hair on the specified ped.
 * 
 * ```
 * NativeDB Introduced: v323
 * ```
 * 
 * **This is the server-side RPC native equivalent of the client native [SET_PED_HAIR_TINT](?\_0x4CFFC65454C93A49).**
 * @param ped
 * @param colorID
 * @param highlightColorID
 */
export function setPedHairTint(ped: number, colorID: number, highlightColorID: number): void { 
	return _in(0x00000000, 0xa23fe32c, ped, colorID, highlightColorID); 
}


/**
 * For more info please refer to [this](https://gtaforums.com/topic/858970-all-gtao-face-ids-pedset-ped-head-blend-data-explained) topic.
 * **Other information:**
 * IDs start at zero and go Male Non-DLC, Female Non-DLC, Male DLC, and Female DLC.</br>
 * This native function is often called prior to calling natives such as:
 * 
 * *   [`SetPedHairColor`](#\_0xBB43F090)
 * *   [`SetPedHeadOverlayColor`](#\_0x78935A27)
 * *   [`SetPedHeadOverlay`](#\_0xD28DBA90)
 * *   [`SetPedFaceFeature`](#\_0x6C8D4458)
 * 
 * **This is the server-side RPC native equivalent of the client native [SET_PED_HEAD_BLEND_DATA](?\_0x9414E18B9434C2FE).**
 * @param ped
 * @param shapeFirstID
 * @param shapeSecondID
 * @param shapeThirdID
 * @param skinFirstID
 * @param skinSecondID
 * @param skinThirdID
 * @param shapeMix
 * @param skinMix
 * @param thirdMix
 * @param isParent
 */
export function setPedHeadBlendData(ped: number, shapeFirstID: number, shapeSecondID: number, shapeThirdID: number, skinFirstID: number, skinSecondID: number, skinThirdID: number, shapeMix: number, skinMix: number, thirdMix: number, isParent: boolean): void { 
	return _in(0x00000000, 0x60746b88, ped, shapeFirstID, shapeSecondID, shapeThirdID, skinFirstID, skinSecondID, skinThirdID, _fv(shapeMix), _fv(skinMix), _fv(thirdMix), isParent); 
}


/**
 * ```
 * OverlayID ranges from 0 to 12, index from 0 to _GET_NUM_OVERLAY_VALUES(overlayID)-1, and opacity from 0.0 to 1.0.
 * overlayID       Part                  Index, to disable
 * 0               Blemishes             0 - 23, 255
 * 1               Facial Hair           0 - 28, 255
 * 2               Eyebrows              0 - 33, 255
 * 3               Ageing                0 - 14, 255
 * 4               Makeup                0 - 74, 255
 * 5               Blush                 0 - 6, 255
 * 6               Complexion            0 - 11, 255
 * 7               Sun Damage            0 - 10, 255
 * 8               Lipstick              0 - 9, 255
 * 9               Moles/Freckles        0 - 17, 255
 * 10              Chest Hair            0 - 16, 255
 * 11              Body Blemishes        0 - 11, 255
 * 12              Add Body Blemishes    0 - 1, 255
 * ```
 * 
 * **Note:**
 * You may need to call [`SetPedHeadBlendData`](#\_0x9414E18B9434C2FE) prior to calling this native in order for it to work.
 * 
 * **This is the server-side RPC native equivalent of the client native [SET_PED_HEAD_OVERLAY](?\_0x48F44967FA05CC1E).**
 * @param ped
 * @param overlayID
 * @param index
 * @param opacity
 */
export function setPedHeadOverlay(ped: number, overlayID: number, index: number, opacity: number): void { 
	return _in(0x00000000, 0xd28dba90, ped, overlayID, index, _fv(opacity)); 
}


/**
 * ```
 * Used for freemode (online) characters.
 * Called after SET_PED_HEAD_OVERLAY().
 * ```
 * 
 * **Note:**
 * You may need to call [`SetPedHeadBlendData`](#\_0x9414E18B9434C2FE) prior to calling this native in order for it to work.
 * 
 * **This is the server-side RPC native equivalent of the client native [\_SET_PED_HEAD_OVERLAY_COLOR](?\_0x497BF74A7B9CB952).**
 * @param ped
 * @param overlayID
 * @param colorType
 * @param colorID
 * @param secondColorID
 */
export function setPedHeadOverlayColor(ped: number, overlayID: number, colorType: number, colorID: number, secondColorID: number): void { 
	return _in(0x00000000, 0x78935a27, ped, overlayID, colorType, colorID, secondColorID); 
}


/**
 * SET_PED_INTO_VEHICLE
 * 
 * **This is the server-side RPC native equivalent of the client native [SET_PED_INTO_VEHICLE](?\_0xF75B0D629E1C063D).**
 * @param ped
 * @param vehicle
 * @param seatIndex
 */
export function setPedIntoVehicle(ped: number, vehicle: number, seatIndex: number): void { 
	return _in(0x00000000, 0x07500c79, ped, vehicle, seatIndex); 
}


/**
 * This native is used to set prop variation on a ped. Components, drawables and textures IDs are related to the ped model.
 * 
 * ### MP Freemode list of props
 * 
 * **0**: Hats
 * **1**: Glasses
 * **2**: Ears
 * **6**: Watches
 * **7**: Bracelets
 * List of Prop IDs
 * 
 * ```cpp
 * enum eAnchorPoints
 * {
 * ANCHOR_HEAD = 0, // "p_head"
 * ANCHOR_EYES = 1, // "p_eyes"
 * ANCHOR_EARS = 2, // "p_ears"
 * ANCHOR_MOUTH = 3, // "p_mouth"
 * ANCHOR_LEFT_HAND = 4, // "p_lhand"
 * ANCHOR_RIGHT_HAND = 5, // "p_rhand"
 * ANCHOR_LEFT_WRIST = 6, // "p_lwrist"
 * ANCHOR_RIGHT_WRIST = 7, // "p_rwrist"
 * ANCHOR_HIP = 8, // "p_lhip"
 * ANCHOR_LEFT_FOOT = 9, // "p_lfoot"
 * ANCHOR_RIGHT_FOOT = 10, // "p_rfoot"
 * ANCHOR_PH_L_HAND = 11, // "ph_lhand"
 * ANCHOR_PH_R_HAND = 12, // "ph_rhand"
 * NUM_ANCHORS = 13,
 * };
 * ```
 * 
 * **This is the server-side RPC native equivalent of the client native [SET_PED_PROP_INDEX](?\_0x93376B65A266EB5F).**
 * @param ped
 * @param componentId
 * @param drawableId
 * @param textureId
 * @param attach
 */
export function setPedPropIndex(ped: number, componentId: number, drawableId: number, textureId: number, attach: boolean): void { 
	return _in(0x00000000, 0x0829f2e2, ped, componentId, drawableId, textureId, attach); 
}


/**
 * ```
 * p1 is always 0 in R* scripts; and a quick disassembly seems to indicate that p1 is unused.
 * ```
 * 
 * **This is the server-side RPC native equivalent of the client native [SET_PED_RANDOM_COMPONENT_VARIATION](?\_0xC8A9481A01E63C28).**
 * @param ped
 * @param p1
 */
export function setPedRandomComponentVariation(ped: number, p1: number): void { 
	return _in(0x00000000, 0x4111ba46, ped, p1); 
}


/**
 * SET_PED_RANDOM_PROPS
 * 
 * **This is the server-side RPC native equivalent of the client native [SET_PED_RANDOM_PROPS](?\_0xC44AA05345C992C6).**
 * @param ped
 */
export function setPedRandomProps(ped: number): void { 
	return _in(0x00000000, 0xe3318e0e, ped); 
}


/**
 * PED::SET_PED_RESET_FLAG(PLAYER::PLAYER_PED_ID(), 240, 1);
 * Known values:
 * 
 * **This is the server-side RPC native equivalent of the client native [SET_PED_RESET_FLAG](?\_0xC1E8A365BF3B29F2).**
 * @param ped
 * @param flagId
 * @param doReset
 */
export function setPedResetFlag(ped: number, flagId: number, doReset: boolean): void { 
	return _in(0x00000000, 0xcff6ff66, ped, flagId, doReset); 
}


/**
 * p4/p5: Unusued in TU27
 * 
 * ### Ragdoll Types
 * 
 * **0**: CTaskNMRelax
 * **1**: CTaskNMScriptControl: Hardcoded not to work in networked environments.
 * **Else**: CTaskNMBalance
 * 
 * **This is the server-side RPC native equivalent of the client native [SET_PED_TO_RAGDOLL](?\_0xAE99FB955581844A).**
 * @param ped
 * @param minTime
 * @param maxTime
 * @param ragdollType
 * @param bAbortIfInjured
 * @param bAbortIfDead
 * @param bForceScriptControl
 */
export function setPedToRagdoll(ped: number, minTime: number, maxTime: number, ragdollType: number, bAbortIfInjured: boolean, bAbortIfDead: boolean, bForceScriptControl: boolean): void { 
	return _in(0x00000000, 0x83cb5052, ped, minTime, maxTime, ragdollType, bAbortIfInjured, bAbortIfDead, bForceScriptControl); 
}


/**
 * ```cpp
 * enum eNMFallType {
 * TYPE_FROM_HIGH = 0,
 * TYPE_OVER_WALL = 1,
 * TYPE_DOWN_STAIRS = 2,
 * TYPE_DIE_TYPES = 3,
 * TYPE_DIE_FROM_HIGH = 4,
 * TYPE_DIE_OVER_WALL = 5,
 * TYPE_DIE_DOWN_STAIRS = 6
 * }
 * ```
 * 
 * ```
 * Return variable is never used in R*'s scripts.
 * Not sure what p2 does. It seems like it would be a time judging by it's usage in R*'s scripts, but didn't seem to affect anything in my testings.
 * x, y, and z are coordinates, most likely to where the ped will fall.
 * p7 is probably the force of the fall, but untested, so I left the variable name the same.
 * p8 to p13 are always 0f in R*'s scripts.
 * (Simplified) Example of the usage of the function from R*'s scripts:
 * ped::set_ped_to_ragdoll_with_fall(ped, 1500, 2000, 1, -entity::get_entity_forward_vector(ped), 1f, 0f, 0f, 0f, 0f, 0f, 0f);
 * ```
 * 
 * **This is the server-side RPC native equivalent of the client native [SET_PED_TO_RAGDOLL_WITH_FALL](?\_0xD76632D99E4966C8).**
 * @param ped
 * @param minTime
 * @param maxTime
 * @param nFallType
 * @param dirX
 * @param dirY
 * @param dirZ
 * @param fGroundHeight
 * @param grab1X
 * @param grab1Y
 * @param grab1Z
 * @param grab2X
 * @param grab2Y
 * @param grab2Z
 */
export function setPedToRagdollWithFall(ped: number, minTime: number, maxTime: number, nFallType: number, dirX: number, dirY: number, dirZ: number, fGroundHeight: number, grab1X: number, grab1Y: number, grab1Z: number, grab2X: number, grab2Y: number, grab2Z: number): void { 
	return _in(0x00000000, 0xfa12e286, ped, minTime, maxTime, nFallType, _fv(dirX), _fv(dirY), _fv(dirZ), _fv(fGroundHeight), _fv(grab1X), _fv(grab1Y), _fv(grab1Z), _fv(grab2X), _fv(grab2Y), _fv(grab2Z)); 
}


/**
 * ```
 * Flags:
 * SPC_AMBIENT_SCRIPT = (1 << 1),
 * SPC_CLEAR_TASKS = (1 << 2),
 * SPC_REMOVE_FIRES = (1 << 3),
 * SPC_REMOVE_EXPLOSIONS = (1 << 4),
 * SPC_REMOVE_PROJECTILES = (1 << 5),
 * SPC_DEACTIVATE_GADGETS = (1 << 6),
 * SPC_REENABLE_CONTROL_ON_DEATH = (1 << 7),
 * SPC_LEAVE_CAMERA_CONTROL_ON = (1 << 8),
 * SPC_ALLOW_PLAYER_DAMAGE = (1 << 9),
 * SPC_DONT_STOP_OTHER_CARS_AROUND_PLAYER = (1 << 10),
 * SPC_PREVENT_EVERYBODY_BACKOFF = (1 << 11),
 * SPC_ALLOW_PAD_SHAKE = (1 << 12)
 * See: https://alloc8or.re/gta5/doc/enums/eSetPlayerControlFlag.txt
 * ```
 * 
 * **This is the server-side RPC native equivalent of the client native [SET_PLAYER_CONTROL](?\_0x8D32347D6D4C40A2).**
 * @param player
 * @param bHasControl
 * @param flags
 */
export function setPlayerControl(player: number, bHasControl: boolean, flags: number): void { 
	return _in(0x00000000, 0xd17afcd8, player, bHasControl, flags); 
}


/**
 * Sets the culling radius for the specified player.
 * Set to `0.0` to reset.
 * 
 * **WARNING**: Culling natives are deprecated and have known, [unfixable issues](https://forum.cfx.re/t/issue-with-culling-radius-and-server-side-entities/4900677/4)
 * @param playerSrc
 * @param radius
 */
export function setPlayerCullingRadius(playerSrc: string, radius: number): void { 
	return _in(0x00000000, 0x8a2fbad4, _ts(playerSrc), _fv(radius)); 
}


/**
 * Make the player impervious to all forms of damage.
 * 
 * **This is the server-side RPC native equivalent of the client native [SET_PLAYER_INVINCIBLE](?\_0x239528EACDC3E7DE).**
 * @param player
 * @param bInvincible
 */
export function setPlayerInvincible(player: number, bInvincible: boolean): void { 
	return _in(0x00000000, 0xdfb9a2a2, player, bInvincible); 
}


/**
 * Set the model for a specific Player. Note that this will destroy the current Ped for the Player and create a new one, any reference to the old ped will be invalid after calling this.
 * As per usual, make sure to request the model first and wait until it has loaded.
 * 
 * **This is the server-side RPC native equivalent of the client native [SET_PLAYER_MODEL](?\_0x00A1CADD00108836).**
 * @param player
 * @param model
 */
export function setPlayerModel(player: number, model: number): void { 
	return _in(0x00000000, 0x774a4c54, player, model); 
}


/**
 * Sets the routing bucket for the specified player.
 * 
 * Routing buckets are also known as 'dimensions' or 'virtual worlds' in past echoes, however they are population-aware.
 * @param playerSrc
 * @param bucket
 */
export function setPlayerRoutingBucket(playerSrc: string, bucket: number): void { 
	return _in(0x00000000, 0x6504eb38, _ts(playerSrc), bucket); 
}


/**
 * SET_PLAYER_WANTED_LEVEL
 * 
 * **This is the server-side RPC native equivalent of the client native [SET_PLAYER_WANTED_LEVEL](?\_0x39FF19C64EF7DA5B).**
 * @param player
 * @param wantedLevel
 * @param delayedResponse
 */
export function setPlayerWantedLevel(player: number, wantedLevel: number, delayedResponse: boolean): void { 
	return _in(0x00000000, 0xb7a0914b, player, wantedLevel, delayedResponse); 
}


/**
 * Sets the entity lockdown mode for a specific routing bucket.
 * 
 * Lockdown modes are:
 * 
 * | Mode       | Meaning                                                    |
 * | ---------- | ---------------------------------------------------------- |
 * | `strict`   | No entities can be created by clients at all.              |
 * | `relaxed`  | Only script-owned entities created by clients are blocked. |
 * | `inactive` | Clients can create any entity they want.                   |
 * @param bucketId
 * @param mode
 */
export function setRoutingBucketEntityLockdownMode(bucketId: number, mode: string): void { 
	return _in(0x00000000, 0xa0f2201f, bucketId, _ts(mode)); 
}


/**
 * Sets whether or not the specified routing bucket has automatically-created population enabled.
 * @param bucketId
 * @param mode
 */
export function setRoutingBucketPopulationEnabled(bucketId: number, mode: boolean): void { 
	return _in(0x00000000, 0xce51ac2c, bucketId, mode); 
}


/**
 * SET_VEHICLE_ALARM
 * 
 * **This is the server-side RPC native equivalent of the client native [SET_VEHICLE_ALARM](?\_0xCDE5E70C1DDB954C).**
 * @param vehicle
 * @param state
 */
export function setVehicleAlarm(vehicle: number, state: boolean): void { 
	return _in(0x00000000, 0x24877d84, vehicle, state); 
}


/**
 * ```
 * p2 often set to 1000.0 in the decompiled scripts.
 * ```
 * 
 * **This is the server-side RPC native equivalent of the client native [SET_VEHICLE_BODY_HEALTH](?\_0xB77D05AC8C78AADB).**
 * @param vehicle
 * @param value
 */
export function setVehicleBodyHealth(vehicle: number, value: number): void { 
	return _in(0x00000000, 0x920c2517, vehicle, _fv(value)); 
}


/**
 * Sets the selected vehicle's colors to their default value (specific variant specified using the colorCombination parameter).
 * Range of possible values for colorCombination is currently unknown, I couldn't find where these values are stored either (Disquse's guess was vehicles.meta but I haven't seen it in there.)
 * 
 * **This is the server-side RPC native equivalent of the client native [SET_VEHICLE_COLOUR_COMBINATION](?\_0x33E8CD3322E2FE31).**
 * @param vehicle
 * @param colorCombination
 */
export function setVehicleColourCombination(vehicle: number, colorCombination: number): void { 
	return _in(0x00000000, 0xa557aead, vehicle, colorCombination); 
}


/**
 * colorPrimary & colorSecondary are the paint indexes for the vehicle.
 * For a list of valid paint indexes, view: pastebin.com/pwHci0xK
 * 
 * **This is the server-side RPC native equivalent of the client native [SET_VEHICLE_COLOURS](?\_0x4F1D4BE3A7F24601).**
 * @param vehicle
 * @param colorPrimary
 * @param colorSecondary
 */
export function setVehicleColours(vehicle: number, colorPrimary: number, colorSecondary: number): void { 
	return _in(0x00000000, 0x57f24253, vehicle, colorPrimary, colorSecondary); 
}


/**
 * ```
 * p1, p2, p3 are RGB values for color (255,0,0 for Red, ect)
 * ```
 * 
 * **This is the server-side RPC native equivalent of the client native [SET_VEHICLE_CUSTOM_PRIMARY_COLOUR](?\_0x7141766F91D15BEA).**
 * @param vehicle
 * @param r
 * @param g
 * @param b
 */
export function setVehicleCustomPrimaryColour(vehicle: number, r: number, g: number, b: number): void { 
	return _in(0x00000000, 0x8df9f9bc, vehicle, r, g, b); 
}


/**
 * ```
 * p1, p2, p3 are RGB values for color (255,0,0 for Red, ect)
 * ```
 * 
 * **This is the server-side RPC native equivalent of the client native [SET_VEHICLE_CUSTOM_SECONDARY_COLOUR](?\_0x36CED73BFED89754).**
 * @param vehicle
 * @param r
 * @param g
 * @param b
 */
export function setVehicleCustomSecondaryColour(vehicle: number, r: number, g: number, b: number): void { 
	return _in(0x00000000, 0x9d77259e, vehicle, r, g, b); 
}


/**
 * Sets the dirt level of the passed vehicle.
 * 
 * **This is the server-side RPC native equivalent of the client native [SET_VEHICLE_DIRT_LEVEL](?\_0x79D3B596FE44EE8B).**
 * @param vehicle
 * @param dirtLevel
 */
export function setVehicleDirtLevel(vehicle: number, dirtLevel: number): void { 
	return _in(0x00000000, 0x2b39128b, vehicle, _fv(dirtLevel)); 
}


/**
 * See eDoorId declared in [`SET_VEHICLE_DOOR_SHUT`](#\_0x93D9BD300D7789E5)
 * 
 * **This is the server-side RPC native equivalent of the client native [SET_VEHICLE_DOOR_BROKEN](?\_0xD4D4F6A4AB575A33).**
 * @param vehicle
 * @param doorIndex
 * @param deleteDoor
 */
export function setVehicleDoorBroken(vehicle: number, doorIndex: number, deleteDoor: boolean): void { 
	return _in(0x00000000, 0x8147fea7, vehicle, doorIndex, deleteDoor); 
}


/**
 * Locks the doors of a specified vehicle to a defined lock state, affecting how players and NPCs can interact with the vehicle.
 * 
 * ```
 * NativeDB Introduced: v323
 * ```
 * 
 * ```cpp
 * enum eVehicleLockState {
 * // No specific lock state, vehicle behaves according to the game's default settings.
 * VEHICLELOCK_NONE = 0,
 * // Vehicle is fully unlocked, allowing free entry by players and NPCs.
 * VEHICLELOCK_UNLOCKED = 1,
 * // Vehicle is locked, preventing entry by players and NPCs.
 * VEHICLELOCK_LOCKED = 2,
 * // Vehicle locks out only players, allowing NPCs to enter.
 * VEHICLELOCK_LOCKOUT_PLAYER_ONLY = 3,
 * // Vehicle is locked once a player enters, preventing others from entering.
 * VEHICLELOCK_LOCKED_PLAYER_INSIDE = 4,
 * // Vehicle starts in a locked state, but may be unlocked through game events.
 * VEHICLELOCK_LOCKED_INITIALLY = 5,
 * // Forces the vehicle's doors to shut and lock.
 * VEHICLELOCK_FORCE_SHUT_DOORS = 6,
 * // Vehicle is locked but can still be damaged.
 * VEHICLELOCK_LOCKED_BUT_CAN_BE_DAMAGED = 7,
 * // Vehicle is locked, but its trunk/boot remains unlocked.
 * VEHICLELOCK_LOCKED_BUT_BOOT_UNLOCKED = 8,
 * // Vehicle is locked and does not allow passengers, except for the driver.
 * VEHICLELOCK_LOCKED_NO_PASSENGERS = 9,
 * // Vehicle is completely locked, preventing entry entirely, even if previously inside.
 * VEHICLELOCK_CANNOT_ENTER = 10
 * };
 * ```
 * 
 * **This is the server-side RPC native equivalent of the client native [SET_VEHICLE_DOORS_LOCKED](?\_0xB664292EAECF7FA6).**
 * @param vehicle
 * @param doorLockStatus
 */
export function setVehicleDoorsLocked(vehicle: number, doorLockStatus: number): void { 
	return _in(0x00000000, 0x4cdd35d0, vehicle, doorLockStatus); 
}


/**
 * SET_VEHICLE_NUMBER_PLATE_TEXT
 * 
 * **This is the server-side RPC native equivalent of the client native [SET_VEHICLE_NUMBER_PLATE_TEXT](?\_0x95A88F0B409CDA47).**
 * @param vehicle
 * @param plateText
 */
export function setVehicleNumberPlateText(vehicle: number, plateText: string): void { 
	return _in(0x00000000, 0x400f9556, vehicle, _ts(plateText)); 
}


export function startResource(resourceName: string): boolean { 
	return _in(0x00000000, 0x29b440dc, _ts(resourceName), _r); 
}


export function stopResource(resourceName: string): boolean { 
	return _in(0x00000000, 0x21783161, _ts(resourceName), _r); 
}


/**
 * ```
 * Makes the specified ped attack the target ped.
 * p2 should be 0
 * p3 should be 16
 * ```
 * 
 * **This is the server-side RPC native equivalent of the client native [TASK_COMBAT_PED](?\_0xF166E48407BAC484).**
 * @param ped
 * @param targetPed
 * @param p2
 * @param p3
 */
export function taskCombatPed(ped: number, targetPed: number, p2: number, p3: number): void { 
	return _in(0x00000000, 0xcb0d8932, ped, targetPed, p2, p3); 
}


/**
 * ```
 * Example:
 * TASK::TASK_DRIVE_BY(l_467[1 -- [[22]] ], PLAYER::PLAYER_PED_ID(), 0, 0.0, 0.0, 2.0, 300.0, 100, 0, ${firing_pattern_burst_fire_driveby});
 * Needs working example. Doesn't seem to do anything.
 * I marked p2 as targetVehicle as all these shooting related tasks seem to have that in common.
 * I marked p6 as distanceToShoot as if you think of GTA's Logic with the native SET_VEHICLE_SHOOT natives, it won't shoot till it gets within a certain distance of the target.
 * I marked p7 as pedAccuracy as it seems it's mostly 100 (Completely Accurate), 75, 90, etc. Although this could be the ammo count within the gun, but I highly doubt it. I will change this comment once I find out if it's ammo count or not.
 * ```
 * 
 * **This is the server-side RPC native equivalent of the client native [TASK_DRIVE_BY](?\_0x2F8AF0E82773A171).**
 * @param driverPed
 * @param targetPed
 * @param targetVehicle
 * @param targetX
 * @param targetY
 * @param targetZ
 * @param distanceToShoot
 * @param pedAccuracy
 * @param p8
 * @param firingPattern
 */
export function taskDriveBy(driverPed: number, targetPed: number, targetVehicle: number, targetX: number, targetY: number, targetZ: number, distanceToShoot: number, pedAccuracy: number, p8: boolean, firingPattern: number): void { 
	return _in(0x00000000, 0x2b84d1c4, driverPed, targetPed, targetVehicle, _fv(targetX), _fv(targetY), _fv(targetZ), _fv(distanceToShoot), pedAccuracy, p8, firingPattern); 
}


/**
 * ```
 * speed 1.0 = walk, 2.0 = run
 * p5 1 = normal, 3 = teleport to vehicle, 8 = normal/carjack ped from seat, 16 = teleport directly into vehicle
 * p6 is always 0
 * ```
 * 
 * **This is the server-side RPC native equivalent of the client native [TASK_ENTER_VEHICLE](?\_0xC20E50AA46D09CA8).**
 * @param ped
 * @param vehicle
 * @param timeout
 * @param seatIndex
 * @param speed
 * @param flag
 * @param p6
 */
export function taskEnterVehicle(ped: number, vehicle: number, timeout: number, seatIndex: number, speed: number, flag: number, p6: number): void { 
	return _in(0x00000000, 0xb8689b4e, ped, vehicle, timeout, seatIndex, _fv(speed), flag, p6); 
}


/**
 * TASK_EVERYONE_LEAVE_VEHICLE
 * 
 * **This is the server-side RPC native equivalent of the client native [TASK_EVERYONE_LEAVE_VEHICLE](?\_0x7F93691AB4B92272).**
 * @param vehicle
 */
export function taskEveryoneLeaveVehicle(vehicle: number): void { 
	return _in(0x00000000, 0xc1971f30, vehicle); 
}


/**
 * TASK_GO_STRAIGHT_TO_COORD
 * 
 * **This is the server-side RPC native equivalent of the client native [TASK_GO_STRAIGHT_TO_COORD](?\_0xD76B57B44F1E6F8B).**
 * @param ped
 * @param x
 * @param y
 * @param z
 * @param speed
 * @param timeout
 * @param targetHeading
 * @param distanceToSlide
 */
export function taskGoStraightToCoord(ped: number, x: number, y: number, z: number, speed: number, timeout: number, targetHeading: number, distanceToSlide: number): void { 
	return _in(0x00000000, 0x80a9e7a7, ped, _fv(x), _fv(y), _fv(z), _fv(speed), timeout, _fv(targetHeading), _fv(distanceToSlide)); 
}


/**
 * Tells a ped to go to a coord by any means.
 * 
 * ```cpp
 * enum eDrivingMode {
 * DF_StopForCars = 1,
 * DF_StopForPeds = 2,
 * DF_SwerveAroundAllCars = 4,
 * DF_SteerAroundStationaryCars = 8,
 * DF_SteerAroundPeds = 16,
 * DF_SteerAroundObjects = 32,
 * DF_DontSteerAroundPlayerPed = 64,
 * DF_StopAtLights = 128,
 * DF_GoOffRoadWhenAvoiding = 256,
 * DF_DriveIntoOncomingTraffic = 512,
 * DF_DriveInReverse = 1024,
 * // If pathfinding fails, cruise randomly instead of going on a straight line
 * DF_UseWanderFallbackInsteadOfStraightLine = 2048,
 * DF_AvoidRestrictedAreas = 4096,
 * // These only work on MISSION_CRUISE
 * DF_PreventBackgroundPathfinding = 8192,
 * DF_AdjustCruiseSpeedBasedOnRoadSpeed = 16384,
 * DF_UseShortCutLinks =  262144,
 * DF_ChangeLanesAroundObstructions = 524288,
 * // cruise tasks ignore this anyway--only used for goto's
 * DF_UseSwitchedOffNodes =  2097152,
 * // if you're going to be primarily driving off road
 * DF_PreferNavmeshRoute =  4194304,
 * // Only works for planes using MISSION_GOTO, will cause them to drive along the ground instead of fly
 * DF_PlaneTaxiMode =  8388608,
 * DF_ForceStraightLine = 16777216,
 * DF_UseStringPullingAtJunctions = 33554432,
 * DF_AvoidHighways = 536870912,
 * DF_ForceJoinInRoadDirection = 1073741824,
 * // Standard driving mode. stops for cars, peds, and lights, goes around stationary obstructions
 * DRIVINGMODE_STOPFORCARS = 786603, // DF_StopForCars|DF_StopForPeds|DF_SteerAroundObjects|DF_SteerAroundStationaryCars|DF_StopAtLights|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions,		// Obey lights too
 * // Like the above, but doesn't steer around anything in its way - will only wait instead.
 * DRIVINGMODE_STOPFORCARS_STRICT = 262275, // DF_StopForCars|DF_StopForPeds|DF_StopAtLights|DF_UseShortCutLinks, // Doesn't deviate an inch.
 * // Default "alerted" driving mode. drives around everything, doesn't obey lights
 * DRIVINGMODE_AVOIDCARS = 786469, // DF_SwerveAroundAllCars|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions|DF_StopForCars,
 * // Very erratic driving. difference between this and AvoidCars is that it doesn't use the brakes at ALL to help with steering
 * DRIVINGMODE_AVOIDCARS_RECKLESS = 786468, // DF_SwerveAroundAllCars|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions,
 * // Smashes through everything
 * DRIVINGMODE_PLOUGHTHROUGH = 262144, // DF_UseShortCutLinks
 * // Drives normally except for the fact that it ignores lights
 * DRIVINGMODE_STOPFORCARS_IGNORELIGHTS = 786475, // DF_StopForCars|DF_SteerAroundStationaryCars|DF_StopForPeds|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions
 * // Try to swerve around everything, but stop for lights if necessary
 * DRIVINGMODE_AVOIDCARS_OBEYLIGHTS = 786597, // DF_SwerveAroundAllCars|DF_StopAtLights|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions|DF_StopForCars
 * // Swerve around cars, be careful around peds, and stop for lights
 * DRIVINGMODE_AVOIDCARS_STOPFORPEDS_OBEYLIGHTS = 786599 // DF_SwerveAroundAllCars|DF_StopAtLights|DF_StopForPeds|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions|DF_StopForCars
 * };
 * ```
 * 
 * **This is the server-side RPC native equivalent of the client native [TASK_GO_TO_COORD_ANY_MEANS](?\_0x5BC448CB78FA3E88).**
 * @param ped
 * @param x
 * @param y
 * @param z
 * @param fMoveBlendRatio
 * @param vehicle
 * @param bUseLongRangeVehiclePathing
 * @param drivingFlags
 * @param fMaxRangeToShootTargets
 */
export function taskGoToCoordAnyMeans(ped: number, x: number, y: number, z: number, fMoveBlendRatio: number, vehicle: number, bUseLongRangeVehiclePathing: boolean, drivingFlags: number, fMaxRangeToShootTargets: number): void { 
	return _in(0x00000000, 0xf91df93b, ped, _fv(x), _fv(y), _fv(z), _fv(fMoveBlendRatio), vehicle, bUseLongRangeVehiclePathing, drivingFlags, _fv(fMaxRangeToShootTargets)); 
}


/**
 * ```
 * The entity will move towards the target until time is over (duration) or get in target's range (distance). p5 and p6 are unknown, but you could leave p5 = 1073741824 or 100 or even 0 (didn't see any difference but on the decompiled scripts, they use 1073741824 mostly) and p6 = 0
 * Note: I've only tested it on entity -> ped and target -> vehicle. It could work differently on other entities, didn't try it yet.
 * Example: TASK::TASK_GO_TO_ENTITY(pedHandle, vehicleHandle, 5000, 4.0, 100, 1073741824, 0)
 * Ped will run towards the vehicle for 5 seconds and stop when time is over or when he gets 4 meters(?) around the vehicle (with duration = -1, the task duration will be ignored).
 * ```
 * 
 * **This is the server-side RPC native equivalent of the client native [TASK_GO_TO_ENTITY](?\_0x6A071245EB0D1882).**
 * @param entity
 * @param target
 * @param duration
 * @param distance
 * @param speed
 * @param p5
 * @param p6
 */
export function taskGoToEntity(entity: number, target: number, duration: number, distance: number, speed: number, p5: number, p6: number): void { 
	return _in(0x00000000, 0x374827c2, entity, target, duration, _fv(distance), _fv(speed), _fv(p5), p6); 
}


/**
 * ```
 * In the scripts, p3 was always -1.
 * p3 seems to be duration or timeout of turn animation.
 * Also facingPed can be 0 or -1 so ped will just raise hands up.
 * ```
 * 
 * **This is the server-side RPC native equivalent of the client native [TASK_HANDS_UP](?\_0xF2EAB31979A7F910).**
 * @param ped
 * @param duration
 * @param facingPed
 * @param p3
 * @param p4
 */
export function taskHandsUp(ped: number, duration: number, facingPed: number, p3: number, p4: boolean): void { 
	return _in(0x00000000, 0x8dcc19c5, ped, duration, facingPed, p3, p4); 
}


/**
 * Flags are the same flags used in [`TASK_LEAVE_VEHICLE`](#\_0xD3DBCE61A490BE02)
 * 
 * **This is the server-side RPC native equivalent of the client native [TASK_LEAVE_ANY_VEHICLE](?\_0x504D54DF3F6F2247).**
 * @param ped
 * @param p1
 * @param flags
 */
export function taskLeaveAnyVehicle(ped: number, p1: number, flags: number): void { 
	return _in(0x00000000, 0xdbdd79fa, ped, p1, flags); 
}


/**
 * ```
 * Flags from decompiled scripts:
 * 0 = normal exit and closes door.
 * 1 = normal exit and closes door.
 * 16 = teleports outside, door kept closed.  (This flag does not seem to work for the front seats in buses, NPCs continue to exit normally)
 * 64 = normal exit and closes door, maybe a bit slower animation than 0.
 * 256 = normal exit but does not close the door.
 * 4160 = ped is throwing himself out, even when the vehicle is still.
 * 262144 = ped moves to passenger seat first, then exits normally
 * Others to be tried out: 320, 512, 131072.
 * ```
 * 
 * **This is the server-side RPC native equivalent of the client native [TASK_LEAVE_VEHICLE](?\_0xD3DBCE61A490BE02).**
 * @param ped
 * @param vehicle
 * @param flags
 */
export function taskLeaveVehicle(ped: number, vehicle: number, flags: number): void { 
	return _in(0x00000000, 0x7b1141c6, ped, vehicle, flags); 
}


/**
 * [Animations list](https://alexguirre.github.io/animations-list/)
 * 
 * ```cpp
 * enum eScriptedAnimFlags
 * {
 * AF_LOOPING = 1,
 * AF_HOLD_LAST_FRAME = 2,
 * AF_REPOSITION_WHEN_FINISHED = 4,
 * AF_NOT_INTERRUPTABLE = 8,
 * AF_UPPERBODY = 16,
 * AF_SECONDARY = 32,
 * AF_REORIENT_WHEN_FINISHED = 64,
 * AF_ABORT_ON_PED_MOVEMENT = 128,
 * AF_ADDITIVE = 256,
 * AF_TURN_OFF_COLLISION = 512,
 * AF_OVERRIDE_PHYSICS = 1024,
 * AF_IGNORE_GRAVITY = 2048,
 * AF_EXTRACT_INITIAL_OFFSET = 4096,
 * AF_EXIT_AFTER_INTERRUPTED = 8192,
 * AF_TAG_SYNC_IN = 16384,
 * AF_TAG_SYNC_OUT = 32768,
 * AF_TAG_SYNC_CONTINUOUS = 65536,
 * AF_FORCE_START = 131072,
 * AF_USE_KINEMATIC_PHYSICS = 262144,
 * AF_USE_MOVER_EXTRACTION = 524288,
 * AF_HIDE_WEAPON = 1048576,
 * AF_ENDS_IN_DEAD_POSE = 2097152,
 * AF_ACTIVATE_RAGDOLL_ON_COLLISION = 4194304,
 * AF_DONT_EXIT_ON_DEATH = 8388608,
 * AF_ABORT_ON_WEAPON_DAMAGE = 16777216,
 * AF_DISABLE_FORCED_PHYSICS_UPDATE = 33554432,
 * AF_PROCESS_ATTACHMENTS_ON_START = 67108864,
 * AF_EXPAND_PED_CAPSULE_FROM_SKELETON = 134217728,
 * AF_USE_ALTERNATIVE_FP_ANIM = 268435456,
 * AF_BLENDOUT_WRT_LAST_FRAME = 536870912,
 * AF_USE_FULL_BLENDING = 1073741824
 * }
 * ```
 * 
 * **This is the server-side RPC native equivalent of the client native [TASK_PLAY_ANIM](?\_0xEA47FE3719165B94).**
 * @param ped
 * @param animDictionary
 * @param animationName
 * @param blendInSpeed
 * @param blendOutSpeed
 * @param duration
 * @param flag
 * @param playbackRate
 * @param lockX
 * @param lockY
 * @param lockZ
 */
export function taskPlayAnim(ped: number, animDictionary: string, animationName: string, blendInSpeed: number, blendOutSpeed: number, duration: number, flag: number, playbackRate: number, lockX: boolean, lockY: boolean, lockZ: boolean): void { 
	return _in(0x00000000, 0x5ab552c6, ped, _ts(animDictionary), _ts(animationName), _fv(blendInSpeed), _fv(blendOutSpeed), duration, flag, _fv(playbackRate), lockX, lockY, lockZ); 
}


/**
 * Similar in functionality to [`TASK_PLAY_ANIM`](#\_0xEA47FE3719165B94), except the position and rotation parameters let you specify the initial position and rotation of the task. The ped is teleported to the position specified.
 * [Animations list](https://alexguirre.github.io/animations-list/)
 * 
 * **This is the server-side RPC native equivalent of the client native [TASK_PLAY_ANIM_ADVANCED](?\_0x83CDB10EA29B370B).**
 * @param ped
 * @param animDictionary
 * @param animationName
 * @param posX
 * @param posY
 * @param posZ
 * @param rotX
 * @param rotY
 * @param rotZ
 * @param blendInSpeed
 * @param blendOutSpeed
 * @param duration
 * @param flag
 * @param animTime
 * @param p14
 * @param p15
 */
export function taskPlayAnimAdvanced(ped: number, animDictionary: string, animationName: string, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, blendInSpeed: number, blendOutSpeed: number, duration: number, flag: number, animTime: number, p14: number, p15: number): void { 
	return _in(0x00000000, 0x3ddeb0e6, ped, _ts(animDictionary), _ts(animationName), _fv(posX), _fv(posY), _fv(posZ), _fv(rotX), _fv(rotY), _fv(rotZ), _fv(blendInSpeed), _fv(blendOutSpeed), duration, flag, _fv(animTime), p14, p15); 
}


/**
 * TASK_REACT_AND_FLEE_PED
 * 
 * **This is the server-side RPC native equivalent of the client native [TASK_REACT_AND_FLEE_PED](?\_0x72C896464915D1B1).**
 * @param ped
 * @param fleeTarget
 */
export function taskReactAndFleePed(ped: number, fleeTarget: number): void { 
	return _in(0x00000000, 0x8a632bd8, ped, fleeTarget); 
}


/**
 * ```
 * Firing Pattern Hash Information: https://pastebin.com/Px036isB
 * ```
 * 
 * **This is the server-side RPC native equivalent of the client native [TASK_SHOOT_AT_COORD](?\_0x46A6CC01E0826106).**
 * @param ped
 * @param x
 * @param y
 * @param z
 * @param duration
 * @param firingPattern
 */
export function taskShootAtCoord(ped: number, x: number, y: number, z: number, duration: number, firingPattern: number): void { 
	return _in(0x00000000, 0x601c22e3, ped, _fv(x), _fv(y), _fv(z), duration, firingPattern); 
}


/**
 * ```
 * //this part of the code is to determine at which entity the player is aiming, for example if you want to create a mod where you give orders to peds
 * Entity aimedentity;
 * Player player = PLAYER::PLAYER_ID();
 * PLAYER::_GET_AIMED_ENTITY(player, &aimedentity);
 * //bg is an array of peds
 * TASK::TASK_SHOOT_AT_ENTITY(bg[i], aimedentity, 5000, MISC::GET_HASH_KEY("FIRING_PATTERN_FULL_AUTO"));
 * in practical usage, getting the entity the player is aiming at and then task the peds to shoot at the entity, at a button press event would be better.
 * Firing Pattern Hash Information: https://pastebin.com/Px036isB
 * ```
 * 
 * **This is the server-side RPC native equivalent of the client native [TASK_SHOOT_AT_ENTITY](?\_0x08DA95E8298AE772).**
 * @param entity
 * @param target
 * @param duration
 * @param firingPattern
 */
export function taskShootAtEntity(entity: number, target: number, duration: number, firingPattern: number): void { 
	return _in(0x00000000, 0xac0631c9, entity, target, duration, firingPattern); 
}


/**
 * ```
 * NativeDB Introduced: v323
 * ```
 * 
 * Warp a ped into a vehicle.
 * **Note**: It's better to use [`TASK_ENTER_VEHICLE`](#\_0xC20E50AA46D09CA8) with the flag "warp" flag instead of this native.
 * 
 * **This is the server-side RPC native equivalent of the client native [TASK_WARP_PED_INTO_VEHICLE](?\_0x9A7D091411C5F684).**
 * @param ped
 * @param vehicle
 * @param seatIndex
 */
export function taskWarpPedIntoVehicle(ped: number, vehicle: number, seatIndex: number): void { 
	return _in(0x00000000, 0x65d4a35d, ped, vehicle, seatIndex); 
}


export function tempBanPlayer(playerSrc: string, reason: string): void { 
	return _in(0x00000000, 0x1e35dbba, _ts(playerSrc), _ts(reason)); 
}


/**
 * The backing function for TriggerClientEvent.
 * @param eventName
 * @param eventTarget
 * @param eventPayload
 * @param payloadLength
 */
export function triggerClientEventInternal(eventName: string, eventTarget: string, eventPayload: string, payloadLength: number): void { 
	return _in(0x00000000, 0x2f7a49e6, _ts(eventName), _ts(eventTarget), _ts(eventPayload), payloadLength); 
}


/**
 * The backing function for TriggerLatentClientEvent.
 * @param eventName
 * @param eventTarget
 * @param eventPayload
 * @param payloadLength
 * @param bps
 */
export function triggerLatentClientEventInternal(eventName: string, eventTarget: string, eventPayload: string, payloadLength: number, bps: number): void { 
	return _in(0x00000000, 0x70b35890, _ts(eventName), _ts(eventTarget), _ts(eventPayload), payloadLength, bps); 
}


export function verifyPasswordHash(password: string, hash: string): boolean { 
	return _in(0x00000000, 0x2e310acd, _ts(password), _ts(hash), _r); 
}
