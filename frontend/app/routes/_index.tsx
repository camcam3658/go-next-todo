import type { MetaFunction, ActionFunctionArgs } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { logout } from "../../model/user.server";
import { redirect } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export async function loader({ request }: LoaderFunctionArgs) {
    if (!request.headers.get("Cookie")) {
        return redirect("/login");
    } else {
        return true;
    }
}

export async function action({}: ActionFunctionArgs) {
    const logoutResult = await logout();
    if (logoutResult.success) {
        // ログアウト成功時
        return redirect("/login", {
            headers: {
                "Set-Cookie": logoutResult.setCookie || "",
            },
        });
    } else {
        // ログイン失敗時
        const error: string = logoutResult.error;
        return error;
    }
}

export default function Index() {
    return (
        <Form method="post">
            <button type="submit">ログアウト</button>
        </Form>
    );
}
