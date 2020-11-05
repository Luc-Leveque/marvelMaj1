import md5 from 'md5'
import PrivateKey from '../.secret'

export const publicKey = '5a3ef8fbf8b8bc9c15e221395e38d0e1'

export const timeStamp = new Date().getMilliseconds()

export const hash = md5(`${timeStamp}${PrivateKey}${publicKey}`)
