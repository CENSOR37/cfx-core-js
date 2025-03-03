
import { Vector3 } from "../shared";
import { _i, _f, _v, _r, _ri, _rf, _rl, _s, _rv, _ro, _in, _ii, _fi, _ch, _obj, _ts, _fv, _mfr, _mv } from "../shared/header";




/**
 * Activates built-in timecycle editing tool.
 */
export function activateTimecycleEditor(): void { 
	return _in(0x00000000, 0xeeb9b76a); 
}


/**
 * Adds an output for the specified audio submix.
 * @param submixId
 * @param outputSubmixId
 */
export function addAudioSubmixOutput(submixId: number, outputSubmixId: number): void { 
	return _in(0x00000000, 0xac6e290d, submixId, outputSubmixId); 
}


/**
 * Loads a minimap overlay from a GFx file in the current resource.
 * 
 * If you need to control the depth of overlay use [`ADD_MINIMAP_OVERLAY_WITH_DEPTH`](#\_0xED0935B5).
 * @param name
 */
export function addMinimapOverlay(name: string): number { 
	return _in(0x00000000, 0x4afd2499, _ts(name), _r, _ri); 
}


/**
 * Loads a minimap overlay from a GFx file in the current resource.
 * @param name
 * @param depth
 */
export function addMinimapOverlayWithDepth(name: string, depth: number): number { 
	return _in(0x00000000, 0xed0935b5, _ts(name), depth, _r, _ri); 
}


/**
 * Experimental natives, please do not use in a live environment.
 * @param origTxd
 * @param origTxn
 * @param newTxd
 * @param newTxn
 */
export function addReplaceTexture(origTxd: string, origTxn: string, newTxd: string, newTxn: string): void { 
	return _in(0x00000000, 0xa66f8f75, _ts(origTxd), _ts(origTxn), _ts(newTxd), _ts(newTxn)); 
}


export function addTextEntry(entryKey: string, entryText: string): void { 
	return _in(0x00000000, 0x32ca01c3, _ts(entryKey), _ts(entryText)); 
}


export function addTextEntryByHash(entryKey: number, entryText: string): void { 
	return _in(0x00000000, 0x289da860, entryKey, _ts(entryText)); 
}


export function applyWeatherCycles(numEntries: number, msPerCycle: number): boolean { 
	return _in(0x00000000, 0x3422291c, numEntries, msPerCycle, _r); 
}


/**
 * Break off vehicle wheel by index. The `leaveDebrisTrail` flag requires `putOnFire` to be true.
 * @param vehicle
 * @param wheelIndex
 * @param leaveDebrisTrail
 * @param deleteWheel
 * @param unknownFlag
 * @param putOnFire
 */
export function breakOffVehicleWheel(vehicle: number, wheelIndex: number, leaveDebrisTrail: boolean, deleteWheel: boolean, unknownFlag: boolean, putOnFire: boolean): void { 
	return _in(0x00000000, 0xa274cadb, vehicle, wheelIndex, leaveDebrisTrail, deleteWheel, unknownFlag, putOnFire); 
}


/**
 * This is similar to the PushScaleformMovieFunction natives, except it calls in the `TIMELINE` of a minimap overlay.
 * @param miniMap
 * @param fnName
 */
export function callMinimapScaleformFunction(miniMap: number, fnName: string): boolean { 
	return _in(0x00000000, 0x4c89c0ed, miniMap, _ts(fnName), _r); 
}


/**
 * Resets the screen's draw-origin which was changed by the function [`SET_DRAW_ORIGIN`](#\_0xE10198D5) back to `x=0, y=0`. See [`SET_DRAW_ORIGIN`](#\_0xE10198D5) for further information.
 */
export function clearDrawOrigin(): void { 
	return _in(0x00000000, 0xdd76b263); 
}


/**
 * Removes vehicle xenon lights custom RGB color.
 * @param vehicle
 */
export function clearVehicleXenonLightsCustomColor(vehicle: number): void { 
	return _in(0x00000000, 0x2867ed8c, vehicle); 
}


export function cloneTimecycleModifier(sourceModifierName: string, clonedModifierName: string): number { 
	return _in(0x00000000, 0x54d636b3, _ts(sourceModifierName), _ts(clonedModifierName), _r, _ri); 
}


/**
 * Commits the backing pixels to the specified runtime texture.
 * @param tex
 */
export function commitRuntimeTexture(tex: any): void { 
	return _in(0x00000000, 0x19d81f4e, tex); 
}


/**
 * Creates an audio submix with the specified name, or gets the existing audio submix by that name.
 * @param name
 */
export function createAudioSubmix(name: string): number { 
	return _in(0x00000000, 0x658d2bc8, _ts(name), _r, _ri); 
}


/**
 * Creates a volume where water effects do not apply.
 * Useful for preventing water collisions from flooding areas underneath them.
 * This has no effect on waterquads, only water created from drawables and collisions.
 * Don't create volumes when your local ped is swimming (e.g. use IS_PED_SWIMMING in your scripts before you call this)
 * @param xMin
 * @param yMin
 * @param zMin
 * @param xMax
 * @param yMax
 * @param zMax
 */
export function createDryVolume(xMin: number, yMin: number, zMin: number, xMax: number, yMax: number, zMax: number): number { 
	return _in(0x00000000, 0x0eb1c6dd, _fv(xMin), _fv(yMin), _fv(zMin), _fv(xMax), _fv(yMax), _fv(zMax), _r, _ri); 
}


/**
 * Creates a DUI browser. This can be used to draw on a runtime texture using CREATE_RUNTIME_TEXTURE_FROM_DUI_HANDLE.
 * @param url
 * @param width
 * @param height
 */
export function createDui(url: string, width: number, height: number): any { 
	return _in(0x00000000, 0x23eaf899, _ts(url), width, height, _r, _rl); 
}


/**
 * Creates a blank runtime texture.
 * @param txd
 * @param txn
 * @param width
 * @param height
 */
export function createRuntimeTexture(txd: any, txn: string, width: number, height: number): any { 
	return _in(0x00000000, 0xfec3766d, txd, _ts(txn), width, height, _r, _rl); 
}


/**
 * Creates a runtime texture from a DUI handle.
 * @param txd
 * @param txn
 * @param duiHandle
 */
export function createRuntimeTextureFromDuiHandle(txd: any, txn: string, duiHandle: string): any { 
	return _in(0x00000000, 0xb135472b, txd, _ts(txn), _ts(duiHandle), _r, _rl); 
}


/**
 * Creates a runtime texture from the specified file in the current resource or a base64 data URL.
 * @param txd
 * @param txn
 * @param fileName
 */
export function createRuntimeTextureFromImage(txd: any, txn: string, fileName: string): any { 
	return _in(0x00000000, 0x786d8bc3, txd, _ts(txn), _ts(fileName), _r, _rl); 
}


/**
 * Creates a runtime texture dictionary with the specified name.
 * Example:
 * 
 * ```lua
 * local txd = CreateRuntimeTxd('meow')
 * ```
 * @param name
 */
export function createRuntimeTxd(name: string): any { 
	return _in(0x00000000, 0x1f3ac778, _ts(name), _r, _rl); 
}


/**
 * Create a clean timecycle modifier. See [`SET_TIMECYCLE_MODIFIER_VAR`](#\_0x6E0A422B) to add variables.
 * @param modifierName
 */
export function createTimecycleModifier(modifierName: string): number { 
	return _in(0x00000000, 0x70fa2afa, _ts(modifierName), _r, _ri); 
}


/**
 * Destroys a DUI browser.
 * @param duiObject
 */
export function destroyDui(duiObject: any): void { 
	return _in(0x00000000, 0xa085cb10, duiObject); 
}


/**
 * Disables the editor runtime mode, changing game behavior to not track entity metadata.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 */
export function disableEditorRuntime(): void { 
	return _in(0x00000000, 0xb1622b17); 
}


/**
 * Disables the game's afk camera that starts panning around after 30 seconds of inactivity.
 * @param state
 */
export function disableIdleCamera(state: boolean): void { 
	return _in(0x00000000, 0x3d5ab7f0, state); 
}


/**
 * Disables the game's afk camera that starts panning around after 30 seconds of inactivity(While riding in a car as a passenger)
 * @param state
 */
export function disableVehiclePassengerIdleCamera(state: boolean): void { 
	return _in(0x00000000, 0x5c140555, state); 
}


/**
 * Disables the game's world horizon lods rendering (see `farlods.#dd`).
 * Using the island hopper natives might also affect this state.
 * @param state
 */
export function disableWorldhorizonRendering(state: boolean): void { 
	return _in(0x00000000, 0xa9c92cdc, state); 
}


export function doesTimecycleModifierHasVar(modifierName: string, varName: string): boolean { 
	return _in(0x00000000, 0xc53bb6d3, _ts(modifierName), _ts(varName), _r); 
}


export function doesTrainStopAtStations(train: number): boolean { 
	return _in(0x00000000, 0x77cc80dc, train, _r); 
}


/**
 * Checks whether the vehicle consumes fuel. The check is done based on petrol tank volume and vehicle type. Bicycles and vehicles with petrol tank volume equal to zero (only bicycles by default) do not use fuel. All other vehicles do.
 * 
 * You can customize petrol tank volume using [`SET_HANDLING_FLOAT`](#\_0x90DD01C)/[`SET_VEHICLE_HANDLING_FLOAT`](#\_0x488C86D2) natives with `fieldName` equal to `fPetrolTankVolume`.
 * @param vehicle
 */
export function doesVehicleUseFuel(vehicle: number): boolean { 
	return _in(0x00000000, 0xef30a696, vehicle, _r); 
}


/**
 * Returns a list of door system entries: a door system hash (see [ADD_DOOR_TO_SYSTEM](#\_0x6F8838D03D1DC226)) and its object handle.
 * 
 * The data returned adheres to the following layout:
 * 
 * ```
 * [{doorHash1, doorHandle1}, ..., {doorHashN, doorHandleN}]
 * ```
 */
export function doorSystemGetActive(): any { 
	return _in(0x00000000, 0xf65bba4b, _r, _ro); 
}


export function doorSystemGetSize(): number { 
	return _in(0x00000000, 0x237613b3, _r, _ri); 
}


export function drawBox(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, red: number, green: number, blue: number, alpha: number): void { 
	return _in(0x00000000, 0xcd4d9dd5, _fv(x1), _fv(y1), _fv(z1), _fv(x2), _fv(y2), _fv(z2), red, green, blue, alpha); 
}


/**
 * Draws a gizmo. This function supports SDK infrastructure and is not intended to be used directly from your code.
 * 
 * This should be used from JavaScript or another language supporting mutable buffers like ArrayBuffer.
 * 
 * Matrix layout is as follows:
 * 
 * *   Element \[0], \[1] and \[2] should represent the right vector.
 * *   Element \[4], \[5] and \[6] should represent the forward vector.
 * *   Element \[8], \[9] and \[10] should represent the up vector.
 * *   Element \[12], \[13] and \[14] should represent X, Y and Z translation coordinates.
 * *   All other elements should be \[0, 0, 0, 1].
 * @param matrixPtr
 * @param id
 */
export function drawGizmo(matrixPtr: any, id: string): boolean { 
	return _in(0x00000000, 0xeb2edca2, matrixPtr, _ts(id), _r); 
}


/**
 * Draw a glow sphere this frame. Up to 256 per single frame.
 * @param posX
 * @param posY
 * @param posZ
 * @param radius
 * @param colorR
 * @param colorG
 * @param colorB
 * @param intensity
 * @param invert
 * @param marker
 */
export function drawGlowSphere(posX: number, posY: number, posZ: number, radius: number, colorR: number, colorG: number, colorB: number, intensity: number, invert: boolean, marker: boolean): void { 
	return _in(0x00000000, 0xbd25ec89, _fv(posX), _fv(posY), _fv(posZ), _fv(radius), colorR, colorG, colorB, _fv(intensity), invert, marker); 
}


export function drawLine(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, red: number, green: number, blue: number, alpha: number): void { 
	return _in(0x00000000, 0xb3426bcc, _fv(x1), _fv(y1), _fv(z1), _fv(x2), _fv(y2), _fv(z2), red, green, blue, alpha); 
}


/**
 * Like DRAW_RECT, but it's a line.
 * @param x1
 * @param y1
 * @param x2
 * @param y2
 * @param width
 * @param r
 * @param g
 * @param b
 * @param a
 */
export function drawLine2d(x1: number, y1: number, x2: number, y2: number, width: number, r: number, g: number, b: number, a: number): void { 
	return _in(0x00000000, 0x0b856a90, _fv(x1), _fv(y1), _fv(x2), _fv(y2), _fv(width), r, g, b, a); 
}


export function drawPoly(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number, red: number, green: number, blue: number, alpha: number): void { 
	return _in(0x00000000, 0xabd19253, _fv(x1), _fv(y1), _fv(z1), _fv(x2), _fv(y2), _fv(z2), _fv(x3), _fv(y3), _fv(z3), red, green, blue, alpha); 
}


/**
 * DRAW_RECT, but with a rotation. Seems to be broken.
 * @param x
 * @param y
 * @param width
 * @param height
 * @param rotation
 * @param r
 * @param g
 * @param b
 * @param a
 */
export function drawRectRotated(x: number, y: number, width: number, height: number, rotation: number, r: number, g: number, b: number, a: number): void { 
	return _in(0x00000000, 0xec37c168, _fv(x), _fv(y), _fv(width), _fv(height), _fv(rotation), r, g, b, a); 
}


/**
 * Enables the editor runtime mode, changing game behavior to track entity metadata.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 */
export function enableEditorRuntime(): void { 
	return _in(0x00000000, 0xc383871d); 
}


export function endFindObject(findHandle: number): void { 
	return _in(0x00000000, 0xdeda4e50, findHandle); 
}


export function endFindPed(findHandle: number): void { 
	return _in(0x00000000, 0x9615c2ad, findHandle); 
}


export function endFindPickup(findHandle: number): void { 
	return _in(0x00000000, 0x3c407d53, findHandle); 
}


export function endFindVehicle(findHandle: number): void { 
	return _in(0x00000000, 0x9227415a, findHandle); 
}


/**
 * Enters cursor mode, suppressing mouse movement to the game and displaying a mouse cursor instead. This function supports
 * SDK infrastructure and is not intended to be used directly from your code.
 */
export function enterCursorMode(): void { 
	return _in(0x00000000, 0x0780da86); 
}


/**
 * This native is not implemented.
 * @param data
 * @param objectId
 * @param tree
 */
export function experimentalLoadCloneCreate(data: string, objectId: number, tree: string): number { 
	return _in(0x00000000, 0xd2cb95a3, _ts(data), objectId, _ts(tree), _r, _ri); 
}


/**
 * This native is not implemented.
 * @param entity
 * @param data
 */
export function experimentalLoadCloneSync(entity: number, data: string): void { 
	return _in(0x00000000, 0x6bc189ac, entity, _ts(data)); 
}


/**
 * This native is not implemented.
 * @param entity
 */
export function experimentalSaveCloneCreate(entity: number): string { 
	return _in(0x00000000, 0x9d65cad2, entity, _r, _s); 
}


/**
 * This native is not implemented.
 * @param entity
 */
export function experimentalSaveCloneSync(entity: number): string { 
	return _in(0x00000000, 0x38d19210, entity, _r, _s); 
}


export function findFirstObject(outEntity: number): [number, number] { 
	const [retval, outEntity_out] = _in(0x00000000, 0xfaa6cb5d, _ii(outEntity), _r, _ri);
	return [retval as number, outEntity_out as number]; 
}


export function findFirstPed(outEntity: number): [number, number] { 
	const [retval, outEntity_out] = _in(0x00000000, 0xfb012961, _ii(outEntity), _r, _ri);
	return [retval as number, outEntity_out as number]; 
}


export function findFirstPickup(outEntity: number): [number, number] { 
	const [retval, outEntity_out] = _in(0x00000000, 0x3ff9d340, _ii(outEntity), _r, _ri);
	return [retval as number, outEntity_out as number]; 
}


export function findFirstVehicle(outEntity: number): [number, number] { 
	const [retval, outEntity_out] = _in(0x00000000, 0x15e55694, _ii(outEntity), _r, _ri);
	return [retval as number, outEntity_out as number]; 
}


export function findNextObject(findHandle: number, outEntity: number): [boolean, number] { 
	const [retval, outEntity_out] = _in(0x00000000, 0x4e129dbf, findHandle, _ii(outEntity), _r);
	return [retval as boolean, outEntity_out as number]; 
}


export function findNextPed(findHandle: number, outEntity: number): [boolean, number] { 
	const [retval, outEntity_out] = _in(0x00000000, 0xab09b548, findHandle, _ii(outEntity), _r);
	return [retval as boolean, outEntity_out as number]; 
}


export function findNextPickup(findHandle: number, outEntity: number): [boolean, number] { 
	const [retval, outEntity_out] = _in(0x00000000, 0x4107ef0f, findHandle, _ii(outEntity), _r);
	return [retval as boolean, outEntity_out as number]; 
}


export function findNextVehicle(findHandle: number, outEntity: number): [boolean, number] { 
	const [retval, outEntity_out] = _in(0x00000000, 0x8839120d, findHandle, _ii(outEntity), _r);
	return [retval as boolean, outEntity_out as number]; 
}


/**
 * Forces the game snow pass to render.
 * @param enabled
 */
export function forceSnowPass(enabled: boolean): void { 
	return _in(0x00000000, 0xe6e16170, enabled); 
}


/**
 * Returns all player indices for 'active' physical players known to the client.
 * The data returned adheres to the following layout:
 * 
 * ```
 * [127, 42, 13, 37]
 * ```
 */
export function getActivePlayers(): any { 
	return _in(0x00000000, 0xcf143fb9, _r, _ro); 
}


/**
 * Returns all rope handles. The data returned adheres to the following layout:
 * 
 * ```
 * [ 770, 1026, 1282, 1538, 1794, 2050, 2306, 2562, 2818, 3074, 3330, 3586, 3842, 4098, 4354, 4610, ...]
 * ```
 */
export function getAllRopes(): any { 
	return _in(0x00000000, 0x760a2d67, _r, _ro); 
}


/**
 * Returns all registered vehicle model names, including non-dlc vehicles and custom vehicles in no particular order.
 * 
 * **Example output**
 * 
 * ```
 * ["dubsta", "dubsta2", "dubsta3", "myverycoolcar", "sultan", "sultanrs", ...]
 * ```
 * 
 * This native will not return vehicles that are unregistered (i.e from a resource being stopped) during runtime.
 */
export function getAllVehicleModels(): any { 
	return _in(0x00000000, 0xd7531645, _r, _ro); 
}


/**
 * A getter for [SET_AMBIENT_PED_RANGE_MULTIPLIER_THIS_FRAME](#\_0x0B919E1FB47CC4E0).
 */
export function getAmbientPedRangeMultiplier(): number { 
	return _in(0x00000000, 0xb550232d, _r, _rf); 
}


/**
 * A getter for [SET_AMBIENT_VEHICLE_RANGE_MULTIPLIER_THIS_FRAME](#\_0x90B6DA738A9A25DA).
 */
export function getAmbientVehicleRangeMultiplier(): number { 
	return _in(0x00000000, 0x667ec929, _r, _rf); 
}


