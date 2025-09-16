import React, { use } from 'react';

const Users = ({usersPromise}) => {

    const initalUsers = use(usersPromise);
    console.log(initalUsers);;

    const handleAddUser = e=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const newUser = {name, email};
        console.log(newUser);


        //create user in the db
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
        .then(res=>res.json())
        .then(data =>{
            console.log('data after creating user in db', data);
            if(data.insertedId){
                alert('User added successfully');
                e.target.reset();
            }
        })
    }
    return (
        <div>
            {/* Add uers */}
            <div>
                <form onSubmit={handleAddUser}>
                    <input type="text" name='name' />
                    <br />
                    <input type="email" name="email" id="" />
                    <br />
                    <input type="submit" value="Add User" />
                </form>
            </div>
        </div>
    );
};

export default Users;