import React from 'react';
import './alignPages.css';
import './Profile.css';

export default function Profile(){
    return ( 
        <div class = "Profile">
            <h1 id="title">Profile Information</h1>
        <div class= "form-box2">
            <h2 id="title">Update Profile</h2>
            <form>
                <div class="input-group2">
                    <div class="input-field2">
                        <input type="name" placeholder="Name"></input>
                    </div>
                    <div class="input-field2">
                        <input type="email" placeholder="Email"></input>
                    </div>
                    <div class="input-field2">
                        <input type="degree" placeholder="Degree"></input>
                    </div>
                    <div class="input-field2">
                        <input type="day" placeholder="Avaliability (Ex. M,T stands for Monday and Tuesday avaliable)"></input>
                    </div>
                    <div class="input-field2">
                        <input type="user" placeholder="Student or Tutor"></input>
                    </div>
                </div>
                <div class="btn-field2">
                    <button type="button" id="updateBtn">Update Information</button>
                </div>
            </form>
        </div>

        <div class = "info-box">
            <h3 id = "title">Current Infromation</h3>
            <form>
                <div class = "display-group">
                    <div class = "display-field">
                        <h4>Name:</h4>
                        <h4>Email:</h4>
                        <h4>Degree:</h4>
                        <h4>Avaliability:</h4>
                        <h4>User Type:</h4>
                    </div>
                </div>
            </form>
        </div>
    </div>


    );
}