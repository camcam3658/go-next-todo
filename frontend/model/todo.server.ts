export async function createTodo(request: Request) {
    const apiUrl = "http://localhost:8080/tasks";
    const cookie = request.headers.get("Cookie");
    const formData = await request.formData();
    const title = formData.get("title");
    const body = JSON.stringify({ title: title });
    console.log(body);
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
