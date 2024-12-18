import axios from "axios";
import { Navigate } from "react-router-dom";

function ProtectedRoute({children}){
    const accessToken = sessionStorage.getItem("accessToken");
    console.log("accessToken : ", accessToken);

    if(accessToken === undefined || accessToken === null || accessToken === ""){
        alert("로그인이 필요한 페이지입니다.");
        return <Navigate to="/signin"/>
    }

    const accessTokenChk = async () => {
        let reqUrl = "http://localhost:8099/airplane/accessTokenChk";
        let reqData = {
            userId: accessToken,
        }
        try{
            const resp = await axios.post(reqUrl, reqData);
            console.log(resp);
            if(resp.status === 200){
                if(resp.data.resultCode === "APAT-100"){
                    alert("로그인 정보가 없습니다.");
                    return <Navigate to="/signin"/>
                }
            }
        }catch(error){
            console.log(error);
            alert(error.message);
            return <Navigate to="/signin"/>
        }
    }
    
    accessTokenChk();
    return children;
}

export default ProtectedRoute;