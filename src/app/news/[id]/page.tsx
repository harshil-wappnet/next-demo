import Image from "next/image";

// Dynamic SSR Component
async function NewsIdComponent({ params }) {
    const { id } = params;

    // Fetching post data (without cache to always get fresh data)
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: 'no-store' });

    if (!res.ok) {
        return <h1>Error: Failed to load post</h1>;
    }

    const post = await res.json(); // The JSON response from API

    return (
        <div shadow="sm" padding="lg" radius="md" className="flex flex-col">
            {/* Placeholder Image (JSONPlaceholder API does not provide images) */}
            <div className="h-[160px]">
                <Image
                    src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45"
                    width={150}
                    height={150}
                    alt="news image"
                    className="w-full h-full object-cover"
                />

            </div>

            {/* Title and Badge */}
            <div justify="space-between" mt="md">
                <p fw={500} className="truncate w-[200px]">{post.title}</p>
                <span color="pink">News</span>
            </div>

            {/* Description */}
            <div className="flex flex-col flex-grow">
                <p size="sm" c="dimmed" className="min-h-[60px]">{post.body}</p>
            </div>
        </div>
    );
}

export default NewsIdComponent;
