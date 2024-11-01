import axios from "axios"
import React, { useEffect } from 'react';
const RedirectPage = () => {
    const code = new URL(document.location.toString()).searchParams.get('code');
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
    useEffect(() => {
        const getToken = async () => {
            try {
                const response = await axios.post(
                    `${BACKEND_URL}/users/login`,
                    {
                        code: code  //인가코드 전달
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `${code}`,
                            'withCredentials': true,
                        },
                    }
                );
                const { accessToken, refreshToken } = response.data;
                console.log('Access Token:', accessToken);
                console.log('Refresh Token:', refreshToken);
                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('code', code);
                if(localStorage.getItem('accessToken')){
                    window.location.href = '/main';
                }
            } catch (error) {
                console.error('토큰 요청 중 에러 발생:', error);
            }
        };
        if (code) {
            getToken();
        }
    }, [code]);
    return (
        <></>
    )
}
export default RedirectPage;