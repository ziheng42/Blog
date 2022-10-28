import $axios from "../index";

interface LoginData {
    username: string,
    password: string
}

export const login = (data: LoginData) => {
    $axios(
        {
            url: '/login',
            method: 'post',
            data
        }
    )
}
