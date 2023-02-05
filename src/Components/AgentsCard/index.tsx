import React, { useEffect } from 'react';
import { Paper, Text, Title, Button, Image } from '@mantine/core';
import { useStyles } from './styles';


interface ArticleCardImageProps {
    image: string;
    title: string;
    category: string;
    onClick: () => any,
    colorOne: string,
    colorTwo: string
  }

const AgentsCard: React.FC<ArticleCardImageProps> = ({ image, title, category, onClick, colorOne, colorTwo }) => {
    const { classes } = useStyles();

    return (
      <Paper
        shadow="md"
        p="xl"
        radius="md"
        sx={{background: `linear-gradient(0deg, #${colorOne} 0%, #${colorTwo} 100%)` }}
        className={classes.card}
      >
        <div style={{position: 'relative'}}>
            <Image src={image} className={classes.img}/>
            <Text className={classes.category} size="xs">
            {category}
            </Text>
            <Title order={3} className={classes.title}>
            {title}
            </Title>
        </div>
        <Button variant="default" bg="red" color="dark" onClick={onClick}>
            Visualizar agente
        </Button>
      </Paper>
    );
};

export default AgentsCard;