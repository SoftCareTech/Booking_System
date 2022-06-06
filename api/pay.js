import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
//baseURL: "https://pay-raph-ray.herokuapp.com/"
const instance = axios.create({
    baseURL: "https://pay-raph-ray.herokuapp.com/"
})

export default instance
