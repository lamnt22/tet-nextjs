import { NextPageWithLayout } from "@/types"
import { useState } from "react"
import { Step1 } from "@/components/layouts/register/Step1"
import { Step2 } from "@/components/layouts/register/Step2"
import { Step3 } from "@/components/layouts/register/Step3"

const Steps: NextPageWithLayout = () => {
    // const dispatch = useDispatch()
    // const register = useSelector(registerSelector)

    const [formData, setFormData] = useState()
    const [step, setStep] = useState(1)

    const updatedRegister = (newData: any) => {
        // setFormData(newData)
        // setStep(step + 1)
        // dispatch(addFormRegister(newData))
    }

    const handleBack = () => {
        setStep(step - 1)
    }

    const renderStep = (key: number) => {
        switch (key) {
            case 1:
                return <Step1 step={step} data={formData} updatedRegister={updatedRegister} handleBack={handleBack} />
            case 2:
                return <Step2 step={step} data={formData} updatedRegister={updatedRegister} handleBack={handleBack} />
            case 3:
                return <Step3 step={step} data={formData} updatedRegister={updatedRegister} handleBack={handleBack} />
        }
    }

    return (
        <div style={{ background: "#2C2C2C", height: "100vh", display: "flex" }}>
            <div style={{ width: "15%", display: "flex", alignItems: "center", justifyContent: "right" }}>
                <p style={{ color: "white", marginRight: "5%", fontWeight: "bold" }}>Step {step}</p>
            </div>
            {
                renderStep(step)
            }
            <div style={{ width: "54%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src="/images/logoRegister.jpg" />
            </div>
        </div>
    );
}

export default Steps