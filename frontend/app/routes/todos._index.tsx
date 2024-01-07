import type { MetaFunction, ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Form, Link, useActionData, useLoaderData } from "@remix-run/react";
import { LoginBox } from "../components/LoginBox";
import { Button } from "../components/Button";
import { cva, css } from "../../styled-system/css";
import { login } from "../../model/user.server";
import { redirect, json } from "@remix-run/node";
import { getTodo } from "../../model/todo.server";
import { createTodo } from "../../model/todo.server";

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
    const actionData = useActionData();
    return (
        <>
            <Form action="/todos" method="post">
                <input type="text" name="title" placeholder="タスクを追加する" className={loginInput()} />
                <p id="error-message" className={css({ color: "red" })}>
                    {actionData ? actionData : <>&nbsp;</>}
                </p>
                <button type="submit" name="action" value="create">
                    追加
                </button>
            </Form>
            <ul>
                {data.map((row) => (
                    <>
                        <li key={row.id}>{row.title}</li>
                        <Form action="/todos" method="delete">
                            <input type="hidden" name="id" value={row.id} />
                            <button type="submit" name="action" value="delete">
                                削除
                            </button>
                        </Form>
                    </>
                ))}
            </ul>
        </>
    );
}
