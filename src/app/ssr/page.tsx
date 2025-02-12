export default async function SSRPage() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        cache: "no-store", // Ensures fresh data
    });
    const data = await res.json();
    console.log(data);

    return (
        <div>
            <h1>Server Components SSR</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}
