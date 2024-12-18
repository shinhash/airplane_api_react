import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import cloneDeep from "lodash/cloneDeep";
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
const ButtonChk = styled.button`
    background-color: gray;
    border: none;
    border-radius: 2px;
    width: 45px;
    height: 30px;
    margin-left: 5px;

    color: white;
    font-size: 10px;
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
const InputId = styled.input`
    background-color: lightgray;
    border: none;
    border-radius: 5px;
    width: 150px;
    height: 30px;

    color: black;
    font-size: 12px;
    padding-left: 10px;
    padding-right: 10px;
`;

function Signup(){
    const [form, setForm] = useState({
        userId: '',
        userPw: '',
        userPwRe: '',
        userNm: '',
        userEmail: '',
    });
    const [idchkYn, setIdChkYn] = useState("N");
    
    const navigate = useNavigate();

    const backBtn = (e) => {
        navigate("/signIn");
    }
    const signUpBtn = async (e) => {

        if(idchkYn !== "Y"){
            alert("ID 체크를 진행해주세요.");
            return;   
        }
        if(    form.userId === "" || form.userPw === "" 
            || form.userPwRe === "" || form.userNm === "" 
            || form.userEmail === ""){
            alert("회원가입 정보를 입력해주세요.");
            return;
        }
        if(form.userPw !== form.userPwRe){
            alert("비밀번호 정보를 확인해주세요.");
            return;
        }


        let reqUrl = "http://localhost:8099/airplane/signup";
        let reqData = {
            userId: form.userId,
            userPw: form.userPw,
            userPwRe: form.userPwRe,
            userNm: form.userNm,
            userEmail: form.userEmail,
        }
        try{
            const resp = await axios.post(reqUrl, reqData);
            console.log(resp);
            if(resp.status === 200){
                if(resp.data.resultCode === "APSU-000"){
                    alert("회원가입 성공");
                    navigate("/signIn");
                }
                if(resp.data.resultCode === "APIC-100"){
                    alert("이미 사용중인 ID 입니다.");
                    setIdChkYn("N");
                }
            }
        }catch(error){
            console.log(error);
            alert(error.message);
        }
    }

    const idCkeck = async (e) => {
        let reqUrl = "http://localhost:8099/airplane/signidchk";
        let reqData = {userId: form.userId}
        try{
            const resp = await axios.post(reqUrl, reqData);
            console.log(resp);
            if(resp.status === 200){
                if(resp.data.resultCode === "APIC-000"){
                    setIdChkYn("Y");
                    alert("사용가능한 ID 입니다.");
                }else if(resp.data.resultCode === "APIC-100"){
                    alert("이미 사용중인 ID 입니다.");
                }
            }
        }catch(error){
            console.log(error);
            alert(error.message);
        }
    }
    
    const inputValueChange = (e) => {
        switch(e.target.id){
            case "userId":
                setForm({...form, userId: e.target.value});
                setIdChkYn("N");
            break;
            case "userPw":
                setForm({...form, userPw: e.target.value});
            break;
            case "userPwRe":
                setForm({...form, userPwRe: e.target.value});
            break;
            case "userNm":
                setForm({...form, userNm: e.target.value});
            break;
            case "userEmail":
                setForm({...form, userEmail: e.target.value});
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
                                <Td>
                                    <InputId type="text" id="userId" value={form.userId} onChange={inputValueChange} required />
                                    <ButtonChk onClick={idCkeck}>ID 체크</ButtonChk>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td><Span>PASSWORD</Span></Td>
                                <Td><Input type="password" id="userPw" value={form.userPw} onChange={inputValueChange} required /></Td>
                            </Tr>
                            <Tr>
                                <Td><Span>PASSWORD RE</Span></Td>
                                <Td><Input type="password" id="userPwRe" value={form.userPwRe} onChange={inputValueChange} required /></Td>
                            </Tr>
                            <Tr>
                                <Td><Span>NAME</Span></Td>
                                <Td><Input type="text" id="userNm" value={form.userNm} onChange={inputValueChange} required /></Td>
                            </Tr>
                            <Tr>
                                <Td><Span>EAMIL</Span></Td>
                                <Td><Input type="text" id="userEmail" value={form.userEmail} onChange={inputValueChange} required /></Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableDiv>
                <Br />
                <ButtonDiv>
                    <Button onClick={signUpBtn}>확인</Button>
                    <Space />
                    <Button onClick={backBtn}>뒤로가기</Button>
                </ButtonDiv>
            </ContentDiv>
        </Wrapper>
    );
}

export default Signup;