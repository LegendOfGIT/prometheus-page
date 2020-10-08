export default [
    { from: 'ALL', to: 'MULTIMEDIA', path: '/multimedia' },
    { from: 'MULTIMEDIA', to: 'MULTIMEDIA_GAMES', path: '/multimedia/games' },
    { from: 'MULTIMEDIA_GAMES', to: 'MULTIMEDIA_GAMES_NINTENDO_SWITCH', path: '/multimedia/games/nintendo-switch' },
    { from: 'MULTIMEDIA_GAMES', to: 'MULTIMEDIA_GAMES_PC', path: '/multimedia/games/pc' },
    { from: 'ALL', to: 'ELECTRONICS_AND_COMPUTERS', path: '/electronics-and-computers' },
    { from: 'ELECTRONICS_AND_COMPUTERS', to: 'ELECTRONICS_AND_COMPUTERS_LARGE_APPLIANCES', path: '/electronics-and-computers/large-appliances' },
    { from: 'ELECTRONICS_AND_COMPUTERS_LARGE_APPLIANCES', to: 'ELECTRONICS_AND_COMPUTERS_LARGE_APPLIANCES_FRIDGES_AND_FREEZERS', path: '/electronics-and-computers/large-appliances/fridges-and-freezers' },
];
