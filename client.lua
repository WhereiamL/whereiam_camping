campingZones = {
    { id = 1, coords = vec3(3030.9, 3351.0, 74.1) },
    { id = 2, coords = vec3(3291.2, 5152.7, 17.0) },
}

CreateThread(function()
    for i = 1, #campingZones do
        local blip = AddBlipForCoord(vec3(campingZones[i].coords.x, campingZones[i].coords.y, campingZones[i].coords.z))
        SetBlipSprite(blip, 479)
        SetBlipScale(blip, 0.9)
        SetBlipColour(blip, 34)
        SetBlipDisplay(blip, 4)
        SetBlipAsShortRange(blip, true)
        BeginTextCommandSetBlipName("STRING")
        AddTextComponentString("Camping Zone")
        EndTextCommandSetBlipName(blip)
        SetBlipCategory(blip, 11)
    end
end)

local handBrake = false
local inTrailer = false
local canInt = false
local requiredVeh = 1876516712 -- vehicle required for the camping progress
local lastPos = {}

CreateThread(function()
    for i = 1, #campingZones, 1 do
        box = lib.zones.box({
            coords = vec3(campingZones[i].coords.x, campingZones[i].coords.y, campingZones[i].coords.z),
            debug = false, -- you can set this to true if you want to see how your camping zone looks like
            size = vec3(55, 55, 35), -- size of the camping zone
            inside = inside,
            onEnter = function()
                vehNow = GetVehiclePedIsIn(PlayerPedId(), false)
                playerVeh = GetEntityModel(vehNow)
                if playerVeh == requiredVeh then
                    ESX.ShowNotification("You're currently in the camper zone!")
                    ESX.TriggerServerCallback("getCurrenStatus", function(status)
                        if status then
                            canInt = true
                            exports.qtarget:Vehicle({
                                options = {
                                    {
                                        icon = "fas fa-door-open",
                                        label = "Interact with your camper " .. status,
                                        num = 1,
                                        action = function()
                                            if canInt == true then
                                                if not handBrake then
                                                    lib.registerContext({
                                                        id = 'camper',
                                                        title = "Camper",
                                                        options = {
                                                            ["Enter your camper"] = {
                                                                event = 'camperOnEnter'
                                                            },
                                                            ["Pull the handbrake"] = {
                                                                event = 'camperHandBrake'
                                                            },
                                                        }
                                                    })
                                                else
                                                    lib.registerContext({
                                                        id = 'camper',
                                                        title = "Camper",
                                                        options = {
                                                            ["Enter your camper"] = {
                                                                event = 'camperOnEnter'
                                                            },
                                                            ["Release the handbrake"] = {
                                                                event = 'camperHandBrake'
                                                            },
                                                        }
                                                    })
                                                end
                                                lib.showContext('camper')
                                            end
                                        end
                                    },
                                },
                                distance = 2
                            })
                        else
                            ESX.ShowNotification("Your current vehicle is an camper, but it does not belong to you!")
                        end
                    end, plate)
                end
            end,
            onExit = function()
                Wait(500)
                if inTrailer == false then
                    canInt = false
                    exports.qtarget:RemoveVehicle({
                        1
                    })
                    exports.qtarget:RemoveZone('CloakRoomCamper')
                    exports.qtarget:RemoveZone('StashCamper')
                    exports.qtarget:RemoveZone('LeaveCamper')
                else
                    exports.qtarget:AddBoxZone("CloakRoomCamper", vector3(724.19, 1287.72, 54.04), 1.0, 1.95, {
                        name = "CloakRoomCamper",
                        heading = 0.0,
                        debugPoly = false,
                        minZ = 53.77834,
                        maxZ = 58.87834,
                    }, {
                        options = {
                            {
                                event = "savedClothes",
                                icon = "fa-solid fa-shirt",
                                label = "Manage your clothes",
                            },
                        },
                        distance = 2.5
                    })
                    exports.qtarget:AddBoxZone("StashCamper", vector3(725.8, 1287.62, 54.04), 0.65, 0.80, {
                        name = "StashCamper",
                        heading = 0.0,
                        debugPoly = false,
                        minZ = 49.39,
                        maxZ = 58.99,
                    }, {
                        options = {
                            {
                                event = "stashOpenF",
                                icon = "fa-solid fa-vault",
                                label = "Open your stash",
                            },
                        },
                        distance = 2.5
                    })
                    exports.qtarget:AddBoxZone("LeaveCamper", vector3(727.04, 1285.46, 54.04), 0.8, 1.0, {
                        name = "LeaveCamper",
                        heading = 0.0,
                        debugPoly = false,
                        minZ = 49.39,
                        maxZ = 58.99,
                    }, {
                        options = {
                            {
                                event = "leaveCamper",
                                icon = "fa-solid fa-door-open",
                                label = "Leave the camper",
                            },
                        },
                        distance = 2.5
                    })
                end
            end
        })
        lib.zones.box(box)
    end
end)

