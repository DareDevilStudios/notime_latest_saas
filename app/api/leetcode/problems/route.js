export async function GET() {
    const res = await fetch('https://65912aa08cbbf8afa96beeaa.mockapi.io/flowers ', {
        headers: {
            'Content-Type': 'application/json',
            // 'Cookie': process.env.COOKIE,
        },
    })
    const data = await res.json()

    return Response.json({ data })
}