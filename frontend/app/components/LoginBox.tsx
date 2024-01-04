import { FC, ReactNode } from "react";
import { cva } from "../../styled-system/css";

type Props = {
    children: ReactNode;
};

const LoginForm = cva({
    base: {
        position: "relative",
        bg: "#ffffff",
        padding: "45px",
        textAlign: "center",
        maxWidth: "360px",
        margin: "0 auto",
        top: "25%",
    },
});

const OutBox = cva({
    base: {
        margin: "auto",
        height: "100vh",
        background: "rgba(0,0,0,.2)",
        transition: "all .3s ease",
    },
});

export const LoginBox: FC<Props> = ({ children }) => {
    return (
        <div className={OutBox()}>
            <div className={LoginForm()}>{children}</div>
        </div>
    );
};
