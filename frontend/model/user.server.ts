export async function login(request: Request) {
    const apiUrl = "http://localhost:8080/login";
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    const body = JSON.stringify({ email: email, password: password });
    const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: body,
    });
    if (res.ok) {
        const setCookie = res.headers.get("set-cookie");
        return { success: true, setCookie };
    } else {
        const errorResponse = await res.json(); // 失敗時はJSONで取得
        return { success: false, error: errorResponse };
    }
}

export async function register(request: Request) {
    const apiUrl = "http://localhost:8080/signup";
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    const body = JSON.stringify({ email: email, password: password });
    const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
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

export async function logout() {
    const apiUrl = "http://localhost:8080/logout";
    const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (res.ok) {
        const setCookie = res.headers.get("set-cookie");
        return { success: true, setCookie };
    } else {
        const errorResponse = await res.json(); // 失敗時はJSONで取得
        return { success: false, error: errorResponse };
    }
}
