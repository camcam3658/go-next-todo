export async function login(request: Request) {
    const apiUrl = "http://127.0.0.1:8080/login";
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
    return res;
}

export async function register(request: Request) {
    const apiUrl = "http://127.0.0.1:8080/signup";
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
    return res;
}

export async function logout() {
    const apiUrl = "http://127.0.0.1:8080/logout";
    const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    });
    return res;
}
