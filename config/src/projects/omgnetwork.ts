import { RISK } from './common'
import { Project } from './types'

export const omgnetwork: Project = {
  name: 'OMG Network',
  slug: 'omgnetwork',
  bridges: [
    {
      address: '0x3Eed23eA148D356a72CA695DBCe2fceb40a32ce0',
      sinceBlock: 9687270,
      tokens: ['ETH'],
    },
    {
      address: '0x070cB1270A4B2bA53c81CeF89d0FD584Ed4F430B',
      sinceBlock: 9687286,
      tokens: [
        'USDT',
        'OMG',
        'BAT',
        'WBTC',
        'DAI',
        'CAT',
        'renBTC',
        'GNO',
        'BUSD',
        'ELEC',
        'PAX',
        'SPANK',
        'LION',
        'ZRX',
        'MATIC',
        'TUSD',
        'BNT',
        'KICK',
        'LINK',
        'BAL',
        'CEL',
        'CRO',
        'LRC',
        'USDC',
        'AST',
        'PASS',
        'KNC',
      ],
    },
  ],
  associatedToken: 'OMG',
  details: {
    links: {
      websites: ['https://omg.network'],
      apps: [],
      documentation: ['https://docs.omg.network/'],
      explorers: ['https://blockexplorer.mainnet.v1.omg.network/'],
      repositories: ['https://github.com/omgnetwork/plasma-contracts'],
      socialMedia: [
        'https://twitter.com/omgnetworkhq',
        'https://discord.gg/m7NysJjKhm',
        'https://t.me/omgnetwork',
        'https://linkedin.com/company/omgnetwork/',
      ],
    },
    technologyName: 'Plasma',
    technologyDetails: 'More Viable Plasma',
    purpose: 'Payments',
    riskView: {
      stateCorrectness: RISK.FRAUD_PROOFS,
      dataAvailability: RISK.DATA_EXTERNAL,
      censorshipResistance: RISK.UNKNOWN,
      upgradeability: RISK.UPGRADABLE,
      owner: RISK.UNKNOWN,
    },
    parameters: [
      {
        name: 'Primary use case',
        value: 'Payments',
      },
      {
        name: 'Hypothetical level of decentralization',
        value: 'High',
        sentiment: 'good',
      },
      {
        name: 'Current level of decentralization',
        value: 'Low',
        tooltip: 'Single operator. Supports decentralized watchers.',
        sentiment: 'warning',
      },
      {
        name: 'Can funds be stolen by the operator?',
        value: 'No',
        tooltip:
          'Users can safely exit to L1 even if the operator is malicious.',
        sentiment: 'good',
      },
      {
        name: 'Permisonless?',
        value: 'No',
        sentiment: 'bad',
        tooltip: 'Only operator can produce new blocks',
      },
      {
        name: 'Force TX mechanism?',
        value: 'Yes but only for withdrawals',
        sentiment: 'good',
      },
      {
        name: 'Privacy',
        value: 'No',
      },
      {
        name: 'Smart contracts',
        value: 'No',
      },
    ],
    news: [
      {
        date: '2020-06-01',
        name: 'Scaling Ethereum with the OMG Network',
        link: 'https://omg.network/omg-network-scales-ethereum/',
      },
    ],
  },
}
