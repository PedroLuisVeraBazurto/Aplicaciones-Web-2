import axios from 'axios'
export const httpAxios=axios.create({
    baseURL:`http://localhost:2500/v1/salaevento/api/`
  })
  
  