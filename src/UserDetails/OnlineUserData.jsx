import React, { useState } from 'react';
import { Fab } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import AddUserDetailDialog from './AddUserDetailDialog';
import UserCard from './UserCard';

const OnlineUserData = () => {

    var data = [
        {
            username: 'Jayakannan',
            photo: 'https://tse4.mm.bing.net/th?id=OIP.EphYHqB1TxWe1rqcGaEapgHaJX&pid=Api&P=0',
            gender: 'Male',
            age: '36',
            contactNumber: '9842798478',
            emailId: 'jkannan98471@gmail.com'
        },
        {
            username: 'Ramya',
            photo: 'https://vectorified.com/images/cool-avatar-icon-37.jpg',
            gender: 'Female',
            age: '29',
            contactNumber: '95437123123', emailId: 'jkramya12@gmail.com'
        }];

    const [userDetails, setUserDetails] = useState(data);
    const [open, setOpen] = React.useState(false);

    const [currUser, setCurrUser] = React.useState(undefined);

    const handleClickOpen = () => {
        // setCurrMovie(undefined);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // callback for child
    const addUser = (userObj) => {
        setUserDetails([...userDetails, userObj]);
    }

    const removeUser = (userEmailId) => {
        setUserDetails(userDetails.filter(({ emailId }) => emailId !== userEmailId))
    }

    const viewUser = (userEmailId) => {
        const userDetail = userDetails.find(({ emailId }) => emailId === userEmailId);
        setCurrUser(userDetail);
        setOpen(true);
    }

    const editUser = (userEmailId, userObj) => {
        const editIndex = userDetails.findIndex(({ emailId }) => userEmailId === emailId);

        console.log(editIndex, userObj);

        var newArr = [...userDetails];
        newArr[editIndex] = userObj;

        console.log(newArr);

        setUserDetails(newArr);

    }

    return (
        <>
            <Fab
                color="white"
                aria-label="add"
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px'
                }}
                onClick={handleClickOpen}
            >
                <AddIcon color="primary" />
            </Fab>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}
            >

                {userDetails.map(({ username, photo, gender, age, contactNumber, emailId }) => (
                    <UserCard
                        username={username}
                        photo={photo}
                        gender={gender}
                        age={age}
                        contactNumber={contactNumber}
                        emailId={emailId}
                        key={emailId}
                        removeUser={removeUser}
                        viewUser={viewUser}
                    />
                ))}
            </div>

            <AddUserDetailDialog
                // passing of data from parent to child
                open={open}
                handleClose={handleClose}
                addUser={addUser}
                currUser={currUser}
                editUser={editUser}

            />
        </>
    )
}

export default OnlineUserData;