--instance stuff
AddEventHandler("camperOnEnter", function()
    if handBrake then
        inTrailer = true
        TriggerServerEvent("instanceIn", GetPlayerServerId(NetworkGetEntityOwner(PlayerPedId())))
    else
        ESX.ShowNotification("You need to pull the handbrake!")
    end
end)

RegisterNetEvent('instancePlayer')
AddEventHandler('instancePlayer', function()
    lastPos = GetEntityCoords(PlayerPedId())
    DoScreenFadeOut(2000)
    Wait(2000)
    DoScreenFadeIn(2000)
    SetEntityCoords(PlayerPedId(), 727.10, 1285.70, 52.99)
end)

AddEventHandler('leaveCamper', function()
    TriggerServerEvent("leaveInstance", GetPlayerServerId(NetworkGetEntityOwner(PlayerPedId())))
end)

RegisterNetEvent('instanceLeft')
AddEventHandler('instanceLeft', function()
    DoScreenFadeOut(2000)
    Wait(2000)
    SetEntityCoords(PlayerPedId(), lastPos)
    DoScreenFadeIn(2000)
    inTrailer = false
end)
--End of instance

--handBrake
AddEventHandler("camperHandBrake", function()
    if not handBrake then
        if lib.progressCircle({
            duration = 5000,
            position = 'bottom',
            useWhileDead = false,
            canCancel = false,
            disable = {
                move = true,
                mouse = true,
                combat = true,
                car = true,
            },
            anim = {
                scenario = 'PROP_HUMAN_BUM_BIN',
            },
        }) then
            handBrake = true
            pp = GetPlayersLastVehicle(PlayerPedId())
            FreezeEntityPosition(pp, true)
            ESX.ShowNotification("Handbrake pulled!")
        end
    else
        ESX.ShowNotification("You're releasing the handbrake!")
        if lib.progressCircle({
            duration = 5000,
            position = 'bottom',
            useWhileDead = false,
            canCancel = false,
            disable = {
                move = true,
                mouse = true,
                combat = true,
                car = true,
            },
            anim = {
                scenario = 'PROP_HUMAN_BUM_BIN',
            },
        }) then
            handBrake = false
            pp = GetPlayersLastVehicle(PlayerPedId())
            FreezeEntityPosition(pp, false)
        end
    end
end)

--CloakRoomCamper
AddEventHandler("savedClothes", function()
    ESX.TriggerServerCallback('getPlayerDressing', function(dressing)
        local elements = {}
        for i = 1, #dressing, 1 do
            table.insert(elements, {
                label = dressing[i],
                value = i
            })
            SendNUIMessage({
                action = "open",
                outfit = elements,
                skinara = dressing[i]
            })
            SetNuiFocus(true, true)
            TriggerScreenblurFadeIn(0)
            CreatePedScreen()
        end
    end)
end)

