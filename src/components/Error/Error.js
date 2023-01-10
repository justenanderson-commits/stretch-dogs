import React from 'react'
import MicroModal from 'react-micro-modal'
import './Error.css'

const Error = ({ error }) => {
    return (
        <MicroModal
            trigger={(open) => (
                <div>
                    <p>Oops! There was an error!</p>
                    <button className='open-error' onClick={open}>
                        Click for more info
                    </button>
                    <button className='home' onClick={() => reset()}>
                        Home
                    </button>
                </div>
            )}
        >
            {(close) => (
                <div className='modal'>
                    <p>{error}</p>
                    <button className='close-modal' onClick={close}>
                        Close
                    </button>
                </div>
            )}
        </MicroModal>
    )
}

export default Error