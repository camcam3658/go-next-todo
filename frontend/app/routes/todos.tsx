import { Outlet, useActionData } from "@remix-run/react";
import { FC } from "react";
import { ActionFunctionArgs } from "@remix-run/node";
import { createTodo, deleteTodo } from "../../model/todo.server";
import { cva, css } from "../../styled-system/css";

export async function action({ request }: ActionFunctionArgs) {
    const cookie = request.headers.get("Cookie");
    const formData = await request.formData();
    switch (formData.get("action")) {
        case "create": {
            const createResult = await createTodo(formData, cookie);
            if (createResult.success) {
                // タスク登録成功時
                return true;
            } else {
                // タスク登録失敗時
                // TODO エラーメッセージを最適化
                return createResult;
            }
        }

        case "delete": {
            const dereteResult = await deleteTodo(formData, cookie);
            if (dereteResult.success) {
                // タスク登録成功時
                return true;
            } else {
                // タスク登録失敗時
                // TODO エラーメッセージを最適化
                return dereteResult;
            }
        }
    }
}

const content = cva({
    base: {
        position: "relative",
        bg: "#ffffff",
        padding: "45px",
        textAlign: "center",
        maxWidth: "360px",
        margin: "0 auto",
    },
});

const TodoLayout: FC = () => {
    const actionData = useActionData();
    return (
        <div className={css({ margin: "auto", height: "100vh" })}>
            <div className={content()}>
                <Outlet context={actionData} />
            </div>
        </div>
    );
};

export default TodoLayout;
