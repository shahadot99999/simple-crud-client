import React from 'react';

const Users = () => {

    const handleAddUser = e=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const newUser = {name, email};
        console.log(newUser);


        //create user in the db
        fetch('')
        .then(res=>res.json())
        .then(data =>{
            console.log('data after creating user in db', data);
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