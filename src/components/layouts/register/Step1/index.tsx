import { RegisterForm } from "@/types"
import { validatePassword } from "@/utils"
import { useEffect, useState } from "react"
import { log } from 'console';

const initValidate = {
    password: '',
    confirmPassword: ''
}

export const Step1 = (props: any) => {
    const [registerData, setRegisterData] = useState<any>(props?.data)
    const [errorValidate, setErrorValidate] = useState(initValidate)
    const handleUpdate = () => {
        const isValid = validate(registerData?.user?.password, registerData?.confirmPassword)
        return isValid && props?.updatedRegister(registerData)
    }
    const validate = (password: string, confirmPassword: string) => {
        const error = { ...initValidate }

        if (!password.trim().length) {
            error.password = '※入ってください'
        } else if (!validatePassword(password)) {
            error.password = '※半角英数字6~30文字'
        }

        if (confirmPassword !== password) {
            error.confirmPassword = '※パスワードが一致しません'
        }

        setErrorValidate(error)
        return error.password.length === 0 && error.confirmPassword.length === 0
    }
    return (
        <div style={{ width: "35%", backgroundColor: "black", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px" }}>
            <div style={{ borderRadius: "5px", padding: "20px", width: "100%", height: "70vh" }}>
                <h1 style={{ color: "white", fontWeight: "bold", fontSize: "1.7rem", marginBottom: "50px" }}>パスワード登録 </h1>
                <h4 style={{ color: "white", fontWeight: "bold", fontSize: "1.4rem", marginBottom: "50px" }}>ログイン時のパスワードを設定して下さい </h4>
                <form>
                    <label htmlFor="email" style={{ color: "#727272" }}>ログイン用メールアドレス</label><br />
                    <input type="text" id="email" name="email" disabled value={registerData?.user?.email} onChange={e => setRegisterData({ ...registerData, user: { ...registerData.user, email: e.target.value } })} style={{ color: "white", paddingLeft: "2%", width: "100%", backgroundColor: "transparent", height: "60px", borderRadius: "8px" }} />
                    <label htmlFor="email" style={{ color: "#727272" }}>新しいパスワード</label><br />
                    <input type="password" id="password" name="password" value={registerData?.user?.password} onChange={e => setRegisterData({ ...registerData, user: { ...registerData.user, password: e.target.value } })} style={{ color: "white", paddingLeft: "2%", marginTop: "10px", width: "100%", border: "1px solid #404040", backgroundColor: "transparent", height: "60px", borderRadius: "8px" }} />
                    <span style={{ color: 'red', display: errorValidate.password?.length > 0 ? '' : 'none' }}>
                        {errorValidate.password}
                    </span>
                    <br />
                    <label htmlFor="email" style={{ color: "#727272", marginTop: "30px" }}>パスワード再入力</label><br />
                    <input type="password" id="confirm-password" name="confirmPassword" value={registerData?.confirmPassword} onChange={e => setRegisterData({ ...registerData, confirmPassword: e.target.value })} style={{ color: "white", paddingLeft: "2%", marginTop: "10px", width: "100%", border: "1px solid #404040", backgroundColor: "transparent", height: "60px", borderRadius: "8px" }} />
                    <span style={{ color: 'red', display: errorValidate.confirmPassword?.length > 0 ? '' : 'none' }}>
                        {errorValidate.confirmPassword}
                    </span>
                    <button onClick={handleUpdate} type="button" style={{ backgroundColor: "white", width: "100%", marginTop: "20px", height: "60px", fontWeight: "bolder", fontSize: "1.25rem", borderRadius: "30px" }}>次へ</button>
                </form>
            </div>
        </div>
    )
}