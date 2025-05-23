import * as React from 'react';
import { Container, Typography } from '@mui/material';
import DsAccordion from '../components/surface/DsAccordion';

export default function AccordionPage() {
    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
                Accordion
            </Typography>

            <DsAccordion title="Accordion 1" defaultExpanded>
                <Typography>
                    이곳은 첫 번째 아코디언의 상세 내용입니다. 여기에 원하는 설명이나 컴포넌트를 배치할 수 있습니다.
                </Typography>
            </DsAccordion>

            <DsAccordion title="Accordion 2">
                <Typography>
                    이곳은 두 번째 아코디언입니다. 기본으로 닫혀 있으며, 클릭 시 열립니다.
                </Typography>
            </DsAccordion>
        </Container>
    );
}
