import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import { Button, DialogActions, DialogContent, DialogTitle, FormLabel, RadioGroup, Radio, FormControl, FormControlLabel } from '@mui/material';

export default function AddUserDetailDialog(
    {
        open = false,
        handleClose = () => undefined,
        addUser,
        currUser,
        editUser
    }) {

    const handleSubmit = (event) => {
        event.preventDefault();
        var data = {};


        Array.from(event.target.elements).map((element) => {
            if (element.nodeName === 'INPUT') {
                if ((element.type === 'radio' && element.checked) || element.type !== 'radio') {
                    data[element.name] = element.value;
                }
            }
            return data;
        });

        console.log(data);
        if (currUser === undefined) {
            // passing data from child to parent with help of callback function
            addUser(data);
        } else {
            editUser(currUser.emailId, data);
        }

        // addUser(data);
        handleClose();
    }

    useEffect(() => {
        console.log("Inside useEffect", currUser);
    }, [currUser]);
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth={'sm'}
                fullWidth={true}
            >

                <DialogTitle>{currUser ? 'Edit User Detail' : 'Add a New User'}</DialogTitle>
                <form onSubmit={handleSubmit} >
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="username"
                            name="username"
                            label="User Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            color='secondary'
                            required
                            size='small'
                            defaultValue={currUser !== undefined ? currUser.username : ''}
                        />

                        <TextField
                            id="photo"
                            name="photo"
                            label="User Photo"
                            type="text"
                            fullWidth
                            variant="standard"
                            color='secondary'
                            required
                            size='small'
                            defaultValue={currUser !== undefined ? currUser.photo : ''}
                        />

                        <FormControl
                            required
                            color="secondary"
                            sx={{
                                mt: 1
                            }}
                        >
                            <FormLabel id="gender">Gender</FormLabel>
                            <RadioGroup
                                aria-labelledby="gender"
                                defaultValue={currUser?.gender || 'Male'}
                                name="gender"
                                row
                            >   <FormControlLabel value="Male" control={<Radio />} label="Male" />
                                <FormControlLabel value="Female" control={<Radio />} label="Female" />
                            </RadioGroup>
                        </FormControl>
                        <TextField
                            margin="dense"
                            id="age"
                            name="age"
                            label="Age"
                            type="numeric"
                            fullWidth
                            variant="standard"
                            color='secondary'
                            required
                            size='small'
                            defaultValue={currUser?.age || ''}
                        />

                        <TextField
                            margin="dense"
                            id="contactNumber"
                            name="contactNumber"
                            label="Contact Number"
                            type="text"
                            fullWidth
                            variant="standard"
                            color='secondary'
                            required
                            size='small'
                            defaultValue={currUser?.contactNumber || ''}
                        />

                        <TextField
                            margin="dense"
                            id="emailId"
                            name="emailId"
                            label="Email Id"
                            type="email"
                            fullWidth
                            variant="standard"
                            color='secondary'
                            required
                            size='small'
                            disabled={currUser !== undefined}
                            defaultValue={currUser?.emailId}
                        />

                    </DialogContent>
                    <DialogActions>
                        <Button type='button' variant='contained' color="error" onClick={handleClose}>Cancel</Button>
                        <Button type="submit" variant='contained' color='primary'>{currUser ? 'Edit' : 'Add'}</Button>
                    </DialogActions>

                </form>

            </Dialog>
        </div>
    );
}
