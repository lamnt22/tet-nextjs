import { RegisterLayout } from "@/components/layouts"
import { NextPageWithLayout } from "@/types"
import { useEffect, useState } from "react";
import router from 'next/router'
import { validateEmail } from "@/utils"
import { validateInfo } from "@/services"
import Image from "next/image";

const initValidate = {
    email: ''
}

const Register: NextPageWithLayout = () => {
    // const dispatch = useDispatch()
    // const register = useSelector(registerSelector)
    const [registerData, setRegisterData] = useState<any>()
    const [errorValidate, setErrorValidate] = useState(initValidate)

    const handleClick = async () => {
        if (await validate(registerData?.user?.email)) {
            // dispatch(addFormRegister(registerData))
            router.push("/register/steps")
        }
    }

    const validate = async (email: string) => {
        const error = { ...initValidate }

        const isEmail = await existEmail(registerData?.user)
        
        if (!email.trim().length) {
            error.email = '空にすることはできません。'
        } else if (!validateEmail(email)) {
            error.email = 'メール形式エラーです！'
        } else if (isEmail) {
            error.email = 'メールは既に存在します！'
        }

        setErrorValidate(error)
        return error.email.length === 0
    };
    const existEmail = async (user: any) => {
        const error = await validateInfo("/validate-info", user)
        if(error?.errors?.email) return true
        return false
    }

    return (
        <div style={{ background: "#2C2C2C", height: "100vh", display: "flex" }}>
            <div style={{ width: "15%" }}>
            </div>
            <div style={{ width: "35%", backgroundColor: "black", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px" }}>
                <form>
                <div style={{ borderRadius: "5px", padding: "20px", width: "100%", height: "30vh" }}>
                    <h1 style={{ color: "white", fontWeight: "bold", fontSize: "2rem", marginBottom: "50px" }}>新規会員登録</h1>
                    <label htmlFor="email" style={{ color: "#727272" }}>メールアドレス</label><br />
                    <input type="text" id="email" name="email" value={registerData?.user?.email} onChange={e => setRegisterData({ ...registerData, user: { ...registerData.user, email: e.target.value } })} style={{ color: "white", paddingLeft: "2%", marginTop: "10px", width: "100%", border: "1px solid #404040", backgroundColor: "transparent", height: "60px", borderRadius: "8px" }} />
                    <span style={{ color: 'red', display: errorValidate.email?.length > 0 ? '' : 'none' }}>
                                                {errorValidate.email}
                                            </span>
                    <button onClick={handleClick} type="button" style={{ backgroundColor: "#333333", width: "100%", marginTop: "20px", height: "60px", fontWeight: "bolder", fontSize: "1.25rem", borderRadius: "30px" }}>登録に進む</button>
                    <p onClick={() => router.push("/login")} style={{ cursor: "pointer", color: "white", marginTop: "32px", fontSize: "large", textDecoration: "underline" }}>登録済みの方はこちら</p>
                    <p onClick={() => router.back()} style={{ cursor: "pointer", color: "#626262", marginTop: "32px", fontSize: "large" }}>←トップページに戻る</p>
                </div>
                </form>
            </div>
            <div style={{ width: "54%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src="/images/logoRegister.jpg" />
            </div>
        </div>
    );
}

Register.Layout = RegisterLayout

export default Register;