import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { default as abSvg } from '../../../assets/img/ab.svg';
import { default as baSvg } from '../../../assets/img/ba.svg';
import { default as caSvg } from '../../../assets/img/ca.svg';

const Home = () => {

    const [data, setData] = useState({
        mp: true,
        ed: false,
        hj: false,
        ve: false,
        pu: false,
        cd: false,
        od: false,
        hp: false,
        rtu: false
    });

    const navigate = useNavigate();
    return (
        <>
            <section id="header" className="header-home">
                <div className="header-home__body container">
                    <div className="header-home__content">
                        <h1 className="header-home__title">
                        The Ultimate self-hosted <span style={{color: '#1F75FE'}}>Javascript SDK</span> 
& <span style={{color: '#1F75FE'}}>Chat</span> API Solution Ever.
                        </h1>
                        <p className="header-home__byline mb-lg">Get closer to your users by integrating Chat with our pre-build UI powered by
build highly secure & scalable Chat API & Javascript SDK in a trice.</p>
                        <div className="pack">
                            <span className="pack-item">
                                <a onClick={() => navigate('/auth/signup')} className="btn btn-blue">Try PlugToChat</a>
                            </span>
                            <span className="pack-item">
                                <a onClick={() => navigate('/contact')} className="btn btn-white" data-track="TALK_TO_EXPERT">Talk to an expert</a>
                            </span>
                        </div>
                    </div>
                    <div className="header-home__image">
                        {/* <img width="316" height="413" alt="sellers inbox" className="img-responsive header-home__image-bg" src="/assets/img/chat.png" /> */}
                        <div class="" style={{paddingBottom: '67%'}}>
                        <img alt="sellers inbox" className="img-responsive header-home__image-bg" src="/assets/img/Image.png" />
      </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                        <div className='h-qq'>
                            <h2 className="heading-lg mb-lg">Raise engagement, retention, & conversion rate</h2>
                            <p className="paragraph-responsive">Drive more engagement and transactions by connecting buyers with sellers and improving customer support. Make your sessions immersive with 1-on-1 chat and chat rooms for students and teachers. Integrate real-time conversations on your social platform and improve retention on your social network or online community with active user engagement. Build reliable chats for online healthcare platforms caring for patients' better health through doctors' better interactions. Create an interactive and retainable platform for freelancers, job seekers, and applicants to reach and respond to companies, recruiters, and administrators. </p>
                        </div>
                        <img alt="sellers inbox " style={{width: '40%'}} className="img-responsive h-qq1" src="/assets/img/Group 1000000778.png" />
                    </div>
                    {/* <div className="row home-imgs">
                        <div className="col-sm-6">
                        </div>
                    </div> */}
                </div>
            </section>

            <section className="section ">
                <div className="container">
                    <div className="row row-flex">
                        <div className="col-md-6">
                            <h2 className="heading-lg mb-lg">
                            Raise engagement, retention, and conversion rate
                                
                            </h2>
                            <p className="paragraph-responsive mb-xl">Perfectly build, as you want it.</p>
                            <div className="accordion" id="accordion-uses" role="tablist" aria-multiselectable="true">
                                <div className="panel accordion-item active active">
                                    <div role="tab" className="accordion-header active" id="headingMarketplaces">
                                        <h4>
                                            <a role="button" data-toggle="collapse"  
                                            aria-expanded={data?.mp ? "true" : 'false'} onClick={() => setData({...data,mp: !data?.mp})}>
                                                <span className="pack">
                                                    <span className="pack-item">
                                                        <svg className="accordion-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M18 29.001V19.501C18 19.1032 18.158 18.7216 18.4393 18.4403C18.7206 18.159 19.1022 18.001 19.5 18.001H23.5C23.8978 18.001 24.2794 18.159 24.5607 18.4403C24.842 18.7216 25 19.1032 25 19.501V29.001M28 28.001V15.001V28.001ZM4 15.001V28.001V15.001ZM23.9044 3.00098H8.09563C6.73375 3.00098 5.50375 3.75098 4.975 4.90473L2.26875 10.8135C1.3575 12.8016 2.87062 15.0541 5.21813 15.126H5.34313C7.30563 15.126 8.89625 13.5522 8.89625 11.8616C8.89625 13.5491 10.4875 15.126 12.45 15.126C14.4125 15.126 16 13.6647 16 11.8616C16 13.5491 17.5906 15.126 19.5531 15.126C21.5156 15.126 23.1069 13.6647 23.1069 11.8616C23.1069 13.6647 24.6975 15.126 26.66 15.126H26.7819C29.1294 15.0529 30.6425 12.8004 29.7313 10.8135L27.025 4.90473C26.4963 3.75098 25.2663 3.00098 23.9044 3.00098ZM2 29.001H30H2ZM8.5 18.001H13.5C13.8978 18.001 14.2794 18.159 14.5607 18.4403C14.842 18.7216 15 19.1032 15 19.501V25.001H7V19.501C7 19.1032 7.15804 18.7216 7.43934 18.4403C7.72064 18.159 8.10218 18.001 8.5 18.001Z" stroke="#95A7B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </span>
                                                    <span className="pack-item">
                                                        Marketplaces
                                                    </span>
                                                </span>
                                            </a>
                                        </h4>
                                    </div>
                                    <div style={{display: data?.mp ? 'block' : 'none'}} className="collapse in" role="tabpanel" aria-labelledby="headingMarketplaces">
                                        <div className="accordion-body">
                                            <p>Drive more engagement and transactions by connecting buyers with sellers and improving customer support.</p>
                                            <p>
                                                <a className="pack no-underline" href="/market-places">
                                                    <span className="pack-item"><strong> Buyer-seller chat</strong></span>
                                                    <span className="pack-item">
                                                        <svg className="block" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.375 3.5L12.875 8L8.375 12.5M12.25 8H3.125" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </span>
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel accordion-item active">
                                    <div role="tab" className="accordion-header active" id="headingEducation">
                                        <h4>
                                            <a className="collapsed" role="button" 
                                            aria-expanded={data?.ed ? "true" : 'false'} onClick={() => setData({...data,ed: !data?.ed})}>
                                                <span className="pack">
                                                    <span className="pack-item">
                                                        <svg className="accordion-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M2 12L16 4L30 12L16 20L2 12Z" stroke="#95A7B1" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M7 15.0015V23.0015L16 28.0015M16 28.0015L25 23.0015V15.0015M16 28.0015V20.0015M30 23.0015V12.0015" stroke="#95A7B1" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </span>
                                                    <span className="pack-item">
                                                        Education
                                                    </span>
                                                </span>
                                            </a>
                                        </h4>
                                    </div>
                                    <div style={{display: data?.ed ? 'block' : 'none'}} id="education" className="collapse" role="tabpanel" aria-labelledby="headingEducation">
                                        <div className="accordion-body">
                                            <p>Make your sessions immersive with 1-on-1 chat and chat rooms for students and teachers.</p>
                                            <p>
                                                <a className="pack no-underline" href="/market-places">
                                                    <span className="pack-item"><strong>Student-teacher chat</strong></span>
                                                    <span className="pack-item">
                                                        <svg className="block" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.375 3.5L12.875 8L8.375 12.5M12.25 8H3.125" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </span>
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel accordion-item active">
                                    <div role="tab" className="accordion-header active" id="headingHiring">
                                        <h4>
                                            <a className="collapsed" role="button" 
                                            aria-expanded={data?.hj ? "true" : 'false'} onClick={() => setData({...data,hj: !data?.hj})}>
                                                <span className="pack">
                                                    <span className="pack-item">
                                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M27 8.00024H5C3.34315 8.00024 2 9.34339 2 11.0002V25.0002C2 26.6571 3.34315 28.0002 5 28.0002H27C28.6569 28.0002 30 26.6571 30 25.0002V11.0002C30 9.34339 28.6569 8.00024 27 8.00024Z" stroke="#95A7B1" stroke-width="2" stroke-linejoin="round" />
                                                            <path d="M20 14.9998V16.4998C20 16.6324 19.9473 16.7595 19.8536 16.8533C19.7598 16.9471 19.6326 16.9998 19.5 16.9998H12.5C12.3674 16.9998 12.2402 16.9471 12.1464 16.8533C12.0527 16.7595 12 16.6324 12 16.4998V14.9998M9 7.99976V5.99976C9 5.46932 9.21072 4.96062 9.58579 4.58554C9.96086 4.21047 10.4696 3.99976 11 3.99976H21C21.5304 3.99976 22.0391 4.21047 22.4142 4.58554C22.7893 4.96062 23 5.46932 23 5.99976V7.99976H9ZM30 14.9998H2H30Z" stroke="#95A7B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </span>
                                                    <span className="pack-item">
                                                    Social & communities
                                                    </span>
                                                </span>
                                            </a>
                                        </h4>
                                    </div>
                                    <div style={{display: data?.hj ? 'block' : 'none'}} id="hiring" className="collapse" role="tabpanel" aria-labelledby="headingHiring">
                                        <div className="accordion-body">
                                            <p>Integrate real-time conversations on your social platform and improve retention on your social network or online community with active user engagement.</p>
                                            <p>
                                                <a className="pack no-underline" href="/job-hiring">
                                                    <span className="pack-item"><strong>Recruiter-candidate chat</strong></span>
                                                    <span className="pack-item">
                                                        <svg className="block" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.375 3.5L12.875 8L8.375 12.5M12.25 8H3.125" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </span>
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel accordion-item active">
                                    <div role="tab" className="accordion-header active" id="headingEvents">
                                        <h4>
                                            <a className="collapsed" role="button" data-toggle="collapse" 
                                             aria-expanded={data?.ve ? "true" : 'false'} onClick={() => setData({...data,ve: !data?.ve})}>
                                                <span className="pack">
                                                    <span className="pack-item">
                                                        <svg className="accordion-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M22.878 9.12346C22.3581 8.60334 22.0537 7.90612 22.0256 7.17122C21.9976 6.43632 22.248 5.71793 22.7268 5.15971C22.7664 5.11328 22.787 5.0536 22.7844 4.99263C22.7819 4.93166 22.7564 4.87391 22.713 4.83095L19.9549 2.0697C19.9093 2.02413 19.8475 1.99854 19.783 1.99854C19.7186 1.99854 19.6568 2.02413 19.6112 2.0697L15.2149 6.46596C15.0527 6.62812 14.9305 6.82585 14.858 7.04346V7.04346C14.7858 7.26157 14.6638 7.45985 14.5016 7.62259C14.3394 7.78532 14.1415 7.90802 13.9237 7.98096V7.98096C13.7059 8.05352 13.508 8.17569 13.3455 8.33783L2.07117 19.6097C2.0256 19.6553 2 19.7171 2 19.7816C2 19.846 2.0256 19.9079 2.07117 19.9535L4.82929 22.7116C4.87225 22.7549 4.93 22.7804 4.99097 22.783C5.05194 22.7855 5.11162 22.7649 5.15804 22.7253C5.71615 22.246 6.4347 21.9952 7.16985 22.0231C7.905 22.051 8.6025 22.3555 9.1227 22.8757C9.6429 23.3959 9.94743 24.0934 9.9753 24.8285C10.0032 25.5637 9.75236 26.2822 9.27304 26.8403C9.23345 26.8868 9.21286 26.9464 9.21541 27.0074C9.21796 27.0684 9.24346 27.1261 9.2868 27.1691L12.0449 29.9272C12.0905 29.9728 12.1523 29.9984 12.2168 29.9984C12.2813 29.9984 12.3431 29.9728 12.3887 29.9272L23.6637 18.6528C23.8258 18.4904 23.948 18.2925 24.0205 18.0747V18.0747C24.0928 17.8566 24.2148 17.6583 24.377 17.4956C24.5392 17.3328 24.7371 17.2101 24.9549 17.1372V17.1372C25.1725 17.0647 25.3703 16.9425 25.5324 16.7803L29.9287 12.3841C29.9742 12.3385 29.9998 12.2767 29.9998 12.2122C29.9998 12.1477 29.9742 12.0859 29.9287 12.0403L27.1705 9.28221C27.1276 9.23887 27.0698 9.21337 27.0089 9.21082C26.9479 9.20827 26.8882 9.22886 26.8418 9.26846C26.2843 9.74806 25.5664 9.99957 24.8315 9.97269C24.0966 9.9458 23.399 9.64251 22.878 9.12346V9.12346Z" stroke="#95A7B1" stroke-width="2.625" stroke-miterlimit="10" />
                                                            <path d="M24.2545 17.3751L23.2226 16.3432M15.6564 8.77699L14.6245 7.74512L15.6564 8.77699ZM18.4076 11.5282L17.7195 10.8407L18.4076 11.5282ZM21.1589 14.2801L20.4714 13.592L21.1589 14.2801Z" stroke="#95A7B1" stroke-width="2.625" stroke-miterlimit="10" stroke-linecap="round" />
                                                        </svg>
                                                    </span>
                                                    <span className="pack-item">
                                                    Healthcare                                                    </span>
                                                </span>
                                            </a>
                                        </h4>
                                    </div>
                                    <div style={{display: data?.ve ? 'block' : 'none'}} id="events" className="collapse" role="tabpanel" aria-labelledby="headingEvents">
                                        <div className="accordion-body">
                                            <p>Build reliable chats for online healthcare platforms caring for patients' better health through doctors' better interactions </p>
                                            <p>
                                                <a className="pack no-underline" href="/virtual-events">
                                                    <span className="pack-item"><strong>Exhibitor-participant chat</strong></span>
                                                    <span className="pack-item">
                                                        <svg className="block" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.375 3.5L12.875 8L8.375 12.5M12.25 8H3.125" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </span>
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="panel accordion-item active">
                                    <div role="tab" className="accordion-header active" id="headingEvents">
                                        <h4>
                                            <a className="collapsed" role="button" data-toggle="collapse" 
                                             aria-expanded={data?.od ? "true" : 'false'} onClick={() => setData({...data,od: !data?.od})}>
                                                <span className="pack">
                                                    <span className="pack-item">
                                                        <svg className="accordion-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M22.878 9.12346C22.3581 8.60334 22.0537 7.90612 22.0256 7.17122C21.9976 6.43632 22.248 5.71793 22.7268 5.15971C22.7664 5.11328 22.787 5.0536 22.7844 4.99263C22.7819 4.93166 22.7564 4.87391 22.713 4.83095L19.9549 2.0697C19.9093 2.02413 19.8475 1.99854 19.783 1.99854C19.7186 1.99854 19.6568 2.02413 19.6112 2.0697L15.2149 6.46596C15.0527 6.62812 14.9305 6.82585 14.858 7.04346V7.04346C14.7858 7.26157 14.6638 7.45985 14.5016 7.62259C14.3394 7.78532 14.1415 7.90802 13.9237 7.98096V7.98096C13.7059 8.05352 13.508 8.17569 13.3455 8.33783L2.07117 19.6097C2.0256 19.6553 2 19.7171 2 19.7816C2 19.846 2.0256 19.9079 2.07117 19.9535L4.82929 22.7116C4.87225 22.7549 4.93 22.7804 4.99097 22.783C5.05194 22.7855 5.11162 22.7649 5.15804 22.7253C5.71615 22.246 6.4347 21.9952 7.16985 22.0231C7.905 22.051 8.6025 22.3555 9.1227 22.8757C9.6429 23.3959 9.94743 24.0934 9.9753 24.8285C10.0032 25.5637 9.75236 26.2822 9.27304 26.8403C9.23345 26.8868 9.21286 26.9464 9.21541 27.0074C9.21796 27.0684 9.24346 27.1261 9.2868 27.1691L12.0449 29.9272C12.0905 29.9728 12.1523 29.9984 12.2168 29.9984C12.2813 29.9984 12.3431 29.9728 12.3887 29.9272L23.6637 18.6528C23.8258 18.4904 23.948 18.2925 24.0205 18.0747V18.0747C24.0928 17.8566 24.2148 17.6583 24.377 17.4956C24.5392 17.3328 24.7371 17.2101 24.9549 17.1372V17.1372C25.1725 17.0647 25.3703 16.9425 25.5324 16.7803L29.9287 12.3841C29.9742 12.3385 29.9998 12.2767 29.9998 12.2122C29.9998 12.1477 29.9742 12.0859 29.9287 12.0403L27.1705 9.28221C27.1276 9.23887 27.0698 9.21337 27.0089 9.21082C26.9479 9.20827 26.8882 9.22886 26.8418 9.26846C26.2843 9.74806 25.5664 9.99957 24.8315 9.97269C24.0966 9.9458 23.399 9.64251 22.878 9.12346V9.12346Z" stroke="#95A7B1" stroke-width="2.625" stroke-miterlimit="10" />
                                                            <path d="M24.2545 17.3751L23.2226 16.3432M15.6564 8.77699L14.6245 7.74512L15.6564 8.77699ZM18.4076 11.5282L17.7195 10.8407L18.4076 11.5282ZM21.1589 14.2801L20.4714 13.592L21.1589 14.2801Z" stroke="#95A7B1" stroke-width="2.625" stroke-miterlimit="10" stroke-linecap="round" />
                                                        </svg>
                                                    </span>
                                                    <span className="pack-item">
                                                    On-demand services                                                    </span>
                                                </span>
                                            </a>
                                        </h4>
                                    </div>
                                    <div style={{display: data?.od ? 'block' : 'none'}} id="events" className="collapse" role="tabpanel" aria-labelledby="headingEvents">
                                        <div className="accordion-body">
                                            <p>Connect your on-demand service providers to customers and vice-versa with in-app chat from your web and mobile apps. </p>
                                            <p>
                                                <a className="pack no-underline" href="/virtual-events">
                                                    <span className="pack-item"><strong>Exhibitor-participant chat</strong></span>
                                                    <span className="pack-item">
                                                        <svg className="block" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.375 3.5L12.875 8L8.375 12.5M12.25 8H3.125" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </span>
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel accordion-item active">
                                    <div role="tab" className="accordion-header active" id="headingEvents">
                                        <h4>
                                            <a className="collapsed" role="button" data-toggle="collapse" 
                                             aria-expanded={data?.hp ? "true" : 'false'} onClick={() => setData({...data,hp: !data?.hp})}>
                                                <span className="pack">
                                                    <span className="pack-item">
                                                        <svg className="accordion-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M22.878 9.12346C22.3581 8.60334 22.0537 7.90612 22.0256 7.17122C21.9976 6.43632 22.248 5.71793 22.7268 5.15971C22.7664 5.11328 22.787 5.0536 22.7844 4.99263C22.7819 4.93166 22.7564 4.87391 22.713 4.83095L19.9549 2.0697C19.9093 2.02413 19.8475 1.99854 19.783 1.99854C19.7186 1.99854 19.6568 2.02413 19.6112 2.0697L15.2149 6.46596C15.0527 6.62812 14.9305 6.82585 14.858 7.04346V7.04346C14.7858 7.26157 14.6638 7.45985 14.5016 7.62259C14.3394 7.78532 14.1415 7.90802 13.9237 7.98096V7.98096C13.7059 8.05352 13.508 8.17569 13.3455 8.33783L2.07117 19.6097C2.0256 19.6553 2 19.7171 2 19.7816C2 19.846 2.0256 19.9079 2.07117 19.9535L4.82929 22.7116C4.87225 22.7549 4.93 22.7804 4.99097 22.783C5.05194 22.7855 5.11162 22.7649 5.15804 22.7253C5.71615 22.246 6.4347 21.9952 7.16985 22.0231C7.905 22.051 8.6025 22.3555 9.1227 22.8757C9.6429 23.3959 9.94743 24.0934 9.9753 24.8285C10.0032 25.5637 9.75236 26.2822 9.27304 26.8403C9.23345 26.8868 9.21286 26.9464 9.21541 27.0074C9.21796 27.0684 9.24346 27.1261 9.2868 27.1691L12.0449 29.9272C12.0905 29.9728 12.1523 29.9984 12.2168 29.9984C12.2813 29.9984 12.3431 29.9728 12.3887 29.9272L23.6637 18.6528C23.8258 18.4904 23.948 18.2925 24.0205 18.0747V18.0747C24.0928 17.8566 24.2148 17.6583 24.377 17.4956C24.5392 17.3328 24.7371 17.2101 24.9549 17.1372V17.1372C25.1725 17.0647 25.3703 16.9425 25.5324 16.7803L29.9287 12.3841C29.9742 12.3385 29.9998 12.2767 29.9998 12.2122C29.9998 12.1477 29.9742 12.0859 29.9287 12.0403L27.1705 9.28221C27.1276 9.23887 27.0698 9.21337 27.0089 9.21082C26.9479 9.20827 26.8882 9.22886 26.8418 9.26846C26.2843 9.74806 25.5664 9.99957 24.8315 9.97269C24.0966 9.9458 23.399 9.64251 22.878 9.12346V9.12346Z" stroke="#95A7B1" stroke-width="2.625" stroke-miterlimit="10" />
                                                            <path d="M24.2545 17.3751L23.2226 16.3432M15.6564 8.77699L14.6245 7.74512L15.6564 8.77699ZM18.4076 11.5282L17.7195 10.8407L18.4076 11.5282ZM21.1589 14.2801L20.4714 13.592L21.1589 14.2801Z" stroke="#95A7B1" stroke-width="2.625" stroke-miterlimit="10" stroke-linecap="round" />
                                                        </svg>
                                                    </span>
                                                    <span className="pack-item">
                                                    Hiring platforms                                                    </span>
                                                </span>
                                            </a>
                                        </h4>
                                    </div>
                                    <div style={{display: data?.hp ? 'block' : 'none'}} id="events" className="collapse" role="tabpanel" aria-labelledby="headingEvents">
                                        <div className="accordion-body">
                                            <p>
Create an interactive and retainable platform for freelancers, job seekers, and applicants to reach and respond to companies, recruiters, and administrators.  </p>
                                            <p>
                                                <a className="pack no-underline" href="/virtual-events">
                                                    <span className="pack-item"><strong>Exhibitor-participant chat</strong></span>
                                                    <span className="pack-item">
                                                        <svg className="block" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.375 3.5L12.875 8L8.375 12.5M12.25 8H3.125" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </span>
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-xl">
                                <a className="no-underline" href="/market-places"><strong>View all use cases</strong></a>
                            </p>
                        </div>
                        <div className="col-md-6">
                            <div className="row-image">
                                <div className="img-stack" style={{ display: 'block' }} data-cases-img="marketplaces">
                                    {/* <div className="img-stack-item pack" >
                                        <div className="pack-item">
                                            <img loading="lazy" width="80" height="80" className="img-stack-avatar img-circle has-shadow" alt="portrait of a human" src="/images/avatar-3.jpg" />
                                        </div>
                                        <div className="pack-item">
                                            <div className="img-stack-msg has-shadow">hey, what’s the fit like for this?</div>
                                        </div>
                                    </div> */}
                                    {/* <div className="img-stack-item pack" >
                                        <div className="pack-item">
                                            <div className="img-stack-msg has-shadow">Hi! It’s a loose fit.</div>
                                        </div>
                                        <div className="pack-item">
                                            <img loading="lazy" width="80" height="80" className="img-stack-avatar img-circle has-shadow" alt="portrait of a human" src="/images/avatar-7.jpg" />
                                        </div>
                                    </div> */}
                                    <img loading="lazy" className="img-stack-main img-rounded has-shadow img-responsive" alt="salmon pink tshirt" src={abSvg} />
                                </div>
                                <div className="img-stack" style={{ display: 'none' }} data-cases-img="education">
                                  
                                   
                                    <img loading="lazy"  className="img-stack-main img-rounded has-shadow img-responsive" alt="people using a laptop" src={baSvg} />
                                </div>
                                <div className="img-stack" style={{ display: 'none' }} data-cases-img="hiring">
                                   
                                    <img loading="lazy"  className="img-stack-main img-rounded has-shadow img-responsive" alt="people chatting around a desk" src="/images/usecase_hiring.jpg" />
                                </div>
                                <div className="img-stack" style={{ display: 'none' }} data-cases-img="events">
                                    <div className="img-stack-item pack" style={{ bottom: '50%', left: 0 }}>
                                        <div className="pack-item">
                                            <img loading="lazy" width="80" height="80" className="img-stack-avatar img-circle has-shadow" alt="portrait of a human" src="/images/avatar-1.jpg" />
                                        </div>
                                        <div className="pack-item">
                                            <div className="img-stack-msg has-shadow">Great topic to go through!</div>
                                        </div>
                                    </div>
                                    <div className="img-stack-item pack" >
                                        <div className="pack-item">
                                            <img loading="lazy" width="80" height="80" className="img-stack-avatar img-circle has-shadow" alt="portrait of a human" src="/images/avatar-2.jpg" />
                                        </div>
                                        <div className="pack-item">
                                            <div className="img-stack-msg has-shadow">Insightful talk, I really enjoyed that.</div>
                                        </div>
                                    </div>
                                    <img loading="lazy" width="368" height="341" className="img-stack-main img-rounded has-shadow img-responsive" alt="video conference between 2 people" src="/images/usecase_videochat.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="row row-flex">
                    <div className="col-md-6">
                            <div className="row-image">
                                <div className="img-stack" data-ui-img="prebuilt" style={{ display: 'block' }}>
                                    <img loading="lazy" width="538" height="515" alt="PTC prebuilt ui of messages" className="img-responsive" src={caSvg} />
                                </div>
                                <div className="img-stack" data-ui-img="design" style={{ display: 'none' }}>
                                    <div className="img-stack-item" >
                                        <img loading="lazy" width="463" height="195" alt="chat messages design" className="img-responsive img-rounded has-shadow" src="/images/chat_msg.png" />
                                    </div>
                                    <div className="p pt-2xl">
                                        <div className="mt-2xl">

                                        </div>
                                    </div>
                                </div>
                                <div className="img-stack" data-ui-img="notifications" style={{ display: 'none' }}>
                                    <div className="img-stack-item" style={{ right: 0 }}>
                                        <img loading="lazy" width="366" height="115" alt="chatbox" className="img-responsive img-rounded has-shadow" src="/images/notification_text.png" />
                                    </div>
                                    <img loading="lazy" width="464" height="406" alt="chatbox" className="mt-lg img-responsive img-rounded has-shadow" src="/images/notification_email.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h2 className="heading-lg mb-lg">
                            Modular. Lightweight. Easy to Integrate 
                            </h2>
                            <p className="paragraph-responsive mb-xl">Migrate from regular chat to real-time in app chats using APIs & messaging SDKs from Plugtochat, full featured modern chat app with a team of dedicated In-house developers & flexible hosting possibilities.</p>
                            <div className="accordion" id="accordion-ui" role="tablist" aria-multiselectable="true">
                                <div className="panel accordion-item active active">
                                    <div role="tab" className="accordion-header active" id="headingPrebuilt">
                                        <h4>
                                            <a  
                                                                                    aria-expanded={data?.pu ? "true" : 'false'} onClick={() => setData({...data,pu: !data?.pu})}>
                                                <span className="pack">
                                                    <span className="pack-item">
                                                        <svg className="accordion-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M16.5825 12.1583C18.305 11.1879 20.2992 10.8117 22.2568 11.0878C24.2145 11.3639 26.0268 12.277 27.4138 13.6859C28.8008 15.0948 29.6852 16.9213 29.9305 18.8831C30.1757 20.8449 29.7682 22.8328 28.7708 24.5399C27.7735 26.2469 26.2417 27.5781 24.4123 28.3277C22.5828 29.0773 20.5575 29.2036 18.649 28.6871C16.7406 28.1707 15.0554 27.0402 13.8536 25.4703C12.6518 23.9005 12.0004 21.9785 12 20.0015M21 20.0015H2L11.5 3.00146L21 20.0015Z" stroke="#95A7B1" stroke-width="2.625" stroke-linejoin="round" />
                                                        </svg>
                                                    </span>
                                                    <span className="pack-item" href="/demo" >
                                                    In-app Messaging and Chat API
                                                    </span>
                                                </span>
                                            </a>
                                        </h4>
                                    </div>
                                    <div  style={{display: data?.pu ? 'block' : 'none'}} className="collapse in" role="tabpanel" aria-labelledby="headingPrebuilt">
                                        <div className="accordion-body">
                                            <p>Using PlugtoChat API to integrate in-app messaging in your apps and websites is as easy as a switch button. You will get the status of each sent message in real-time; e.g., Sent, Delivered, Read, etc.</p>
                                            <p>
                                                <a className="pack no-underline" href="/features">
                                                    <span className="pack-item"><strong>Explore Feature</strong></span>
                                                    <span className="pack-item">
                                                        <svg className="block" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.375 3.5L12.875 8L8.375 12.5M12.25 8H3.125" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </span>
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel accordion-item active">
                                    <div role="tab" className="accordion-header active">
                                        <h4>
                                            <a className="collapsed"
                                                                                    aria-expanded={data?.cd ? "true" : 'false'} onClick={() => setData({...data,cd: !data?.cd})}>
                                                <span className="pack">
                                                    <span className="pack-item">
                                                        <svg className="accordion-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M26.8818 21.7428C26.4693 21.3615 25.8631 21.2678 25.3443 21.1803C24.6256 21.0615 24.3506 20.9303 23.9318 20.5553C23.0381 19.7615 23.0381 18.6115 23.9318 17.8178L25.8256 16.1365C28.7256 13.574 28.7256 9.37402 25.8256 6.81152C23.6881 4.93027 20.8193 3.99902 17.8381 3.99902C14.3568 3.99902 10.7193 5.26777 7.91309 7.75527C2.69434 12.3678 2.69434 19.924 7.91309 24.5365C10.5068 26.8303 14.0068 27.974 17.4693 27.999H17.5756C21.0381 27.999 24.4506 26.8803 26.8756 24.724C27.7756 23.9303 27.625 22.4365 26.8818 21.7428V21.7428Z" stroke="#95A7B1" stroke-width="2.625" stroke-miterlimit="10" />
                                                            <path d="M10.959 12.9995C10.959 14.0814 10.0819 14.9585 9 14.9585C7.91808 14.9585 7.04102 14.0814 7.04102 12.9995C7.04102 11.9176 7.91808 11.0405 9 11.0405C10.0819 11.0405 10.959 11.9176 10.959 12.9995Z" fill="#95A7B1" stroke="#95A7B1" stroke-width="0.0820312" />
                                                            <path d="M9.5 21.4365C10.6046 21.4365 11.5 20.5411 11.5 19.4365C11.5 18.332 10.6046 17.4365 9.5 17.4365C8.39543 17.4365 7.5 18.332 7.5 19.4365C7.5 20.5411 8.39543 21.4365 9.5 21.4365Z" fill="#95A7B1" />
                                                            <path d="M14 11.001C15.1046 11.001 16 10.1055 16 9.00098C16 7.89641 15.1046 7.00098 14 7.00098C12.8954 7.00098 12 7.89641 12 9.00098C12 10.1055 12.8954 11.001 14 11.001Z" fill="#95A7B1" />
                                                            <path d="M16 25.9365C17.6569 25.9365 19 24.5934 19 22.9365C19 21.2797 17.6569 19.9365 16 19.9365C14.3431 19.9365 13 21.2797 13 22.9365C13 24.5934 14.3431 25.9365 16 25.9365Z" fill="#95A7B1" />
                                                            <path d="M20.5 11.001C21.6046 11.001 22.5 10.1055 22.5 9.00098C22.5 7.89641 21.6046 7.00098 20.5 7.00098C19.3954 7.00098 18.5 7.89641 18.5 9.00098C18.5 10.1055 19.3954 11.001 20.5 11.001Z" fill="#95A7B1" />
                                                        </svg>
                                                    </span>
                                                    <span className="pack-item" href="/demo" >
                                                    On-Premise Deployment                                                    </span>
                                                </span>
                                            </a>
                                        </h4>
                                    </div>
                                    <div style={{display: data?.cd ? 'block' : 'none'}} className="collapse">
                                        <div className="accordion-body">
                                            <p>Download the entire PlugtoChat platform and run it from your own data-center or private cloud. All messages and calls route through your own data-center or server.</p>
                                            <p>
                                                <a className="pack no-underline" href="/demo">
                                                    <span className="pack-item"><strong>Explore Feature</strong></span>
                                                    <span className="pack-item">
                                                        <svg className="block" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.375 3.5L12.875 8L8.375 12.5M12.25 8H3.125" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </span>
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel accordion-item active">
                                    <div role="tab" className="accordion-header active">
                                        <h4>
                                            <a className="collapsed"
                                                                                    aria-expanded={data?.rtu ? "true" : 'false'} onClick={() => setData({...data,rtu: !data?.rtu})}>
                                                <span className="pack">
                                                    <span className="pack-item">
                                                        <svg className="accordion-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M26.8818 21.7428C26.4693 21.3615 25.8631 21.2678 25.3443 21.1803C24.6256 21.0615 24.3506 20.9303 23.9318 20.5553C23.0381 19.7615 23.0381 18.6115 23.9318 17.8178L25.8256 16.1365C28.7256 13.574 28.7256 9.37402 25.8256 6.81152C23.6881 4.93027 20.8193 3.99902 17.8381 3.99902C14.3568 3.99902 10.7193 5.26777 7.91309 7.75527C2.69434 12.3678 2.69434 19.924 7.91309 24.5365C10.5068 26.8303 14.0068 27.974 17.4693 27.999H17.5756C21.0381 27.999 24.4506 26.8803 26.8756 24.724C27.7756 23.9303 27.625 22.4365 26.8818 21.7428V21.7428Z" stroke="#95A7B1" stroke-width="2.625" stroke-miterlimit="10" />
                                                            <path d="M10.959 12.9995C10.959 14.0814 10.0819 14.9585 9 14.9585C7.91808 14.9585 7.04102 14.0814 7.04102 12.9995C7.04102 11.9176 7.91808 11.0405 9 11.0405C10.0819 11.0405 10.959 11.9176 10.959 12.9995Z" fill="#95A7B1" stroke="#95A7B1" stroke-width="0.0820312" />
                                                            <path d="M9.5 21.4365C10.6046 21.4365 11.5 20.5411 11.5 19.4365C11.5 18.332 10.6046 17.4365 9.5 17.4365C8.39543 17.4365 7.5 18.332 7.5 19.4365C7.5 20.5411 8.39543 21.4365 9.5 21.4365Z" fill="#95A7B1" />
                                                            <path d="M14 11.001C15.1046 11.001 16 10.1055 16 9.00098C16 7.89641 15.1046 7.00098 14 7.00098C12.8954 7.00098 12 7.89641 12 9.00098C12 10.1055 12.8954 11.001 14 11.001Z" fill="#95A7B1" />
                                                            <path d="M16 25.9365C17.6569 25.9365 19 24.5934 19 22.9365C19 21.2797 17.6569 19.9365 16 19.9365C14.3431 19.9365 13 21.2797 13 22.9365C13 24.5934 14.3431 25.9365 16 25.9365Z" fill="#95A7B1" />
                                                            <path d="M20.5 11.001C21.6046 11.001 22.5 10.1055 22.5 9.00098C22.5 7.89641 21.6046 7.00098 20.5 7.00098C19.3954 7.00098 18.5 7.89641 18.5 9.00098C18.5 10.1055 19.3954 11.001 20.5 11.001Z" fill="#95A7B1" />
                                                        </svg>
                                                    </span>
                                                    <span className="pack-item" href="/demo" >
                                                    Ready to use UI Modules                                                
                                                    </span>
                                                    </span>
                                            </a>
                                        </h4>
                                    </div>
                                    <div style={{display: data?.rtu ? 'block' : 'none'}} className="collapse">
                                        <div className="accordion-body">
                                            <p>Download the entire PlugtoChat platform and run it from your own data-center or private cloud. All messages and calls route through your own data-center or server.</p>
                                            <p>
                                                <a className="pack no-underline" href="/demo">
                                                    <span className="pack-item"><strong>Explore Feature</strong></span>
                                                    <span className="pack-item">
                                                        <svg className="block" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.375 3.5L12.875 8L8.375 12.5M12.25 8H3.125" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </span>
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="panel accordion-item active">
                                    <div role="tab" className="accordion-header active" id="headingNotifications">
                                        <h4>
                                            <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion-ui" href="#notifications" aria-expanded="false" aria-controls="notifications">
                                                <span className="pack">
                                                    <span className="pack-item">
                                                        <svg className="accordion-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M19.9998 24V25C19.9998 26.0609 19.5784 27.0783 18.8282 27.8284C18.0781 28.5786 17.0607 29 15.9998 29C14.939 29 13.9215 28.5786 13.1714 27.8284C12.4212 27.0783 11.9998 26.0609 11.9998 25V24M26.7298 21.9644C25.1248 20 23.9917 19 23.9917 13.5844C23.9917 8.625 21.4592 6.85813 19.3748 6C19.0979 5.88625 18.8373 5.625 18.7529 5.34063C18.3873 4.09625 17.3623 3 15.9998 3C14.6373 3 13.6117 4.09688 13.2498 5.34188C13.1654 5.62938 12.9048 5.88625 12.6279 6C10.5411 6.85938 8.01107 8.62 8.01107 13.5844C8.00795 19 6.87482 20 5.26982 21.9644C4.60482 22.7781 5.18732 24 6.35045 24H25.6554C26.8123 24 27.3911 22.7744 26.7298 21.9644Z" stroke="#95A7B1" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </span>
                                                    <span className="pack-item">
                                                        Out-of-the-box-notifications
                                                    </span>
                                                </span>
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="notifications" className="collapse" role="tabpanel" aria-labelledby="headingNotifications">
                                        <div className="accordion-body">
                                            <p>Keep users in the loop with push, email, SMS, and desktop notifications, along with messaging you can customize any way you like.</p>
                                            <p>
                                                <a className="pack no-underline" href="/features/#out-of-the-box-notifications">
                                                    <span className="pack-item"><strong>Explore Feature</strong></span>
                                                    <span className="pack-item">
                                                        <svg className="block" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.375 3.5L12.875 8L8.375 12.5M12.25 8H3.125" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </span>
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            <p className="mt-xl">
                                <a className="no-underline" href="/features/"><strong>View all features</strong></a>
                            </p>
                        </div>
                      
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home