/**
 * This native returns the index of a calming quad if the given point is inside its bounds.
 * @param x
 * @param y
 */
export function getCalmingQuadAtCoords(x: number, y: number): number { 
	return _in(0x00000000, 0x870e8b40, _fv(x), _fv(y), _r, _ri); 
}


export function getCalmingQuadBounds(waterQuad: number): [boolean, number, number, number, number] { 
	const [retval, minX_out, minY_out, maxX_out, maxY_out] = _in(0x00000000, 0x0ff60e63, waterQuad, _i, _i, _i, _i, _r);
	return [retval as boolean, minX_out as number, minY_out as number, maxX_out as number, maxY_out as number]; 
}


export function getCalmingQuadCount(): number { 
	return _in(0x00000000, 0x0cebfc42, _r, _ri); 
}


export function getCalmingQuadDampening(waterQuad: number, calmingQuadDampening: number): [boolean, number] { 
	const [retval, calmingQuadDampening_out] = _in(0x00000000, 0xb0e3a058, waterQuad, _fi(calmingQuadDampening), _r);
	return [retval as boolean, calmingQuadDampening_out as number]; 
}


/**
 * Returns the world matrix of the specified camera. To turn this into a view matrix, calculate the inverse.
 * @param camera
 * @param rightVector
 * @param forwardVector
 * @param upVector
 * @param position
 */
export function getCamMatrix(camera: number): [Vector3, Vector3, Vector3, Vector3] { 
	const [rightVector_out, forwardVector_out, upVector_out, position_out] = _in(0x00000000, 0x8f57a89d, camera, _v, _v, _v, _v);
	return [_mv(rightVector_out), _mv(forwardVector_out), _mv(upVector_out), _mv(position_out)]; 
}


/**
 * This native returns the currently used game's name.
 */
export function getCurrentGameName(): string { 
	return _in(0x00000000, 0xaca18ecd, _r, _s); 
}


/**
 * Returns the peer address of the remote game server that the user is currently connected to.
 */
export function getCurrentServerEndpoint(): string { 
	return _in(0x00000000, 0xea11bfba, _r, _s); 
}


/**
 * Returns the NUI window handle for a specified DUI browser object.
 * @param duiObject
 */
export function getDuiHandle(duiObject: any): string { 
	return _in(0x00000000, 0x1655d41d, duiObject, _r, _s); 
}


/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * 
 * Returns the memory address of an entity.
 * 
 * This native is intended for singleplayer debugging, and may not be available during multiplayer.
 * @param entity
 */
export function getEntityAddress(entity: number): any { 
	return _in(0x00000000, 0x9a3144bc, entity, _r, _ri); 
}


/**
 * Returns entity's archetype name, if available.
 * @param entity
 */
export function getEntityArchetypeName(entity: number): string { 
	return _in(0x00000000, 0x47b870f5, entity, _r, _s); 
}


/**
 * Returns the transient entity index for a specified mapdata/entity pair.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 * @param mapdata
 * @param entity
 */
export function getEntityIndexFromMapdata(mapdata: number, entity: number): number { 
	return _in(0x00000000, 0xee43540d, mapdata, entity, _r, _ri); 
}


/**
 * Retrieves the map data and entity handles from a specific entity.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 * @param entity
 * @param mapdataHandle
 * @param entityHandle
 */
export function getEntityMapdataOwner(entity: number): [boolean, number, number] { 
	const [retval, mapdataHandle_out, entityHandle_out] = _in(0x00000000, 0xf6b815c5, entity, _i, _i, _r);
	return [retval as boolean, mapdataHandle_out as number, entityHandle_out as number]; 
}


/**
 * A getter for [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938), but for a specified resource.
 * @param resource
 * @param key
 */
export function getExternalKvpFloat(resource: string, key: string): number { 
	return _in(0x00000000, 0x3cc98b25, _ts(resource), _ts(key), _r, _rf); 
}


/**
 * A getter for [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8), but for a specified resource.
 * @param resource
 * @param key
 */
export function getExternalKvpInt(resource: string, key: string): number { 
	return _in(0x00000000, 0x12b8d689, _ts(resource), _ts(key), _r, _ri); 
}


/**
 * A getter for [SET_RESOURCE_KVP](#\_0x21C7A35B), but for a specified resource.
 * @param resource
 * @param key
 */
export function getExternalKvpString(resource: string, key: string): string { 
	return _in(0x00000000, 0x9080363a, _ts(resource), _ts(key), _r, _s); 
}


export function getFuelConsumptionRateMultiplier(): number { 
	return _in(0x00000000, 0x5550bf9f, _r, _rf); 
}


export function getFuelConsumptionState(): boolean { 
	return _in(0x00000000, 0xc66cd90c, _r); 
}


/**
 * A getter for [SET_GLOBAL_PASSENGER_MASS_MULTIPLIER](#\_0x1c47f6ac).
 */
export function getGlobalPassengerMassMultiplier(): number { 
	return _in(0x00000000, 0x78951816, _r, _rf); 
}


/**
 * See [SET_SCRIPT_GFX_ALIGN](#\_0xB8A850F20A067EB6) for details about how gfx align works.
 * @param id
 * @param horizontalAlign
 * @param verticalAlign
 */
export function getHudComponentAlign(id: number): [number, number] { 
	const [horizontalAlign_out, verticalAlign_out] = _in(0x00000000, 0xcd949e20, id, _i, _i);
	return [horizontalAlign_out as number, verticalAlign_out as number]; 
}


export function getHudComponentName(id: number): string { 
	return _in(0x00000000, 0xa91866bc, id, _r, _s); 
}


export function getHudComponentSize(id: number): Vector3 { 
	return _mv(_in(0x00000000, 0x12217d33, id, _r, _rv)); 
}


export function getInteriorEntitiesExtents(interiorId: number): [number, number, number, number, number, number] { 
	const [bbMinX_out, bbMinY_out, bbMinZ_out, bbMaxX_out, bbMaxY_out, bbMaxZ_out] = _in(0x00000000, 0x322b1192, interiorId, _f, _f, _f, _f, _f, _f);
	return [bbMinX_out as number, bbMinY_out as number, bbMinZ_out as number, bbMaxX_out as number, bbMaxY_out as number, bbMaxZ_out as number]; 
}


export function getInteriorPortalCornerPosition(interiorId: number, portalIndex: number, cornerIndex: number): [number, number, number] { 
	const [posX_out, posY_out, posZ_out] = _in(0x00000000, 0xf772bb2c, interiorId, portalIndex, cornerIndex, _f, _f, _f);
	return [posX_out as number, posY_out as number, posZ_out as number]; 
}


export function getInteriorPortalCount(interiorId: number): number { 
	return _in(0x00000000, 0xd05bb8b1, interiorId, _r, _ri); 
}


export function getInteriorPortalEntityArchetype(interiorId: number, portalIndex: number, entityIndex: number): number { 
	return _in(0x00000000, 0x9a0e1700, interiorId, portalIndex, entityIndex, _r, _ri); 
}


export function getInteriorPortalEntityCount(interiorId: number, portalIndex: number): number { 
	return _in(0x00000000, 0x0c68021b, interiorId, portalIndex, _r, _ri); 
}


export function getInteriorPortalEntityFlag(interiorId: number, portalIndex: number, entityIndex: number): number { 
	return _in(0x00000000, 0x9da2e811, interiorId, portalIndex, entityIndex, _r, _ri); 
}


export function getInteriorPortalEntityPosition(interiorId: number, portalIndex: number, entityIndex: number): [number, number, number] { 
	const [posX_out, posY_out, posZ_out] = _in(0x00000000, 0x9b7ab83c, interiorId, portalIndex, entityIndex, _f, _f, _f);
	return [posX_out as number, posY_out as number, posZ_out as number]; 
}


export function getInteriorPortalEntityRotation(interiorId: number, portalIndex: number, entityIndex: number): [number, number, number, number] { 
	const [rotX_out, rotY_out, rotZ_out, rotW_out] = _in(0x00000000, 0x9f9ceb63, interiorId, portalIndex, entityIndex, _f, _f, _f, _f);
	return [rotX_out as number, rotY_out as number, rotZ_out as number, rotW_out as number]; 
}


export function getInteriorPortalFlag(interiorId: number, portalIndex: number): number { 
	return _in(0x00000000, 0xc74da47c, interiorId, portalIndex, _r, _ri); 
}


export function getInteriorPortalRoomFrom(interiorId: number, portalIndex: number): number { 
	return _in(0x00000000, 0xaa9c141d, interiorId, portalIndex, _r, _ri); 
}


export function getInteriorPortalRoomTo(interiorId: number, portalIndex: number): number { 
	return _in(0x00000000, 0x3f47f0e8, interiorId, portalIndex, _r, _ri); 
}


export function getInteriorPosition(interiorId: number): [number, number, number] { 
	const [posX_out, posY_out, posZ_out] = _in(0x00000000, 0x77a435b0, interiorId, _f, _f, _f);
	return [posX_out as number, posY_out as number, posZ_out as number]; 
}


export function getInteriorRoomCount(interiorId: number): number { 
	return _in(0x00000000, 0xa2737c2c, interiorId, _r, _ri); 
}


export function getInteriorRoomExtents(interiorId: number, roomIndex: number): [number, number, number, number, number, number] { 
	const [bbMinX_out, bbMinY_out, bbMinZ_out, bbMaxX_out, bbMaxY_out, bbMaxZ_out] = _in(0x00000000, 0xf9e795dd, interiorId, roomIndex, _f, _f, _f, _f, _f, _f);
	return [bbMinX_out as number, bbMinY_out as number, bbMinZ_out as number, bbMaxX_out as number, bbMaxY_out as number, bbMaxZ_out as number]; 
}


export function getInteriorRoomFlag(interiorId: number, roomIndex: number): number { 
	return _in(0x00000000, 0x6b7af743, interiorId, roomIndex, _r, _ri); 
}


export function getInteriorRoomIndexByHash(interiorId: number, roomHash: number): number { 
	return _in(0x00000000, 0xe0ee05f8, interiorId, roomHash, _r, _ri); 
}


export function getInteriorRoomName(interiorId: number, roomIndex: number): string { 
	return _in(0x00000000, 0x11755df2, interiorId, roomIndex, _r, _s); 
}


export function getInteriorRoomTimecycle(interiorId: number, roomIndex: number): number { 
	return _in(0x00000000, 0x82ba3f88, interiorId, roomIndex, _r, _ri); 
}


export function getInteriorRotation(interiorId: number): [number, number, number, number] { 
	const [rotx_out, rotY_out, rotZ_out, rotW_out] = _in(0x00000000, 0x5a039998, interiorId, _f, _f, _f, _f);
	return [rotx_out as number, rotY_out as number, rotZ_out as number, rotW_out as number]; 
}


/**
 * Returns the zoom level data by index from mapzoomdata.meta file.
 * @param index
 * @param zoomScale
 * @param zoomSpeed
 * @param scrollSpeed
 * @param tilesX
 * @param tilesY
 */
export function getMapZoomDataLevel(index: number): [boolean, number, number, number, number, number] { 
	const [retval, zoomScale_out, zoomSpeed_out, scrollSpeed_out, tilesX_out, tilesY_out] = _in(0x00000000, 0x1363a998, index, _f, _f, _f, _f, _f, _r);
	return [retval as boolean, zoomScale_out as number, zoomSpeed_out as number, scrollSpeed_out as number, tilesX_out as number, tilesY_out as number]; 
}


/**
 * Retrieves the map data entity handle.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 * @param mapDataHash
 * @param entityInternalIdx
 * @param entityHandle
 */
export function getMapdataEntityHandle(mapDataHash: number, entityInternalIdx: number, entityHandle: number): [boolean, number] { 
	const [retval, entityHandle_out] = _in(0x00000000, 0x30aa6911, mapDataHash, entityInternalIdx, _ii(entityHandle), _r);
	return [retval as boolean, entityHandle_out as number]; 
}


/**
 * Returns mapdata's entity matrix. This function supports SDK infrastructure and is not intended to be used directly from your code.
 * 
 * This should be used from JavaScript or another language supporting mutable buffers like ArrayBuffer.
 * 
 * Matrix layout is as follows:
 * 
 * *   Element \[0], \[1] and \[2] should represent the right vector.
 * *   Element \[4], \[5] and \[6] should represent the forward vector.
 * *   Element \[8], \[9] and \[10] should represent the up vector.
 * *   Element \[12], \[13] and \[14] should represent X, Y and Z translation coordinates.
 * *   All other elements should be \[0, 0, 0, 1].
 * @param mapDataHash
 * @param entityInternalIdx
 * @param matrixPtr
 */
export function getMapdataEntityMatrix(mapDataHash: number, entityInternalIdx: number, matrixPtr: any): boolean { 
	return _in(0x00000000, 0x2c3cda93, mapDataHash, entityInternalIdx, matrixPtr, _r); 
}


/**
 * Returns the transient map data index for a specified hash.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 * @param mapdataHandle
 */
export function getMapdataFromHashKey(mapdataHandle: number): number { 
	return _in(0x00000000, 0xd29d8edd, mapdataHandle, _r, _ri); 
}


export function getNetworkWalkMode(): boolean { 
	return _in(0x00000000, 0x2cafd5e9, _r); 
}


export function getNuiCursorPosition(): [number, number] { 
	const [x_out, y_out] = _in(0x00000000, 0xbdba226f, _i, _i);
	return [x_out as number, y_out as number]; 
}


/**
 * An analogue of [GET_NUMBER_OF_PED_DRAWABLE_VARIATIONS](#\_0x27561561732A7842) that returns number of drawable variations inside a single collection instead of the total number across all collections.
 * @param ped
 * @param componentId
 * @param collection
 */
export function getNumberOfPedCollectionDrawableVariations(ped: number, componentId: number, collection: string): number { 
	return _in(0x00000000, 0x310d0271, ped, componentId, _ts(collection), _r, _ri); 
}


/**
 * An analogue of [GET_NUMBER_OF_PED_PROP_DRAWABLE_VARIATIONS](#\_0x5FAF9754E789FB47) that returns number of prop variations inside a single collection instead of the total number across all collections.
 * @param ped
 * @param anchorPoint
 * @param collection
 */
export function getNumberOfPedCollectionPropDrawableVariations(ped: number, anchorPoint: number, collection: string): number { 
	return _in(0x00000000, 0x3b6a13e1, ped, anchorPoint, _ts(collection), _r, _ri); 
}


/**
 * An alternative to [GET_NUMBER_OF_PED_PROP_TEXTURE_VARIATIONS](#\_0xA6E7F1CEB523E171) that uses local collection indexing instead of the global one.
 * @param ped
 * @param anchorPoint
 * @param collection
 * @param propIndex
 */
export function getNumberOfPedCollectionPropTextureVariations(ped: number, anchorPoint: number, collection: string, propIndex: number): number { 
	return _in(0x00000000, 0x75caf9cc, ped, anchorPoint, _ts(collection), propIndex, _r, _ri); 
}


/**
 * An alternative to [GET_NUMBER_OF_PED_TEXTURE_VARIATIONS](#\_0x8F7156A3142A6BAD) that uses local collection indexing instead of the global one.
 * @param ped
 * @param componentId
 * @param collection
 * @param drawableId
 */
export function getNumberOfPedCollectionTextureVariations(ped: number, componentId: number, collection: string, drawableId: number): number { 
	return _in(0x00000000, 0x0d2c15d7, ped, componentId, _ts(collection), drawableId, _r, _ri); 
}


/**
 * A getter for [SET_PARKED_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME](#\_0xEAE6DCC7EEE3DB1D).
 */
export function getParkedVehicleDensityMultiplier(): number { 
	return _in(0x00000000, 0xff72df84, _r, _rf); 
}


/**
 * Returns the world position the pointer is hovering on the pause map.
 */
export function getPauseMapPointerWorldPosition(): Vector3 { 
	return _mv(_in(0x00000000, 0xe5af7a82, _r, _rv)); 
}


/**
 * Gets local index inside a collection (which can be obtained using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B)) for the given global drawable ID. The collection name and index are used in functions like [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA).
 * @param ped
 * @param componentId
 * @param drawableId
 */
export function getPedCollectionLocalIndexFromDrawable(ped: number, componentId: number, drawableId: number): number { 
	return _in(0x00000000, 0x94eb1fe4, ped, componentId, drawableId, _r, _ri); 
}


/**
 * Gets local index inside a collection (which can be obtained using [GET_PED_COLLECTION_NAME_FROM_PROP](#\_0x8ED0C17)) for the given global prop index. The collection name and index are used in functions like [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB).
 * @param ped
 * @param anchorPoint
 * @param propIndex
 */
export function getPedCollectionLocalIndexFromProp(ped: number, anchorPoint: number, propIndex: number): number { 
	return _in(0x00000000, 0xfbdb885f, ped, anchorPoint, propIndex, _r, _ri); 
}


/**
 * Returns name of collection under given index for the given Ped.
 * 
 * Collections are groups of drawable components or props available for the given Ped. Usually collection corresponds to a certain DLC or the base game. See [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA), [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB), [GET_NUMBER_OF_PED_COLLECTION_DRAWABLE_VARIATIONS](#\_0x310D0271) etc natives for more details on how to work with collections.
 * 
 * `GET_PED_COLLECTION_NAME` can be used together with [GET_PED_COLLECTIONS_COUNT](#\_0x45946359) to list all collections attached to Ped.
 * @param ped
 * @param index
 */
export function getPedCollectionName(ped: number, index: number): string { 
	return _in(0x00000000, 0xfed5d83a, ped, index, _r, _s); 
}


/**
 * Gets collection name for the given global drawable ID. Together with [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) is used to get collection and local index (inside the given collection) of the drawable. The collection name and index are used in functions like [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA).
 * @param ped
 * @param componentId
 * @param drawableId
 */
export function getPedCollectionNameFromDrawable(ped: number, componentId: number, drawableId: number): string { 
	return _in(0x00000000, 0xd6bba48b, ped, componentId, drawableId, _r, _s); 
}


/**
 * Gets collection name for the given global prop index. Together with [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#\_0xFBDB885F) is used to get collection and local index (inside the given collection) of the prop. The collection name and index are used in functions like [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB).
 * @param ped
 * @param anchorPoint
 * @param propIndex
 */
export function getPedCollectionNameFromProp(ped: number, anchorPoint: number, propIndex: number): string { 
	return _in(0x00000000, 0x08ed0c17, ped, anchorPoint, propIndex, _r, _s); 
}


/**
 * Returns number of variation collections available for the given Ped.
 * 
 * Collections are groups of drawable components or props available for the given Ped. Usually collection corresponds to a certain DLC or the base game. See [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA), [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB), [GET_NUMBER_OF_PED_COLLECTION_DRAWABLE_VARIATIONS](#\_0x310D0271) etc natives for more details on how to work with collections.
 * 
 * `GET_PED_COLLECTIONS_COUNT` can be used together with [GET_PED_COLLECTION_NAME](#\_0xFED5D83A) to list all collections attached to Ped.
 * @param ped
 */
export function getPedCollectionsCount(ped: number): number { 
	return _in(0x00000000, 0x45946359, ped, _r, _ri); 
}


