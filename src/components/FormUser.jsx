import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import './styles/FormUser.css'

const FormUser = ({ createUsers, infoUpdate, updateUsers, setInfoUpdate, closeForm, setCloseForm }) => {

    useEffect(() => {
        reset(infoUpdate)
    }, [infoUpdate])

    const { handleSubmit, register, reset } = useForm()



    const submit = data => {
        if (infoUpdate) {
            //Update
            updateUsers('/users', infoUpdate.id, data)
            setInfoUpdate()
        } else {
            createUsers('/users', data)
        }
        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: ''
        })
    }

    const handleCloseForm = () => {
        setCloseForm(true)
        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: ''
        })
    }

    return (
        <div onClick={handleCloseForm} className={`formuser-container ${closeForm && 'close-form'}`}>
            <form onClick={e => e.stopPropagation()} className='formuser' onSubmit={handleSubmit(submit)}>
                <h2 className='formuser__title'>{infoUpdate ? 'update' : 'New User'}</h2>
                <button onClick={handleCloseForm} className='formuser__close'>X</button>
                <div className='formuser__group'>
                    <label className='formuser__label'  htmlFor="email">Email <br /></label>
                    <input className='formuser__input' {...register('email')} type="email" id="email" />
                </div>
                <div className='formuser__group'>
                    <label className='formuser__label'  htmlFor="password">Password <br /></label>
                    <input className='formuser__input' {...register('password')} type="password" id="password" />
                </div>
                <div className='formuser__group'>
                    <label className='formuser__label' htmlFor="first_name">First name <br /></label>
                    <input className='formuser__input' {...register('first_name')} type="text" id="first_name" />
                </div>
                <div className='formuser__group'>
                    <label className='formuser__label' htmlFor="last_name">Last name <br /></label>
                    <input className='formuser__input' {...register('last_name')} type="text" id="last_name" />
                </div>
                <div className='formuser__group'>
                    <label className='formuser__label' htmlFor="birthday">Birthday <br /></label>
                    <input className='formuser__input' {...register('birthday')} type="date" id="birthday" />
                </div>
                <button className='formuser__btn'>{infoUpdate ? 'Update' : 'Create'}</button>
            </form> 
        </div>

    )
}

export default FormUser