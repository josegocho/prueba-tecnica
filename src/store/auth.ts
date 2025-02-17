import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => ({
    user: '',
  }),
  actions: {
    async login(email: string, password: string) {
      if (email === 'admin@example.com' && password === '123456') {
        this.user = email
      } else {
        throw new Error('Invalid credentials')
      }
    },
    logout() {
      this.user = ''
    },
  },
})
