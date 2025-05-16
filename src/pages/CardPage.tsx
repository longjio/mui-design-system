import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';

const CardPage = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image="https://source.unsplash.com/random"
                alt="Random"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    MUI Card
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    This is an example of a Material UI Card component with image, content, and actions.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
};

export default CardPage;
