import React from 'react';
import classes from './Modal.module.scss';
import classNames from 'classnames';

const Modal = (props) => {
    return (
        <div 
            className={classNames(classes.ModalWrapper, 
            {[classes.active] : props.clickWatchVideo})}
            onClick={() => props.setClickWatchVideo(false)}
        >
            <div 
                className={classes.ModalBlock}
                onClick={(ev) => ev.stopPropagation()}    
            >
                {props.children}
            </div>
        </div>
    )
}

export default Modal