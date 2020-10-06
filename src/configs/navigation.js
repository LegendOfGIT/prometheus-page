export default [
    { from: 'ALL', to: 'MULTIMEDIA', path: '/multimedia' },
    { from: 'MULTIMEDIA', to: 'MULTIMEDIA_GAMES', path: '/multimedia/games' },
    { from: 'MULTIMEDIA_GAMES', to: 'MULTIMEDIA_GAMES_NINTENDO_SWITCH', path: '/multimedia/games/nintendo-switch' },
    { from: 'MULTIMEDIA_GAMES', to: 'MULTIMEDIA_GAMES_PC', path: '/multimedia/games/pc' },
];