import { notification } from "antd";

/**
 * Function that returns alert pop up
 * @param {string, string} , first param is type {'success', 'error', 'info', 'warning'} 
 * second param is message to be displayed
 */
const openNotification = (type, message) => {
    if (type === "error" && !message) {
        message = "Something went wrong!";
    }
    notification[type]({
        // message: type === "info" ? "Oops!!!" : "Oops", // Capitalize string
        message: type === "info" ? "Oops!!!" : "success" ? "Congratulation" : "Oops", // Capitalize string
        description: message,
        duration: 2 // In seconds
    });
};

export default openNotification;