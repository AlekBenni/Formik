import React, { useState } from 'react'
import { useFormik } from 'formik'

function YoutubeForm (){

    const formik = useFormik({
        initialValues: {
           name: '',
           email: '',
           channel: ''
        },
        onSubmit: values => {
           console.log('Form data', values)
           setName(values.name)
           setMail(values.email)
           setChannel(values.channel)
        }
    })

    let [name, setName] = useState('test name')
    let [mail, setMail] = useState('test mail')
    let [chanel, setChannel] = useState('test channel')

    return (
        <div>

        <div className="alert alert-danger" role="alert">{name}</div>
        <div className="alert alert-danger" role="alert">{mail}</div>
        <div className="alert alert-danger" role="alert">{chanel}</div>

           <form className="mt-5"
           onSubmit={formik.handleSubmit}>

            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" 
            onChange={formik.handleChange} value={formik.values.name} />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email"
            onChange={formik.handleChange} value={formik.values.email}  />

            <label htmlFor="channel">Channel</label>
            <input type="text" id="channel" name="channel"
            onChange={formik.handleChange} value={formik.values.channel}  />

            <button
            type="submit"
            className="mt-3">Submit</button>

           </form>
        </div>
    )
}

export default YoutubeForm