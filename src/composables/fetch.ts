import axios from 'axios'
import { Ref } from 'vue'
interface RESPONSE<T> {
  data: T;
  status: number;
  message?: string;
}
export function useFetch<T>(url: string, method = 'GET', params={}): [Ref<T>, Ref<string>] {
  let data = ref()
  let error = ref('')
  axios({
    url,
    method,
    ...(method === 'GET' ? { params }:{ data: params })
  }).then((res: RESPONSE<T>) => {
    if (res.status === 200) {
      data.value = res.data
    }
  }).catch((err) => {
    error.value = err
  })
  return [data, error]
}

