import React from 'react';

const Topbar = () => {
    return (

        <div class="row">
            <div class="col-md-9 col-12">
                <ul class="top-bar-info">
                    <li><i class="fas fa-phone"></i> Phone: +92 (51) 4862 383</li>
                    <li><i class="fas fa-map-marker-alt"></i>House #88-A, Nazim Uddin Road, F-8/4, Islamabad, Pakistan.</li>
                    <li><i class="fa fa-envelope"></i>Email: info@waheedgroup.com.pk</li>
                </ul>
            </div>
            <div class="col-md-3 col-12">
                <ul class="social-icons hidden-sm">
                    <li><a href="http://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook"></i></a></li>
                    <li><a href="http://www.twitter.com/" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="http://www.skype.com/" target="_blank" rel="noopener noreferrer"><i class="fab fa-skype"></i></a></li>
                </ul>
            </div>
        </div >

    );
};

export default Topbar;
