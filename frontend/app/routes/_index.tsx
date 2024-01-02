import type { MetaFunction, ActionFunctionArgs } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { logout } from "../../model/user.server";
import { redirect } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export async function action({}: ActionFunctionArgs) {
    const res = await logout();
    console.log(res);
    if (res.status == 200) {
        return redirect("/login");
    } else {
        return redirect("/");
    }
}

export default function Index() {
    return (
        <Form method="post">
            <button type="submit">ログアウト</button>
        </Form>
    );
}
