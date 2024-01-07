// タスク情報を取得
export async function getTodo(request: Request) {
    const apiUrl = "http://localhost:8080/tasks";
    const cookie = request.headers.get("Cookie");
    const res = await fetch(apiUrl, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Cookie: cookie,
        },
    });
    return res;
}

// タスク情報を追加
export async function createTodo(formData: FormData, cookie: string) {
    const apiUrl = "http://localhost:8080/tasks";
    const title = formData.get("title");
    const body = JSON.stringify({ title: title });
    const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Cookie: cookie,
        },
        body: body,
    });
    if (res.ok) {
        return { success: true };
    } else {
        const errorResponse = await res.json(); // 失敗時はJSONで取得
        return { success: false, error: errorResponse };
    }
}

// タスク情報を削除
export async function deleteTodo(formData: FormData, cookie: string) {
    const id = formData.get("id");
    const apiUrl = `http://localhost:8080/tasks/${id}`;
    const res = await fetch(apiUrl, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Cookie: cookie,
        },
    });
    console.log(res);
    if (res.ok) {
        return { success: true };
    } else {
        const errorResponse = await res.json(); // 失敗時はJSONで取得
        return { success: false, error: errorResponse };
    }
}
