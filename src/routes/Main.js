import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logout from "../components/Logout";
import User from "../components/User";


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
const ButtonDiv = styled.div`
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Space = styled.div`
    height: 50px;
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

const Table = styled.table``;
const Thead = styled.thead``;
const Tbody = styled.tbody``;
const Tr = styled.tr``;
const Td = styled.td``;

function Main(){
    return (
        <div style={{justifyItems: "center", width:"1000px"}}>
            <Space />
            <div style={{float: "right"}}>
                <div style={{display: "flex"}}>
                    <User />
                    <div>|</div>
                    <Logout />
                </div>
            </div>
            <Space />
            <div>
                <div>메인화면</div>
            </div>
            <div>
                <div style={{display: "flex", width:""}}>
                    <div style={{border: "1px solid black"}}>
                        <div>오늘의 날씨</div>
                        <div style={{display: "flex"}}>
                            <div style={{border: "1px solid black"}}>
                                날씨 이미지
                            </div>
                            <div>
                                <div style={{border: "1px solid black"}}>온도</div>
                                <div style={{border: "1px solid black"}}>체감온도</div>
                            </div>
                        </div>
                    </div>
                    <div style={{width:""}}>
                        <div style={{border: "1px solid black"}}>
                            <div>인기도시 랭킹</div>
                            <div>
                                <table border="1">
                                    <thead></thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>아틀라스화물항공</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>아틀라스화물항공</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>아틀라스화물항공</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>아틀라스화물항공</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    검색조건
                </div>
                <div>
                    <table border="1">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>아틀라스화물항공</td>
                                <td>5Y8522</td>
                                <td>ORD(시카고)</td>
                                <td>0:05</td>
                                <td>0:20</td>
                                <td>0:21</td>
                                <td>화물</td>
                                <td>출발</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>아틀라스화물항공</td>
                                <td>5Y8522</td>
                                <td>ORD(시카고)</td>
                                <td>0:05</td>
                                <td>0:20</td>
                                <td>0:21</td>
                                <td>화물</td>
                                <td>출발</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>아틀라스화물항공</td>
                                <td>5Y8522</td>
                                <td>ORD(시카고)</td>
                                <td>0:05</td>
                                <td>0:20</td>
                                <td>0:21</td>
                                <td>화물</td>
                                <td>출발</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>아틀라스화물항공</td>
                                <td>5Y8522</td>
                                <td>ORD(시카고)</td>
                                <td>0:05</td>
                                <td>0:20</td>
                                <td>0:21</td>
                                <td>화물</td>
                                <td>출발</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Main;