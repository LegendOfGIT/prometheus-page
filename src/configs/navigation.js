export default [
    { moduleId: 'settings', path: '/settings' },
    { moduleId: 'wishlist', path: '/wishlist' },

    { from: 'ALL', to: 'MULTIMEDIA', path: '/multimedia' },
    { from: 'MULTIMEDIA', to: 'MULTIMEDIA_GAMES', path: '/multimedia/games' },
    { from: 'MULTIMEDIA_GAMES', to: 'MULTIMEDIA_GAMES_NINTENDO_SWITCH', path: '/multimedia/games/nintendo-switch' },
    { from: 'MULTIMEDIA_GAMES', to: 'MULTIMEDIA_GAMES_PC', path: '/multimedia/games/pc' },
    { from: 'MULTIMEDIA_GAMES', to: 'MULTIMEDIA_GAMES_PLAYSTATION_4', path: '/multimedia/games/playstation-4' },
    { from: 'MULTIMEDIA_GAMES', to: 'MULTIMEDIA_GAMES_PLAYSTATION_3', path: '/multimedia/games/playstation-3' },
    { from: 'MULTIMEDIA_GAMES', to: 'MULTIMEDIA_GAMES_XBOX_ONE', path: '/multimedia/games/xbox-one' },
    { from: 'MULTIMEDIA_GAMES', to: 'MULTIMEDIA_GAMES_XBOX_360', path: '/multimedia/games/xbox-360' },
    { from: 'ALL', to: 'ELECTRONICS_AND_COMPUTERS', path: '/electronics-and-computers' },
    { from: 'ELECTRONICS_AND_COMPUTERS', to: 'ELECTRONICS_AND_COMPUTERS_LARGE_APPLIANCES', path: '/electronics-and-computers/large-appliances' },
    { from: 'ELECTRONICS_AND_COMPUTERS_LARGE_APPLIANCES', to: 'ELECTRONICS_AND_COMPUTERS_LARGE_APPLIANCES_FRIDGES_AND_FREEZERS', path: '/electronics-and-computers/large-appliances/fridges-and-freezers' },
];
