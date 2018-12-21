
// 授权登录
const baseUrl = process.env.API_BASE_URL
export const wauthLogin = baseUrl + `/applets/oauth`

/* 高德KEY */
export const GDkey = '07c82c0d56cd17a093fff8d566678983'
// 关键字搜索
export const keywordsURL = 'https://restapi.amap.com/v3/place/text'
// 逆地理编码
export const regeoURL = 'https://restapi.amap.com/v3/geocode/regeo'
// 驾车路线规划
export const drivingURL = 'https://restapi.amap.com/v3/direction/driving'
