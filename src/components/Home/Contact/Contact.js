import React from 'react';

const Contact = () => {
    return (
        <section className="container-fluid pt-5 pl-5 pl-5 pb-3  bg-color-light ">
            <div className="row mt-3">
                <div className="col-md-6 pl-5 pr-5 ">
                   <h2 style={{fontSize:'40px'}} className="color-dark mb-5">
                       Let us handle your project, professionally.
                   </h2>
                   <p>
                       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti excepturi quis ea laborum, doloremque fugit!
                   </p>
                </div>
                <div className="col-md-6 pl-5 pr-5 ">
                    <form>
                        <div class="form-group">
                            
                            <input type="email" class="form-control"   placeholder="Your email address"/>
                            
                        </div>
                        <div class="form-group">
                            
                            <input type="text" class="form-control"  placeholder="Your name / company's name"/>
                        </div>
                        <div class="form-group">
                            
                        <textarea style={{height:'300px'}} class="form-control" placeholder="Your message" aria-label="With textarea"></textarea>
                            
                        </div>
                        
                        <button  type="submit" class="btn bg-color-dark text-white pl-5 pr-5 ">Submit</button>
                    </form>
                </div>
            </div>
            <div className="text-center pt-5 mt-5">
                <p> Copy right {(new Date().getFullYear())} </p>
            </div>
        </section>
    );
};

export default Contact;
