import Parser from "rss-parser";

export async function GET(request) {
    try {
        const parser = new Parser({
            customFields: {
                item: ['content:encodedSnippet']
        }
    });
        const feed = await parser.parseURL("https://medium.com/feed/@umangsaxena779");

        const articles = feed.items.map(item => ({
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
            content: item["content:encodedSnippet"],
            category: item.categories,
        }));

        return new Response(
            JSON.stringify({ success: true, articles }),
            { status: 200 }
        );
    } catch (err) {
        console.error('Error fetching Medium articles:', err.message);
        return new Response(
            JSON.stringify({ success: false, error: 'Failed to fetch Medium articles' }),
            { status: 500 }
        );
    }
}