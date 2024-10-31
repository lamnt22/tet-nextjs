import { getUrlPayment } from "@/services"
import router from 'next/router';
import { useState } from "react";

export const Step4 = (props: any) => {

    return (
        <div style={{ width: "100%", backgroundColor: "black", paddingTop: "20px", borderRadius: "5px" }}>
            <div style={{ width: "100%", textAlign: "center", color: "white", fontWeight: "bold", fontSize: "1.5rem", marginBottom: "15px" }}>決済完了</div>
            <div style={{ width: "100%", textAlign: "center", color: "white", fontWeight: "bold", fontSize: "1rem", marginBottom: "10px" }}>決済が完了しました。</div>
            <div style={{ width: "100%", textAlign: "center", color: "white", fontWeight: "bold", fontSize: "1rem", marginBottom: "30px" }}>引き続き、 ファンクラブコンテンツをお楽しみください。</div>
            <div style={{ width: "100%", color: "white", display: "flex", justifyContent: "center" }}>
                <div style={{width: "80%", display: "flex", justifyContent: "center", background: "#272727", borderRadius: "5px"}}>
                    <table style={{ width: "90%", color: "white", background: "#272727", marginTop: "10px" }}>
                        <tbody>
                            <tr style={{ borderBottom: "3px solid #3D3D3D" }}>
                                <th style={{ textAlign: "left", padding: "3%", width: "40%", color: "#656565" }}>注文内容</th>
                                <td style={{ textAlign: "left", padding: "3%" }}>月額会員プラン</td>
                            </tr>
                            <tr style={{ borderBottom: "2px solid #3D3D3D" }}>
                                <th style={{ textAlign: "left", padding: "3%", width: "40%", color: "#656565" }}>お支払い方法</th>
                                <td style={{ textAlign: "left", padding: "3%" }}>ドコモ払い</td>
                            </tr>
                            <tr style={{ borderBottom: "3px solid #3D3D3D" }}>
                                <th style={{ textAlign: "left", padding: "3%", width: "40%", color: "#656565" }}>決済日</th>
                                <td style={{ textAlign: "left", padding: "3%" }}>2024/01/19 17:41:05</td>
                            </tr>
                            <tr >
                                <th style={{ textAlign: "left", padding: "3%", width: "40%", color: "#656565" }}>注文合計</th>
                                <td style={{ textAlign: "left", padding: "3%" }}>550円 (税込)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div style={{width: "100%", color: "white", textAlign: "center", marginTop: "40px", marginBottom: "40px"}}>
                   <button onClick={() => router.push("/login")} style={{width: "30%", border: "1px solid white", padding: "10px", borderRadius: "20px", marginBottom: "40px"}}>Back to Top</button>
            </div>
        </div>
    )
}