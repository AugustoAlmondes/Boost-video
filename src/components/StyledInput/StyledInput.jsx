import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';

const StyledInput = styled(TextField)({
    width: '100%',
    height: '40px',
    border: '2px solid rgb(226, 226, 226)',
    borderRadius: '10px',
    padding: '10px',
    fontSize: '16px',
    fontFamily: 'var(--Avenir)',
    fontWeight: 200,
    transition: '.2s',
    backgroundColor: 'white',

    '&:hover': {
        borderColor: 'rgb(200, 200, 200)',
    },

    '& .MuiInputBase-input': {
        padding: '10px',
    },

    '& fieldset': {
        border: 'none',
    },

    '& #outlined-basic': {
        fontSize: '6px',
        fontFamily: 'var(--Avenir)',
        fontWeight: 200,
        top: '-7px',
    },
});



export default function BasicTextFields() {
    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label="Outlined" variant="outlined" 
                sx={{
                    '& .MuiInputBase-input': {
                        padding: '10px',
                    },
                }}
            />
        </Box>
    );
}