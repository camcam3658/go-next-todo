import { FC } from "react";
import { useNavigation } from "@remix-run/react";
import { cva } from "../../styled-system/css";

type Props = {
    text: "ログイン" | "新規登録";
};

export const button = cva({
    base: {
        width: "200px",
        fontSize: "16px",
        fontWeight: "600",
        color: "white",
        cursor: "pointer",
        margin: "20px",
        height: "55px",
        textAlign: "center",
        border: "none",
        backgroundSize: "300% 100%",
        borderRadius: "50px",
        transition: "all .4s ease-in-out",
        _hover: {
            backgroundPosition: "100% 0",
            transition: "all .4s ease-in-out",
        },
    },
    variants: {
        type: {
            normal: {
                backgroundImage: "linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673)",
                boxShadow: "0 4px 15px 0 rgba(49, 196, 190, 0.75)",
            },
            loading: {
                backgroundImage: "linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673)",
                boxShadow: "0 4px 15px 0 rgba(49, 196, 190, 0.75)",
                cursor: "not-allowed",
            },
        },
    },
});

export const Button: FC<Props> = ({ text }) => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";
    const btnType = isSubmitting ? "loading" : "normal";

    return (
        <button type="submit" className={button({ type: btnType })} disabled={isSubmitting}>
            {isSubmitting ? "送信中..." : text}
        </button>
    );
};
