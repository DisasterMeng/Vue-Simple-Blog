import http from '../utils/http'
import { ApiUrl } from '../constant'
import querystring from 'querystring'

// blog
export const fetchBlogsApi = params => http.get('/api/blogs/', { params: params })
export const fetchBlogDetailApi = id => http.get(`/api/blogs/${id}`)
export const fetchBlogCommentApi = id => http.get(`/api/blogs/${id}/comments`)


// category
export const fetchCategorysApi = _ => http.get('/api/categorys/')

// friend
export const fetchFriendsApi = _ => http.get('/api/friends/')

// picture
export const fetchPicturesApi = params => http.get('/api/summarys/', { params: params })

// about
export const fetchAboutApi = _ => http.get('/api/about')

// my
export const fetchMyInfoApi = _ =>http.get('/api/user/my-info')

// trird login
export const fetchGithubLoginUrl = params =>`${ApiUrl.BaseUrl}api/oauth/github-third-url/?${querystring.stringify(params)}`

// comment
export const fetchAddCommentApi = data => http.post(`/api/comments/`,data)

export const fetchMdToHtmlApi = params =>http.get(`/api/comments/md-to-html?${querystring.stringify(params)}`)