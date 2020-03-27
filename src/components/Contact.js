import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import ErrorMessage from "./ErrorMessage";

//bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const schema = yup.object().shape({
    firstName: yup
        .string()
        .required("First name is required")
        .min(2, "First name must contain more than 2 characters"),
    lastName: yup
        .string()
        .required("Last name is required")
        .min(2, "Last name must contain more than 2 characters"),
    eMail: yup
        .string()
        .email("E-mail must be valid")
        .required("E-mail is required"),
    messageString: yup
        .string()
        .required("Must contain a message")
        .min(10,"Message must be longer than 10 characters")
});

export default function Contact () {
    const { register, handleSubmit, errors, formState } = useForm({
        validationSchema: schema
    });
    
    //yeah NOW you work
    //fuck u onsubmit
    const onSubmit = (data) => {
        console.log("onsubmit har blitt tilkalt", data);
        console.log(formState);
    };
    
    return (
        <>
        <br/>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control name="firstName" placeholder="John" ref={register}/>
                {errors.firstName && <ErrorMessage text={errors.firstName.message}></ErrorMessage>}
            </Form.Group>
            <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control name="lastName" placeholder="Smith" ref={register}/>
                {errors.lastName && <ErrorMessage text={errors.lastName.message}></ErrorMessage>}
            </Form.Group>
            <Form.Group>
                <Form.Label>E-mail</Form.Label>
                <Form.Control name="eMail" placeholder="john.smith@gmail.com" ref={register}/>
                {errors.eMail && <ErrorMessage text={errors.eMail.message}></ErrorMessage>}
            </Form.Group>
            <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="messageString" placeholder="Write your message here" ref={register}/>
                {errors.messageString && <ErrorMessage text={errors.messageString.message}></ErrorMessage>}
            </Form.Group>
            <Button type="submit">Submit</Button>
            {formState.isValid == true && <p>Form successfully validated!</p>}
        </Form>
        </>
    )
}