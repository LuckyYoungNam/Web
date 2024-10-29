import axios from "axios"
import React from "react";
const RedirectPage = () => {
    const code = new URL(document.location.toString()).searchParams.get('code');
    console.log(code);
    // axios.get('서버API',code)
    // .then(
    //     //zustand 유저 정보 저장
    //     //const data = response.data
    //     //window.location.href(`/main`);
    // )
    return(
        <>로그인 대기중</>
    )
}
export default RedirectPage;