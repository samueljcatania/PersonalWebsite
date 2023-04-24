function Contact() {
    return (
        <div className='flex justify-center mt-52 w-screen'>
            <div className='grid w-3/4 xl:w-1/2 2xl:w-1/3'>
                <div className='grid place-items-center'>
                    <h3 className='font-bold font-nunito text-4xl md:text-5xl mb-1 dark:text-dark-theme-text'>
                        Contact
                    </h3>
                    <div className='border-2 w-40 md:w-52 mb-9 border-black dark:border-dark-theme-text'></div>
                </div>
                <div className='sm:w-3/4 place-self-center'>
                    <form action='#' className='space-y-8'>
                        <div>
                            <input className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border
                            border-gray-300 focus:border-primary-500 dark:bg-zinc-700 dark:border-zinc-400
                            dark:text-dark-theme-text dark:focus:border-zinc-400'
                                   type='text'
                                   id='name'
                                   placeholder='Name'
                                   required/>
                        </div>
                        <div>
                            <input className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border
                            border-gray-300 focus:border-primary-500 dark:bg-zinc-700 dark:border-zinc-400
                            dark:text-dark-theme-text dark:focus:border-zinc-400'
                                   type='email'
                                   id='email'
                                   placeholder='Email'
                                   required/>
                        </div>
                        <div className='sm:col-span-2'>
                        <textarea
                            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border
                            border-gray-300 focus:border-primary-500 dark:bg-zinc-700 dark:border-zinc-400
                            dark:text-dark-theme-text dark:focus:border-zinc-400'
                            id='message'
                            placeholder='Body'
                            rows='6'
                            required>
                        </textarea>
                        </div>
                        <button
                            className='border border-black bg-black hover:bg-opacity-60 text-white font-bold py-2 px-4 rounded'
                            type='submit'>
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
