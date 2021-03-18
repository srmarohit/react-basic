import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        console.log("Home Mounted..")

        return () => {
            console.log("Home UnMounted..")
        }
    });
    return (
        <h1>Home</h1>
        )
}

export default Home;