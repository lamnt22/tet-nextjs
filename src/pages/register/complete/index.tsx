import { NextPageWithLayout } from "@/types"
import { useEffect } from "react"
import { Step4 } from "@/components/layouts/register/Step4"
import { Label } from "@/components/layouts/register/Label"
import { STEP } from "@/constants/common.constants"

const Complete: NextPageWithLayout = () => {

    useEffect(() => {
        
    }, [])

    return (
        <div style={{ background: "#2C2C2C", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{width: "60vh", height: "70vh"}}>
                <div style={{ color: "white", fontWeight: "bold", fontSize: "1.5rem", marginBottom: "30px", display: "flex", justifyContent: "center" }}>
                    <Label step={STEP.STEP_4}/>
                </div>
                <Step4/>
            </div>
            
        </div>
    );
}

export default Complete