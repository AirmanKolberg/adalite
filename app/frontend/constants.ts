import {AuthMethodEnum} from './types'

export enum MainTabs {
  ACCOUNT = 'Accounts',
  SENDING = 'Sending',
  STAKING = 'Staking',
  ADVANCED = 'Advanced',
}

export enum SubTabs {
  DELEGATE_ADA = 'Delegate ADA',
  CURRENT_DELEGATION = 'Current Delegation',
  STAKING_HISTORY = 'Staking history',
  SEND_ADA = 'Send ADA',
  TRANSACTIONS = 'Transactions',
  ADDRESSES = 'Receive ADA',
  KEYS = 'Keys',
  ACCOUNTS = 'Accounts',
  POOL_OWNER = 'Pool registration',
  BALANCE = 'Balance',
  SHELLEY_BALANCES = 'Shelley Balances',
}

export const AuthMethodNames = {
  [AuthMethodEnum.MNEMONIC]: 'Mnemonic',
  [AuthMethodEnum.HW_WALLET]: 'Hardware Wallet',
  [AuthMethodEnum.KEY_FILE]: 'Key file',
}
