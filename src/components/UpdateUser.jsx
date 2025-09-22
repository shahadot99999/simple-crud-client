import { useLoaderData } from "react-router";


const UpdateUser = () => {
    const user = useLoaderData();
    // console.log(user);

    const handleUpdateUser = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        console.log(name, email);
    }

    return (
        <div>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name="name" defaultValue={user.name} />
                <br />
                <input type="email" name="email" defaultValue={user.email} id="" />
                <br />
                <input type="submit" value="Update User" />
            </form>
        </div>
    );
};

export default UpdateUser;