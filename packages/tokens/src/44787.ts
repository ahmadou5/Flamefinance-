import { ChainId, Token, WCELO } from '@pancakeswap/sdk'
import { BUSD_CELO_T, FLAME } from './common'

export const celoTestnetTokens = {
  wbnb: WCELO[ChainId.CELO_TESTNET],
  flame: FLAME,
  busd: BUSD_CELO_T,
  syrup: new Token(
    ChainId.CELO_TESTNET,
    '0xB289e7b820F9b85e28156232085da7307795934f',
    18,
    'SYRUP',
    'SyrupBar Token',
    'https://pancakeswap.finance/',
  ),
  test1: new Token(
    ChainId.CELO_TESTNET,
    '0x9d8b9dbac2B6F21bC4bd6b05A0De4ccdBf219747',
    18,
    'test1',
    'test1 Token',
    'https://www.bakeryswap.org/',
  ),
}
