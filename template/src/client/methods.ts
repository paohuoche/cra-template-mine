// import { notification } from 'antd'
import axios from "axios"
import { __API_DOMAIN__ } from "./varables"

/**
 * 请求错误处理
 */
export const handle_ajax_fail = (e: any) => {
  if (e && e.response) {
    let error = e // as  AxiosError<ServerError>

    const { code, message, errors } = error.response.data

    if (error.response.status === 401) {
    } else if (error.response.status > 500) {
      // const path = error.response.request.responseURL
      let description = ""

      // notification.error({
      //   message: '异常',
      //   description: `${description}异常`,
      // })
    } else {
      // handleErrorCode(errors ? errors : message)
    }
    return {
      code,
      message: errors ? errors : message,
    }
  } else {
    // notification.error({ message: '异常', description: '未知错误' })
    throw Error()
  }
}

export const client = axios.create({
  // baseURL: '/mock'
  baseURL: __API_DOMAIN__,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
})

export const uploadClient = axios.create({
  baseURL: __API_DOMAIN__,
  // headers: {
  //   'Content-Type': 'application/json',
  // },
  withCredentials: true,
})

/**
 * get
 * @returns
 */
export const get =
  <T = any>(url: string) =>
  () => {
    return client
      .get<T>(url)
      .then((res) => res.data)
      .catch((e) => {
        handle_ajax_fail(e)
        throw new Error()
      })
  }

/**
 * post
 * @param url string
 * @param data any
 * @returns
 */
export const post = <T = unknown>(params: { url: string; data: any }) => {
  return client
    .post<T>(params.url, params.data)
    .then((res) => {
      return res.data
    })
    .catch((e) => {
      handle_ajax_fail(e)
      throw new Error()
    })
}

/**
 * del
 * @param url string
 * @param data any
 * @returns
 */
export const del = (url: string, data: any) => {
  return client
    .delete(url, data)
    .then((res) => res.data)
    .catch((e) => {
      handle_ajax_fail(e)
      throw new Error()
    })
}

/**
 * put
 * @param url string
 * @param data any
 * @returns void
 */
export const put = (url: string, data: any) => {
  return client
    .put(url, data)
    .then((res) => res.data)
    .catch((e) => {
      handle_ajax_fail(e)
      throw new Error()
    })
}
