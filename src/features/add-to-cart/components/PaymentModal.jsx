import { Grid } from '@mui/material';
import React from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import MuiDialog from '../../../components/form/MuiDialog'
import MuiSubmitBtn from '../../../components/form/MuiSubmitBtn';
import MuiTextField from '../../../components/form/MuiTextField'

const PaymentModal = ({ open, onClose }) => {
    const { handleSubmit, control, reset, setValue, watch } = useForm();

    const handlePayment = (data) => {
        console.log(data)
        alert("Payment successfull...!")
        reset()
    }

    return (
        <MuiDialog open={open} onClose={onClose} title="Payment Integration" size="xs">
            <Grid
                container
                spacing={3}
                marginTop
                component="form"
                noValidate
                onSubmit={handleSubmit(data => handlePayment(data))}
            >
                <Grid item xs={12}>
                    <MuiTextField name="card_number" label="Card Number"
                        required={false}
                        control={control}
                        rules={{
                            required: true,
                        }} />
                </Grid>
                <Grid item xs={12}>
                    <MuiTextField name="Expiration" label="Expiration"
                        required={false}
                        control={control}
                        rules={{
                            required: true,
                        }} />
                </Grid>
                <Grid item xs={12}>
                    <MuiTextField name="CVC" label="CVC"
                        required={false}
                        control={control}
                        rules={{
                            required: true,
                        }} />
                </Grid>
                <Grid item xs={12}>
                    <MuiTextField name="Country" label="Country"
                        required={false}
                        control={control}
                        rules={{
                            required: true,
                        }} />
                </Grid>
                <Grid item xs={12} align="right">
                    <MuiSubmitBtn
                        type="button"
                        text="cancel"
                        onClick={() => onClose()}
                    />
                    <MuiSubmitBtn text="Save" />
                </Grid>
            </Grid>
        </MuiDialog>
    )
}

export default PaymentModal