import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { StaticImageData } from 'next/image';

interface propType {
    src: StaticImageData
    title: string,
    badge: string,
    description: string
    btnText: string
}

function CardComponent({ src, title, badge, description, btnText }: propType) {
    console.log(src);
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder className='w-[300px] h-[300px]'>
            <Card.Section>
                <Image
                    src={src.src}
                    height={160}
                    alt="news image"
                    className="dark:invert"
                />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{title}</Text>
                <Badge color="pink">{badge}</Badge>
            </Group>

            <Text size="sm" c="dimmed">
                {description}
            </Text>

            <Button color="blue" fullWidth mt="md" radius="md">
                {btnText}
            </Button>
        </Card>
    );
}

export default CardComponent;