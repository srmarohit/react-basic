import { useEffect } from "react";

const About = (props) => {

    useEffect(() => {
        console.log("About Mounted..")

        return () => {
            console.log("About UnMounted..")
        }
    });
    return (
        <div>
            <h1>About</h1>
        </div>
    );
}

export default About;