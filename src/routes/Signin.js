import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
const TableDiv = styled.div``;
const ButtonDiv = styled.div`
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Space = styled.span`
    width: 40%;
`;
const Span = styled.span``;
const Br = styled.br``;
const Table = styled.table``;
const Thead = styled.thead``;
const Tbody = styled.tbody``;
const Tr = styled.tr``;
const Td = styled.td``;

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
`;


function Signin(){
    const [form, setForm] = useState({
        userId: '',
        userPw: '',
    });
    const navigate = useNavigate();

    const signInBtn = async (e) => {
        if(form.userId !== "" &&  form.userPw !== ""){
            let reqUrl = "http://localhost:8099/airplane/signin";
            let reqData = {
                userId: form.userId,
                userPw: form.userPw,
            }
            try{
                const resp = await axios.post(reqUrl, reqData, { withCredentials: true });
                console.log("resp : ", resp);
                if(resp.status === 200){
                    if(resp.data.resultCode === "APSI-000"){
                        sessionStorage.setItem("accessToken", resp.data.accessToken);
                        navigate("/main");
                    }else{
                        alert("로그인 정보가 일치하지 않습니다.");
                    }
                }
            }catch(error){
                alert("로그인 실패");
            }
        }else{
            alert("로그인 정보를 입력해주세요.");
        }
    }
    const signUpBtn = (e) => {
        navigate("/signup");
    }
    
    const inputValueChange = (e) => {
        switch(e.target.id){
            case "userId":
                setForm({...form, userId: e.target.value});
            break;
            case "userPw":
                setForm({...form, userPw: e.target.value});
            break;
            default:
            break;
        }
    }
    
    return (
        <Wrapper>
            <ContentDiv>
                <TableDiv>
                    <Table>
                        <Thead></Thead>
                        <Tbody>
                            <Tr>
                                <Td><Span>ID</Span></Td>
                                <Td><Input type="text" id="userId" value={form.userId} onChange={inputValueChange} required /></Td>
                            </Tr>
                            <Tr>
                                <Td><Span>PASSWORD</Span></Td>
                                <Td><Input type="password" id="userPw" value={form.userPw} onChange={inputValueChange} required /></Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableDiv>
                <Br />
                <ButtonDiv>
                    <Button onClick={signInBtn}>로그인</Button>
                    <Space />
                    <Button onClick={signUpBtn}>회원가입</Button>
                </ButtonDiv>
            </ContentDiv>
        </Wrapper>
    );
}

export default Signin;