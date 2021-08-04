import * as axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'b03070c6-9b60-4788-9dc4-ffd74fcfb476'
  }
});

export const usersAPI = {
  getUsers(currentPage=1, pageSize=10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  },
  getProfile(userId) {
    console.log('Obsolete method. Please profileAPI object')
    return profileAPI.getProfile(userId)
  },
  follow(userId) {
    return instance.post(`follow/${userId}`)
      .then(response => response.data)
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
      .then(response => response.data)
  },
  getAllUsers() {
    return instance.get('users')
  }
}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`)
      .then(response => response.data)
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status })
  },
  savePhoto(photoFile) {
    const formData = new FormData()
    formData.append('image', photoFile, )
    return instance.put('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  saveProfile(profile) {
    return instance.put(`profile`, profile)
  }
}

export const AuthAPI = {
  getAuth() {
    return instance.get(`auth/me`)
  },
  login(email, password, rememberMe= false) {
    return instance.post(`auth/login`, { email, password, rememberMe })
  },
  logout() {
    return instance.delete(`auth/login`)
  },
}

export const SecurityAPI = {
  getCaptcha() {
    return instance.get(`security/get-captcha-url`)
  },
}


