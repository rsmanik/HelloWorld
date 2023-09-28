import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 


const FinishScreen: React.FC = () => {
    const navigate = useNavigate(); 

    const onFinishClick = () => {
        console.log('Finish button clicked');
        navigate('/dashboard');
    };
    

    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100%" gap="20px">
            <Typography variant="h4" style={{ flexGrow: 1 }}>
                        Congratulations!
                    </Typography>

            <p>You have completed the lesson.</p>

            <Button 
            variant="contained"
            onClick={e => { e.preventDefault(); onFinishClick(); }}
            >
                Finish
            </Button>
        </Box>
    );
}


export default FinishScreen;
