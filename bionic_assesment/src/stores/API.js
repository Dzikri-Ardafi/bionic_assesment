import { defineStore } from "pinia";
import axios from 'axios'
import { jobDetail } from "../data";
const API_URL = import.meta.env.VITE_API_URL

export const methodApi = defineStore('method-api', {
  state: () => {
    return {
      data: {},
      responsePost: {}
    }
  },

  actions: {
    getData(){
      return new Promise((resolve, reject) => {
        axios.get(`${API_URL}pt-job-applies/no-auth`).then((res) => {
          this.data = res
          resolve("succes to get data")
        }).catch((err) => {
          reject(err.message)
          this.data= jobDetail
        })
      })
    },
    applyJob(payload){
      return new Promise((resolve, reject) => {
        axios.post(`${API_URL}pt-job-posts/no-auth`, {payload}).then((res) => {
          resolve('success apply job')
          this.responsePost = {
            ...payload,
            message: 'Succes apply job'
          }
        }).catch((err) => {
          reject(err.message)
          this.responsePost = {
            ...payload,
            message: 'Failed apply job'
          }
        })
      })
    }
  }

})