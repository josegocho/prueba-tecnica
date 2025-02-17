export interface Product extends saveProduct {
  id: number
  creationAt: string
  updatedAt: string
}

export interface saveProduct {
  title: string
  description: string
  price: number
  category: Category
  images: Array<string>
}

export interface User {
  id: number
  name: string
  email: string
  password: string
}
export interface Category {
  id: number
  name: string
  image: string
}

export interface ApiCallListResponse {
  data: Array<Product>
}
