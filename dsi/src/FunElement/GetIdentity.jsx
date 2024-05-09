import React from 'react'
import authService from '../appwrite/auth';
function GetIdentity() {

    const getIdentity = async () => {

        const identity = await authService.getUserIdentity()
        console.log(identity);

    }
    const getBrowserAvatar = async () => {

        const identity = await authService.getBrowserAvatar()
        console.log(identity);

    }
    const updatePreferences = async () => {

        const identity = await authService.updatePreferences()
        console.log(identity);
    }
    const getPreferences = async () => {

        const identity = await authService.getPreferences()
        console.log(identity.theme);

    }

    return (
        <>
            <div className='flex flex-col gap-4'>
                <button
                    className='button bg-blue-600 text-white rounded-full'
                    onClick={getIdentity}
                >
                    Get Identity
                </button>

                <button
                    className='button bg-blue-600 text-white rounded-full'
                    onClick={getBrowserAvatar}
                >
                    Get browser avatar
                </button>
                <button
                    className='button bg-blue-600 text-white rounded-full'
                    onClick={updatePreferences}
                >
                    update preferences
                </button>
                <button
                    className='button bg-blue-600 text-white rounded-full'
                    onClick={getPreferences}
                >
                    get preferences
                </button>
            </div>
        </>
    )
}

export default GetIdentity
