import React, { useState } from 'react';
import { Modal } from 'antd';
/**
 * Function that returns alert pop up
 * @param {string, string} , first param is type {'success', 'error', 'info', 'warning'} 
 * second param is message to be displayed
 */

function infoModal(type, message) {
    let secondsToGo = 5;
    const modal = Modal.success({
        title: 'This is a notification message',
        content: `This modal will be destroyed after second.`,
    });
    const timer = setInterval(() => {
        secondsToGo -= 1;
        modal.update({
            content: `This modal will be destroyed after  second.`,
        });
    }, 1000);
    setTimeout(() => {
        clearInterval(timer);
        modal.destroy();
    }, secondsToGo * 1000);
}
export default infoModal;