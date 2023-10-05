import { useState } from "react";
import './styles/UserCard.css'

function UserCard({ user, deleteUsers, setInfoUpdate, handleOpenForm }) {

    const [closeDelete, setcloseDelete] = useState(true)

    const handleDelete = () => {
        deleteUsers("/users", user.id);
        setcloseDelete(true)


    };

    const handleClose = () => setcloseDelete(true)

    const handleCloseDelete = () => {
        setcloseDelete(false)
    }


    const handleEdit = () => {
        setInfoUpdate(user);
        handleOpenForm()
    };

    return (
        <article className="card">
            <div className="container">
                <h3 className="title__h3">#{`${user.id}`}</h3>
                <h3 className="name">{`${user.first_name} ${user.last_name}`}</h3>
                <h3 className="line"></h3>
                <ul className="list__items">
                    <li className="list">
                        <span className="items">Email: </span>
                        <span className="email">{user.email}</span>
                    </li>
                    <li className="list">
                        <span className="items">Birthday: </span>
                        <span>{user.birthday}</span>
                    </li>
                </ul>
                <div onClick={handleClose} className={`form__delete ${closeDelete && 'delete__close'}`}>
                    <div onClick={e => e.stopPropagation()} className="container__delete" >
                        <h2 className="title">Are you sure you want to delete the user?</h2>
                        <div className="btn">
                            <button className="btn__close" onClick={handleClose}>Cancelar</button>
                            <button onClick={handleDelete} className="btn__accept">Accept</button>
                        </div>
                    </div>
                </div>
                <button className="btn__delete" onClick={handleCloseDelete}>
                    <i className='bx bxs-trash'></i>
                </button>
                <button className="btn__edit" onClick={handleEdit}>
                    <i className='bx bxs-edit'></i>
                </button>
            </div>
        </article>
    );
}

export default UserCard;
