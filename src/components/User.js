import { useNavigate } from "react-router-dom";

function User(){
    const navigate = useNavigate();

    const myinfo = () => {
        return navigate("/myinfo");
    }

    return (
        <div style={{marginRight: "5px"}}>
            <span onClick={myinfo}>user name</span>
        </div>
    );
}

export default User;