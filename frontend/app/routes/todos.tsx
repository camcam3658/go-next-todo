import { Outlet } from "@remix-run/react";
import { FC } from "react";
import { ActionFunctionArgs, json, LoaderFunctionArgs, redirect } from "@remix-run/node";
import { createTodo, deleteTodo } from "../../model/todo.server";

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
                const error: string = createResult.error;
                return error;
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
                const error: string = dereteResult.error;
                return error;
            }
        }
    }
}

const TodoLayout: FC = () => {
    return (
        <div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default TodoLayout;
