import React from 'react';

const Contact = () => {
    return (
        <div id='contact'>
            <div className="hero bg-secondary text-primary">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-primary">Get In Touch</h1>
                        <p className="py-6 font-semibold text-lg">I enjoy discussing people's idea and design challenges. Feel free to tell me about your feedback and how can I help you.</p>
                        <div className='text-base'>
                            <p>Contact No: +8801986574001</p>
                            <p>Email Address: runurowson@gmail.com</p>
                            <p>Present Address : DaulatPur, Khulna </p>
                        </div>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="example@email.com" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Messege</span>

                                </label>
                                <textarea className="textarea textarea-bordered h-24" placeholder="Abc"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;