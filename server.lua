ESX.RegisterServerCallback('getCurrenStatus', function(source, cb, plate)
	xPlayer = ESX.GetPlayerFromId(source)
	ident = xPlayer.getIdentifier()

	MySQL.query('SELECT plate FROM owned_vehicles WHERE owner = ?', { ident }, function(rez)
		if rez then
			for i = 1, #rez do
				rtrn = rez[i]
				cb(rtrn.plate)
			end
		end
	end)
end)

--Instance stuff
RegisterServerEvent("instanceIn")
AddEventHandler("instanceIn", function(player)
	Player(source).state.instance = player
	TriggerClientEvent("instancePlayer", player)
end)

RegisterServerEvent("leaveInstance")
AddEventHandler("leaveInstance", function(source)
	Player(source).state.instance = nil
	TriggerClientEvent("instanceLeft", source)
end)
--end of instance

--Stash
RegisterServerEvent('camperMakeTheStash')
AddEventHandler('camperMakeTheStash', function()
	local src = source
	local name = GetPlayerName(src)
	exports.ox_inventory:RegisterStash(name, "Camper_Stash", 70, 300000)
	TriggerClientEvent('camperOpenStash', src, name)
end)
--End of stash

--Clothes stuff
ESX.RegisterServerCallback('getPlayerDressing', function(source, cb)
	local xPlayer = ESX.GetPlayerFromId(source)

	TriggerEvent('esx_datastore:getDataStore', 'property', xPlayer.identifier, function(store)
		local count  = store.count('dressing')
		local labels = {}

		for i = 1, count, 1 do
			local entry = store.get('dressing', i)
			table.insert(labels, entry.label)
		end

		cb(labels)
	end)
end)

ESX.RegisterServerCallback('getPlayerOutfit', function(source, cb, num)
	local xPlayer = ESX.GetPlayerFromId(source)
	TriggerEvent('esx_datastore:getDataStore', 'property', xPlayer.identifier, function(store)
		local outfit = store.get('dressing', num)
		cb(outfit.skin)
	end)
end)

RegisterServerEvent('removeOutfit')
AddEventHandler('removeOutfit', function(label)
	local xPlayer = ESX.GetPlayerFromId(source)

	TriggerEvent('esx_datastore:getDataStore', 'property', xPlayer.identifier, function(store)
		local dressing = store.get('dressing') or {}

		table.remove(dressing, label)
		store.set('dressing', dressing)
	end)
end)
--End of clothes stuff