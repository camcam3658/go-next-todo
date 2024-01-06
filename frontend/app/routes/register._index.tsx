import type { MetaFunction, ActionFunctionArgs } from "@remix-run/node";
import { Form, Link } from "@remix-run/react";
import { LoginBox } from "../components/LoginBox";
import { Button } from "../components/Button";
import { cva } from "../../styled-system/css";
import { register } from "../../model/user.server";
import { redirect } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export async function action({ request }: ActionFunctionArgs) {
    const ResisterResult = await register(request);
    if (ResisterResult.success) {
        // 会員登録成功時
        // バックエンド側でクッキーをセットし、会員登録が済めばログイン状態になるようにする
        return redirect("/login", {
            // headers: {
            //     "Set-Cookie": ResisterResult.setCookie || "",
            // },
        });
    } else {
        // 会員登録失敗時
        // TODO エラーメッセージを最適化
        const error: string = ResisterResult.error;
        console.log(error);
        return error;
    }
}

const loginInput = cva({
    base: {
        width: "100%",
        outline: "0",
        margin: "0 0 16px",
        display: "block",
        marginBottom: "2em",
        padding: "0.5em 0",
        border: "none",
        borderBottom: "1px solid #eaeaea",
        paddingBottom: "1.25em",
        _focus: {
            borderBottom: "1px solid #58bff6",
        },
    },
});

export default function Register() {
    return (
        <LoginBox>
            <Form action="/register" method="post">
                <input type="text" name="email" placeholder="メールアドレス" className={loginInput()} />
                <input type="password" name="password" placeholder="パスワード" className={loginInput()} />
                <Button text={"新規登録"} />
            </Form>
            <Link to="/login">ログイン画面はこちら</Link>
        </LoginBox>
    );
}
