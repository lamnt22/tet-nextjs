import { DefaultLayout } from "@/components/layouts"
import { NextPageWithLayout } from "@/types"
import logoAccount from "../../../utils/images/logoAccount.jpg"
import { FaCircleCheck } from "react-icons/fa6"
import { MdEdit } from "react-icons/md"

const Account: NextPageWithLayout = () => {
    return (
        <div>
            <div style={{ width: "100%", background: "#2C2C2C", height: "37vh", display: "flex", justifyContent: 'center' }}>
                <div style={{ width: "90%", background: "#000000", marginTop: "55px", borderRadius: "10px", padding: '40px', color: "white", display: "flex" }}>
                    <div style={{ width: "40%" }}>
                        <h2 style={{ fontSize: "2rem", width: "100%" }}>ユーザープロフィール</h2>
                        <div style={{ background: "#2C2C2C", width: "100%", height: "16vh", padding: "15px", borderRadius: "5px", marginTop: "20px", display: "flex" }}>
                            <div style={{ width: "25%" }}>
                                <div style={{ width: "100%", height: "100%", background: "#000000", borderRadius: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <img src={logoAccount.src} alt="" />
                                </div>
                            </div>
                            <div style={{ width: "75%", display: "flex", alignItems: "center" }}>
                                <div>
                                    <p style={{ fontSize: "1.5rem", marginLeft: "20px" }}>ステータス :</p>
                                    <p style={{ fontSize: "1.75rem", marginLeft: "20px", display: "flex" }}>
                                        <p>有料会員 </p>
                                        <p><FaCircleCheck style={{ color: "#DDC355", marginTop: "7px", marginLeft: "5px" }} /></p>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "60%", marginRight: "40px" }}>
                        <table style={{ width: "100%", marginLeft: "5%", fontSize: "1.5rem" }}>
                            <tbody>
                                <tr style={{ borderBottom: "solid 2px #2D2D2D" }}>
                                    <th style={{ padding: "17px", textAlign: "left", width: "30%", color: "#969696" }}>会員番号</th>
                                    <td style={{ padding: "17px", textAlign: "left" }}>00000</td>
                                    <td style={{ padding: "17px", textAlign: "left", width: "20%" }}></td>
                                </tr>
                                <tr style={{ borderBottom: "solid 2px #2D2D2D" }}>
                                    <th style={{ padding: "17px", textAlign: "left", width: "30%", color: "#969696" }}>ユーザーネーム</th>
                                    <td style={{ padding: "17px", textAlign: "left" }}>
                                        <input type="text" style={{ color: "white", backgroundColor: "transparent", border: "none", width: "100%" }} value="山田太郎" />
                                    </td>
                                    <td style={{ padding: "17px", textAlign: "left", width: "20%" }}>
                                        <button type="button" style={{ border: "solid 1px white", width: "100%", borderRadius: "50px", display: "flex", alignItems: "center", paddingLeft: "10px" }}>
                                            <MdEdit /> <p style={{ marginLeft: "5px" }}>変更</p>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <th style={{ padding: "17px", textAlign: "left", width: "20%", color: "#969696" }}>メールアドレス</th>
                                    <td style={{ padding: "17px", textAlign: "left" }}>山田太郎</td>
                                    <td style={{ padding: "17px", textAlign: "left", width: "20%" }}>
                                        <button type="button" style={{ border: "solid 1px white", width: "100%", borderRadius: "50px", display: "flex", alignItems: "center", paddingLeft: "10px" }}>
                                            <MdEdit /> <p style={{ marginLeft: "5px" }}>変更</p></button>
                                    </td>
                                </tr>
                                {/* <tr style={{borderBottom: "solid 2px #2D2D2D"}}>
                                <th style={{padding: "17px",textAlign: "left", width: "20%", color: "#969696"}}>決済手段</th>
                                <td style={{padding: "17px",textAlign: "left"}}>クレジットカード支払い</td>
                                <td style={{padding: "17px",textAlign: "left"}}>変更</td>
                            </tr> */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div style={{ width: "100%", background: "#2C2C2C", height: "37vh", display: "flex", color: "white", paddingLeft: "75px", paddingRight: "75px", paddingTop: "50px" }}>
                <div style={{ width: "20%" }}>
                    <p style={{ borderLeft: "1px solid white", paddingLeft: "10px", fontWeight: "bold", fontSize: "1.5rem" }}>決済情報 <span style={{ fontSize: "1.25rem" }}>(有料プラン)</span></p>
                </div>
                <div style={{width: "80%"}}>
                    <div style={{ display: "flex" }}>
                        <p style={{ color: "#A0A0A0", fontSize: "1.25rem" }}>前回決済日</p>
                        <p style={{ marginLeft: "10px", fontSize: "1.25rem" }}>2023/12/07</p>
                    </div>
                    <div style={{ display: "flex", padding: "20px", background: "#3E3E3E", width: "100%", marginTop: "10px", borderRadius: "5px" }}>
                        <p style={{ fontSize: "1.25rem" }}>前回決済日</p>
                        <p style={{ marginLeft: "10px", fontSize: "1.25rem" }}>2023/12/07</p>
                        <div style={{marginLeft: "10px", fontSize: "1.25rem"}}>
                            <button>自動更新停止</button>
                        </div>
                    </div>
                    <div>
                        <p style={{ color: "#A0A0A0", fontSize: "1.25rem", marginTop: "10px" }}>※有料プランの決済を止めたい方は、 自動更新停止を行なってください。</p>
                        <p style={{ color: "#A0A0A0", fontSize: "1.25rem" }}>※自動更新を停止すると無料会員となります。</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

Account.Layout = DefaultLayout

export default Account;