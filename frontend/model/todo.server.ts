export async function createTodo(request: Request) {
    const apiUrl = "http://127.0.0.1:8080/tasks/";
    const formData = await request.formData();
    const title = formData.get('title');
    const memo = formData.get('memo');
    const deadline = formData.get('deadline');
    const body = JSON.stringify({ title: title, memo: memo, deadline: deadline })
    console.log(body);
    const res = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: body,
    });
    return res;
}