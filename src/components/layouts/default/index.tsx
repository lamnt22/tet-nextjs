import { LayoutProps } from "@/types/common";
import Link from 'next/link';
import { DefaultFooter } from "./footer";
import '../../../../public/css/index.css';

export const DefaultLayout = ({ children }: LayoutProps) => {
    return (
        <div id="wrapper">
            <div className="movie-modal">
                <div className="movie-modal__wrapper">
                    <div className="movie-modal__video"><iframe src=""></iframe></div>
                    <button className="movie-modal__close"></button>
                </div>
            </div>
            <div className="movie-modal">
                <div className="movie-modal__wrapper">
                    <div className="movie-modal__video"><iframe src="" frameBorder="0"></iframe></div>
                    <button className="movie-modal__close"></button>
                </div>
            </div>
            <div className="p-column">
                <div className="header">
                    <div className="header__wrapper">
                        <a href="/" className="header__logo">
                            <div>
                                {/* <source media="(max-width:1023px)" srcSet="/assets/imgs/common/logo.svg" width="130" height="31"> */}
                                <img src="/images/logo-center.svg" width="230" height="54" alt="WHITE SCORPION OFFICIAL FANCLUB"></img>
                            </div>
                        </a>
                        <nav className="header__nav">
                            <a href="/news/" className="arw">NEWS</a>
                            <a href="/movie/" className="arw">MOVIE<span className="tag">有料限定</span></a>
                            <a href="#" target="_blank" className="blank">NIDT PORTAL</a>
                        </nav>
                        <a href="/login/" className="header__login">ログイン</a>
                        <a href="/register/" className="header__register">新規会員登録</a>
                        <a href="#" className="header__banner">
                            <img src="/images/banner-intro.webp" width="230" height="90" alt=""></img>
                        </a>
                    </div>
                </div>
                <button className="h-menu"></button>
                <header className="sp-header">
                    <a href="/" className="sp-header__logo"><img src="/images/logo.svg" width="153" height="36" alt="WHITE SCORPION OFFICIAL FANCLUB"></img></a>
                    <div className="sp-header__utility">
                        <a href="/register/" className="register">新規会員登録</a>
                        <a href="/login/" className="login">ログイン</a>
                    </div>
                </header>
                <div className="p-column__main">
                    <DefaultFooter></DefaultFooter>
                </div>
            </div>
        </div>
    )
}