/**
 * Returns a list of decorations applied to a ped.
 * 
 * The data returned adheres to the following layout:
 * 
 * ```
 * [ [ collectionHash1, overlayHash1 ], ..., [c ollectionHashN, overlayHashN ] ]
 * ```
 * 
 * This command will return undefined data if invoked on a remote player ped.
 * @param ped
 */
export function getPedDecorations(ped: number): any { 
	return _in(0x00000000, 0x7cce1163, ped, _r, _ro); 
}


/**
 * A getter for [SET_PED_DENSITY_MULTIPLIER_THIS_FRAME](#\_0x95E3D6257B166CF2).
 */
export function getPedDensityMultiplier(): number { 
	return _in(0x00000000, 0xf5a904f9, _r, _rf); 
}


/**
 * Returns global drawable index based on the local one. Is it a reverse to [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
 * 
 * Drawables are stored inside collections. Each collection usually corresponds to a certain DCL or the base game.
 * 
 * If all drawables from all collections are placed into one continuous array - the global index will correspond to the index of drawable in such array. Local index is index of drawable in this array relative to the start of the given collection.
 * @param ped
 * @param componentId
 * @param collection
 * @param drawableId
 */
export function getPedDrawableGlobalIndexFromCollection(ped: number, componentId: number, collection: string, drawableId: number): number { 
	return _in(0x00000000, 0x280f1fc3, ped, componentId, _ts(collection), drawableId, _r, _ri); 
}


/**
 * An analogue to [GET_PED_DRAWABLE_VARIATION](#\_0x67F3780DD425D4FC) that returns collection local drawable index (inside [GET_PED_DRAWABLE_VARIATION_COLLECTION_NAME](#\_0xBCE0AB63) collection) instead of the global drawable index.
 * @param ped
 * @param componentId
 */
export function getPedDrawableVariationCollectionLocalIndex(ped: number, componentId: number): number { 
	return _in(0x00000000, 0x9970386f, ped, componentId, _r, _ri); 
}


/**
 * An analogue to [GET_PED_DRAWABLE_VARIATION](#\_0x67F3780DD425D4FC) that returns collection name instead of the global drawable index.
 * 
 * Should be used together with [GET_PED_DRAWABLE_VARIATION_COLLECTION_LOCAL_INDEX](#\_0x9970386F).
 * @param ped
 * @param componentId
 */
export function getPedDrawableVariationCollectionName(ped: number, componentId: number): string { 
	return _in(0x00000000, 0xbce0ab63, ped, componentId, _r, _s); 
}


/**
 * A getter for [\_SET_PED_EYE_COLOR](#\_0x50B56988B170AFDF). Returns -1 if fails to get.
 * @param ped
 */
export function getPedEyeColor(ped: number): number { 
	return _in(0x00000000, 0xa47b860f, ped, _r, _ri); 
}


/**
 * A getter for [\_SET_PED_FACE_FEATURE](#\_0x71A5C1DBA060049E). Returns 0.0 if fails to get.
 * @param ped
 * @param index
 */
export function getPedFaceFeature(ped: number, index: number): number { 
	return _in(0x00000000, 0xba352add, ped, index, _r, _rf); 
}


/**
 * A getter for [\_SET_PED_HAIR_COLOR](#\_0x4CFFC65454C93A49). Returns -1 if fails to get.
 * @param ped
 */
export function getPedHairColor(ped: number): number { 
	return _in(0x00000000, 0xa3ea2893, ped, _r, _ri); 
}


/**
 * A getter for [\_SET_PED_HAIR_COLOR](#\_0x4CFFC65454C93A49). Returns -1 if fails to get.
 * @param ped
 */
export function getPedHairHighlightColor(ped: number): number { 
	return _in(0x00000000, 0x4b087305, ped, _r, _ri); 
}


/**
 * A getter for [SET_PED_HEAD_OVERLAY](#\_0x48F44967FA05CC1E) and [\_SET_PED_HEAD_OVERLAY_COLOR](#\_0x497BF74A7B9CB952) natives.
 * @param ped
 * @param index
 * @param overlayValue
 * @param colourType
 * @param firstColour
 * @param secondColour
 * @param overlayOpacity
 */
export function getPedHeadOverlayData(ped: number, index: number): [boolean, number, number, number, number, number] { 
	const [retval, overlayValue_out, colourType_out, firstColour_out, secondColour_out, overlayOpacity_out] = _in(0x00000000, 0xc46ee605, ped, index, _i, _i, _i, _i, _f, _r);
	return [retval as boolean, overlayValue_out as number, colourType_out as number, firstColour_out as number, secondColour_out as number, overlayOpacity_out as number]; 
}


/**
 * Gets a ped model's personality type.
 * @param modelHash
 */
export function getPedModelPersonality(modelHash: number): number { 
	return _in(0x00000000, 0xfe08cad6, modelHash, _r, _ri); 
}


export function getPedMovementClipset(ped: number): number { 
	return _in(0x00000000, 0x69e81e3d, ped, _r, _ri); 
}


/**
 * An analogue to [GET_PED_PROP_INDEX](#\_0x898CC20EA75BACD8) that returns collection local prop index (inside [GET_PED_PROP_COLLECTION_NAME](#\_0x6B5653E4) collection) instead of the global prop index.
 * @param ped
 * @param anchorPoint
 */
export function getPedPropCollectionLocalIndex(ped: number, anchorPoint: number): number { 
	return _in(0x00000000, 0xcd420ad1, ped, anchorPoint, _r, _ri); 
}


/**
 * An analogue to [GET_PED_PROP_INDEX](#\_0x898CC20EA75BACD8) that returns collection name instead of the global drawable index.
 * 
 * Should be used together with [GET_PED_PROP_COLLECTION_LOCAL_INDEX](#\_0xCD420AD1).
 * @param ped
 * @param anchorPoint
 */
export function getPedPropCollectionName(ped: number, anchorPoint: number): string { 
	return _in(0x00000000, 0x6b5653e4, ped, anchorPoint, _r, _s); 
}


/**
 * Returns global prop index based on the local one. Is it a reverse to [GET_PED_COLLECTION_NAME_FROM_PROP](#\_0x8ED0C17) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#\_0xFBDB885F) natives.
 * 
 * Props are stored inside collections. Each collection usually corresponds to a certain DCL or the base game.
 * 
 * If all props from all collections are placed into one continuous array - the global index will correspond to the index of the prop in such array. Local index is index of the prop in this array relative to the start of the given collection.
 * @param ped
 * @param anchorPoint
 * @param collection
 * @param propIndex
 */
export function getPedPropGlobalIndexFromCollection(ped: number, anchorPoint: number, collection: string, propIndex: number): number { 
	return _in(0x00000000, 0x2cb45cdc, ped, anchorPoint, _ts(collection), propIndex, _r, _ri); 
}


/**
 * A getter for [SET_PED_SWEAT](#\_0x27B0405F59637D1F).
 * @param ped
 */
export function getPedSweat(ped: number): number { 
	return _in(0x00000000, 0x44b91e94, ped, _r, _rf); 
}


/**
 * Gets a local client's Player ID from its server ID counterpart, assuming the passed `serverId` exists on the client.
 * 
 * If no matching client is found, or an invalid value is passed over as the `serverId` native's parameter, the native result will be `-1`.
 * 
 * It's worth noting that this native method can only retrieve information about clients that are culled to the connected client.
 * @param serverId
 */
export function getPlayerFromServerId(serverId: number): number { 
	return _in(0x00000000, 0x344ea166, serverId, _r, _ri); 
}


/**
 * Unlike [GET_PLAYER_INVINCIBLE](#\_0xB721981B2B939E07) this native gets both [SET_PLAYER_INVINCIBLE_KEEP_RAGDOLL_ENABLED](#\_0x6BC97F4F4BB3C04B) and [SET_PLAYER_INVINCIBLE](#\_0x239528EACDC3E7DE) invincibility state.
 * @param player
 */
export function getPlayerInvincible2(player: number): boolean { 
	return _in(0x00000000, 0xf2e3912b, player, _r); 
}


export function getPlayerMaxStamina(playerId: number): number { 
	return _in(0x00000000, 0xd014ab79, playerId, _r, _rf); 
}


/**
 * A getter for [SET_PLAYER_MELEE_WEAPON_DEFENSE_MODIFIER](#\_0xAE540335B4ABC4E2).
 * @param playerId
 */
export function getPlayerMeleeWeaponDefenseModifier(playerId: number): number { 
	return _in(0x00000000, 0x27e94ef8, playerId, _r, _rf); 
}


export function getPlayerServerId(player: number): number { 
	return _in(0x00000000, 0x4d97bcc7, player, _r, _ri); 
}


export function getPlayerStamina(playerId: number): number { 
	return _in(0x00000000, 0xe415ec5c, playerId, _r, _rf); 
}


/**
 * A getter for [SET_PLAYER_VEHICLE_DAMAGE_MODIFIER](#\_0xA50E117CDDF82F0C).
 * @param playerId
 */
export function getPlayerVehicleDamageModifier(playerId: number): number { 
	return _in(0x00000000, 0x78f27b1f, playerId, _r, _rf); 
}


/**
 * A getter for [SET_PLAYER_VEHICLE_DEFENSE_MODIFIER](#\_0x4C60E6EFDAFF2462).
 * @param playerId
 */
export function getPlayerVehicleDefenseModifier(playerId: number): number { 
	return _in(0x00000000, 0x8326e7cd, playerId, _r, _rf); 
}


/**
 * A getter for [SET_RANDOM_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME](#\_0xB3B3359379FE77D3).
 * Same as vehicle density multiplier.
 */
export function getRandomVehicleDensityMultiplier(): number { 
	return _in(0x00000000, 0x7b0d00c5, _r, _rf); 
}


/**
 * ```cpp
 * enum eRopeFlags
 * {
 * DrawShadowEnabled = 2,
 * Breakable = 4,
 * RopeUnwindingFront = 8,
 * RopeWinding = 32
 * }
 * ```
 * @param rope
 */
export function getRopeFlags(rope: number): number { 
	return _in(0x00000000, 0xa80ffe99, rope, _r, _ri); 
}


export function getRopeLengthChangeRate(rope: number): number { 
	return _in(0x00000000, 0x66d70ea3, rope, _r, _rf); 
}


export function getRopeTimeMultiplier(rope: number): number { 
	return _in(0x00000000, 0xf341e6ca, rope, _r, _rf); 
}


export function getRopeUpdateOrder(rope: number): number { 
	return _in(0x00000000, 0x2ab2e0f6, rope, _r, _ri); 
}


/**
 * Gets the height of the specified runtime texture.
 * @param tex
 */
export function getRuntimeTextureHeight(tex: any): number { 
	return _in(0x00000000, 0x3574aace, tex, _r, _ri); 
}


/**
 * Gets the row pitch of the specified runtime texture, for use when creating data for `SET_RUNTIME_TEXTURE_ARGB_DATA`.
 * @param tex
 */
export function getRuntimeTexturePitch(tex: any): number { 
	return _in(0x00000000, 0xca0a085f, tex, _r, _ri); 
}


/**
 * Gets the width of the specified runtime texture.
 * @param tex
 */
export function getRuntimeTextureWidth(tex: any): number { 
	return _in(0x00000000, 0xc9f55558, tex, _r, _ri); 
}


/**
 * A getter for [SET_SCENARIO_PED_DENSITY_MULTIPLIER_THIS_FRAME](#\_0x7A556143A1C03898).
 */
export function getScenarioPedDensityMultiplier(): number { 
	return _in(0x00000000, 0x77c598b2, _r, _rf); 
}


/**
 * Returns the result of a shape test, also returning the material of any touched surface.
 * 
 * When used with an asynchronous shape test, this native should be looped until returning 0 or 2, after which the handle is invalidated.
 * 
 * Unless the return value is 2, the other return values are undefined.
 * @param shapeTestHandle
 * @param hit
 * @param endCoords
 * @param surfaceNormal
 * @param materialHash
 * @param entityHit
 */
export function getShapeTestResultIncludingMaterial(shapeTestHandle: number): [number, boolean, Vector3, Vector3, any, number] { 
	const [retval, hit_out, endCoords_out, surfaceNormal_out, materialHash_out, entityHit_out] = _in(0x00000000, 0x4301e10c, shapeTestHandle, _i, _v, _v, _i, _i, _r, _ri);
	return [retval as number, hit_out as boolean, _mv(endCoords_out), _mv(surfaceNormal_out), materialHash_out as any, entityHit_out as number]; 
}


export function getTimecycleModifierCount(): number { 
	return _in(0x00000000, 0xfe2a1d4d, _r, _ri); 
}


export function getTimecycleModifierIndexByName(modifierName: string): number { 
	return _in(0x00000000, 0x5f4cd0e2, _ts(modifierName), _r, _ri); 
}


export function getTimecycleModifierNameByIndex(modifierIndex: number): string { 
	return _in(0x00000000, 0x28cb8608, modifierIndex, _r, _s); 
}


/**
 * A getter for [SET_TIMECYCLE_MODIFIER_STRENGTH](#\_0x82E7FFCD5B2326B3).
 */
export function getTimecycleModifierStrength(): number { 
	return _in(0x00000000, 0xbe54124a, _r, _rf); 
}


export function getTimecycleModifierVar(modifierName: string, varName: string): [boolean, number, number] { 
	const [retval, value1_out, value2_out] = _in(0x00000000, 0xa7109e12, _ts(modifierName), _ts(varName), _f, _f, _r);
	return [retval as boolean, value1_out as number, value2_out as number]; 
}


export function getTimecycleModifierVarCount(modifierName: string): number { 
	return _in(0x00000000, 0x60fb60fe, _ts(modifierName), _r, _ri); 
}


export function getTimecycleModifierVarNameByIndex(modifierName: string, modifierVarIndex: number): string { 
	return _in(0x00000000, 0xe874ab1d, _ts(modifierName), modifierVarIndex, _r, _s); 
}


/**
 * Returns the amount of variables available to be applied on timecycle modifiers.
 */
export function getTimecycleVarCount(): number { 
	return _in(0x00000000, 0x838b34d8, _r, _ri); 
}


/**
 * See [GET_TIMECYCLE_VAR_COUNT](#\_0x838B34D8).
 * @param varIndex
 */
export function getTimecycleVarDefaultValueByIndex(varIndex: number): number { 
	return _in(0x00000000, 0x03b90238, varIndex, _r, _rf); 
}


/**
 * See [GET_TIMECYCLE_VAR_COUNT](#\_0x838B34D8).
 * @param varIndex
 */
export function getTimecycleVarNameByIndex(varIndex: number): string { 
	return _in(0x00000000, 0xc6c55aaf, varIndex, _r, _s); 
}


export function getTrackBrakingDistance(track: number): number { 
	return _in(0x00000000, 0xbf482a5e, track, _r, _rf); 
}


export function getTrackMaxSpeed(track: number): number { 
	return _in(0x00000000, 0x34ee2bf3, track, _r, _rf); 
}


/**
 * Gets the trains desired speed.
 * @param train
 */
export function getTrainCruiseSpeed(train: number): number { 
	return _in(0x00000000, 0xa4921ef5, train, _r, _rf); 
}


export function getTrainCurrentTrackNode(train: number): number { 
	return _in(0x00000000, 0xe015e854, train, _r, _ri); 
}


/**
 * Gets the direction the train is facing
 * @param train
 */
export function getTrainDirection(train: number): boolean { 
	return _in(0x00000000, 0x8daf79b6, train, _r); 
}


/**
 * Gets the door count for the specified train.
 * @param train
 */
export function getTrainDoorCount(train: number): number { 
	return _in(0x00000000, 0x99974721, train, _r, _ri); 
}


/**
 * Gets the ratio that a door is open for on a train.
 * @param train
 * @param doorIndex
 */
export function getTrainDoorOpenRatio(train: number, doorIndex: number): number { 
	return _in(0x00000000, 0x40b16551, train, doorIndex, _r, _rf); 
}


/**
 * Gets the speed the train is currently going.
 * @param train
 */
export function getTrainSpeed(train: number): number { 
	return _in(0x00000000, 0x428668b7, train, _r, _rf); 
}


export function getTrainState(train: number): number { 
	return _in(0x00000000, 0x81b50033, train, _r, _ri); 
}


export function getVehicleAlarmTimeLeft(vehicle: number): number { 
	return _in(0x00000000, 0xc62aac98, vehicle, _r, _ri); 
}


/**
 * A getter for [SET_VEHICLE_CHEAT_POWER_INCREASE](#\_0xB59E4BD37AE292DB).
 * @param vehicle
 */
export function getVehicleCheatPowerIncrease(vehicle: number): number { 
	return _in(0x00000000, 0xc3c93f28, vehicle, _r, _rf); 
}


export function getVehicleClutch(vehicle: number): number { 
	return _in(0x00000000, 0x1dad4583, vehicle, _r, _rf); 
}


export function getVehicleCurrentGear(vehicle: number): number { 
	return _in(0x00000000, 0xb4f4e566, vehicle, _r, _ri); 
}


export function getVehicleCurrentRpm(vehicle: number): number { 
	return _in(0x00000000, 0xe7b12b54, vehicle, _r, _rf); 
}


export function getVehicleDashboardBoost(): number { 
	return _in(0x00000000, 0xdffaba2a, _r, _rf); 
}


/**
 * Retrieves the current gear displayed on the dashboard of the vehicle the player is in, returned as a float. This value represents the gear shown in the instrument cluster, such as "R" (0.0) or positive values (e.g., 1.0, 2.0, etc.) for drive gears.
 */
export function getVehicleDashboardCurrentGear(): number { 
	return _in(0x00000000, 0x435c86f4, _r, _rf); 
}


export function getVehicleDashboardFuel(): number { 
	return _in(0x00000000, 0x19b0b2ce, _r, _rf); 
}


/**
 * Gets the state of the player vehicle's dashboard lights as a bit set
 * indicator_left = 1
 * indicator_right = 2
 * handbrakeLight = 4
 * engineLight = 8
 * ABSLight = 16
 * gasLight = 32
 * oilLight = 64
 * headlights = 128
 * highBeam = 256
 * batteryLight = 512
 */
export function getVehicleDashboardLights(): number { 
	return _in(0x00000000, 0x500ffe9d, _r, _ri); 
}


export function getVehicleDashboardOilPressure(): number { 
	return _in(0x00000000, 0x3856d767, _r, _rf); 
}


export function getVehicleDashboardOilTemp(): number { 
	return _in(0x00000000, 0x1f5996aa, _r, _rf); 
}


export function getVehicleDashboardRpm(): number { 
	return _in(0x00000000, 0xf9716a11, _r, _rf); 
}


export function getVehicleDashboardSpeed(vehicle: number): number { 
	return _in(0x00000000, 0x9aad420e, vehicle, _r, _rf); 
}


export function getVehicleDashboardTemp(): number { 
	return _in(0x00000000, 0x6b6adafa, _r, _rf); 
}


export function getVehicleDashboardVacuum(): number { 
	return _in(0x00000000, 0xfabe67a9, _r, _rf); 
}


/**
 * A getter for [SET_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME](#\_0x245A6883D966D537).
 */
export function getVehicleDensityMultiplier(): number { 
	return _in(0x00000000, 0xef7c6538, _r, _rf); 
}


