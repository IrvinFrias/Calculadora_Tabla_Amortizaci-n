import './InteresSimple.css';
import {useState} from "react";
import {Formik, Form} from "formik";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Result from "../Result/Result"

const computeInterest = (capital,therm, rate) => {
    return( capital * (1 + ((rate / 12) * therm)) ).toFixed(3);
}

const InteresSimple = ({renderSeccion}) => {
    const [value, setvalue] = useState(0)
    const handleSubmit = ({capital, thermMonths, rateInteres}) => {
        const val = computeInterest(Number(capital), Number(thermMonths) , Number(rateInteres) )
        setvalue(val);
    }

    return(
        <section>
            <h3 className="text-red">Interés Simple</h3>
            <div className="">
                <Formik initialValues={{
                    capital: '',
                    thermMonths: '',
                    rateInteres: '',
                }
                } onSubmit={handleSubmit}

                >
                    <Form>
                        <Input name="capital" label="Capital"/>
                        <Input name="thermMonths" label="Plazo del prestamo (meses)"/>
                        <Input name="rateInteres" label="Tasa de interés anual"/>
                        <Button/>
                    </Form>
                </Formik>
            </div>

            <section className="results">
                {
                    value !== 0 ?<Result value={value} />: null
                }
            </section>
        </section>
    )
}
export default InteresSimple;