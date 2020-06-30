import React from 'react'
import Title from '../Title'
export default function Contact() {
    return (
        <section className="py-5">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <Title title="Contact Us" />
                    <form className="mt-5"
                      action="https://formspree.io/WORK@nimashams.ir"
                      method="POST">
                        {/* first colum*/}
                        <div className="form-group">
                            <input
                                type="text"
                                name="firstName"
                                className="form-control"
                                placeholder="Nima shams" />
                        </div>
                        {/* email colum*/}
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="me@nimashams.ir" />
                        </div>
                        {/* subject*/}
                        <div className="form-group">
                            <input
                                type="text"
                                name="subject"
                                className="form-control"
                                placeholder="import !!!!!" />
                        </div>
                        {/* subject*/}
                        <div className="form-group">
                            <textarea name="message"
                                className="form-control"
                                rows="10"
                                placeholder="hello there buddy" />
                        </div>
                        {/* subject*/}
                        <div className="form-group">
                            <input
                             className="form-control bg-primary text-white" 
                             value="send"
                             type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