/**
 * Gets a vehicle's multiplier used with a wheel's GET_VEHICLE_WHEEL_STEERING_ANGLE to determine the angle the wheel is rendered.
 * @param vehicle
 */
export function getVehicleDrawnWheelAngleMult(vehicle: number): number { 
	return _in(0x00000000, 0x21c1da8e, vehicle, _r, _rf); 
}


export function getVehicleEngineTemperature(vehicle: number): number { 
	return _in(0x00000000, 0xf4f495cb, vehicle, _r, _rf); 
}


export function getVehicleFuelLevel(vehicle: number): number { 
	return _in(0x00000000, 0x5f739bb8, vehicle, _r, _rf); 
}


/**
 * Gets vehicles gear ratio on choosen gear.
 * @param vehicle
 * @param gear
 */
export function getVehicleGearRatio(vehicle: number, gear: number): number { 
	return _in(0x00000000, 0x82e794b7, vehicle, gear, _r, _rf); 
}


export function getVehicleGravityAmount(vehicle: number): number { 
	return _in(0x00000000, 0xb48a1292, vehicle, _r, _rf); 
}


/**
 * Returns the effective handling data of a vehicle as a floating-point value.
 * Example: `local fSteeringLock = GetVehicleHandlingFloat(vehicle, 'CHandlingData', 'fSteeringLock')`
 * @param vehicle
 * @param class_
 * @param fieldName
 */
export function getVehicleHandlingFloat(vehicle: number, class_: string, fieldName: string): number { 
	return _in(0x00000000, 0x642fc12f, vehicle, _ts(class_), _ts(fieldName), _r, _rf); 
}


/**
 * Returns the effective handling data of a vehicle as an integer value.
 * Example: `local modelFlags = GetVehicleHandlingInt(vehicle, 'CHandlingData', 'strModelFlags')`
 * @param vehicle
 * @param class_
 * @param fieldName
 */
export function getVehicleHandlingInt(vehicle: number, class_: string, fieldName: string): number { 
	return _in(0x00000000, 0x27396c75, vehicle, _ts(class_), _ts(fieldName), _r, _ri); 
}


/**
 * Returns the effective handling data of a vehicle as a vector value.
 * Example: `local inertiaMultiplier = GetVehicleHandlingVector(vehicle, 'CHandlingData', 'vecInertiaMultiplier')`
 * @param vehicle
 * @param class_
 * @param fieldName
 */
export function getVehicleHandlingVector(vehicle: number, class_: string, fieldName: string): Vector3 { 
	return _mv(_in(0x00000000, 0xfb341304, vehicle, _ts(class_), _ts(fieldName), _r, _rv)); 
}


export function getVehicleHighGear(vehicle: number): number { 
	return _in(0x00000000, 0xf1d1d689, vehicle, _r, _ri); 
}


/**
 * Gets the vehicle indicator light state. 0 = off, 1 = left, 2 = right, 3 = both
 * @param vehicle
 */
export function getVehicleIndicatorLights(vehicle: number): number { 
	return _in(0x00000000, 0x83070354, vehicle, _r, _ri); 
}


export function getVehicleLightMultiplier(vehicle: number): number { 
	return _in(0x00000000, 0x7e6e219c, vehicle, _r, _rf); 
}


export function getVehicleNextGear(vehicle: number): number { 
	return _in(0x00000000, 0xddb298ae, vehicle, _r, _ri); 
}


export function getVehicleNumberOfWheels(vehicle: number): number { 
	return _in(0x00000000, 0xedf4b0fc, vehicle, _r, _ri); 
}


export function getVehicleOilLevel(vehicle: number): number { 
	return _in(0x00000000, 0xfc7f8ef4, vehicle, _r, _rf); 
}


export function getVehicleSteeringScale(vehicle: number): number { 
	return _in(0x00000000, 0x954465de, vehicle, _r, _rf); 
}


export function getVehicleThrottleOffset(vehicle: number): number { 
	return _in(0x00000000, 0xd1d07351, vehicle, _r, _rf); 
}


/**
 * A getter for [MODIFY_VEHICLE_TOP_SPEED](#\_0x93A3996368C94158). Returns -1.0 if a modifier is not set.
 * @param vehicle
 */
export function getVehicleTopSpeedModifier(vehicle: number): number { 
	return _in(0x00000000, 0x998b7fee, vehicle, _r, _rf); 
}


export function getVehicleTurboPressure(vehicle: number): number { 
	return _in(0x00000000, 0xe02b51d7, vehicle, _r, _rf); 
}


/**
 * Returns the model type of the vehicle as defined by:
 * 
 * ```cpp
 * enum VehicleType
 * {
 * VEHICLE_TYPE_NONE = -1,
 * VEHICLE_TYPE_CAR = 0,
 * VEHICLE_TYPE_PLANE = 1,
 * VEHICLE_TYPE_TRAILER = 2,
 * VEHICLE_TYPE_QUADBIKE = 3,
 * VEHICLE_TYPE_DRAFT = 4,
 * VEHICLE_TYPE_SUBMARINECAR = 5,
 * VEHICLE_TYPE_AMPHIBIOUS_AUTOMOBILE = 6,
 * VEHICLE_TYPE_AMPHIBIOUS_QUADBIKE = 7,
 * VEHICLE_TYPE_HELI = 8,
 * VEHICLE_TYPE_BLIMP = 9,
 * VEHICLE_TYPE_AUTOGYRO = 10,
 * VEHICLE_TYPE_BIKE = 11,
 * VEHICLE_TYPE_BICYCLE = 12,
 * VEHICLE_TYPE_BOAT = 13,
 * VEHICLE_TYPE_TRAIN = 14,
 * VEHICLE_TYPE_SUBMARINE = 15,
 * };
 * ```
 * @param vehicle
 */
export function getVehicleTypeRaw(vehicle: number): number { 
	return _in(0x00000000, 0xde73bc10, vehicle, _r, _ri); 
}


/**
 * Gets brake pressure of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * Normal values around 1.0f when braking.
 * @param vehicle
 * @param wheelIndex
 */
export function getVehicleWheelBrakePressure(vehicle: number, wheelIndex: number): number { 
	return _in(0x00000000, 0x70fe2eff, vehicle, wheelIndex, _r, _rf); 
}


/**
 * Gets the flags of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * @param vehicle
 * @param wheelIndex
 */
export function getVehicleWheelFlags(vehicle: number, wheelIndex: number): number { 
	return _in(0x00000000, 0xc70fa0c7, vehicle, wheelIndex, _r, _ri); 
}


export function getVehicleWheelHealth(vehicle: number, wheelIndex: number): number { 
	return _in(0x00000000, 0x54a677f5, vehicle, wheelIndex, _r, _rf); 
}


/**
 * Gets whether the wheel is powered.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * This is a shortcut to a flag in GET_VEHICLE_WHEEL_FLAGS.
 * @param vehicle
 * @param wheelIndex
 */
export function getVehicleWheelIsPowered(vehicle: number, wheelIndex: number): boolean { 
	return _in(0x00000000, 0x3ccf1b49, vehicle, wheelIndex, _r); 
}


/**
 * Gets power being sent to a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * @param vehicle
 * @param wheelIndex
 */
export function getVehicleWheelPower(vehicle: number, wheelIndex: number): number { 
	return _in(0x00000000, 0x0d203287, vehicle, wheelIndex, _r, _rf); 
}


export function getVehicleWheelRimColliderSize(vehicle: number, wheelIndex: number): number { 
	return _in(0x00000000, 0xcee21ab2, vehicle, wheelIndex, _r, _rf); 
}


/**
 * Gets the rotation speed of a wheel.
 * This is used internally to calcuate GET_VEHICLE_WHEEL_SPEED.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * @param vehicle
 * @param wheelIndex
 */
export function getVehicleWheelRotationSpeed(vehicle: number, wheelIndex: number): number { 
	return _in(0x00000000, 0xea1859e5, vehicle, wheelIndex, _r, _rf); 
}


/**
 * Returns vehicle's wheels' size (size is the same for all the wheels, cannot get/set specific wheel of vehicle).
 * Only works on non-default wheels (returns 0 in case of default wheels).
 * @param vehicle
 */
export function getVehicleWheelSize(vehicle: number): number { 
	return _in(0x00000000, 0x04046b66, vehicle, _r, _rf); 
}


/**
 * Gets speed of a wheel at the tyre.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * @param vehicle
 * @param wheelIndex
 */
export function getVehicleWheelSpeed(vehicle: number, wheelIndex: number): number { 
	return _in(0x00000000, 0x149c9da0, vehicle, wheelIndex, _r, _rf); 
}


/**
 * Gets steering angle of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * @param vehicle
 * @param wheelIndex
 */
export function getVehicleWheelSteeringAngle(vehicle: number, wheelIndex: number): number { 
	return _in(0x00000000, 0xa0867448, vehicle, wheelIndex, _r, _rf); 
}


export function getVehicleWheelSurfaceMaterial(vehicle: number, wheelIndex: number): number { 
	return _in(0x00000000, 0xa7f04022, vehicle, wheelIndex, _r, _ri); 
}


/**
 * Gets the current suspension compression of a wheel.
 * Returns a positive value. 0 means the suspension is fully extended, the wheel is off the ground.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * @param vehicle
 * @param wheelIndex
 */
export function getVehicleWheelSuspensionCompression(vehicle: number, wheelIndex: number): number { 
	return _in(0x00000000, 0x2b48175b, vehicle, wheelIndex, _r, _rf); 
}


export function getVehicleWheelTireColliderSize(vehicle: number, wheelIndex: number): number { 
	return _in(0x00000000, 0xe0ba9fe6, vehicle, wheelIndex, _r, _rf); 
}


export function getVehicleWheelTireColliderWidth(vehicle: number, wheelIndex: number): number { 
	return _in(0x00000000, 0xef65929c, vehicle, wheelIndex, _r, _rf); 
}


/**
 * Gets the traction vector length of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * @param vehicle
 * @param wheelIndex
 */
export function getVehicleWheelTractionVectorLength(vehicle: number, wheelIndex: number): number { 
	return _in(0x00000000, 0x3bcfee14, vehicle, wheelIndex, _r, _rf); 
}


/**
 * Returns vehicle's wheels' width (width is the same for all the wheels, cannot get/set specific wheel of vehicle).
 * Only works on non-default wheels (returns 0 in case of default wheels).
 * @param vehicle
 */
export function getVehicleWheelWidth(vehicle: number): number { 
	return _in(0x00000000, 0x9c7b59f9, vehicle, _r, _rf); 
}


/**
 * Returns the offset of the specified wheel relative to the wheel's axle center.
 * @param vehicle
 * @param wheelIndex
 */
export function getVehicleWheelXOffset(vehicle: number, wheelIndex: number): number { 
	return _in(0x00000000, 0xcc90cbca, vehicle, wheelIndex, _r, _rf); 
}


export function getVehicleWheelYRotation(vehicle: number, wheelIndex: number): number { 
	return _in(0x00000000, 0x2ea4affe, vehicle, wheelIndex, _r, _rf); 
}


/**
 * List of known states:
 * 
 * ```
 * 1: Not wheeling.
 * 65: Vehicle is ready to do wheelie (burnouting).
 * 129: Vehicle is doing wheelie.
 * ```
 * @param vehicle
 */
export function getVehicleWheelieState(vehicle: number): number { 
	return _in(0x00000000, 0x137260d1, vehicle, _r, _ri); 
}


/**
 * Returns vehicle xenon lights custom RGB color values. Do note this native doesn't return non-RGB colors that was set with [\_SET_VEHICLE_XENON_LIGHTS_COLOR](#\_0xE41033B25D003A07).
 * @param vehicle
 * @param red
 * @param green
 * @param blue
 */
export function getVehicleXenonLightsCustomColor(vehicle: number): [boolean, number, number, number] { 
	const [retval, red_out, green_out, blue_out] = _in(0x00000000, 0xc715f730, vehicle, _i, _i, _i, _r);
	return [retval as boolean, red_out as number, green_out as number, blue_out as number]; 
}


/**
 * A getter for [SET_VEHICLE_XMAS_SNOW_FACTOR](#\_80cc4c9e).
 */
export function getVehicleXmasSnowFactor(): number { 
	return _in(0x00000000, 0x16605b30, _r, _rf); 
}


export function getWaterQuadAlpha(waterQuad: number): [boolean, number, number, number, number] { 
	const [retval, a0_out, a1_out, a2_out, a3_out] = _in(0x00000000, 0x14088095, waterQuad, _i, _i, _i, _i, _r);
	return [retval as boolean, a0_out as number, a1_out as number, a2_out as number, a3_out as number]; 
}


/**
 * This native returns the index of a water quad if the given point is inside its bounds.
 * 
 * *If you also want to check for water level, check out [`GetWaterQuadAtCoords_3d`](#\_0xF8E03DB8)*
 * @param x
 * @param y
 */
export function getWaterQuadAtCoords(x: number, y: number): number { 
	return _in(0x00000000, 0x17321452, _fv(x), _fv(y), _r, _ri); 
}


/**
 * This alternative implementation of [`GetWaterQuadAtCoords`](#\_0x17321452) also checks the height of the water level.
 * @param x
 * @param y
 * @param z
 */
export function getWaterQuadAtCoords3d(x: number, y: number, z: number): number { 
	return _in(0x00000000, 0xf8e03db8, _fv(x), _fv(y), _fv(z), _r, _ri); 
}


export function getWaterQuadBounds(waterQuad: number): [boolean, number, number, number, number] { 
	const [retval, minX_out, minY_out, maxX_out, maxY_out] = _in(0x00000000, 0x42e9a06a, waterQuad, _i, _i, _i, _i, _r);
	return [retval as boolean, minX_out as number, minY_out as number, maxX_out as number, maxY_out as number]; 
}


export function getWaterQuadCount(): number { 
	return _in(0x00000000, 0xb1884159, _r, _ri); 
}


export function getWaterQuadHasLimitedDepth(waterQuad: number, hasLimitedDepth: number): [boolean, number] { 
	const [retval, hasLimitedDepth_out] = _in(0x00000000, 0x22ea3bd8, waterQuad, _ii(hasLimitedDepth), _r);
	return [retval as boolean, hasLimitedDepth_out as number]; 
}


export function getWaterQuadIsInvisible(waterQuad: number, isInvisible: number): [boolean, number] { 
	const [retval, isInvisible_out] = _in(0x00000000, 0x1dedbd77, waterQuad, _ii(isInvisible), _r);
	return [retval as boolean, isInvisible_out as number]; 
}


/**
 * *level is defined as "z" in water.xml*
 * @param waterQuad
 * @param waterQuadLevel
 */
export function getWaterQuadLevel(waterQuad: number, waterQuadLevel: number): [boolean, number] { 
	const [retval, waterQuadLevel_out] = _in(0x00000000, 0x6523816b, waterQuad, _fi(waterQuadLevel), _r);
	return [retval as boolean, waterQuadLevel_out as number]; 
}


export function getWaterQuadNoStencil(waterQuad: number, noStencil: number): [boolean, number] { 
	const [retval, noStencil_out] = _in(0x00000000, 0x06f4acba, waterQuad, _ii(noStencil), _r);
	return [retval as boolean, noStencil_out as number]; 
}


/**
 * Valid type definitions:
 * 
 * *   **0** Square
 * *   **1** Right triangle where the 90 degree angle is at maxX, minY
 * *   **2** Right triangle where the 90 degree angle is at minX, minY
 * *   **3** Right triangle where the 90 degree angle is at minX, maxY
 * *   **4** Right triangle where the 90 degree angle is at maxY, maxY
 * @param waterQuad
 * @param waterType
 */
export function getWaterQuadType(waterQuad: number, waterType: number): [boolean, number] { 
	const [retval, waterType_out] = _in(0x00000000, 0xe2501b8b, waterQuad, _ii(waterType), _r);
	return [retval as boolean, waterType_out as number]; 
}


export function getWaveQuadAmplitude(waveQuad: number, waveQuadAmplitude: number): [boolean, number] { 
	const [retval, waveQuadAmplitude_out] = _in(0x00000000, 0x865139a3, waveQuad, _fi(waveQuadAmplitude), _r);
	return [retval as boolean, waveQuadAmplitude_out as number]; 
}


/**
 * This native returns the index of a wave quad if the given point is inside its bounds.
 * @param x
 * @param y
 */
export function getWaveQuadAtCoords(x: number, y: number): number { 
	return _in(0x00000000, 0x3f5a61a7, _fv(x), _fv(y), _r, _ri); 
}


export function getWaveQuadBounds(waveQuad: number): [boolean, number, number, number, number] { 
	const [retval, minX_out, minY_out, maxX_out, maxY_out] = _in(0x00000000, 0xf86136db, waveQuad, _i, _i, _i, _i, _r);
	return [retval as boolean, minX_out as number, minY_out as number, maxX_out as number, maxY_out as number]; 
}


export function getWaveQuadCount(): number { 
	return _in(0x00000000, 0x09250c76, _r, _ri); 
}


export function getWaveQuadDirection(waveQuad: number): [boolean, number, number] { 
	const [retval, directionX_out, directionY_out] = _in(0x00000000, 0xcce49a1c, waveQuad, _f, _f, _r);
	return [retval as boolean, directionX_out as number, directionY_out as number]; 
}


/**
 * A getter for [SET_WEAPON_ANIMATION_OVERRIDE](#\_0x1055AC3A667F09D9).
 * @param ped
 */
export function getWeaponAnimationOverride(ped: number): number { 
	return _in(0x00000000, 0x063ed2e7, ped, _r, _ri); 
}


/**
 * A getter for `CWeaponAccuracyModifier` in a weapon component.
 * @param componentHash
 */
export function getWeaponComponentAccuracyModifier(componentHash: number): number { 
	return _in(0x00000000, 0xc693e278, componentHash, _r, _rf); 
}


/**
 * A getter for `CameraHash` in a weapon scope component.
 * @param componentHash
 */
export function getWeaponComponentCameraHash(componentHash: number): number { 
	return _in(0x00000000, 0xacb7e68f, componentHash, _r, _ri); 
}


/**
 * A getter for `ClipSize` in a weapon component.
 * @param componentHash
 */
export function getWeaponComponentClipSize(componentHash: number): number { 
	return _in(0x00000000, 0xe14cf665, componentHash, _r, _ri); 
}


/**
 * A getter for `CWeaponDamageModifier` in a weapon component.
 * @param componentHash
 */
export function getWeaponComponentDamageModifier(componentHash: number): number { 
	return _in(0x00000000, 0x4a0e3855, componentHash, _r, _rf); 
}


/**
 * A getter for `CWeaponFallOffModifier` damage modifier value in a weapon component.
 * @param componentHash
 */
export function getWeaponComponentRangeDamageModifier(componentHash: number): number { 
	return _in(0x00000000, 0xe134fb8d, componentHash, _r, _rf); 
}


/**
 * A getter for `CWeaponFallOffModifier` range modifier value in a weapon component.
 * @param componentHash
 */
export function getWeaponComponentRangeModifier(componentHash: number): number { 
	return _in(0x00000000, 0x2fd0bc1b, componentHash, _r, _rf); 
}


