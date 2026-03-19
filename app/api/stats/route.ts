import { NextResponse } from 'next/server';

export async function GET() {
    const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
    const apiToken = process.env.UMAMI_API_TOKEN;
    const apiUrl = 'https://api.umami.is/v1';

    if (!apiToken) {
        return NextResponse.json({ visitors: 0 });
    }

    try {
        const startAt = 0;
        const endAt = Date.now();

        const response = await fetch(`${apiUrl}/websites/${websiteId}/stats?startAt=${startAt}&endAt=${endAt}`, {
            headers: {
                'x-umami-api-key': apiToken,
                'Accept': 'application/json',
            },
            next: { revalidate: 60 }
        });

        if (!response.ok) {
            return NextResponse.json({ error: 'Failed' }, { status: response.status });
        }

        const data = await response.json();

        return NextResponse.json({
            visitors: data.visitors?.value ?? 0
        });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
