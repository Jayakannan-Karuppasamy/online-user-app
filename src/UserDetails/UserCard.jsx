import React from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Typography } from '@mui/material';

const UserCard = ({
    username, photo, gender, age, contactNumber, emailId, removeUser, viewUser
}) => {
    return (
        <div style={{
            width: '245px',
            margin: 8,
            textAlign: 'center',
            border: '1px solid grey',
            position: 'relative'
        }} >

            <span
                style={{
                    position: 'absolute',
                    top: '40px',
                    right: '10px',
                    cursor: 'pointer'
                }}
                onClick={() => viewUser(emailId)}>
                <EditIcon
                    color="secondary"
                />
            </span>

            <span
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    cursor: 'pointer'
                }}
                onClick={() => removeUser(emailId)}
            >
                <DeleteIcon
                    color="primary"
                />
            </span>

            <img src={photo} alt={username} style={{ height: '278px', width: '230px' }} />
            <Typography variant="h5" noWrap >{username}</Typography>
            <Typography variant="h6" sx={{
                color: '#757575'
            }}>{gender} | age: {age}</Typography>
            <Typography variant="h6" sx={{
                color: '#757575'
            }}>{contactNumber} </Typography>
            <Typography variant="h6" wrap="true" sx={{
                color: '#757575'
            }}>{emailId}</Typography>
        </div>
    )
}

export default UserCard;