RegisterNUICallback("changeSavedToCurrent", function(i)
    TriggerEvent('skinchanger:getSkin', function(skin)
        ESX.TriggerServerCallback('getPlayerOutfit', function(clothes)
            TriggerEvent('skinchanger:loadClothes', skin, clothes)
            TriggerEvent('esx_skin:setLastSkin', skin)
            TriggerEvent('skinchanger:getSkin', function(skin)
                TriggerServerEvent('esx_skin:save', skin)
                deletePedOnScreen()
                Wait(200)
                CreatePedScreen()
            end)
        end, i)
    end)
end)

function CreatePedScreen(first)
    CreateThread(function()
        local heading = GetEntityHeading(PlayerPedId())
        SetFrontendActive(true)
        ActivateFrontendMenu("FE_MENU_VERSION_EMPTY_NO_BACKGROUND", true, -1)
        Wait(100)
        SetMouseCursorVisibleInMenus(false)
        PlayerPedPreview = ClonePed(PlayerPedId(), heading, true, false)
        local x, y, z = table.unpack(GetEntityCoords(PlayerPedPreview))
        SetEntityCoords(PlayerPedPreview, x, y, z - 100)
        FreezeEntityPosition(PlayerPedPreview, true)
        SetEntityVisible(PlayerPedPreview, false, false)
        ReplaceHudColourWithRgba(117, 0, 0, 0, 0)
        NetworkSetEntityInvisibleToNetwork(PlayerPedPreview, false)
        Wait(200)
        SetPedAsNoLongerNeeded(PlayerPedPreview)
        GivePedToPauseMenu(PlayerPedPreview, 1)
        SetPauseMenuPedLighting(true)
        if first then
            SetPauseMenuPedSleepState(false)
            Wait(1000)
            SetPauseMenuPedSleepState(true)
        else
            SetPauseMenuPedSleepState(true)
        end
    end)
end

deletePedOnScreen = function()
    DeleteEntity(PlayerPedPreview)
    SetFrontendActive(false)
    PlayerPedPreview = nil
end

RegisterNUICallback("save", function()
    local input = lib.inputDialog('Save outfit', { 'Name of the outfit' })
    if input then
        local outfitName = input[1]
        TriggerEvent('skinchanger:getSkin', function(skin)
            TriggerServerEvent('esx_clotheshop:saveOutfit', outfitName, skin)
            ESX.ShowNotification("Outfit " .. outfitName .. " saved!")
        end)
    end
end)

RegisterNUICallback("delete", function()
    ESX.TriggerServerCallback('getPlayerDressing', function(dressing)
        local elements = {}
        for i = 1, #dressing, 1 do
            table.insert(elements, {
                title = dressing[i],
                event = 'deleteChosen',
                args = i,
                description = "Click to delete",
            })
        end
        lib.registerContext({
            id = 'deleteOutfits',
            title = "Delete menu",
            options = elements,
        })
        lib.showContext('deleteOutfits')
        TriggerScreenblurFadeOut(0)
        deletePedOnScreen()
    end)
end)

AddEventHandler("deleteChosen", function(i)
    TriggerServerEvent('esx_property:removeOutfit', i)
    ESX.ShowNotification("Outfit successfully deleted!")
end)
--End of the clothes

--StashCamper
AddEventHandler("stashOpenF", function()
    TriggerServerEvent("camperMakeTheStash")
end)

RegisterNetEvent('camperOpenStash')
AddEventHandler('camperOpenStash', function(name)
    TriggerEvent('ox_inventory:openInventory', 'stash', name)
    Wait(2000)
    lib.requestAnimDict('anim@gangops@facility@servers@bodysearch@', 2000)
    TaskPlayAnim(PlayerPedId(), "anim@gangops@facility@servers@bodysearch@", "player_search", 8.0, -8.0, -1, 48, 0, false, false, false)
end)
--End of stashes

RegisterNUICallback("close", function(data, cb)
    TriggerScreenblurFadeOut(0)
    SetNuiFocus(false, false)
    cb("ok")
    deletePedOnScreen()
end)

--Utils
lAnim = function(dict)
    while (not HasAnimDictLoaded(dict)) do
        RequestAnimDict(dict)
        Citizen.Wait(10)
    end
end