/**
 * A getter for `ReticuleHash` in a weapon scope component.
 * @param componentHash
 */
export function getWeaponComponentReticuleHash(componentHash: number): number { 
	return _in(0x00000000, 0xf9ab9297, componentHash, _r, _ri); 
}


/**
 * A getter for [\_SET_WEAPON_DAMAGE_MODIFIER](#\_0x4757F00BC6323CFE).
 * @param weaponHash
 */
export function getWeaponDamageModifier(weaponHash: number): number { 
	return _in(0x00000000, 0x0d979143, weaponHash, _r, _rf); 
}


/**
 * A getter for the recoil shake amplitude of a weapon.
 * @param weaponHash
 */
export function getWeaponRecoilShakeAmplitude(weaponHash: number): number { 
	return _in(0x00000000, 0x05e1af5f, weaponHash, _r, _rf); 
}


/**
 * Converts a screen coordinate into its relative world coordinate.
 * @param screenX
 * @param screenY
 * @param worldVector
 * @param normalVector
 */
export function getWorldCoordFromScreenCoord(screenX: number, screenY: number): [Vector3, Vector3] { 
	const [worldVector_out, normalVector_out] = _in(0x00000000, 0xc81d0659, _fv(screenX), _fv(screenY), _v, _v);
	return [_mv(worldVector_out), _mv(normalVector_out)]; 
}


/**
 * Returns whether or not the specific minimap overlay has loaded.
 * @param id
 */
export function hasMinimapOverlayLoaded(id: number): boolean { 
	return _in(0x00000000, 0xf7535f32, id, _r); 
}


/**
 * Returns true if the minimap is currently expanded. False if it's the normal minimap state.
 * Use [`IsBigmapFull`](#\_0x66EE14B2) to check if the full map is currently revealed on the minimap.
 */
export function isBigmapActive(): boolean { 
	return _in(0x00000000, 0xfff65c63, _r); 
}


export function isBigmapFull(): boolean { 
	return _in(0x00000000, 0x66ee14b2, _r); 
}


/**
 * Returns whether or not a browser is created for a specified DUI browser object.
 * @param duiObject
 */
export function isDuiAvailable(duiObject: any): boolean { 
	return _in(0x00000000, 0x7aac3b4c, duiObject, _r); 
}


/**
 * Checks if keyboard input is enabled during NUI focus using `SET_NUI_FOCUS_KEEP_INPUT`.
 */
export function isNuiFocusKeepingInput(): boolean { 
	return _in(0x00000000, 0x39c9dc92, _r); 
}


/**
 * Returns the current NUI focus state previously set with `SET_NUI_FOCUS`.
 */
export function isNuiFocused(): boolean { 
	return _in(0x00000000, 0x98545e6d, _r); 
}


/**
 * An alternative to [IS_PED_COMPONENT_VARIATION_GEN9\_EXCLUSIVE](#\_0xC767B581) that uses local collection indexing instead of the global one.
 * 
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 * 
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
 * @param ped
 * @param componentId
 * @param collection
 * @param drawableId
 */
export function isPedCollectionComponentVariationGen9Exclusive(ped: number, componentId: number, collection: string, drawableId: number): boolean { 
	return _in(0x00000000, 0x33b2afa2, ped, componentId, _ts(collection), drawableId, _r); 
}


/**
 * An alternative to [IS_PED_COMPONENT_VARIATION_VALID](#\_0xE825F6B6CEA7671D) that uses local collection indexing instead of the global one.
 * 
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 * 
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
 * @param ped
 * @param componentId
 * @param collection
 * @param drawableId
 * @param textureId
 */
export function isPedCollectionComponentVariationValid(ped: number, componentId: number, collection: string, drawableId: number, textureId: number): boolean { 
	return _in(0x00000000, 0xca63a52a, ped, componentId, _ts(collection), drawableId, textureId, _r); 
}


export function isPedComponentVariationGen9Exclusive(ped: number, componentId: number, drawableId: number): boolean { 
	return _in(0x00000000, 0xc767b581, ped, componentId, drawableId, _r); 
}


/**
 * Can be used to get state of raw key on keyboard.
 * 
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 * @param rawKeyIndex
 */
export function isRawKeyDown(rawKeyIndex: number): boolean { 
	return _in(0x00000000, 0xd95a7387, rawKeyIndex, _r); 
}


/**
 * Can be used to get state of raw key on keyboard.
 * 
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 * @param rawKeyIndex
 */
export function isRawKeyPressed(rawKeyIndex: number): boolean { 
	return _in(0x00000000, 0x69f7c29e, rawKeyIndex, _r); 
}


/**
 * Can be used to get release state of raw key on keyboard.
 * 
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 * @param rawKeyIndex
 */
export function isRawKeyReleased(rawKeyIndex: number): boolean { 
	return _in(0x00000000, 0xeaa50861, rawKeyIndex, _r); 
}


/**
 * Can be used to get state of raw key on keyboard.
 * 
 * Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 * @param rawKeyIndex
 */
export function isRawKeyUp(rawKeyIndex: number): boolean { 
	return _in(0x00000000, 0x36f4e505, rawKeyIndex, _r); 
}


/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * 
 * Returns whether an asynchronous streaming file registration completed.
 * @param registerAs
 */
export function isStreamingFileReady(registerAs: string): boolean { 
	return _in(0x00000000, 0xa194934d, _ts(registerAs), _r); 
}


/**
 * Getter for [SET_TRACK_ENABLED](?\_0x4b41e84c)
 * @param track
 */
export function isTrackEnabled(track: number): boolean { 
	return _in(0x00000000, 0x31e695cb, track, _r); 
}


/**
 * Getter for [SWITCH_TRAIN_TRACK](?\_0xFD813BB7DB977F20). Determines if ambient trains are able to spawn on this track.
 * @param track
 */
export function isTrackSwitchedOff(track: number): boolean { 
	return _in(0x00000000, 0xe0c53765, track, _r); 
}


export function isVehicleAlarmSet(vehicle: number): boolean { 
	return _in(0x00000000, 0xdc921211, vehicle, _r); 
}


export function isVehicleInteriorLightOn(vehicle: number): boolean { 
	return _in(0x00000000, 0xa411f72c, vehicle, _r); 
}


export function isVehicleNeedsToBeHotwired(vehicle: number): boolean { 
	return _in(0x00000000, 0xf9933bf4, vehicle, _r); 
}


export function isVehiclePreviouslyOwnedByPlayer(vehicle: number): boolean { 
	return _in(0x00000000, 0xf849ed67, vehicle, _r); 
}


export function isVehicleWanted(vehicle: number): boolean { 
	return _in(0x00000000, 0x0a7daf7c, vehicle, _r); 
}


/**
 * Leaves cursor mode. This function supports SDK infrastructure and is not intended to be used directly from your code.
 */
export function leaveCursorMode(): void { 
	return _in(0x00000000, 0xadecf19e); 
}


/**
 * Define the xml in a resources fxmanifest, under the file(s) section.
 * @param resourceName
 * @param fileName
 */
export function loadWaterFromPath(resourceName: string, fileName: string): boolean { 
	return _in(0x00000000, 0xf5102568, _ts(resourceName), _ts(fileName), _r); 
}


/**
 * Starts listening to the specified channel, when available.
 * @param channel
 */
export function mumbleAddVoiceChannelListen(channel: number): void { 
	return _in(0x00000000, 0xc79f44bf, channel); 
}


/**
 * Adds the specified channel to the target list for the specified Mumble voice target ID.
 * @param targetId
 * @param channel
 */
export function mumbleAddVoiceTargetChannel(targetId: number, channel: number): void { 
	return _in(0x00000000, 0x4d386c9e, targetId, channel); 
}


/**
 * Adds the specified player to the target list for the specified Mumble voice target ID.
 * @param targetId
 * @param player
 */
export function mumbleAddVoiceTargetPlayer(targetId: number, player: number): void { 
	return _in(0x00000000, 0x32c5355a, targetId, player); 
}


/**
 * Adds the specified player to the target list for the specified Mumble voice target ID.
 * @param targetId
 * @param serverId
 */
export function mumbleAddVoiceTargetPlayerByServerId(targetId: number, serverId: number): void { 
	return _in(0x00000000, 0x25f2b65f, targetId, serverId); 
}


export function mumbleClearVoiceChannel(): void { 
	return _in(0x00000000, 0xbf847807); 
}


/**
 * Clears the target list for the specified Mumble voice target ID.
 * @param targetId
 */
export function mumbleClearVoiceTarget(targetId: number): void { 
	return _in(0x00000000, 0x8555dcba, targetId); 
}


/**
 * Clears channels from the target list for the specified Mumble voice target ID.
 * @param targetId
 */
export function mumbleClearVoiceTargetChannels(targetId: number): void { 
	return _in(0x00000000, 0x5ea72e76, targetId); 
}


/**
 * Clears players from the target list for the specified Mumble voice target ID.
 * @param targetId
 */
export function mumbleClearVoiceTargetPlayers(targetId: number): void { 
	return _in(0x00000000, 0x912e21da, targetId); 
}


/**
 * Check whether specified channel exists on the Mumble server.
 * @param channel
 */
export function mumbleDoesChannelExist(channel: number): boolean { 
	return _in(0x00000000, 0x0cc8ca25, channel, _r); 
}


export function mumbleGetTalkerProximity(): number { 
	return _in(0x00000000, 0x84e02a32, _r, _rf); 
}


/**
 * Returns the mumble voice channel from a player's server id.
 * @param serverId
 */
export function mumbleGetVoiceChannelFromServerId(serverId: number): number { 
	return _in(0x00000000, 0x221c09f1, serverId, _r, _ri); 
}


export function mumbleIsActive(): boolean { 
	return _in(0x00000000, 0xe820bc10, _r); 
}


/**
 * This native will return true if the user succesfully connected to the voice server.
 * If the user disabled the voice-chat setting it will return false.
 */
export function mumbleIsConnected(): boolean { 
	return _in(0x00000000, 0xb816370a, _r); 
}


export function mumbleIsPlayerTalking(player: number): boolean { 
	return _in(0x00000000, 0x33eef97f, player, _r); 
}


/**
 * Stops listening to the specified channel.
 * @param channel
 */
export function mumbleRemoveVoiceChannelListen(channel: number): void { 
	return _in(0x00000000, 0x231523b7, channel); 
}


/**
 * Removes the specified voice channel from the user's voice targets.
 * 
 * Performs the opposite operation of [MUMBLE_ADD_VOICE_TARGET_CHANNEL](#\_0x4D386C9E)
 * @param targetId
 * @param channel
 */
export function mumbleRemoveVoiceTargetChannel(targetId: number, channel: number): void { 
	return _in(0x00000000, 0x268db867, targetId, channel); 
}


/**
 * Removes the specified player from the user's voice targets.
 * 
 * Performs the opposite operation of [MUMBLE_ADD_VOICE_TARGET_PLAYER](#\_0x32C5355A)
 * @param targetId
 * @param player
 */
export function mumbleRemoveVoiceTargetPlayer(targetId: number, player: number): void { 
	return _in(0x00000000, 0x88cd646f, targetId, player); 
}


/**
 * Removes the specified player from the user's voice targets.
 * 
 * Performs the opposite operation of [MUMBLE_ADD_VOICE_TARGET_PLAYER_BY_SERVER_ID](#\_0x25F2B65F)
 * @param targetId
 * @param serverId
 */
export function mumbleRemoveVoiceTargetPlayerByServerId(targetId: number, serverId: number): void { 
	return _in(0x00000000, 0x930bd34b, targetId, serverId); 
}


export function mumbleSetActive(state: boolean): void { 
	return _in(0x00000000, 0xd932a3f3, state); 
}


/**
 * Sets the current input distance. The player will be able to talk to other players within this distance.
 * @param distance
 */
export function mumbleSetAudioInputDistance(distance: number): void { 
	return _in(0x00000000, 0x1b1052e2, _fv(distance)); 
}


/**
 * Use this native to disable noise suppression and high pass filters.
 * 
 * The possible intents for this are as follows (backticks are used to represent hashes):
 * 
 * | Index | Description |
 * |-|-|
 * | \`speech\` | Default intent |
 * | \`music\` | Disable noise suppression and high pass filter |
 * @param intentHash
 */
export function mumbleSetAudioInputIntent(intentHash: number): void { 
	return _in(0x00000000, 0x6383526b, intentHash); 
}


/**
 * Sets the current output distance. The player will be able to hear other players talking within this distance.
 * @param distance
 */
export function mumbleSetAudioOutputDistance(distance: number): void { 
	return _in(0x00000000, 0x74c597d9, _fv(distance)); 
}


/**
 * Changes the Mumble server address to connect to, and reconnects to the new address.
 * @param address
 * @param port
 */
export function mumbleSetServerAddress(address: string, port: number): void { 
	return _in(0x00000000, 0xe6eb2cd8, _ts(address), port); 
}


/**
 * Sets the audio submix ID for a specified player using Mumble 'Native Audio' functionality.
 * @param serverId
 * @param submixId
 */
export function mumbleSetSubmixForServerId(serverId: number, submixId: number): void { 
	return _in(0x00000000, 0xfe3a3054, serverId, submixId); 
}


export function mumbleSetTalkerProximity(value: number): void { 
	return _in(0x00000000, 0x74e927b0, _fv(value)); 
}


export function mumbleSetVoiceChannel(channel: number): void { 
	return _in(0x00000000, 0x8737eee8, channel); 
}


/**
 * Sets the current Mumble voice target ID to broadcast voice to.
 * @param targetId
 */
export function mumbleSetVoiceTarget(targetId: number): void { 
	return _in(0x00000000, 0x960a4a95, targetId); 
}


/**
 * Overrides the output volume for a particular player on Mumble. This will also bypass 3D audio and distance calculations. -1.0 to reset the override.
 * 
 * Set to -1.0 to reset the Volume override.
 * @param player
 * @param volume
 */
export function mumbleSetVolumeOverride(player: number, volume: number): void { 
	return _in(0x00000000, 0x61c309e3, player, _fv(volume)); 
}


/**
 * Overrides the output volume for a particular player with the specified server id and player name on Mumble. This will also bypass 3D audio and distance calculations. -1.0 to reset the override.
 * @param serverId
 * @param volume
 */
export function mumbleSetVolumeOverrideByServerId(serverId: number, volume: number): void { 
	return _in(0x00000000, 0xce8e25b4, serverId, _fv(volume)); 
}


export function networkDoesEntityExistWithNetworkId(netId: number): boolean { 
	return _in(0x00000000, 0x1e2e3177, netId, _r); 
}


/**
 * Toggles a check that prevents attaching (networked) entities to remotely owned peds. This is disabled by default.
 * @param enable
 */
export function onesyncEnableRemoteAttachmentSanitization(enable: boolean): void { 
	return _in(0x00000000, 0x30ce39d8, enable); 
}


/**
 * Sets whether peds can stand on top of *all* vehicles without falling off.
 * 
 * Note this flag is not replicated automatically, you will have to manually do so.
 * @param flag
 */
export function overridePedsCanStandOnTopFlag(flag: boolean): void { 
	return _in(0x00000000, 0x90a9e0b2, flag); 
}


/**
 * Allows the bypassing of default game behavior that prevents the use of [SET_PED_DRIVE_BY_CLIPSET_OVERRIDE](#\_0xED34AB6C5CB36520) in certain scenarios to avoid clipping issues (e.g., when there is more than one Ped in a vehicle).
 * 
 * Note: This flag and the overridden clipset are not replicated values and require synchronization through user scripts. Additionally, current game behavior also restricts applying this clipset locally when in first-person mode and will require a temporary workaround.
 * @param flag
 */
export function overridePedsUseDefaultDriveByClipset(flag: boolean): void { 
	return _in(0x00000000, 0xb14f8ead, flag); 
}


/**
 * Replaces the `popgroups` (CPopGroupList) meta file with the file in the specified path.
 * @param path
 */
export function overridePopGroups(path: string): void { 
	return _in(0x00000000, 0xd3bc438f, _ts(path)); 
}


/**
 * Overrides whether or not peds can stand on top of the specified vehicle.
 * 
 * Note this flag is not replicated automatically, you will have to manually do so.
 * @param vehicle
 * @param can
 */
export function overrideVehiclePedsCanStandOnTopFlag(vehicle: number, can: boolean): void { 
	return _in(0x00000000, 0x7fa03e76, vehicle, can); 
}


/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * 
 * Registers a set of archetypes with the game engine. These should match `CBaseArchetypeDef` class information from the game.
 * @param factory
 */
export function registerArchetypes(factory: any): void { 
	return _in(0x00000000, 0x3c2f9037, _mfr(factory)); 
}


/**
 * Registers a specified .gfx file as GFx font library.
 * The .gfx file has to be registered with the streamer already.
 * @param fileName
 */
export function registerFontFile(fileName: string): void { 
	return _in(0x00000000, 0x01b3a363, _ts(fileName)); 
}


/**
 * Registers a specified font name for use with text draw commands.
 * @param fontName
 */
export function registerFontId(fontName: string): number { 
	return _in(0x00000000, 0xacf6d8ee, _ts(fontName), _r, _ri); 
}


/**
 * Registers a key mapping for the current resource.
 * 
 * See the related [cookbook post](https://cookbook.fivem.net/2020/01/06/using-the-new-console-key-bindings/) for more information.
 * 
 * Below you can find some examples on how to create these keybindings as well as the alternate keybinding syntax, which is preceded by `~!` to indicate that it's an alternate key.
 * @param commandString
 * @param description
 * @param defaultMapper
 * @param defaultParameter
 */
export function registerKeyMapping(commandString: string, description: string, defaultMapper: string, defaultParameter: string): void { 
	return _in(0x00000000, 0xd7664fd1, _ts(commandString), _ts(description), _ts(defaultMapper), _ts(defaultParameter)); 
}


export function registerNuiCallback(callbackType: string, callback: any): void { 
	return _in(0x00000000, 0xc59b980c, _ts(callbackType), _mfr(callback)); 
}


export function registerNuiCallbackType(callbackType: string): void { 
	return _in(0x00000000, 0xcd03cda9, _ts(callbackType)); 
}


export function registerRawNuiCallback(callbackType: string, callback: any): void { 
	return _in(0x00000000, 0xa8ae9c2f, _ts(callbackType), _mfr(callback)); 
}


/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * 
 * Registers a dynamic streaming asset from the server with the GTA streaming module system.
 * @param resourceName
 * @param fileName
 * @param cacheString
 */
export function registerStreamingFileFromCache(resourceName: string, fileName: string, cacheString: string): void { 
	return _in(0x00000000, 0xcead2d4b, _ts(resourceName), _ts(fileName), _ts(cacheString)); 
}


/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * 
 * Registers a KVP value as an asset with the GTA streaming module system. This function currently won't work.
 * @param kvsKey
 */
export function registerStreamingFileFromKvs(kvsKey: string): void { 
	return _in(0x00000000, 0x1493dcc1, _ts(kvsKey)); 
}


/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * 
 * Registers a file from an URL as a streaming asset in the GTA streaming subsystem. This will asynchronously register the asset, and caching is done based on the URL itself - cache headers are ignored.
 * 
 * Use `IS_STREAMING_FILE_READY` to check if the asset has been registered successfully.
 * @param registerAs
 * @param url
 */
