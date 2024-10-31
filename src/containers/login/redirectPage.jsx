import axios from "axios"
import React, { useEffect } from 'react';
const RedirectPage = () => {
    const code = new URL(document.location.toString()).searchParams.get('code');
    console.log(code);
    useEffect(() => {
        const getToken = async () => {
            try {
                const response = await axios.post(
                    'http://3.39.4.132/login',
                    {
                        code: code  // 요청 본문에 인증 코드 추가
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `${code}`
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