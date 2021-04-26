/**
 * 文章相关请求路由模块
 */

import request from "@/utils/request"

export const getArticles = () => {
    return request({
        method:"GET",   //请求方法
        url:"/api/articles" //请求路径
    })
}

export const createArticle = ({
    title,
    description,
    body,
    tagList=[]
}) => {
    return request({
        method:"POST",
        url:"/api/articles",
        data:{
            article:{
                title,
                description,
                body,
                tagList
            }
        }
    })
}