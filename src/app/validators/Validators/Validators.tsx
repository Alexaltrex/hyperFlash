'use client'

import style from "./Validators.module.scss"
import {clsx} from "clsx";
import {FormikHelpers} from "formik/dist/types";
import {useFormik} from "formik";
import {svgIcons} from "../../../assets/svgIcons";

interface IValues {
    value: string
}

export const Validators = () => {

    const onSubmit = (values: IValues, formikHelpers: FormikHelpers<IValues>) => {
        try {
            console.log(values)
        } catch (e: any) {
            console.log(e)
        } finally {
            formikHelpers.resetForm()
        }
    }

    const formik = useFormik({
        initialValues: {
            value: ""
        },
        onSubmit
    });

    return (
        <div className={clsx(style.validators, style.block)}>

            <p className={style.label}>
                Validators
            </p>

            <div className={style.content}>

                <form className={clsx(style.card, style.form)}
                      onSubmit={formik.handleSubmit}
                >
                    <input placeholder="Search for validators"
                        {...formik.getFieldProps('value')}
                    />
                </form>

                <div className={clsx(style.items, style.card)}>
                    {
                        [
                            {
                                icon: svgIcons.flash,
                                label: "Validators",
                                value: "214",
                            },
                            {
                                icon: svgIcons.trend_down,
                                label: "Inflation Rate",
                                value: "12.32%",
                            },
                        ].map(({icon, label, value}, key) => (
                            <div key={key}
                                 className={style.item}
                            >
                                <div className={style.left}>
                                    <div className={style.icon}>{icon}</div>
                                    <p>{label}</p>
                                </div>
                                <p>{value}</p>
                            </div>
                        ))
                    }
                </div>

            </div>

        </div>
    )
}