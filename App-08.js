import { useEffect } from "react";

const Contact = (props) => {
    useEffect(() => {
        console.log("Contact Mounted..")

        return () => {
            console.log("Contact UnMounted..")
        }
    });
    return (
        <div>
            <h1>Contact</h1>
        </div>
    );
}

export default Contact;