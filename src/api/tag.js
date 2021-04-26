/* 接口相关请求 */

import request from '@/utils/request'

export const getTags = () => {
    return request({
        methods:'GET',
        url:"/api/tags"
    })
}