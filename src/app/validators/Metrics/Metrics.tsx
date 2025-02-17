'use client'

import style from "./Metrics.module.scss"
import {clsx} from "clsx";
import {svgIcons} from "../../../assets/svgIcons";
import {FormikHelpers} from "formik/dist/types";
import {useFormik} from "formik";

interface IValues {
    value: string
}

export const Metrics = () => {

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
        <div className={clsx(style.metrics, style.block)}>

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
                                icon: svgIcons.timer2,
                                label: "Average Uptime(24H)",
                                value: "0.94176",
                            },
                            {
                                icon: svgIcons.graph,
                                label: "Average QC Ratio",
                                value: "99.38724",
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