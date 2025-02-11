"use client";

import { useRouter } from "next/navigation";
import { Card, Image, Text, Badge, Group, Box } from "@mantine/core";

interface PropType {
    src: string;
    title: string;
    badge: string;
    description: string;
    showContinueReading?: boolean;
    index?: number;
}

function CardComponent({ src, title, badge, description, showContinueReading, index }: PropType) {
    const router = useRouter();

    const handleContinueReading = () => {
        const newsData = { src, title, badge, description };
        sessionStorage.setItem("newsData", JSON.stringify(newsData));
        router.push(`/news/${index}`);
    };


    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder className="w-[300px] flex flex-col">
            {/* Image Section */}
            <Card.Section className="h-[160px]">
                <Image src={src} className="w-full h-full object-cover" alt="news image" />
            </Card.Section>

            {/* Title and Badge */}
            <Group justify="space-between" mt="md">
                <Text fw={500} className="truncate w-[200px]">{title}</Text>
                <Badge color="pink">{badge}</Badge>
            </Group>

            {/* Description + Continue Reading */}
            <Box className="flex flex-col flex-grow">
                <Text size="sm" c="dimmed" className="min-h-[60px]">{description}</Text>

                {showContinueReading && (
                    <Text size="sm" c="blue" className="cursor-pointer mt-2" onClick={handleContinueReading}>
                        Continue Reading →
                    </Text>
                )}
            </Box>
        </Card>
    );
}

export default CardComponent;
