import React from "react";
import { Link } from "react-router-dom";

const Header = () =>{
    return(
        <div>
             {/* footer  */}
             <footer class="page-footer font-small blue pt-4">

                <div class="container-fluid text-center text-md-left">

                    <div class="row">

                        <div class="col-md-8 mt-md-0 mt-3">

                            <h5 class="text-uppercase">Footer Content</h5>
                            <p>Here you can use rows and columns to organize your footer content.</p>

                        </div>

                        <hr class="clearfix w-100 d-md-none pb-3"/>

                        <div class="col-md-3 mb-md-0 mb-3">

                            <h5 class="text-uppercase">Links</h5>

                            <ul class="list-unstyled">
                                <li>
                                <Link to="/">Home</Link>
                                </li>
                                <li>
                                <Link to="/about">About</Link>
                                </li>
                                <li>
                                <Link to="/services">Services</Link>
                                </li>
                                <li>
                                <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>


                    </div>

                </div>

                <div class="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="/"> MDBootstrap.com</a>
                </div>

                </footer>
        </div>
    );
}

export default Header;