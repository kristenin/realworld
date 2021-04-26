/**
 * 用户接口模块
 */

import request from "@/utils/request"

export const login = ({
    email,
    password
}) => {
    return request({
        method:"POST",  //请求方法
        url:"/api/users/login", //请求路径
        data:{  //POST请求体放到data中
            user:{
                email,
                password 
            }
        }
    })
}