// 没有命令成const  因为const是一个保留关键字



export const PageName = {
    Home:'home',
}


export const TimeFormat = {
    default:'YYYY-MM-DD hh:mm'
}


export const ApiUrl = {
    BaseUrl: process.env.NODE_ENV === 'development'?'http://127.0.0.1:8000/':'http://www.white-letter.xyz:8000/'
}


