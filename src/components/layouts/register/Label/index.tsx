import step1 from "../../../../utils/images/step1.jpg"
import step2 from "../../../../utils/images/step2.jpg"
import step3 from "../../../../utils/images/step3.jpg"
import step4 from "../../../../utils/images/step4.jpg"

export const Label = (props: any) => {
    return (
        props.step === 1 && <img src={step1.src}/>
        || props.step === 2 && <img src={step2.src}/>
        || props.step === 3 && <img src={step3.src}/>
        || props.step === 4 && <img src={step4.src}/>
    )
}