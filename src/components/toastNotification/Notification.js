import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notification = () => {

    const toastNot = () => {
        //alert('Login Succesfull');
        toast.success("Wow so easy!", {
            position: "top-center",
        });
        toast.warn("Wow so easy!", {
            position: "top-left",
        });
        toast.info("Wow so easy!", {
            position: "top-right",
        });
        toast.error("Wow so easy!", {
            position: "bottom-left",
        });
        toast.dark("Wow so easy!", {
            position: "bottom-right",
        });
    }

    return(
        <>
            <h6>React Toast Notifications, full detail in document</h6>
            <div className="notificationBox">
                <h2>Click to button</h2>
                <button type="submit" onClick={toastNot}>Click</button>
            </div>
            <ToastContainer />
        </>
    )
}

export default Notification