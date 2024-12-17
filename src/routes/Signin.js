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
    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");
    const navigate = useNavigate();

    const signInBtn = async (e) => {
        if(userId !== "" &&  userPw !== ""){
            let jsonData = {
                "userId" : userId,
                "userPw" : userPw,
            }
            await axios
                .post("http://localhost:8099/airplane/signin", jsonData)
                .then((resp) => {
                    console.log(resp.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        }else{
            alert("로그인 정보를 입력해주세요.");
        }
    }
    const signUpBtn = (e) => {
        navigate("/signup")
    }
    
    const inputValueChange = (e) => {
        switch(e.target.id){
            case "userId":
                setUserId(e.target.value);
            break;
            case "userPw":
                setUserPw(e.target.value);
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
                                <Td><Input type="text" id="userId" value={userId} onChange={inputValueChange} /></Td>
                            </Tr>
                            <Tr>
                                <Td><Span>PASSWORD</Span></Td>
                                <Td><Input type="password" id="userPw" value={userPw} onChange={inputValueChange} /></Td>
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