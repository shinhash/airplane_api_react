import { useNavigate } from "react-router-dom";

function Logout(){
    const navigate = useNavigate();

    const logout = () => {
        if(!window.confirm("로그아웃 하시겠습니까?")){
            return;
        }
        sessionStorage.removeItem("accessToken");
        navigate("/signin");
    }

    return (
        <div style={{marginLeft: "5px"}}>
            <span onClick={logout}>Logout</span>
        </div>
    );
}

export default Logout;