"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, Image, Text, Badge, Group, Box } from "@mantine/core";

function NewsIdComponent() {
    const router = useRouter();
    const [newsData, setNewsData] = useState<any>(null);

    useEffect(() => {
        const storedData = sessionStorage.getItem("newsData");
        if (storedData) {
            setNewsData(JSON.parse(storedData));
        } else {
            router.push("/"); // Redirect if no data found
        }
    }, [router]);

    if (!newsData) return <p>Loading...</p>;

    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder className="flex flex-col">
            <Card.Section className="h-[160px]">
                <Image src={newsData.src} className="w-full h-full object-cover" alt="news image" />
            </Card.Section>

            <Group justify="space-between" mt="md">
                <Text fw={500} className="truncate w-[200px]">{newsData.title}</Text>
                <Badge color="pink">{newsData.badge}</Badge>
            </Group>

            <Box className="flex flex-col flex-grow">
                <Text size="sm" c="dimmed" className="min-h-[60px]">{newsData.description}</Text>
            </Box>
        </Card>
    );
}

export default NewsIdComponent;
