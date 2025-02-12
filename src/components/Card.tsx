"use client";

import { Card, Image, Text, Badge, Group, Box } from "@mantine/core";
import Link from "next/link";

interface PropType {
    src: string;
    title: string;
    badge: string;
    description: string;
    showContinueReading?: boolean;
    id?: number;
}

function CardComponent({ src, title, badge, description, showContinueReading, id }: PropType) {

    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder className="w-[300px] flex flex-col h-[400px]">
            {/* Image Section */}
            <Card.Section className="h-[160px]">
                <Image src={src} className="w-full h-full object-cover" alt="news image" />
            </Card.Section>

            {/* Title and Badge */}
            <Group justify="space-between" mt="md">
                <Text fw={500} className="truncate w-[200px] h-[40px] leading-tight">{title}</Text>
                <Badge color="pink">{badge}</Badge>
            </Group>

            {/* Description + Continue Reading */}
            <Box className="flex flex-col flex-grow pt-3">
                <Text size="sm" c="dimmed" className="h-[60px] overflow-hidden">{description}</Text>

                {showContinueReading && id && (
                    <Link href={`/news/${id}`}>
                        <Text size="sm" c="blue" className="cursor-pointer mt-2">
                            Continue Reading →
                        </Text>
                    </Link>
                )}
            </Box>
        </Card >
    );
}

export default CardComponent;
