import {
  GetExchangeAmountRequest,
  GetExchangeAmountResponse,
  CreateTransactionRequest,
  CreateTransactionResponse,
  ChangellyApi,
  GetCurrenciesResponse,
  GetMinAmountRequest,
  GetMinAmountResponse,
  GetStatusRequest,
  GetStatusResponse,
  ResponseWrapper,
} from './types'
import request from '../wallet/helpers/request'
import {ADALITE_CONFIG} from '../config'

export default (): ChangellyApi => {
  const getCurrencies = (): Promise<ResponseWrapper<GetCurrenciesResponse>> => {
    const url = `${ADALITE_CONFIG.ADALITE_SERVER_URL}/api/changelly/getCurrencies`
    return request(url)
  }

  const post = (url: string, requestBody: any) =>
    request(url, 'POST', JSON.stringify(requestBody), {'Content-Type': 'application/json'})

  const getMinAmount = (
    requestBody: GetMinAmountRequest
  ): Promise<ResponseWrapper<GetMinAmountResponse>> => {
    const url = `${ADALITE_CONFIG.ADALITE_SERVER_URL}/api/changelly/getMinAmount`
    return post(url, requestBody)
  }

  const getExchangeAmount = (
    requestBody: GetExchangeAmountRequest
  ): Promise<ResponseWrapper<GetExchangeAmountResponse>> => {
    const url = `${ADALITE_CONFIG.ADALITE_SERVER_URL}/api/changelly/getExchangeAmount`
    return post(url, requestBody)
  }

  const createTransaction = (
    requestBody: CreateTransactionRequest
  ): Promise<ResponseWrapper<CreateTransactionResponse>> => {
    const url = `${ADALITE_CONFIG.ADALITE_SERVER_URL}/api/changelly/createTransaction`
    return post(url, requestBody)
  }

  const getStatus = (
    requestBody: GetStatusRequest
  ): Promise<ResponseWrapper<GetStatusResponse>> => {
    const url = `${ADALITE_CONFIG.ADALITE_SERVER_URL}/api/changelly/getStatus`
    return post(url, requestBody)
  }

  return {
    getCurrencies,
    getMinAmount,
    getExchangeAmount,
    createTransaction,
    getStatus,
  }
}
