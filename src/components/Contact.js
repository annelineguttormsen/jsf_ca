import React from "react";
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
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });
    
    function onSubmit(data) {
		console.log("data", data);
    }
    
    return (
        <>
        <br/>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control name="firstName" placeholder="John" ref={register({required:true})}/>
                {errors.firstName && <ErrorMessage text={errors.firstName.message}></ErrorMessage>}
            </Form.Group>
            <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control name="firstName" placeholder="Smith" ref={register({required:true})}/>
                {errors.firstName && <ErrorMessage text={errors.lastName.message}></ErrorMessage>}
            </Form.Group>
            <Form.Group>
                <Form.Label>E-mail</Form.Label>
                <Form.Control name="eMail" placeholder="john.smith@gmail.com" ref={register({required:true})}/>
                {errors.eMail && <ErrorMessage text={errors.eMail.message}></ErrorMessage>}
            </Form.Group>
            <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="messageString" placeholder="Write your message here" ref={register({required:true})}/>
                {errors.messageString && <ErrorMessage text={errors.messageString.message}></ErrorMessage>}
            </Form.Group>
            <Button type="submit">Submit</Button>
        </Form>
        </>
    )
}