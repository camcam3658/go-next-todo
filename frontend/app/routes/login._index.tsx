import type { MetaFunction, ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Form, Link, useActionData } from "@remix-run/react";
import { LoginBox } from "../components/LoginBox";
import { Button } from "../components/Button";
import { cva, css } from "../../styled-system/css";
import { login } from "../../model/user.server";
import { redirect } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export async function loader({ request }: LoaderFunctionArgs) {
    if (request.headers.get("Cookie")) {
        return redirect("/");
    } else {
        return true;
    }
}

export async function action({ request }: ActionFunctionArgs) {
    await new Promise((res) => setTimeout(res, 250));
    const loginResult = await login(request);
    if (loginResult.success) {
        // ログイン成功時
        return redirect("/", {
            headers: {
                "Set-Cookie": loginResult.setCookie || "",
            },
        });
    } else {
        // ログイン失敗時
        const error: string = loginResult.error;
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
        borderBottom: "1px solid #eaeaea",
        paddingBottom: "1.25em",
        _focus: {
            borderBottom: "1px solid #58bff6",
        },
    },
});

export default function Login() {
    const actionData = useActionData();
    return (
        <LoginBox>
            <Form action="/login" method="post">
                <input type="text" name="email" placeholder="メールアドレス" className={loginInput()} />
                <input type="password" name="password" placeholder="パスワード" className={loginInput()} />
                <p id="error-message" className={css({ color: "red" })}>
                    {actionData ? actionData : <>&nbsp;</>}
                </p>
                <Button text={"ログイン"} />
            </Form>
            <Link to="/register">会員登録</Link>
        </LoginBox>
    );
}
