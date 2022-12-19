import React, { useState } from 'react';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { ListWrapper } from '../styles';
import PaymentModal from './PaymentModal';
import MuiSubmitBtn from '../../../components/form/MuiSubmitBtn';
import PaymentsIcon from '@mui/icons-material/Payments';
import { IconButton } from '@mui/material';

const PriceCard = ({ singleProduct }) => {

    const [show1, setShow1] = useState(false)


    return (
        <>
            <ListWrapper>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={singleProduct?.image} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={singleProduct?.title}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    {`$${singleProduct?.price}: `}
                                </Typography>
                                {singleProduct?.description?.slice(0, 50)}...
                            </React.Fragment>
                        }
                    />
                    <IconButton aria-label="PaymentsIcon" color="primary" onClick={() => setShow1(true)}>
                        <PaymentsIcon />
                    </IconButton>
                </ListItem>
                <Divider variant="inset" component="li" />
            </ListWrapper>
            <PaymentModal open={show1} onClose={() => setShow1(false)} />
        </>
    )
}

export default PriceCard