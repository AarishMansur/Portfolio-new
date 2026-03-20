import { NextResponse } from 'next/server';

export async function GET() {
    const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
    const apiToken = process.env.UMAMI_API_TOKEN;

    try {
        const res = await fetch(
            `https://api.umami.is/v1/websites/${websiteId}/stats?startAt=0&endAt=${Date.now()}`,
            {
                headers: {
                    Authorization: `Bearer ${apiToken}`,
                },
                cache: "no-store",
            }
        );

        const data = await res.json();

        return NextResponse.json({
            visitors: data.value || 0,
        });
    } catch (err) {
        return NextResponse.json({ visitors: -1 });
    }
}