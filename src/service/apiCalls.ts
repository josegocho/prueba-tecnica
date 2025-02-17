import axios from 'axios'
import type { Product, ApiCallListResponse } from '@/Interfaces'
//import { useStore } from '@/store/auth'
//import { type Ref, ref } from 'vue'

export class ApiCalls {
  private url: string

  constructor() {
    this.url = 'https://api.escuelajs.co/api/v1/'
  }

  public async getProductsList(): Promise<ApiCallListResponse> {
    return axios
      .get(this.url + 'products')
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })
  }

  public async getProductById(id: number): Promise<unknown> {
    return axios.get(this.url + 'products/' + id)
  }

  public async saveProduct(product: Product): Promise<unknown> {
    const formData = new FormData()
    formData.append('name', product.title)
    return axios.post(this.url + 'products/', product)
  }

  public async updateProduct(product: Product): Promise<unknown> {
    return axios.put(this.url + 'products/' + product.id, product)
  }

  public async deleteProduct(id: number): Promise<unknown> {
    return axios.delete(this.url + 'products/' + id)
  }
}
