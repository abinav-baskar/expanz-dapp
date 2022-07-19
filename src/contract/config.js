import privateInfo from "./private";

const config = {
    XPANZ: {
        56: '0xBA96731324dE188ebC1eD87ca74544dDEbC07D7f',
        97: '0x41fc2c520C5591d29094825C903e5Aa2C6d4262D',
        43114: '0xf5848969A070ee6c8C0beD58B6f1c9a95d46914d'
    },
    wbnb: {
        56: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
        97: "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd",
        43114: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7'
    },
    pair: {
        56: "0x44f382cec44c33067cb12fcfc08457eb6734be02",
        97: "0x123456ababababababababababababababababab",
        43114: '0xf3deaa4a6911dd506fbe5a073ea261e5b6f5144c'
    },
    Treasury: {
        56: "0x4DD90D3cE962039A3c66d613207aC2d449dFa04F",
        97: "0x4DD90D3cE962039A3c66d613207aC2d449dFa04F",
        43114: '0xc3Bf4CC50bBA34af9e796F34472505495988E21D'
    },
    RFV: {
        56: "0x00dE99c90E8971D3E1c9cBA724381B537F6e88C1",
        97: "0x00dE99c90E8971D3E1c9cBA724381B537F6e88C1",
        43114: '0x2F0a436176f71908e2505c5F7d4663e24871ce73'
    },
    BlockExplorerURL: {
        56: "https://bscscan.com",
        97: "https://testnet.bscscan.com",
        43114: 'https://snowtrace.io'
    },
    RpcURL: {
        wss: {
            1: "wss://mainnet.infura.io/ws/v3/9254bae6432742babcfc7d367c7e77cd",
        },
        https: {
            56: "https://bsc-dataseed1.defibit.io/",
            97: "https://speedy-nodes-nyc.moralis.io/03eb35954a0b7ed092444a8e/bsc/testnet",
            43114: 'https://speedy-nodes-nyc.moralis.io/03eb35954a0b7ed092444a8e/bsc/testnet'
        },
    },
    chainHexID: {
        56: "0x38",
        97: "0x61",
        43114: '0xa86a'
    },
    THE_GRAPH_URL: "https://api.thegraph.com/subgraphs/name/cryptolegend1/titano-subgraph",
    chainID: 56,
    INFURA_ID: privateInfo.REACT_APP_INFURA_ID,
    API_KEY: privateInfo.REACT_APP_API_KEY,
    X_API_KEY: 0, // moralis.io
    APY: 102483.58,
    DAILY: 1.9176,
    privateKey: privateInfo.REACT_APP_PRIVATE_KEY,
};

export default config;
