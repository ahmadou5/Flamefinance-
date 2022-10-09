import { ChainId, Token, WBNB, WCELO } from '@pancakeswap/sdk'
import { BUSD_TESTNET, CAKE_TESTNET, } from './common'

export const celoTestnetTokens = {
  wbnb: WCELO[ChainId.CELO_TESTNET],
  cake: CAKE_TESTNET,
  busd: BUSD_TESTNET,
  syrup: new Token(
    ChainId.CELO_TESTNET,
    '',
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
