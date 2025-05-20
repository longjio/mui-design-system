import { Link as RouterLink } from 'react-router-dom';
import { Breadcrumbs, Link, Typography } from '@mui/material';

<Breadcrumbs aria-label="breadcrumb">
    <Link component={RouterLink} underline="hover" color="inherit" to="/">
        MUI
    </Link>
    <Link
        component={RouterLink}
        underline="hover"
        color="inherit"
        to="/material-ui/getting-started/installation/"
    >
        Core
    </Link>
    <Typography color="text.primary">Breadcrumbs</Typography>
</Breadcrumbs>
