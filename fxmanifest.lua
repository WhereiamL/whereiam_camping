fx_version 'adamant'
games { 'gta5' }
lua54 'yes'
this_is_a_map 'yes'
author 'STIFLER AKKA WHEREIAM'

shared_scripts {
	'@ox_lib/init.lua',
	'@es_extended/imports.lua'
}

client_scripts {
    'client.lua',
	'shared.lua'
}

server_scripts {
    '@oxmysql/lib/MySQL.lua',
    'server.lua'
}

ui_page 'ui/index.html'

files {
	'ui/index.html',
	'ui/**',
	"ui/fonts/*"
}
