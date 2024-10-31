import { getUrlPayment, register } from "@/services"
import { useState } from "react"
import router from 'next/router'

export const Step3 = (props: any) => {
    // const dispatch = useDispatch()
    const [registerData, setRegisterData] = useState<any>(props?.data)

    const submitCreateInfo = async () => {
        const info = await register("/regist/createMember", registerData?.user);
        if(info) {
            // dispatch(clearState())
            const url = await getUrlPayment(`/regist/getUrlPayment?userId=${info?.member.id}`)
            router.push(url?.LinkUrl)
        }
    }
    return (
        <div style={{ width: "35%", backgroundColor: "black", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px" }}>
            <div style={{ borderRadius: "5px", padding: "20px", width: "100%", height: "70vh" }}>
                <h1 style={{ color: "white", fontWeight: "bold", fontSize: "2rem", marginBottom: "50px" }}>有料プラン加入案内</h1>
                <h5 style={{ color: "white", fontWeight: "bold", fontSize: "1.75rem", marginBottom: "50px" }}>有料プランに加入しますか?</h5>
                
                <div style={{border: "solid 2px #DDC355", padding: "10px"}}>
                    <div style={{textAlign: "center"}}>
                        <h5 style={{ color: "white", fontWeight: "bold", fontSize: "1rem", marginBottom: "10px", marginTop: "20px" }}>有料会員限定のコンテンツが満載!</h5>
                        <h5 style={{ color: "white", fontWeight: "bold", fontSize: "1rem", marginBottom: "30px" }}>この機会にぜひご加入ください!</h5>
                    </div>
                    <div style={{width: "100%", paddingRight: "10px", paddingLeft: "10px"}}>
                        <div style={{ width: "100%", paddingLeft: "10px", marginBottom: "4px", color: "white", borderRadius: "4px", background: "#3E3E3E", height: "40px", display: "flex", alignItems: "center"}}>ファンクラブ限定イベント</div>
                        <div style={{ width: "100%", paddingLeft: "10px", marginBottom: "4px", color: "white", borderRadius: "4px", background: "#3E3E3E", height: "40px", display: "flex", alignItems: "center" }}>ファンクラブ最速チケット先行</div>
                        <div style={{ width: "100%", paddingLeft: "10px", marginBottom: "4px", color: "white", borderRadius: "4px", background: "#3E3E3E", height: "40px", display: "flex", alignItems: "center" }}>オフショット動画や写真</div>
                        <div style={{ width: "100%", paddingLeft: "10px", marginBottom: "4px", color: "white", borderRadius: "4px", background: "#3E3E3E", height: "40px", display: "flex", alignItems: "center" }}>限定オリジナルグッズプレゼント</div>
                        <div style={{ width: "100%", paddingLeft: "10px", marginBottom: "15px", color: "white", borderRadius: "4px", background: "#3E3E3E", height: "40px", display: "flex", alignItems: "center" }}>プレゼントキャンペーン</div>
                    </div>
                </div>
                <button onClick={submitCreateInfo} type="button" style={{ backgroundColor: "#DDC355", width: "100%", marginTop: "20px", height: "60px", fontWeight: "bolder", fontSize: "1.25rem", borderRadius: "30px" }}>加入する</button>
            </div>
        </div>
    )
}