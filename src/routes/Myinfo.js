import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import User from "../components/User";
import Logout from "../components/Logout";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
`;

const ContentDiv = styled.div`
    border: 1px solid darkgray;
    border-radius: 5px;
    padding: 20px;
`;

const Label = styled.label`
    display:inline-block;
    text-align:left;
	width:120px;
	font-weight:bold;
`;

const ButtonDiv = styled.div`
    margin: 0;
    display: flex;
    justify-content: right;
    align-items: center;
    margin-top: 20px;
`;

const Button = styled.button`
    background-color: gray;
    border: none;
    border-radius: 5px;
    width: 80px;
    height: 40px;
    
    color: white;
    font-size: 12px;
    font-weight: bold;
    align-content: center;
`;

const Input = styled.input`
    background-color: lightgray;
    border: none;
    border-radius: 5px;
    width: 200px;
    height: 30px;

    color: black;
    font-size: 12px;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 5px;
`;

function Myinfo(){
    const navigate = useNavigate();
    const [form, setForm] = useState({
        userId: '',
        userNm: '',
        userEmail: '',
        regDt: '',
    });
    
    const userInfo = async () => {
        let reqUrl = "http://localhost:8099/airplane/myinfo/detail";
        let reqData = {
            accessToken: sessionStorage.getItem("accessToken"),
        }
        const resp = await axios.post(reqUrl, reqData, { withCredentials: true });
        console.log("data : ", resp);
        if(resp.status === 200){
            const myInfoData = resp.data.resultData;
            setForm({
                ...form,
                userId: myInfoData.userId,
                userNm: myInfoData.userNm,
                userEmail: myInfoData.userEmail,
                regDt: myInfoData.regDt,
            });
        }
    }

    const userInfoUpdate = async () => {
        let reqUrl = "http://localhost:8099/airplane/myinfo/update";
        let reqData = {
            accessToken: sessionStorage.getItem("accessToken"),
            userId: form.userId,
            userNm: form.userNm,
            userEmail: form.userEmail,
        }
        const resp = await axios.post(reqUrl, reqData, { withCredentials: true });
        console.log("data : ", resp);
        if(resp.status === 200){
            if(resp.data.resultCode !== "APMU-000"){
                alert("내정보 수정 실패");
            }else{
                alert("내정보 수정 성공");
                navigate("/main");
            }
        }
    }

    useEffect(() => {
        userInfo();
    }, [])
    
    return (
        <Wrapper style={{display:"flex"}}>
            <div style={{display: "flex"}}>
                <div style={{marginRight: "10%"}}>내정보</div>
                <div style={{display: "flex"}}>
                    <User />
                    <div>|</div>
                    <Logout />
                </div>
            </div>
            <ContentDiv>
                <div><span>내 정보</span></div>
                <div>
                    <Label>ID</Label>
                    <Input value={form.userId} readOnly />
                </div>
                <div>
                    <Label>이름</Label>
                    <Input value={form.userNm} onChange={(e) => setForm({...form, userNm: e.target.value})} />
                </div>
                <div>
                    <Label>이메일</Label>
                    <Input value={form.userEmail} onChange={(e) => setForm({...form, userEmail: e.target.value})} />
                </div>
                <div>
                    <Label>가입일자</Label>
                    <Input value={form.regDt} readOnly />
                </div>
                <ButtonDiv>
                    <Button onClick={() => navigate("/main")}>뒤로가기</Button>
                    <Button onClick={userInfoUpdate}>수정</Button>
                </ButtonDiv>
            </ContentDiv>
        </Wrapper>
    );
}

export default Myinfo;