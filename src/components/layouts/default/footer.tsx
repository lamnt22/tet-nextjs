import '../../../../public/css/index.css';

export const DefaultFooter = () => {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <a href="/" className="footer__logo"><img src="/images/logo.svg" width="254" height="60" alt="WHITE SCORPION OFFICIAL FANCLUB" /></a>
                <nav className="footer__nav">
                    <a href="#"><span className="c-lineText">会社概要</span></a>
                    <a href="#"><span className="c-lineText">利用規約</span></a>
                    <a href="#"><span className="c-lineText">プライバシーポリシー</span></a>
                    <a href="#"><span className="c-lineText">お問い合わせ</span></a>
                    <a href="#"><span className="c-lineText">特定商取引法に基づく表記</span></a>
                </nav>
                <div className="footer__links">
                    <a href="https://whitescorpion.jp/" target="_blank">公式サイト</a>
                    <a href="#" target="_blank">公式グッズストア</a>
                    <a href="https://www.digitalitem-shop.com/" target="_blank">デジタルアイテムショップ</a>
                    <a href="#" target="_blank">NIDT POTAL</a>
                </div>
                <div className="footer__foot">
                    <dl className="footer__sns">
                        <dt>OFFCIAL SNS</dt>
                        <dd>
                            <a href="https://www.tiktok.com/@whsp_official" target="_blank"><span className="icon icon--tiktok"></span></a>
                            <a href="https://www.youtube.com/@whsp_official" target="_blank"><span className="icon icon--youtube"></span></a>
                            <a href="https://twitter.com/whsp_official" target="_blank"><span className="icon icon--x"></span></a>
                            <a href="https://www.instagram.com/whsp_official/" target="_blank"><span className="icon icon--instagram"></span></a>
                        </dd>
                    </dl>
                    <p className="footer__copyright">© OVERSE</p>
                </div>
            </div>
        </footer>
    )
}