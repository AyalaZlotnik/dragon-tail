import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useSelector } from 'react-redux';
import { RootState } from '../redux-toolkit/store';

export interface DisplayOrderProps {
    id: string
    closeModal: (value: string) => void
}

export const DisplayOrder = (props: DisplayOrderProps) => {
    const { closeModal, id } = props
    const currentOrder = useSelector((state: RootState) => state.orders.list[Number(id)])
    const [currentCotext, setCurrentCotext] = React.useState(0)
    const getCotext = () => {
        switch (currentCotext) {
            case 0:
                return <Box >
                    <Button onClick={() => setCurrentCotext(1)}>Next</Button>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {currentOrder?.name}            </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {currentOrder?.description}            </Typography>
                </Box>
            case 1:
                return <Box>good lack</Box>
            default:
                return <Box>error. sorry...</Box>
        }
    }
    return <Modal
        open={props.id !== '' ? true : false}
        onClose={() => { closeModal('') }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        {getCotext()}
    </Modal>;
};


