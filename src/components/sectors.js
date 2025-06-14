import * as React from 'react';
import { Waypoint } from 'react-waypoint';
import { StaticImage } from 'gatsby-plugin-image';

const SectorsSection = ({lineAnimation, useWndowWidth}) => {
    return (
        <div className="about-profiles">
            <div className="container">
                <Waypoint >
                    <div className="row mb-5">
                        <div className="col-md-4">
                            <div className="profile-first">
                                <StaticImage src="../images/James_Hill_img.png" alt="James Hill - Osiris Resources" />
                            </div>
                        </div>
                        <div className="col-md-8 profile-text">
                            <div className="profile-text-container ms-5">
                                <h5 className='mb-5'>AI</h5>
                                <p>AI (Artificial Intelligence) is a branch of computer science focused on creating systems or machines that can perform tasks that typically require human intelligence. These tasks include:</p>
                                <ul>
                                    <li>Understanding language</li>
                                    <li>Recognizing images and sounds</li>
                                    <li>Learning from experience</li>
                                    <li>Making decisions</li>
                                    <li>Solving problems</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Waypoint>
                <Waypoint >
                    <div className="row mt-5 mb-5">
                        <div className="col-md-4 order-md-2">
                            <div className="profile-middle">
                                <StaticImage src="../images/_img.png" alt="- Osiris Resources" />
                            </div>
                        </div>
                        <div className="col-md-8 order-md-1 profile-text">
                            <div className="profile-text-container me-5">
                                <h5 className='mb-5'>Telco / Computer Networking</h5>
                                <p>Key disciplines and areas: SDN/ NFV, Containerisation OS systems/ Virtualization, Edge Computing/ Cloud Computing (Platforms with API capability) and 5G/ mmWave/ RAN/ Backhaul technology. We work with clients that sell network infrastructure, network software, network services and many more critical products to keep the world connected.</p>
                                <p>Computer networking involves connecting devices to exchange data and share resources. These devices use communication protocols, like the Internet Protocol (IP), to transmit information over wired or wireless connections. Networking allows for various forms of communication and collaboration, including data sharing, resource sharing, and application sharing.</p>
                            </div>
                        </div>
                    </div>
                </Waypoint>
                <Waypoint>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div className="profile-last">
                                <StaticImage src="../images/Nick_Randall_img.png" alt="Nick Randall - Osiris Resources" />
                            </div>
                        </div>
                        <div className="col-md-8 order-md-1 profile-text">
                            <div className="profile-text-container ms-5">
                                <h5 className='mb-5'>Quantum Computing</h5>
                                <p>Quantum computing is an emergent field of cutting-edge computer science harnessing the unique qualities of quantum mechanics to solve problems beyond the ability of even the most powerful classical computers.</p>
                                <p>The field of quantum computing contains a range of disciplines, including quantum hardware and quantum algorithms. While still in development, quantum technology will soon be able to solve complex problems that supercomputers can’t solve, or can’t solve fast enough. We hire Physicists, researchers and in general the whole engineering staff stack all the way from junior developer to CTO.</p>
                            </div>
                        </div>
                    </div>
                </Waypoint>
            </div>
        </div>
    )
}

export default SectorsSection;
