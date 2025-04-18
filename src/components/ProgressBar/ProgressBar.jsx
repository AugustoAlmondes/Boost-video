// ProgressBar.jsx
import { Stepper, Step, StepLabel } from '@mui/material';
import './progressbar.css';
import '../../index.css';
import PropTypes from 'prop-types';

import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/system';

const fillFromRight = keyframes`
  from {
    width: 0%;
    left: 0;
  }
  to {
    width: 100%;
    left: 0;
  }
`;

const ColorlibConnector = styled(StepConnector, {
    shouldForwardProp: (prop) => prop !== 'direction',
})(({ theme, direction }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
    },
    [`&.${stepConnectorClasses.active} .${stepConnectorClasses.line}`]: {
        position: 'relative',
        backgroundColor: 'transparent',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            height: '100%',
            width: '100%',
            background: 'linear-gradient(to right, var(--green),#5f8c23)',
            borderRadius: 1,
            animation: direction === 1 ? `${fillFromRight} 0.5s ease-out forwards` : 'none',
        },
    },
    [`&.${stepConnectorClasses.completed} .${stepConnectorClasses.line}`]: {
        backgroundColor: 'var(--green)',
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor: '#eaeaf0',
        borderRadius: 1,
        ...theme.applyStyles?.('dark', {
            backgroundColor: theme.palette.grey[800],
        }),
    },
}));

const ColorlibStepIconRoot = styled('div')(({ ownerState }) => ({
    backgroundColor: 'var(--lightred)',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.5rem',
    transition: 'all 0.3s ease-in-out',
    ...(ownerState.active && {
        backgroundColor: '#43a047',
        transform: 'scale(1.2)',
        boxShadow: '0 4px 10px rgba(0,0,0,.3)',
    }),
    ...(ownerState.completed && {
        backgroundColor: 'var(--green)',
        transform: 'scale(1.05)',
        boxShadow: '0 4px 10px rgba(0,0,0,.2)',
    }),

    '@media (max-width: 800px)': {
        width: 35,
        height: 35,
    },
}));

function ColorlibStepIcon(props) {
    const { active, completed, className, icon, iconsList } = props;

    return (
        <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
            {iconsList?.[icon] || icon}
        </ColorlibStepIconRoot>
    );
}

ColorlibStepIcon.propTypes = {
    active: PropTypes.bool,
    completed: PropTypes.bool,
    className: PropTypes.string,
    icon: PropTypes.number,
    iconsList: PropTypes.object,
};

export default function ProgressBar({ listSteps, currentStep, listIcons, direction }) {
    return (
        <div className="container-progress-bar">
            <Stepper
                alternativeLabel
                activeStep={currentStep}
                connector={<ColorlibConnector direction={direction} />}
            >
                {listSteps.map((label) => (
                    <Step key={label}>
                        <StepLabel
                            slots={{ stepIcon: ColorlibStepIcon }}
                            slotProps={{ stepIcon: { iconsList: listIcons } }}
                        >
                            {label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
}

ProgressBar.propTypes = {
    listSteps: PropTypes.array.isRequired,
    currentStep: PropTypes.number.isRequired,
    listIcons: PropTypes.object.isRequired,
};