export function registerStreamingFileFromUrl(registerAs: string, url: string): void { 
	return _in(0x00000000, 0xf44bfb95, _ts(registerAs), _ts(url)); 
}


/**
 * Removes a dry volume from the game session.
 * See CREATE_DRY_VOLUME for more info
 * @param handle
 */
export function removeDryVolume(handle: number): void { 
	return _in(0x00000000, 0x7bcaa6e7, handle); 
}


/**
 * Experimental natives, please do not use in a live environment.
 * @param origTxd
 * @param origTxn
 */
export function removeReplaceTexture(origTxd: string, origTxn: string): void { 
	return _in(0x00000000, 0xa896b20a, _ts(origTxd), _ts(origTxn)); 
}


export function removeTimecycleModifier(modifierName: string): void { 
	return _in(0x00000000, 0x36df8612, _ts(modifierName)); 
}


export function removeTimecycleModifierVar(modifierName: string, varName: string): void { 
	return _in(0x00000000, 0x5a5e0d05, _ts(modifierName), _ts(varName)); 
}


/**
 * Requests a resource file set with the specified name to be downloaded and mounted on top of the current resource.
 * 
 * Resource file sets are specified in `fxmanifest.lua` with the following syntax:
 * 
 * ```lua
 * file_set 'addon_ui' {
 * 'ui/addon/index.html',
 * 'ui/addon -- [[*.js',
 * }
 * ```
 * 
 * This command will trigger a script error if the request failed.
 * @param setName
 */
export function requestResourceFileSet(setName: string): boolean { 
	return _in(0x00000000, 0xe7490533, _ts(setName), _r); 
}


/**
 * Resets parameters which is used by the game for checking is ped needs to fly through windscreen after a crash to default values.
 */
export function resetFlyThroughWindscreenParams(): void { 
	return _in(0x00000000, 0x6d712937); 
}


/**
 * Resets values from the zoom level data by index to defaults from mapzoomdata.meta.
 * @param index
 */
export function resetMapZoomDataLevel(index: number): void { 
	return _in(0x00000000, 0x11a5b7ed, index); 
}


/**
 * Resets mapdata entity transform matrix to its original state.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 * @param mapDataHash
 * @param entityInternalIdx
 */
export function resetMapdataEntityMatrix(mapDataHash: number, entityInternalIdx: number): boolean { 
	return _in(0x00000000, 0x8143fa4f, mapDataHash, entityInternalIdx, _r); 
}


/**
 * Restores an overridden ped model personality type to the default value.
 * @param modelHash
 */
export function resetPedModelPersonality(modelHash: number): void { 
	return _in(0x00000000, 0x79a12861, modelHash); 
}


/**
 * Resets whether or not peds can stand on top of the specified vehicle.
 * 
 * Note this flag is not replicated automatically, you will have to manually do so.
 * @param vehicle
 */
export function resetVehiclePedsCanStandOnTopFlag(vehicle: number): void { 
	return _in(0x00000000, 0xdf62cfe2, vehicle); 
}


/**
 * Resets the water to the games default water.xml.
 */
export function resetWater(): void { 
	return _in(0x00000000, 0x01da4791); 
}


/**
 * Gets the selected entity at the current mouse cursor position, and changes the current selection depth. This function supports SDK infrastructure and is not intended to be used directly from your code.
 * @param hitFlags
 * @param precise
 */
export function selectEntityAtCursor(hitFlags: number, precise: boolean): number { 
	return _in(0x00000000, 0x3dd8130f, hitFlags, precise, _r, _ri); 
}


/**
 * Gets the selected entity at the specified mouse cursor position, and changes the current selection depth. This function supports SDK infrastructure and is not intended to be used directly from your code.
 * @param fracX
 * @param fracY
 * @param hitFlags
 * @param precise
 */
export function selectEntityAtPos(fracX: number, fracY: number, hitFlags: number, precise: boolean): number { 
	return _in(0x00000000, 0xafe8d405, _fv(fracX), _fv(fracY), hitFlags, precise, _r, _ri); 
}


/**
 * Sends a message to the specific DUI root page. This is similar to SEND_NUI_MESSAGE.
 * @param duiObject
 * @param jsonString
 */
export function sendDuiMessage(duiObject: any, jsonString: string): void { 
	return _in(0x00000000, 0xcd380da9, duiObject, _ts(jsonString)); 
}


/**
 * Injects a 'mouse down' event for a DUI object. Coordinates are expected to be set using SEND_DUI_MOUSE_MOVE.
 * @param duiObject
 * @param button
 */
export function sendDuiMouseDown(duiObject: any, button: string): void { 
	return _in(0x00000000, 0x5d01f191, duiObject, _ts(button)); 
}


/**
 * Injects a 'mouse move' event for a DUI object. Coordinates are in browser space.
 * @param duiObject
 * @param x
 * @param y
 */
export function sendDuiMouseMove(duiObject: any, x: number, y: number): void { 
	return _in(0x00000000, 0xd9d7a0aa, duiObject, x, y); 
}


/**
 * Injects a 'mouse up' event for a DUI object. Coordinates are expected to be set using SEND_DUI_MOUSE_MOVE.
 * @param duiObject
 * @param button
 */
export function sendDuiMouseUp(duiObject: any, button: string): void { 
	return _in(0x00000000, 0x1d735b93, duiObject, _ts(button)); 
}


/**
 * Injects a 'mouse wheel' event for a DUI object.
 * @param duiObject
 * @param deltaY
 * @param deltaX
 */
export function sendDuiMouseWheel(duiObject: any, deltaY: number, deltaX: number): void { 
	return _in(0x00000000, 0x2d62133a, duiObject, deltaY, deltaX); 
}


/**
 * Sends a message to the `loadingScreen` NUI frame, which contains the HTML page referenced in `loadscreen` resources.
 * @param jsonString
 */
export function sendLoadingScreenMessage(jsonString: string): boolean { 
	return _in(0x00000000, 0x8bbe6cc0, _ts(jsonString), _r); 
}


export function sendNuiMessage(jsonString: string): boolean { 
	return _in(0x00000000, 0x78608acb, _ts(jsonString), _r); 
}


/**
 * Adds a cooldown between instances of moving and then aiming.
 * Can be optionally used to hinder 'speedboosting'
 * To turn off, set value to 0
 * @param value
 */
export function setAimCooldown(value: number): void { 
	return _in(0x00000000, 0xa42a3dbf, value); 
}


/**
 * Sets a floating-point parameter for a submix effect.
 * @param submixId
 * @param effectSlot
 * @param paramIndex
 * @param paramValue
 */
export function setAudioSubmixEffectParamFloat(submixId: number, effectSlot: number, paramIndex: number, paramValue: number): void { 
	return _in(0x00000000, 0x9a209b3c, submixId, effectSlot, paramIndex, _fv(paramValue)); 
}


/**
 * Sets an integer parameter for a submix effect.
 * @param submixId
 * @param effectSlot
 * @param paramIndex
 * @param paramValue
 */
export function setAudioSubmixEffectParamInt(submixId: number, effectSlot: number, paramIndex: number, paramValue: number): void { 
	return _in(0x00000000, 0x77fae2b8, submixId, effectSlot, paramIndex, paramValue); 
}


/**
 * Assigns a RadioFX effect to a submix effect slot.
 * 
 * The parameter values for this effect are as follows (backticks are used to represent hashes):
 * 
 * | Index | Type | Description |
 * |-|-|-|
 * | \`enabled\` | int | Enables or disables RadioFX on this DSP. |
 * | \`default\` | int | Sets default parameters for the RadioFX DSP and enables it. |
 * | \`freq_low\` | float |  |
 * | \`freq_hi\` | float |  |
 * | \`fudge\` | float |  |
 * | \`rm_mod_freq\` | float |  |
 * | \`rm_mix\` | float |  |
 * | \`o_freq_lo\` | float |  |
 * | \`o_freq_hi\` | float |  |
 * @param submixId
 * @param effectSlot
 */
export function setAudioSubmixEffectRadioFx(submixId: number, effectSlot: number): void { 
	return _in(0x00000000, 0xaaa94d53, submixId, effectSlot); 
}


/**
 * Sets the volumes for the sound channels in a submix effect.
 * Values can be between 0.0 and 1.0.
 * Channel 5 and channel 6 are not used in voice chat but are believed to be center and LFE channels.
 * Output slot starts at 0 for the first ADD_AUDIO_SUBMIX_OUTPUT call then incremented by 1 on each subsequent call.
 * @param submixId
 * @param outputSlot
 * @param frontLeftVolume
 * @param frontRightVolume
 * @param rearLeftVolume
 * @param rearRightVolume
 * @param channel5Volume
 * @param channel6Volume
 */
export function setAudioSubmixOutputVolumes(submixId: number, outputSlot: number, frontLeftVolume: number, frontRightVolume: number, rearLeftVolume: number, rearRightVolume: number, channel5Volume: number, channel6Volume: number): void { 
	return _in(0x00000000, 0x825dc0d1, submixId, outputSlot, _fv(frontLeftVolume), _fv(frontRightVolume), _fv(rearLeftVolume), _fv(rearRightVolume), _fv(channel5Volume), _fv(channel6Volume)); 
}


export function setBackfaceculling(toggle: boolean): void { 
	return _in(0x00000000, 0xc44c2f44, toggle); 
}


export function setCalmingQuadBounds(waterQuad: number, minX: number, minY: number, maxX: number, maxY: number): boolean { 
	return _in(0x00000000, 0xc5945bd9, waterQuad, minX, minY, maxX, maxY, _r); 
}


export function setCalmingQuadDampening(calmingQuad: number, dampening: number): boolean { 
	return _in(0x00000000, 0x67977501, calmingQuad, _fv(dampening), _r); 
}


export function setCursorLocation(x: number, y: number): boolean { 
	return _in(0x00000000, 0x8a7a8dac, _fv(x), _fv(y), _r); 
}


/**
 * Sets the default number plate text pattern for vehicles seen on the local client with the specified plate index as their *default* index (`plateProbabilities` from carvariations).
 * 
 * For consistency, this should be used with the same value on all clients, since vehicles *without* custom text will use a seeded random number generator with this pattern to determine the default plate text.
 * 
 * The default value is `11AAA111`, and using this or a NULL string will revert to the default game RNG.
 * 
 * ### Pattern string format
 * 
 * *   `1` will lead to a random number from 0-9.
 * *   `A` will lead to a random letter from A-Z.
 * *   `.` will lead to a random letter *or* number, with 50% probability of being either.
 * *   `^1` will lead to a literal `1` being emitted.
 * *   `^A` will lead to a literal `A` being emitted.
 * *   Any other character will lead to said character being emitted.
 * *   A string shorter than 8 characters will be padded on the right.
 * @param plateIndex
 * @param pattern
 */
export function setDefaultVehicleNumberPlateTextPattern(plateIndex: number, pattern: string): void { 
	return _in(0x00000000, 0x79780fd2, plateIndex, _ts(pattern)); 
}


/**
 * This native sets the app id for the discord rich presence implementation.
 * @param appId
 */
export function setDiscordAppId(appId: string): void { 
	return _in(0x00000000, 0x6a02254d, _ts(appId)); 
}


/**
 * Sets a clickable button to be displayed in a player's Discord rich presence.
 * @param index
 * @param label
 * @param url
 */
export function setDiscordRichPresenceAction(index: number, label: string, url: string): void { 
	return _in(0x00000000, 0xcbbc3fac, index, _ts(label), _ts(url)); 
}


/**
 * This native sets the image asset for the discord rich presence implementation.
 * @param assetName
 */
export function setDiscordRichPresenceAsset(assetName: string): void { 
	return _in(0x00000000, 0x53dfd530, _ts(assetName)); 
}


/**
 * This native sets the small image asset for the discord rich presence implementation.
 * @param assetName
 */
export function setDiscordRichPresenceAssetSmall(assetName: string): void { 
	return _in(0x00000000, 0xf61d04c4, _ts(assetName)); 
}


/**
 * This native sets the hover text of the small image asset for the discord rich presence implementation.
 * @param text
 */
export function setDiscordRichPresenceAssetSmallText(text: string): void { 
	return _in(0x00000000, 0x35e62b6a, _ts(text)); 
}


/**
 * This native sets the hover text of the image asset for the discord rich presence implementation.
 * @param text
 */
export function setDiscordRichPresenceAssetText(text: string): void { 
	return _in(0x00000000, 0xb029d2fa, _ts(text)); 
}


/**
 * Sets the on-screen drawing origin for draw-functions in world coordinates.
 * 
 * The effect can be reset by calling [`CLEAR_DRAW_ORIGIN`](#\_0xDD76B263) and is limited to 32 different origins each frame.
 * @param x
 * @param y
 * @param z
 * @param is2d
 */
export function setDrawOrigin(x: number, y: number, z: number, is2d: boolean): void { 
	return _in(0x00000000, 0xe10198d5, _fv(x), _fv(y), _fv(z), is2d); 
}


/**
 * Navigates the specified DUI browser to a different URL.
 * @param duiObject
 * @param url
 */
export function setDuiUrl(duiObject: any, url: string): void { 
	return _in(0x00000000, 0xf761d9f3, duiObject, _ts(url)); 
}


/**
 * Allows StaticEmitter's without a linked entity to make use of environment features like occlusion and reverb even if they are located higher than 20.0 units above any static collision inside interiors.
 * 
 * This native allows you to extend the probe range up to 150.0 units.
 * @param probeLength
 */
export function setEmitterProbeLength(probeLength: number): void { 
	return _in(0x00000000, 0x8aa1f3c2, _fv(probeLength)); 
}


/**
 * Draws an outline around a given entity. This function supports SDK infrastructure and is not intended to be used directly from your code.
 * @param entity
 * @param enabled
 */
export function setEntityDrawOutline(entity: number, enabled: boolean): void { 
	return _in(0x00000000, 0x76180407, entity, enabled); 
}


/**
 * Sets color for entity outline. `255, 0, 255, 255` by default.
 * @param red
 * @param green
 * @param blue
 * @param alpha
 */
export function setEntityDrawOutlineColor(red: number, green: number, blue: number, alpha: number): void { 
	return _in(0x00000000, 0xb41a56c2, red, green, blue, alpha); 
}


/**
 * Sets variant of shader that will be used to draw entity outline.
 * 
 * Variants are:
 * 
 * *   **0**: Default value, gauss shader.
 * *   **1**: 2px wide solid color outline.
 * *   **2**: Fullscreen solid color except for entity.
 * @param shader
 */
export function setEntityDrawOutlineShader(shader: number): void { 
	return _in(0x00000000, 0x5261a01a, shader); 
}


/**
 * Sets an entity's matrix. Arguments are in the same order as with GET_ENTITY_MATRIX.
 * @param entity
 * @param forwardX
 * @param forwardY
 * @param forwardZ
 * @param rightX
 * @param rightY
 * @param rightZ
 * @param upX
 * @param upY
 * @param upZ
 * @param atX
 * @param atY
 * @param atZ
 */
export function setEntityMatrix(entity: number, forwardX: number, forwardY: number, forwardZ: number, rightX: number, rightY: number, rightZ: number, upX: number, upY: number, upZ: number, atX: number, atY: number, atZ: number): void { 
	return _in(0x00000000, 0x0fb0639b, entity, _fv(forwardX), _fv(forwardY), _fv(forwardZ), _fv(rightX), _fv(rightY), _fv(rightZ), _fv(upX), _fv(upY), _fv(upZ), _fv(atX), _fv(atY), _fv(atZ)); 
}


/**
 * Allows Weapon-Flashlight beams to stay visible while moving. Normally it only stays on while aiming.
 * @param state
 */
export function setFlashLightKeepOnWhileMoving(state: boolean): void { 
	return _in(0x00000000, 0x7635b349, state); 
}


/**
 * Sets some in-game parameters which is used for checks is ped needs to fly through windscreen after a crash.
 * @param vehMinSpeed
 * @param unkMinSpeed
 * @param unkModifier
 * @param minDamage
 */
export function setFlyThroughWindscreenParams(vehMinSpeed: number, unkMinSpeed: number, unkModifier: number, minDamage: number): boolean { 
	return _in(0x00000000, 0x4d3118ed, _fv(vehMinSpeed), _fv(unkMinSpeed), _fv(unkModifier), _fv(minDamage), _r); 
}


/**
 * Sets fuel consumption rate multiplier for all vehicles operated by a player. This is a way to slow down or speed up fuel consumption for all vehicles at a time. If 0 - it practically means that fuel will not be consumed. By default is set to 1.
 * 
 * When the multiplier is set to 1 a default 65 litre gas tank car with average fuel consumption can stay idle for ~16.67 hours or run with max RPM for ~2.5 hours.
 * 
 * To customize fuel consumption per vehicle / vehicle class use [`SET_HANDLING_FLOAT`](#\_0x90DD01C)/[`SET_VEHICLE_HANDLING_FLOAT`](#\_0x488C86D2) natives with `fieldName` equal to `fPetrolConsumptionRate`. By default it is set to 0.5 for all vehicles.
 * @param multiplier
 */
export function setFuelConsumptionRateMultiplier(multiplier: number): void { 
	return _in(0x00000000, 0x845f3e5c, _fv(multiplier)); 
}


/**
 * Turns on and off fuel consumption in all vehicles operated by a player. NPC operated vehicles will not consume fuel to avoid traffic disruptions.
 * 
 * The default Gta5 behaviour is fuel consumption turned off.
 * @param state
 */
export function setFuelConsumptionState(state: boolean): void { 
	return _in(0x00000000, 0x81dad03e, state); 
}


export function setGlobalPassengerMassMultiplier(massMul: number): void { 
	return _in(0x00000000, 0x1c47f6ac, _fv(massMul)); 
}


/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingField('AIRTUG', 'CHandlingData', 'fSteeringLock', 360.0)`
 * @param vehicle
 * @param class_
 * @param fieldName
 * @param value
 */
export function setHandlingField(vehicle: string, class_: string, fieldName: string, value: number): void { 
	return _in(0x00000000, 0xfe8064e3, _ts(vehicle), _ts(class_), _ts(fieldName), value); 
}


/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingFloat('AIRTUG', 'CHandlingData', 'fSteeringLock', 360.0)`
 * @param vehicle
 * @param class_
 * @param fieldName
 * @param value
 */
export function setHandlingFloat(vehicle: string, class_: string, fieldName: string, value: number): void { 
	return _in(0x00000000, 0x090dd01c, _ts(vehicle), _ts(class_), _ts(fieldName), _fv(value)); 
}


/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * @param vehicle
 * @param class_
 * @param fieldName
 * @param value
 */
export function setHandlingInt(vehicle: string, class_: string, fieldName: string, value: number): void { 
	return _in(0x00000000, 0x8ab3f46c, _ts(vehicle), _ts(class_), _ts(fieldName), value); 
}


