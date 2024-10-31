import { validateInfo } from "@/services"
import { log } from "console"
import { useEffect, useState } from "react"

const initValidate = {
    username: '',
    gender: '',
    dateOfBirth: '',
    privacyPolicy: ''
}

export const Step2 = (props: any) => {
    const [registerData, setRegisterData] = useState<any>(props?.data)
    const [year, setYear] = useState<string>("")

    const [month, setMonth] = useState<string>("")
    const [day, setDay] = useState<string>("")
    const [errorValidate, setErrorValidate] = useState(initValidate)

    const handleUpdate = async () => {
        const isValid = await validate(registerData?.user, registerData?.user?.gender, year, month, day, registerData?.privacyPolicy)
        if (isValid) {
            props?.updatedRegister(registerData);
        }
    };

    const handleBack = () => {
        return props?.handleBack();
    };

    const handleChangeYear = (value: any) => {
        setYear(value);
        getDateOfBirth(value, month, day);
    };

    const handleChangeMonth = (value: any) => {
        setMonth(value)
        getDateOfBirth(year, value, day)
    }

    const handleChangeDay = (value: any) => {
        setDay(value)
        getDateOfBirth(year, month, value)
    }

    const getDateOfBirth = (year: string, month: string, day: string) => {
        if (year && month && day) {
            const dateOfBirth = `${year}-${month}-${day}`;
            setRegisterData({ ...registerData, user: { ...registerData.user, date_of_birth: dateOfBirth } })
        }
    }

    const validate = async (user: any, gender: string, year: string, month: string, day: string, privacyPolicy: Boolean) => {
        const error = { ...initValidate }
        const isUser = await existUsername(user);
        if (!user?.username.trim().length) {
            error.username = '※入ってください'
        } else if (user?.username.trim().length < 6) {
            error.username = '※半角000000文字で入力してください'
        } else if(isUser) {
            error.username = '※この名前のユーザーはすでに存在します'
        }

        if (!gender.trim().length) {
            error.gender = '※選択してください'
        }

        if (!year.trim().length || !month.trim().length || !day.trim().length) {
            error.dateOfBirth = '※選択してください'
        }

        if (!privacyPolicy) {
            error.privacyPolicy = '※同意が必要です'
        }
        setErrorValidate(error)
        return error.username.length === 0 && error.dateOfBirth.length === 0 && error.gender.length === 0 && error.privacyPolicy.length === 0
    }

    const existUsername = async (user: any) => {
        const error = await validateInfo("/validate-info", user)
        if(error?.errors?.username) return true
        return false;
    }

    useEffect(() => {
        if (registerData?.user?.date_of_birth) {
            const dateOfBirth = registerData?.user?.date_of_birth.split("/")
            setYear(dateOfBirth[0])
            setMonth(dateOfBirth[1])
            setDay(dateOfBirth[2])
        }
    }, [])

    return (
        <div style={{ width: "35%", backgroundColor: "black", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px" }}>
            <div style={{ borderRadius: "5px", padding: "20px", width: "100%", height: "70vh" }}>
                <h1 style={{ color: "white", fontWeight: "bold", fontSize: "2rem", marginBottom: "50px" }}>プロフィール設定 </h1>
                <h1 style={{ color: "white", fontWeight: "bold", fontSize: "1.5rem", marginBottom: "50px" }}>ユーザー名、性別、生年月日を入力して下さい </h1>
                <form>
                    <label htmlFor="username" style={{ color: "#727272" }}>ユーザー名</label><br />
                    <input type="text" id="username" name="username" value={registerData?.user?.username} onChange={e => setRegisterData({ ...registerData, user: { ...registerData.user, username: e.target.value } })} style={{ color: "white", paddingLeft: "2%", marginTop: "10px", width: "100%", border: "1px solid #404040", backgroundColor: "transparent", height: "60px", borderRadius: "8px" }} />
                    <span style={{ color: 'red', display: errorValidate.username?.length > 0 ? '' : 'none' }}>
                        {errorValidate.username}
                    </span>
                    <br />
                    <div style={{ width: "100%", display: "flex", marginTop: "10px" }}>
                        <div style={{ width: "30%", marginRight: "5%" }}>
                            <label htmlFor="gender" style={{ color: "#727272", paddingTop: "70px" }}>性別</label><br />
                            <select style={{ color: "white", paddingLeft: "2%", marginTop: "10px", width: "100%", border: "1px solid #404040", backgroundColor: "transparent", height: "60px", borderRadius: "8px" }} id="gender" value={registerData?.user?.gender} onChange={e => setRegisterData({ ...registerData, user: { ...registerData.user, gender: e.target.value } })}>
                                <option style={{ color: "black" }} value="">選択する</option>
                                <option style={{ color: "black" }} value="1">男性</option>
                                <option style={{ color: "black" }} value="2">女性</option>
                                <option style={{ color: "black" }} value="3">その他</option>
                                <option style={{ color: "black" }} value="4">回答しない</option>
                            </select>
                            <span style={{ color: 'red', display: errorValidate.gender?.length > 0 ? '' : 'none' }}>
                                {errorValidate.gender}
                            </span>
                        </div>
                        <div style={{ width: "65%" }}>
                            <label htmlFor="email" style={{ color: "#727272", width: "100%" }}>生年月日</label><br />
                            <div style={{display: "flex"}}>
                                <select style={{ marginRight: "2%", color: "white", paddingLeft: "2%", marginTop: "10px", width: "100%", border: "1px solid #404040", backgroundColor: "transparent", height: "60px", borderRadius: "8px" }} value={year} onChange={(e) => handleChangeYear(e.target.value)}>
                                    <option style={{ color: "black" }} value="">年</option>
                                    <option style={{ color: "black" }} value="2022">2022</option>
                                    <option style={{ color: "black" }} value="2023">2023</option>
                                    <option style={{ color: "black" }} value="2024">2024</option>
                                </select>
                                <select style={{ marginRight: "2%", color: "white", paddingLeft: "2%", marginTop: "10px", width: "50%", border: "1px solid #404040", backgroundColor: "transparent", height: "60px", borderRadius: "8px" }} value={month} onChange={(e) => handleChangeMonth(e.target.value)}>
                                    <option style={{ color: "black" }} value="">月</option>
                                    <option style={{ color: "black" }} value="01">01</option>
                                    <option style={{ color: "black" }} value="02">02</option>
                                    <option style={{ color: "black" }} value="03">03</option>
                                    <option style={{ color: "black" }} value="04">04</option>
                                    <option style={{ color: "black" }} value="05">05</option>
                                    <option style={{ color: "black" }} value="06">06</option>
                                </select>
                                <select style={{ color: "white", paddingLeft: "2%", marginTop: "10px", width: "50%", border: "1px solid #404040", backgroundColor: "transparent", height: "60px", borderRadius: "8px" }} value={day} onChange={(e) => handleChangeDay(e.target.value)}>
                                    <option style={{ color: "black" }} value="">日</option>
                                    <option style={{ color: "black" }} value="01">01</option>
                                    <option style={{ color: "black" }} value="02">02</option>
                                    <option style={{ color: "black" }} value="03">03</option>
                                    <option style={{ color: "black" }} value="04">04</option>
                                    <option style={{ color: "black" }} value="05">05</option>
                                    <option style={{ color: "black" }} value="06">06</option>
                                </select>
                            </div>
                            <span style={{ color: 'red', display: errorValidate.dateOfBirth?.length > 0 ? '' : 'none' }}>
                                    {errorValidate.dateOfBirth}
                                </span>
                        </div>
                        <br />
                    </div>
                    <input style={{marginTop: "25px"}} id="privacyPolicy" type="checkbox" onChange={e => setRegisterData({ ...registerData, privacyPolicy: e.target.checked })} checked={registerData?.privacyPolicy} />
                    <label htmlFor="privacyPolicy" style={{ width: "100%", color: "#727272", marginLeft: "10px" }}>利用規約 プライバシーポリシーに同意する</label>
                    <p style={{ color: 'red', display: errorValidate.privacyPolicy?.length > 0 ? '' : 'none' }}>
                        {errorValidate.privacyPolicy}
                    </p>
                    <button onClick={handleBack} type="button" style={{ color: "white", backgroundColor: "#333333", width: "40%", marginTop: "20px", height: "60px", fontSize: "1.25rem", borderRadius: "30px" }}>戻る</button>
                    <button onClick={handleUpdate} type="button" style={{ float: "right", backgroundColor: "#333333", width: "40%", marginTop: "20px", height: "60px", fontWeight: "bolder", fontSize: "1.25rem", borderRadius: "30px" }}>次へ</button>
                </form>
            </div>
        </div>
    )
}