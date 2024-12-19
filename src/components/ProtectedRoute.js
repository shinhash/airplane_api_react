import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function ProtectedRoute({children}){
    const navigate = useNavigate();
    const accessToken = sessionStorage.getItem("accessToken");
    console.log("accessToken : ", accessToken);

    if(accessToken === undefined || accessToken === null || accessToken === ""){
        alert("로그인이 필요한 페이지입니다.");
        return <Navigate to="/signin"/>;
    }

    const accessTokenChk = async () => {
        let reqUrl = "http://localhost:8099/airplane/accessTokenChk";
        let reqData = {accessToken: accessToken,}
        try{
            const resp = await axios.post(reqUrl, reqData, { withCredentials: true });
            if(resp.data.resultCode !== "APAT-000") {
                alert("로그인 정보가 없어 로그인 화면으로 이동합니다.");
                navigate("/signin");
            }
        }catch(error){
            console.error("error : ", error);
            navigate("/signin");
        }
    }
    accessTokenChk();
    return children;
}

export default ProtectedRoute;