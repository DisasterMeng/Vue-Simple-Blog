import http from '../utils/http'
import querystring from 'query-string'

const BASE_URL = process.env.VUE_APP_BASE_API

// blog
export const fetchBlogsApi = (params:object) => http.get('/api/blogs/', { params: params })
export const fetchBlogDetailApi = (id:string) => http.get(`/api/blogs/${id}`)
export const fetchBlogCommentApi = (id:string) => http.get(`/api/blogs/${id}/comments`)


// category
export const fetchCategoriesApi = () => http.get('/api/categorys/')

// friend
export const fetchFriendsApi = () => http.get('/api/friends/')

// picture
export const fetchPicturesApi = (params:object) => http.get('/api/summarys/', { params: params })

// about
export const fetchAboutApi = () => http.get('/api/about')

// my
export const fetchMyInfoApi = () =>http.get('/api/user/my-info')

// trird login
export const fetchGithubLoginUrl = (params:object) =>`${BASE_URL}api/oauth/github-third-url/?${querystring.stringify(params)}`

// comment
export const fetchAddCommentApi = (params:object) => http.post(`/api/comments/`,params)

export const fetchMdToHtmlApi = (params:object) =>http.get(`/api/comments/md-to-html?${querystring.stringify(params)}`)