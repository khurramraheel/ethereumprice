import React, { Component } from 'react'
import Trade from '../Tabs/Trade/Trade'
export default class Tabs extends Component {
    render() {
        return (
            <div>
                <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Transaction</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Trade</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Profile</a>
                    </li>
                </ul>
                <div class="tab-content p-3" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt officia. Fugiat velit proident aliquip nisi incididunt nostrud exercitation proident est nisi. Irure magna elit commodo anim ex veniam culpa eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod consequat eu adipisicing minim anim aliquip cupidatat culpa excepteur quis. Occaecat sit eu exercitation irure Lorem incididunt nostrud.</div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><Trade/></div>
                    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">Est quis nulla laborum officia ad nisi ex nostrud culpa Lorem excepteur aliquip dolor aliqua irure ex. Nulla ut duis ipsum nisi elit fugiat commodo sunt reprehenderit laborum veniam eu veniam. Eiusmod minim exercitation fugiat irure ex labore incididunt do fugiat commodo aliquip sit id deserunt reprehenderit aliquip nostrud. Amet ex cupidatat excepteur aute veniam incididunt mollit cupidatat esse irure officia elit do ipsum ullamco Lorem. Ullamco ut ad minim do mollit labore ipsum laboris ipsum commodo sunt tempor enim incididunt. Commodo quis sunt dolore aliquip aute tempor irure magna enim minim reprehenderit.</div>
                </div>
            </div>
        )
    }
}