/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingVector('AIRTUG', 'CHandlingData', 'vecCentreOfMassOffset', vector3(0.0, 0.0, -5.0))`
 * @param vehicle
 * @param class_
 * @param fieldName
 * @param value
 */
export function setHandlingVector(vehicle: string, class_: string, fieldName: string, value: Vector3): void { 
	return _in(0x00000000, 0x07f9d543, _ts(vehicle), _ts(class_), _ts(fieldName), value); 
}


/**
 * See [SET_SCRIPT_GFX_ALIGN](#\_0xB8A850F20A067EB6) for details about how gfx align works.
 * @param id
 * @param horizontalAlign
 * @param verticalAlign
 */
export function setHudComponentAlign(id: number, horizontalAlign: number, verticalAlign: number): void { 
	return _in(0x00000000, 0xeed219f2, id, horizontalAlign, verticalAlign); 
}


export function setHudComponentSize(id: number, x: number, y: number): void { 
	return _in(0x00000000, 0x7644a9fa, id, _fv(x), _fv(y)); 
}


/**
 * Sets whether or not ownership checks should be performed while trying to stow a carriable on a hunting wagon.
 * @param ignore
 */
export function setIgnoreVehicleOwnershipForStowing(ignore: boolean): void { 
	return _in(0x00000000, 0x85a10ffd, ignore); 
}


export function setInteriorPortalCornerPosition(interiorId: number, portalIndex: number, cornerIndex: number, posX: number, posY: number, posZ: number): void { 
	return _in(0x00000000, 0x87f43553, interiorId, portalIndex, cornerIndex, _fv(posX), _fv(posY), _fv(posZ)); 
}


export function setInteriorPortalEntityFlag(interiorId: number, portalIndex: number, entityIndex: number, flag: number): void { 
	return _in(0x00000000, 0x8349cd76, interiorId, portalIndex, entityIndex, flag); 
}


export function setInteriorPortalFlag(interiorId: number, portalIndex: number, flag: number): void { 
	return _in(0x00000000, 0x88b2355e, interiorId, portalIndex, flag); 
}


export function setInteriorPortalRoomFrom(interiorId: number, portalIndex: number, roomFrom: number): void { 
	return _in(0x00000000, 0x298fc783, interiorId, portalIndex, roomFrom); 
}


export function setInteriorPortalRoomTo(interiorId: number, portalIndex: number, roomTo: number): void { 
	return _in(0x00000000, 0x58982680, interiorId, portalIndex, roomTo); 
}


/**
 * Overwrite the games default CPortalTracker interior detection range.
 * This fixes potentially unwanted behaviour in the base game and allows you to build custom interiors with larger ceiling heights without running into graphical glitches.
 * 
 * By default CPortalTracker will probe 4 units downward trying to reach collisions that are part of the interior the entity is in.
 * If no collision can be found 16 units are used in some circumstances.
 * 
 * There are 30+ hard coded special cases, only some of them exposed via script (for example `ENABLE_STADIUM_PROBES_THIS_FRAME`).
 * 
 * This native allows you to extend the probe range up to 150 units which is the same value the game uses for the `xs_arena_interior`
 * @param probeLength
 */
export function setInteriorProbeLength(probeLength: number): void { 
	return _in(0x00000000, 0x423f7e39, _fv(probeLength)); 
}


export function setInteriorRoomExtents(interiorId: number, roomIndex: number, bbMinX: number, bbMinY: number, bbMinZ: number, bbMaxX: number, bbMaxY: number, bbMaxZ: number): void { 
	return _in(0x00000000, 0x4fdcf51e, interiorId, roomIndex, _fv(bbMinX), _fv(bbMinY), _fv(bbMinZ), _fv(bbMaxX), _fv(bbMaxY), _fv(bbMaxZ)); 
}


export function setInteriorRoomFlag(interiorId: number, roomIndex: number, flag: number): void { 
	return _in(0x00000000, 0x5518d60b, interiorId, roomIndex, flag); 
}


export function setInteriorRoomTimecycle(interiorId: number, roomIndex: number, timecycleHash: number): void { 
	return _in(0x00000000, 0x31c9a848, interiorId, roomIndex, timecycleHash); 
}


/**
 * Toggles the visibility of resource names in the FiveM key mapping page.
 * @param hide
 */
export function setKeyMappingHideResources(hide: boolean): void { 
	return _in(0x00000000, 0xcb0241b5, hide); 
}


/**
 * Sets whether or not `SHUTDOWN_LOADING_SCREEN` automatically shuts down the NUI frame for the loading screen. If this is enabled,
 * you will have to manually invoke `SHUTDOWN_LOADING_SCREEN_NUI` whenever you want to hide the NUI loading screen.
 * @param manualShutdown
 */
export function setManualShutdownLoadingScreenNui(manualShutdown: boolean): void { 
	return _in(0x00000000, 0x1722c938, manualShutdown); 
}


/**
 * Sets values to the zoom level data by index.
 * @param index
 * @param zoomScale
 * @param zoomSpeed
 * @param scrollSpeed
 * @param tilesX
 * @param tilesY
 */
export function setMapZoomDataLevel(index: number, zoomScale: number, zoomSpeed: number, scrollSpeed: number, tilesX: number, tilesY: number): void { 
	return _in(0x00000000, 0x447c718e, index, _fv(zoomScale), _fv(zoomSpeed), _fv(scrollSpeed), _fv(tilesX), _fv(tilesY)); 
}


/**
 * Overrides how many real ms are equal to one game minute.
 * A setter for [`GetMillisecondsPerGameMinute`](#\_0x2F8B4D1C595B11DB).
 * @param value
 */
export function setMillisecondsPerGameMinute(value: number): void { 
	return _in(0x00000000, 0x36ca2554, value); 
}


/**
 * Sets the type for the minimap blip clipping object to be either rectangular or rounded.
 * @param type
 */
export function setMinimapClipType(type: number): void { 
	return _in(0x00000000, 0xb8b4490c, type); 
}


/**
 * Overrides the minimap component data (from `common:/data/ui/frontend.xml`) for a specified component.
 * @param name
 * @param alignX
 * @param alignY
 * @param posX
 * @param posY
 * @param sizeX
 * @param sizeY
 */
export function setMinimapComponentPosition(name: string, alignX: string, alignY: string, posX: number, posY: number, sizeX: number, sizeY: number): void { 
	return _in(0x00000000, 0x3e882b23, _ts(name), _ts(alignX), _ts(alignY), _fv(posX), _fv(posY), _fv(sizeX), _fv(sizeY)); 
}


/**
 * Sets the display info for a minimap overlay.
 * @param miniMap
 * @param x
 * @param y
 * @param xScale
 * @param yScale
 * @param alpha
 */
export function setMinimapOverlayDisplay(miniMap: number, x: number, y: number, xScale: number, yScale: number, alpha: number): void { 
	return _in(0x00000000, 0x6a48b3ca, miniMap, _fv(x), _fv(y), _fv(xScale), _fv(yScale), _fv(alpha)); 
}


/**
 * Possible Types:
 * 
 * ```
 * 0 = Off,
 * 1 = Regular,
 * 2 = Expanded,
 * 3 = Simple,
 * ```
 * @param type
 */
export function setMinimapType(type: number): void { 
	return _in(0x00000000, 0x5fb53015, type); 
}


/**
 * **This native is deprecated and does nothing!**
 * @param modelHash
 * @param ratePerSecond
 * @param headlightRotation
 * @param invertRotation
 */
export function setModelHeadlightConfiguration(modelHash: number, ratePerSecond: number, headlightRotation: number, invertRotation: boolean): void { 
	return _in(0x00000000, 0x7f6b8d75, modelHash, _fv(ratePerSecond), _fv(headlightRotation), invertRotation); 
}


/**
 * Sets whether all tags should group (normal game behavior) or should remain independent and above each ped's respective head when in a vehicle.
 * @param enabled
 */
export function setMpGamerTagsUseVehicleBehavior(enabled: boolean): void { 
	return _in(0x00000000, 0x7a27bc93, enabled); 
}


/**
 * Sets the maximum distance at which all tags will be visible and which beyond will not be displayed. Distance is measured from the camera position.
 * @param distance
 */
export function setMpGamerTagsVisibleDistance(distance: number): void { 
	return _in(0x00000000, 0xd61676b3, _fv(distance)); 
}


export function setNetworkWalkMode(enabled: boolean): void { 
	return _in(0x00000000, 0x55188d2d, enabled); 
}


export function setNuiFocus(hasFocus: boolean, hasCursor: boolean): void { 
	return _in(0x00000000, 0x5b98ae30, hasFocus, hasCursor); 
}


export function setNuiFocusKeepInput(keepInput: boolean): void { 
	return _in(0x00000000, 0x3ff5e5f8, keepInput); 
}


/**
 * Set the z-index of the NUI resource.
 * @param zIndex
 */
export function setNuiZindex(zIndex: number): void { 
	return _in(0x00000000, 0x3734aaff, zIndex); 
}


/**
 * An alternative to [SET_PED_COMPONENT_VARIATION](#\_0x262B14F48D29DE80) that uses local collection indexing instead of the global one.
 * 
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 * 
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
 * @param ped
 * @param componentId
 * @param collection
 * @param drawableId
 * @param textureId
 * @param paletteId
 */
export function setPedCollectionComponentVariation(ped: number, componentId: number, collection: string, drawableId: number, textureId: number, paletteId: number): void { 
	return _in(0x00000000, 0x88711bba, ped, componentId, _ts(collection), drawableId, textureId, paletteId); 
}


/**
 * An alternative to [SET_PED_PRELOAD_PROP_DATA](#\_0x2B16A3BFF1FBCE49) that uses local collection indexing instead of the global one.
 * 
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 * 
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_PROP](#\_0x8ED0C17) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#\_0xFBDB885F) natives.
 * @param ped
 * @param anchorPoint
 * @param collection
 * @param propIndex
 * @param textureId
 */
export function setPedCollectionPreloadPropData(ped: number, anchorPoint: number, collection: string, propIndex: number, textureId: number): void { 
	return _in(0x00000000, 0x14b5bbe0, ped, anchorPoint, _ts(collection), propIndex, textureId); 
}


/**
 * An alternative to [SET_PED_PRELOAD_VARIATION_DATA](#\_0x39D55A620FCB6A3A) that uses local collection indexing instead of the global one.
 * 
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 * 
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0x5C612867) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.
 * @param ped
 * @param componentId
 * @param collection
 * @param drawableId
 * @param textureId
 */
export function setPedCollectionPreloadVariationData(ped: number, componentId: number, collection: string, drawableId: number, textureId: number): void { 
	return _in(0x00000000, 0x3ec75558, ped, componentId, _ts(collection), drawableId, textureId); 
}


/**
 * An alternative to [SET_PED_PROP_INDEX](#\_0x93376B65A266EB5F) that uses local collection indexing instead of the global one.
 * 
 * The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.
 * 
 * Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_PROP](#\_0x8ED0C17) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#\_0xFBDB885F) natives.
 * @param ped
 * @param anchorPoint
 * @param collection
 * @param propIndex
 * @param textureId
 * @param attach
 */
export function setPedCollectionPropIndex(ped: number, anchorPoint: number, collection: string, propIndex: number, textureId: number, attach: boolean): void { 
	return _in(0x00000000, 0x75240bcb, ped, anchorPoint, _ts(collection), propIndex, textureId, attach); 
}


/**
 * Override the limits on the number and types of melee combatants. The game is limited to at most ten combatants among the three types: primary, secondary, and observers.
 * 
 * This native infers the number of observers based on the primary and secondary counts.
 * @param primaryCount
 * @param secondaryCount
 * @param populationPedCount
 */
export function setPedMeleeCombatLimits(primaryCount: number, secondaryCount: number, populationPedCount: number): void { 
	return _in(0x00000000, 0x8e51ec29, primaryCount, secondaryCount, populationPedCount); 
}


/**
 * Overrides a ped model personality type.
 * @param modelHash
 * @param personalityHash
 */
export function setPedModelPersonality(modelHash: number, personalityHash: number): void { 
	return _in(0x00000000, 0x46f6b38b, modelHash, personalityHash); 
}


/**
 * Purpose: The game's default values for these make shooting while traveling Left quite a bit slower than shooting while traveling right (This could be a game-balance thing?)
 * 
 * Default Min: -45 Degrees
 * Default Max: 135 Degrees
 * 
 * ```
 * \ ,- ~ ||~ - ,
 * , ' \    x   x    ' ,
 * ```
 * 
 * ,      \    x    x   x  ,
 * ,         \  x     x      ,
 * ,            \     x    x  ,
 * ,              \      x    ,
 * ,                \   x     ,
 * ,                 \   x x ,
 * ,                  \  x ,
 * ,                 , '
 * ' - , \_ \_ \_ ,  '  \\
 * 
 * If the transition angle is within the shaded portion (x), there will be no transition(Quicker)
 * The angle corresponds to where you are looking(North on the circle) vs. the heading of your Ped.
 * Note: For some reason,
 * 
 * You can set these values to whatever you'd like with this native, but keep in mind that the transitional spin is only clockwise for some reason.
 * 
 * I'd personally recommend something like -135/135
 * @param min
 * @param max
 */
export function setPedTurningThresholds(min: number, max: number): void { 
	return _in(0x00000000, 0x0b300f03, _fv(min), _fv(max)); 
}


export function setPlayerMaxStamina(playerId: number, maxStamina: number): boolean { 
	return _in(0x00000000, 0x35594f67, playerId, _fv(maxStamina), _r); 
}


export function setPlayerStamina(playerId: number, stamina: number): boolean { 
	return _in(0x00000000, 0xa9ec16c7, playerId, _fv(stamina), _r); 
}


/**
 * the status of default voip system. It affects on `NETWORK_IS_PLAYER_TALKING` and `mp_facial` animation.
 * This function doesn't need to be called every frame, it works like a switcher.
 * @param player
 * @param state
 */
export function setPlayerTalkingOverride(player: number, state: boolean): void { 
	return _in(0x00000000, 0xfc02caf6, player, state); 
}


/**
 * Sets the player's rich presence detail state for social platform providers to a specified string.
 * @param presenceState
 */
export function setRichPresence(presenceState: string): void { 
	return _in(0x00000000, 0x7bdcbd45, _ts(presenceState)); 
}


/**
 * Set's the ropes length change rate, which is the speed that rope should wind if started.
 * @param rope
 * @param lengthChangeRate
 */
export function setRopeLengthChangeRate(rope: number, lengthChangeRate: number): void { 
	return _in(0x00000000, 0x69b680a7, rope, _fv(lengthChangeRate)); 
}


/**
 * Toggles whether the usage of [ADD_ROPE](#\_0xE832D760399EB220) should create an underlying CNetworkRopeWorldStateData. By default this is set to false.
 * @param shouldCreate
 */
export function setRopesCreateNetworkWorldState(shouldCreate: boolean): void { 
	return _in(0x00000000, 0x0e62fc73, shouldCreate); 
}


export function setRuntimeTextureArgbData(tex: any, buffer: string, length: number): boolean { 
	return _in(0x00000000, 0x3963d527, tex, _ts(buffer), length, _r); 
}


/**
 * Replaces the pixel data in a runtime texture with the image data from a file in the current resource, or a data URL.
 * 
 * If the bitmap is a different size compared to the existing texture, it will be resampled.
 * 
 * This command may end up executed asynchronously, and only update the texture data at a later time.
 * @param tex
 * @param fileName
 */
export function setRuntimeTextureImage(tex: any, fileName: string): boolean { 
	return _in(0x00000000, 0x28fc4ecb, tex, _ts(fileName), _r); 
}


/**
 * Sets a pixel in the specified runtime texture. This will have to be committed using `COMMIT_RUNTIME_TEXTURE` to have any effect.
 * @param tex
 * @param x
 * @param y
 * @param r
 * @param g
 * @param b
 * @param a
 */
export function setRuntimeTexturePixel(tex: any, x: number, y: number, r: number, g: number, b: number, a: number): void { 
	return _in(0x00000000, 0xab65acee, tex, x, y, r, g, b, a); 
}


export function setSnakeoilForEntry(name: string, path: string, data: string): void { 
	return _in(0x00000000, 0xa7dd3209, _ts(name), _ts(path), _ts(data)); 
}


export function setTextChatEnabled(enabled: boolean): boolean { 
	return _in(0x00000000, 0x97b2f9f8, enabled, _r); 
}


/**
 * Sets the text font for the current text drawing command.
 * @param fontId
 */
export function setTextFontForCurrentCommand(fontId: number): void { 
	return _in(0x00000000, 0xada9255d, fontId); 
}


export function setTextJustification(justifyType: number): void { 
	return _in(0x00000000, 0x68cdfa60, justifyType); 
}


export function setTextWrap(start: number, end: number): void { 
	return _in(0x00000000, 0x6f60ab54, _fv(start), _fv(end)); 
}


export function setTimecycleModifierVar(modifierName: string, varName: string, value1: number, value2: number): void { 
	return _in(0x00000000, 0x6e0a422b, _ts(modifierName), _ts(varName), _fv(value1), _fv(value2)); 
}


/**
 * Sets the braking distance of the track. Used by trains to determine the point to slow down when entering a station.
 * @param track
 * @param brakingDistance
 */
export function setTrackBrakingDistance(track: number, brakingDistance: number): void { 
	return _in(0x00000000, 0x77eb78d0, track, _fv(brakingDistance)); 
}


/**
 * Toggles the track being active. If disabled mission trains will not be able to spawn on this track and will look for the next closest track to spawn
 * @param track
 * @param enabled
 */
export function setTrackEnabled(track: number, enabled: boolean): void { 
	return _in(0x00000000, 0x4b41e84c, track, enabled); 
}


/**
 * Sets the max speed for the train tracks. Used by ambient trains and for station calculations
 * @param track
 * @param newSpeed
 */
export function setTrackMaxSpeed(track: number, newSpeed: number): void { 
	return _in(0x00000000, 0x37bfc732, track, newSpeed); 
}


/**
 * Sets the ratio that a door is open for on a train.
 * @param train
 * @param doorIndex
 * @param ratio
 */
export function setTrainDoorOpenRatio(train: number, doorIndex: number, ratio: number): void { 
	return _in(0x00000000, 0x2468dbe8, train, doorIndex, _fv(ratio)); 
}


export function setTrainState(train: number, state: number): void { 
	return _in(0x00000000, 0x61cb74a0, train, state); 
}


/**
 * Toggles a train's ability to stop at stations
 * @param train
 * @param state
 */
export function setTrainStopAtStations(train: number, state: boolean): void { 
	return _in(0x00000000, 0xecb8b577, train, state); 
}


/**
 * Enables or disables whether train doors should be forced open whilst a player is inside the train. This is enabled by default in multiplayer.
 * @param forceOpen
 */
export function setTrainsForceDoorsOpen(forceOpen: boolean): void { 
	return _in(0x00000000, 0xd4d1ba63, forceOpen); 
}


export function setVehicleAlarmTimeLeft(vehicle: number, time: number): void { 
	return _in(0x00000000, 0xc108ee6f, vehicle, time); 
}


/**
 * Disables the vehicle from being repaired when a vehicle extra is enabled.
 * @param vehicle
 * @param value
 */
export function setVehicleAutoRepairDisabled(vehicle: number, value: boolean): void { 
	return _in(0x00000000, 0x5f3a3574, vehicle, value); 
}


export function setVehicleClutch(vehicle: number, clutch: number): void { 
	return _in(0x00000000, 0x2f70aced, vehicle, _fv(clutch)); 
}


export function setVehicleCurrentGear(vehicle: number, gear: number): void { 
	return _in(0x00000000, 0x8923dd42, vehicle, gear); 
}


export function setVehicleCurrentRpm(vehicle: number, rpm: number): void { 
	return _in(0x00000000, 0x2a01a8fc, vehicle, _fv(rpm)); 
}


export function setVehicleEngineTemperature(vehicle: number, temperature: number): void { 
	return _in(0x00000000, 0x6c93c4a9, vehicle, _fv(temperature)); 
}


export function setVehicleFuelLevel(vehicle: number, level: number): void { 
	return _in(0x00000000, 0xba970511, vehicle, _fv(level)); 
}


/**
 * Sets the vehicles gear ratio on choosen gear, reverse gear needs to be a negative float and forward moving gear needs to be a positive float. Refer to the examples if confused.
 * @param vehicle
 * @param gear
 * @param ratio
 */
export function setVehicleGearRatio(vehicle: number, gear: number, ratio: number): void { 
	return _in(0x00000000, 0x496ef2f2, vehicle, gear, _fv(ratio)); 
}


export function setVehicleGravityAmount(vehicle: number, gravity: number): void { 
	return _in(0x00000000, 0x1a963e58, vehicle, _fv(gravity)); 
}


/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FIELD`, this might require some experimentation.
 * Example: `SetVehicleHandlingField(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`
 * @param vehicle
 * @param class_
 * @param fieldName
 * @param value
 */
