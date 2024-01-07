import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { Form, useOutletContext, useLoaderData } from "@remix-run/react";
import { LoginBox } from "../components/LoginBox";
import { Button } from "../components/Button";
import { cva, css } from "../../styled-system/css";
import { redirect, json } from "@remix-run/node";
import { getTodo } from "../../model/todo.server";

export const meta: MetaFunction = () => {
    return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export async function loader({ request }: LoaderFunctionArgs) {
    if (!request.headers.get("Cookie")) {
        return redirect("/login");
    } else {
        const res = await getTodo(request);
        return json(await res.json());
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

export default function Todos() {
    const data = useLoaderData<typeof loader>();
    const actionData = useOutletContext();
    return (
        <>
            <Form action="/todos" method="post">
                <p>ログイン</p>
                <div className={css({ display: "flex" })}>
                    <input type="text" name="title" placeholder="タスクを追加する" className={loginInput()} />
                    <button type="submit" name="action" value="create" className={css({ cursor: "pointer" })}>
                        ＋
                    </button>
                </div>
                <p id="error-message" className={css({ color: "red" })}>
                    {actionData?.action === "create" ? actionData.error : <>&nbsp;</>}
                </p>
            </Form>
            <ul>
                {data.map((row) => (
                    <>
                        <Form action="/todos" method="delete">
                            <div className={css({ bg: "rgba(0,0,0,.1)", padding: "5px", margin: "5px", display: "flex" })}>
                                <li key={row.id}>{row.title}</li>
                                <input type="hidden" name="id" value={row.id} />
                                <button type="submit" name="action" value="delete" className={css({ marginLeft: "auto", cursor: "pointer" })}>
                                    削除
                                </button>
                            </div>
                        </Form>
                    </>
                ))}
            </ul>
            <p id="error-message" className={css({ color: "red" })}>
                {actionData?.action === "delete" ? actionData.error : <>&nbsp;</>}
            </p>
        </>
    );
}
