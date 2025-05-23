// src/components/surface/DsCard.tsx

import React from 'react';
import {
    Card,
    CardContent,
    CardActions,
    CardMedia,
    Typography,
    Button,
} from '@mui/material';

interface DsCardProps {
    title: string;
    description: string;
    image?: string;
    buttonText?: string;
    onButtonClick?: () => void;
}

const DsCard: React.FC<DsCardProps> = ({
                                           title,
                                           description,
                                           image,
                                           buttonText = 'Learn More',
                                           onButtonClick,
                                       }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            {image && <CardMedia component="img" height="140" image={image} alt={title} />}
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                {onButtonClick && (
                    <Button size="small" onClick={onButtonClick}>
                        {buttonText}
                    </Button>
                )}
            </CardActions>
        </Card>
    );
};

export default DsCard;
