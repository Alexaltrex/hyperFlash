import {PointsComponent} from "./PointsComponent";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "HyperFlash - PointsComponent",
    description: "Mev Powered Staking Rewards",
};

const PointsPage = () => {
    return (
        <PointsComponent/>
    );
}

export default PointsPage