export function setVehicleHandlingField(vehicle: number, class_: string, fieldName: string, value: number): void { 
	return _in(0x00000000, 0x2ba40795, vehicle, _ts(class_), _ts(fieldName), value); 
}


/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FLOAT`, this might require some experimentation.
 * Example: `SetVehicleHandlingFloat(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`
 * @param vehicle
 * @param class_
 * @param fieldName
 * @param value
 */
export function setVehicleHandlingFloat(vehicle: number, class_: string, fieldName: string, value: number): void { 
	return _in(0x00000000, 0x488c86d2, vehicle, _ts(class_), _ts(fieldName), _fv(value)); 
}


/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_INT`, this might require some experimentation.
 * @param vehicle
 * @param class_
 * @param fieldName
 * @param value
 */
export function setVehicleHandlingInt(vehicle: number, class_: string, fieldName: string, value: number): void { 
	return _in(0x00000000, 0xc37f4cf9, vehicle, _ts(class_), _ts(fieldName), value); 
}


/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_VECTOR`, this might require some experimentation.
 * @param vehicle
 * @param class_
 * @param fieldName
 * @param value
 */
export function setVehicleHandlingVector(vehicle: number, class_: string, fieldName: string, value: Vector3): void { 
	return _in(0x00000000, 0x12497890, vehicle, _ts(class_), _ts(fieldName), value); 
}


export function setVehicleHighGear(vehicle: number, gear: number): void { 
	return _in(0x00000000, 0x20b1b3e6, vehicle, gear); 
}


export function setVehicleNextGear(vehicle: number, nextGear: number): void { 
	return _in(0x00000000, 0x3a4566f4, vehicle, nextGear); 
}


/**
 * Sets the maximum distance in which [\_SET_VEHICLE_NITRO_ENABLED](#\_0xC8E9B6B71B8E660D) PTFX are rendered. Distance is measured from the camera position.
 * @param range
 */
export function setVehicleNitroPtfxRange(range: number): void { 
	return _in(0x00000000, 0xa40cb822, _fv(range)); 
}


export function setVehicleOilLevel(vehicle: number, level: number): void { 
	return _in(0x00000000, 0x90d1cad1, vehicle, _fv(level)); 
}


/**
 * Set the vehicle's pitch bias. Only works on planes.
 * @param vehicle
 * @param value
 */
export function setVehiclePitchBias(vehicle: number, value: number): void { 
	return _in(0x00000000, 0x2a6cc9f2, vehicle, _fv(value)); 
}


/**
 * Set the vehicle's roll bias. Only works on planes.
 * @param vehicle
 * @param value
 */
export function setVehicleRollBias(vehicle: number, value: number): void { 
	return _in(0x00000000, 0x264b45de, vehicle, _fv(value)); 
}


export function setVehicleSteeringAngle(vehicle: number, angle: number): void { 
	return _in(0x00000000, 0xffccc2ea, vehicle, _fv(angle)); 
}


export function setVehicleSteeringScale(vehicle: number, scale: number): void { 
	return _in(0x00000000, 0xeb46596f, vehicle, _fv(scale)); 
}


/**
 * Sets the height of the vehicle's suspension.
 * This changes the same value set by Suspension in the mod shop.
 * Negatives values raise the car. Positive values lower the car.
 * 
 * This is change is visual only. The collision of the vehicle will not move.
 * @param vehicle
 * @param newHeight
 */
export function setVehicleSuspensionHeight(vehicle: number, newHeight: number): void { 
	return _in(0x00000000, 0xb3439a01, vehicle, _fv(newHeight)); 
}


export function setVehicleTurboPressure(vehicle: number, pressure: number): void { 
	return _in(0x00000000, 0x6485615e, vehicle, _fv(pressure)); 
}


/**
 * Sets brake pressure of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * Normal values around 1.0f
 * @param vehicle
 * @param wheelIndex
 * @param pressure
 */
export function setVehicleWheelBrakePressure(vehicle: number, wheelIndex: number, pressure: number): void { 
	return _in(0x00000000, 0xe80f4e31, vehicle, wheelIndex, _fv(pressure)); 
}


/**
 * Sets the flags of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * @param vehicle
 * @param wheelIndex
 * @param flags
 */
export function setVehicleWheelFlags(vehicle: number, wheelIndex: number, flags: number): void { 
	return _in(0x00000000, 0xd2b9e90d, vehicle, wheelIndex, flags); 
}


export function setVehicleWheelHealth(vehicle: number, wheelIndex: number, health: number): void { 
	return _in(0x00000000, 0xb22ecefd, vehicle, wheelIndex, _fv(health)); 
}


/**
 * Sets whether the wheel is powered.
 * On all wheel drive cars this works to change which wheels receive power, but if a car's fDriveBiasFront doesn't send power to that wheel, it won't get power anyway. This can be fixed by changing the fDriveBiasFront with SET_VEHICLE_HANDLING_FLOAT.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * This is a shortcut to a flag in SET_VEHICLE_WHEEL_FLAGS.
 * @param vehicle
 * @param wheelIndex
 * @param powered
 */
export function setVehicleWheelIsPowered(vehicle: number, wheelIndex: number, powered: boolean): void { 
	return _in(0x00000000, 0xbd5291a0, vehicle, wheelIndex, powered); 
}


/**
 * Sets power being sent to a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * @param vehicle
 * @param wheelIndex
 * @param power
 */
export function setVehicleWheelPower(vehicle: number, wheelIndex: number, power: number): void { 
	return _in(0x00000000, 0xc6146043, vehicle, wheelIndex, _fv(power)); 
}


/**
 * Not sure what this changes, probably determines physical rim size in case the tire is blown.
 * @param vehicle
 * @param wheelIndex
 * @param value
 */
export function setVehicleWheelRimColliderSize(vehicle: number, wheelIndex: number, value: number): void { 
	return _in(0x00000000, 0xf380e184, vehicle, wheelIndex, _fv(value)); 
}


/**
 * Sets the rotation speed of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * @param vehicle
 * @param wheelIndex
 * @param speed
 */
export function setVehicleWheelRotationSpeed(vehicle: number, wheelIndex: number, speed: number): void { 
	return _in(0x00000000, 0x35ed100d, vehicle, wheelIndex, _fv(speed)); 
}


/**
 * Sets vehicle's wheels' size (size is the same for all the wheels, cannot get/set specific wheel of vehicle).
 * Only works on non-default wheels.
 * Returns whether change was successful (can be false if trying to set size for non-default wheels).
 * @param vehicle
 * @param size
 */
export function setVehicleWheelSize(vehicle: number, size: number): boolean { 
	return _in(0x00000000, 0x53ab5c35, vehicle, _fv(size), _r); 
}


/**
 * Use along with SetVehicleWheelSize to resize the wheels (this native sets the collider size affecting physics while SetVehicleWheelSize will change visual size).
 * @param vehicle
 * @param wheelIndex
 * @param value
 */
export function setVehicleWheelTireColliderSize(vehicle: number, wheelIndex: number, value: number): void { 
	return _in(0x00000000, 0xb962d05c, vehicle, wheelIndex, _fv(value)); 
}


/**
 * Use along with SetVehicleWheelWidth to resize the wheels (this native sets the collider width affecting physics while SetVehicleWheelWidth will change visual width).
 * @param vehicle
 * @param wheelIndex
 * @param value
 */
export function setVehicleWheelTireColliderWidth(vehicle: number, wheelIndex: number, value: number): void { 
	return _in(0x00000000, 0x47bd0270, vehicle, wheelIndex, _fv(value)); 
}


/**
 * Sets the traction vector length of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * @param vehicle
 * @param wheelIndex
 * @param length
 */
export function setVehicleWheelTractionVectorLength(vehicle: number, wheelIndex: number, length: number): void { 
	return _in(0x00000000, 0x85c85a3a, vehicle, wheelIndex, _fv(length)); 
}


/**
 * Sets vehicle's wheels' width (width is the same for all the wheels, cannot get/set specific wheel of vehicle).
 * Only works on non-default wheels.
 * Returns whether change was successful (can be false if trying to set width for non-default wheels).
 * @param vehicle
 * @param width
 */
export function setVehicleWheelWidth(vehicle: number, width: number): boolean { 
	return _in(0x00000000, 0x64c3f1c0, vehicle, _fv(width), _r); 
}


/**
 * Adjusts the offset of the specified wheel relative to the wheel's axle center.
 * Needs to be called every frame in order to function properly, as GTA will reset the offset otherwise.
 * This function can be especially useful to set the track width of a vehicle, for example:
 * 
 * ```
 * function SetVehicleFrontTrackWidth(vehicle, width)
 * SetVehicleWheelXOffset(vehicle, 0, -width/2)
 * SetVehicleWheelXOffset(vehicle, 1, width/2)
 * end
 * ```
 * @param vehicle
 * @param wheelIndex
 * @param offset
 */
export function setVehicleWheelXOffset(vehicle: number, wheelIndex: number, offset: number): void { 
	return _in(0x00000000, 0x0bd6357d, vehicle, wheelIndex, _fv(offset)); 
}


export function setVehicleWheelYRotation(vehicle: number, wheelIndex: number, value: number): void { 
	return _in(0x00000000, 0xc6c2171f, vehicle, wheelIndex, _fv(value)); 
}


/**
 * Example script: https://pastebin.com/J6XGbkCW
 * 
 * List of known states:
 * 
 * ```
 * 1: Not wheeling.
 * 65: Vehicle is ready to do wheelie (burnouting).
 * 129: Vehicle is doing wheelie.
 * ```
 * @param vehicle
 * @param state
 */
export function setVehicleWheelieState(vehicle: number, state: number): void { 
	return _in(0x00000000, 0xeab8db65, vehicle, state); 
}


/**
 * Sets custom vehicle xenon lights color, allowing to use RGB palette. The game will ignore lights color set by [\_SET_VEHICLE_XENON_LIGHTS_COLOR](#\_0xE41033B25D003A07) when custom color is active. This native is not synced between players. Requires xenon lights mod to be set on vehicle.
 * @param vehicle
 * @param red
 * @param green
 * @param blue
 */
export function setVehicleXenonLightsCustomColor(vehicle: number, red: number, green: number, blue: number): void { 
	return _in(0x00000000, 0x1683e7f0, vehicle, red, green, blue); 
}


export function setVehicleXmasSnowFactor(gripFactor: number): void { 
	return _in(0x00000000, 0x80cc4c9e, _fv(gripFactor)); 
}


/**
 * Overrides a floating point value from `visualsettings.dat` temporarily.
 * @param name
 * @param value
 */
export function setVisualSettingFloat(name: string, value: number): void { 
	return _in(0x00000000, 0xd1d31681, _ts(name), _fv(value)); 
}


/**
 * Sets world clip boundaries for water quads file (water.xml, water_heistisland.xml)
 * Used internally by LOAD_GLOBAL_WATER_FILE
 * @param minX
 * @param minY
 * @param maxX
 * @param maxY
 */
export function setWaterAreaClipRect(minX: number, minY: number, maxX: number, maxY: number): void { 
	return _in(0x00000000, 0x9fcd2ee6, minX, minY, maxX, maxY); 
}


export function setWaterQuadAlpha(waterQuad: number, a0: number, a1: number, a2: number, a3: number): boolean { 
	return _in(0x00000000, 0xf49797eb, waterQuad, a0, a1, a2, a3, _r); 
}


/**
 * This native allows you to update the bounds of a specified water quad index.
 * @param waterQuad
 * @param minX
 * @param minY
 * @param maxX
 * @param maxY
 */
export function setWaterQuadBounds(waterQuad: number, minX: number, minY: number, maxX: number, maxY: number): boolean { 
	return _in(0x00000000, 0x80ad144c, waterQuad, minX, minY, maxX, maxY, _r); 
}


export function setWaterQuadHasLimitedDepth(waterQuad: number, hasLimitedDepth: boolean): boolean { 
	return _in(0x00000000, 0xd1fdcfc1, waterQuad, hasLimitedDepth, _r); 
}


export function setWaterQuadIsInvisible(waterQuad: number, isInvisible: boolean): boolean { 
	return _in(0x00000000, 0xa387d917, waterQuad, isInvisible, _r); 
}


export function setWaterQuadLevel(waterQuad: number, level: number): boolean { 
	return _in(0x00000000, 0x6292f7a8, waterQuad, _fv(level), _r); 
}


export function setWaterQuadNoStencil(waterQuad: number, noStencil: boolean): boolean { 
	return _in(0x00000000, 0xc3ff42ff, waterQuad, noStencil, _r); 
}


/**
 * This native allows you to update the water quad type.
 * 
 * Valid type definitions:
 * 
 * *   **0** Square
 * *   **1** Right triangle where the 90 degree angle is at maxX, minY
 * *   **2** Right triangle where the 90 degree angle is at minX, minY
 * *   **3** Right triangle where the 90 degree angle is at minX, maxY
 * *   **4** Right triangle where the 90 degree angle is at maxY, maxY
 * @param waterQuad
 * @param type
 */
export function setWaterQuadType(waterQuad: number, type: number): boolean { 
	return _in(0x00000000, 0x50131eb2, waterQuad, type, _r); 
}


export function setWaveQuadAmplitude(waveQuad: number, amplitude: number): boolean { 
	return _in(0x00000000, 0xe4174b7b, waveQuad, _fv(amplitude), _r); 
}


/**
 * This native allows you to update the bounds of a specified water quad index.
 * @param waveQuad
 * @param minX
 * @param minY
 * @param maxX
 * @param maxY
 */
export function setWaveQuadBounds(waveQuad: number, minX: number, minY: number, maxX: number, maxY: number): boolean { 
	return _in(0x00000000, 0x1fcc1faf, waveQuad, minX, minY, maxX, maxY, _r); 
}


/**
 * directionX/Y should be constrained between -1.0 and 1.0
 * A positive value will create the wave starting at min and rolling towards max
 * A negative value will create the wave starting at max and rolling towards min
 * Applying both values allows you to make diagonal waves
 * @param waveQuad
 * @param directionX
 * @param directionY
 */
export function setWaveQuadDirection(waveQuad: number, directionX: number, directionY: number): boolean { 
	return _in(0x00000000, 0xfc9341a3, waveQuad, _fv(directionX), _fv(directionY), _r); 
}


/**
 * A setter for the recoil shake amplitude of a weapon.
 * @param weaponHash
 * @param amplitude
 */
export function setWeaponRecoilShakeAmplitude(weaponHash: number, amplitude: number): void { 
	return _in(0x00000000, 0x9864312f, weaponHash, _fv(amplitude)); 
}


/**
 * Disables weapons aim blocking due to environment for local player.
 * For non-player peds [SET_PED_ENABLE_WEAPON_BLOCKING](#\_0x97A790315D3831FD) can be used.
 * @param state
 */
export function setWeaponsNoAimBlocking(state: boolean): void { 
	return _in(0x00000000, 0xdfd8f6de, state); 
}


/**
 * Disables the game's built-in auto-reloading.
 * @param state
 */
export function setWeaponsNoAutoreload(state: boolean): void { 
	return _in(0x00000000, 0x311150e5, state); 
}


/**
 * Disables autoswapping to another weapon when the current weapon runs out of ammo.
 * @param state
 */
export function setWeaponsNoAutoswap(state: boolean): void { 
	return _in(0x00000000, 0x02a7b50e, state); 
}


export function setWeatherCycleEntry(index: number, typeName: string, timeMult: number): boolean { 
	return _in(0x00000000, 0xd264d4e1, index, _ts(typeName), timeMult, _r); 
}


/**
 * Sets whether or not the weather should be owned by the network subsystem.
 * 
 * To be able to use [\_SET_WEATHER_TYPE_TRANSITION](#\_0x578C752848ECFA0C), this has to be set to false.
 * @param network
 */
export function setWeatherOwnedByNetwork(network: boolean): void { 
	return _in(0x00000000, 0x2703d582, network); 
}


/**
 * Shuts down the `loadingScreen` NUI frame, similarly to `SHUTDOWN_LOADING_SCREEN`.
 */
export function shutdownLoadingScreenNui(): void { 
	return _in(0x00000000, 0xb9234afb); 
}


/**
 * Equivalent of [START_FIND_KVP](#\_0xDD379006), but for another resource than the current one.
 * @param resourceName
 * @param prefix
 */
export function startFindExternalKvp(resourceName: string, prefix: string): number { 
	return _in(0x00000000, 0x8f2eecc3, _ts(resourceName), _ts(prefix), _r, _ri); 
}


/**
 * The backing function for TriggerLatentServerEvent.
 * @param eventName
 * @param eventPayload
 * @param payloadLength
 * @param bps
 */
export function triggerLatentServerEventInternal(eventName: string, eventPayload: string, payloadLength: number, bps: number): void { 
	return _in(0x00000000, 0x128737ea, _ts(eventName), _ts(eventPayload), payloadLength, bps); 
}


/**
 * The backing function for TriggerServerEvent.
 * @param eventName
 * @param eventPayload
 * @param payloadLength
 */
export function triggerServerEventInternal(eventName: string, eventPayload: string, payloadLength: number): void { 
	return _in(0x00000000, 0x7fdd1128, _ts(eventName), _ts(eventPayload), payloadLength); 
}


/**
 * Will unregister and cleanup a registered NUI callback handler.
 * 
 * Use along side the REGISTER_RAW_NUI_CALLBACK native.
 * @param callbackType
 */
export function unregisterRawNuiCallback(callbackType: string): void { 
	return _in(0x00000000, 0x7fb46432, _ts(callbackType)); 
}


/**
 * Transiently updates the entity with the specified mapdata index and entity index.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 * @param mapdata
 * @param entity
 * @param entityDef
 */
export function updateMapdataEntity(mapdata: number, entity: number, entityDef: any): void { 
	return _in(0x00000000, 0xfc52cb91, mapdata, entity, ...(_obj(entityDef))); 
}
