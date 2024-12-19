import Logout from "../components/Logout";
import User from "../components/User";

function BaseLayout(){
    return (
        <div style={{justifySelf: "center"}}>
            <div style={{display: "flex"}}>
                <div style={{marginRight: "80%"}}>메인화면</div>
                <div style={{display: "flex"}}>
                    <User />
                    <div>|</div>
                    <Logout />
                </div>
            </div>
            <div>
                <div>
                    <div>오늘의 날씨</div>
                    <div>
                        <div>
                            날씨 이미지
                        </div>
                        <div>
                            <div>온도</div>
                            <div>체감온도</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
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

export default BaseLayout;