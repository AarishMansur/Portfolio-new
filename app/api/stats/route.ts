import { NextResponse } from 'next/server';

export async function GET() {
    const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
    const apiToken = process.env.UMAMI_API_TOKEN;

    const endAt = Date.now();
    const startAt = endAt - 1000 * 60 * 60 * 24 * 365;

    try {
        const res = await fetch(
            `https://api.umami.is/v1/websites/${websiteId}/stats?startAt=${startAt}&endAt=${endAt}`,
            {
                headers: {
                    Authorization: `Bearer ${apiToken}`,
                },
                cache: "no-store",
            }
        );

        const data = await res.json();
        console.log("UMAMI DATA:", data);

        return NextResponse.json({
            visitors: data.visitors || data.value || 0,
        });
    } catch (err) {
        return NextResponse.json({ visitors: -1 });
    }
}