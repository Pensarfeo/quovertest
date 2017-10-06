import axios from 'axios'

const token = localStorage.getItem('token')
// set up api defaults
axios.defaults.params = {}
axios.defaults.params.apikey = 'vuRSkbbMpqujS0F2yhkuFnDVJ32znJIN'
axios.defaults.baseURL = 'https://qover-test.apigee.net'
axios.defaults.headers.post[ 'Content-Type' ] = 'application/json'
axios.defaults.headers.post[ 'Qover-Api-Version' ] = '1.0'
// axios.defaults.headers.post.Authorization = `Bearer ${ token }`
axios.defaults.transformRequest = [ (data, headers) => JSON.stringify(data) ]
