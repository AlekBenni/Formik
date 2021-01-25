import React, { useState } from 'react'
import { useFormik } from 'formik'

type ErrorType = {
    name?: string
    email?: string
    channel?: string
}

const redBlock = {
    color: 'red'
}

function YoutubeForm (){

    const formik = useFormik({
        initialValues: {
           name: '',
           email: '',
           channel: ''
        },
        onSubmit: values => {
           setName(values.name)
           setMail(values.email)
           setChannel(values.channel)
        },
        validate: values => {
            let error:ErrorType = {}

            if(!values.name){
                error.name = 'Name is Required!'
            }

            if(!values.email){
                error.email = 'Email is Required!'
            }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
                error.email = 'Email is invalid!'
            }

            if(!values.channel){
                error.channel = 'Chanel is Required!'
            }
            return error
        }
    })

    let [name, setName] = useState('test name')
    let [mail, setMail] = useState('test mail')
    let [chanel, setChannel] = useState('test channel')

    return (
        <div>

        <div className="alert alert-danger mt-3" role="alert">{name}</div>
        <div className="alert alert-danger" role="alert">{mail}</div>
        <div className="alert alert-danger" role="alert">{chanel}</div>

           <form className="mt-5"
           onSubmit={formik.handleSubmit}>

            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" 
            onChange={formik.handleChange} value={formik.values.name} />
            {formik.errors.name ? <div style={redBlock}>{formik.errors.name}</div> : null}
        
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email"
            onChange={formik.handleChange} value={formik.values.email}  />
            {formik.errors.email ? <div style={redBlock}>{formik.errors.email}</div> : null}
                      
            <label htmlFor="channel">Channel</label>
            <input type="text" id="channel" name="channel"
            onChange={formik.handleChange} value={formik.values.channel}  />
            {formik.errors.channel ? <div style={redBlock}>{formik.errors.channel}</div> : null}        

            <button
            type="submit"
            className="mt-3">Submit</button>

           </form>
        </div>
    )
}

export default YoutubeForm