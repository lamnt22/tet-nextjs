import { NextPageWithLayout } from "@/types/common";
import { DefaultLayout } from "@/components/layouts";
import Head from 'next/head'

const NewDetail: NextPageWithLayout = () => {
    return (
        <div>
            <Head>
                <title>News Detail</title>
            </Head>
            <div className="flex flex-col bg-[#222222] bg-[#222222] h-auto text-white p-20">
                <div className="p-12 bg-[#000000]">
                    <h3 className="text-lg">2023.12.13&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;● EVENT</h3>
                    <br />
                    <h1 className="text-4xl">IEO申込口数登録用のクーポンコード送付 【12/23のVIPイベント情報あり】</h1>
                </div>

                <div className="p-12">
                    <h3 className="text-lg">EBiS303で行われている握手会イベントのライブ映像のアーカイブ配信が開始しました!</h3>
                    <h3 className="text-lg">ぜひ、ご覧ください!</h3>
                    <br />
                    <br />
                    <h3 className="text-lg">該当ページには以下からアクセスしてください。</h3>
                    <a href="https://fc.whitescorpion.jp/special/20231224-live" className="text-lg">https://fc.whitescorpion.jp/special/20231224-live</a>
                    <br />
                    <br />
                    <h3 className="text-lg">【注意事項】</h3>
                    <h3 className="text-lg">・カメラ・スマートフォン・パソコンなどによる画面録画・撮影・録音は全て禁止致します。
                        また、動画サイトなどへの無断転載 共有は禁止致します。</h3>
                    <h3 className="text-lg">・ライブ配信の映像を商用利用やSNSで他人へ共有することは禁止とさせていただきます。</h3>
                </div>

                <div className="p-12 mb-8">
                    <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/ulOb9gIGGd0" title="Westlife - My Love (Official Video)" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>

                <div className="px-12">
                    <div className="p-6 border-l-3 border-[#EEEEEE] bg-[#000000]">
                        <h2 className="text-2xl">大見出しが入ります大見出しが入ります | h2</h2>
                    </div>
                </div>
                <div className="p-12">
                    <h3 className="text-lg">EBiS303で行われている握手会イベントのライブ映像のアーカイブ配信が開始しました!</h3>
                    <h3 className="text-lg">ぜひ、ご覧ください!</h3>
                    <br />
                    <br />
                    <h3 className="text-lg">該当ページには以下からアクセスしてください。</h3>
                    <a href="https://fc.whitescorpion.jp/special/20231224-live" className="text-lg">https://fc.whitescorpion.jp/special/20231224-live</a>
                    <br />
                    <br />
                    <h3 className="text-lg">【注意事項】</h3>
                    <h3 className="text-lg">・カメラ・スマートフォン・パソコンなどによる画面録画・撮影・録音は全て禁止致します。
                        また、動画サイトなどへの無断転載 共有は禁止致します。</h3>
                    <h3 className="text-lg">・ライブ配信の映像を商用利用やSNSで他人へ共有することは禁止とさせていただきます。</h3>
                </div>
                <div className="px-12">
                    <div className="p-6 border-b-3 border-l-3 border-[#EEEEEE]">
                        <h2 className="text-2xl">見出しが入ります見出しが入ります見出しが入ります | h3</h2>
                    </div>
                </div>
                <div className="p-12">
                    <h3 className="text-lg">EBiS303で行われている握手会イベントのライブ映像のアーカイブ配信が開始しました!</h3>
                    <h3 className="text-lg">ぜひ、ご覧ください!</h3>
                    <br />
                    <br />
                    <h3 className="text-lg">該当ページには以下からアクセスしてください。</h3>
                    <a href="https://fc.whitescorpion.jp/special/20231224-live" className="text-lg">https://fc.whitescorpion.jp/special/20231224-live</a>
                    <br />
                    <br />
                    <h3 className="text-lg">【注意事項】</h3>
                    <h3 className="text-lg">・カメラ・スマートフォン・パソコンなどによる画面録画・撮影・録音は全て禁止致します。
                        また、動画サイトなどへの無断転載 共有は禁止致します。</h3>
                    <h3 className="text-lg">・ライブ配信の映像を商用利用やSNSで他人へ共有することは禁止とさせていただきます。</h3>
                </div>
                <div className="px-12">
                    <button className="bg-[#FFFFFF] text-black text-center rounded-full py-6 px-8 text-lg">ボタンテキスト</button>
                </div>
            </div>

            <div className="p-20 w-full flex justify-center w-full border-t border-b border-[#666666] bg-[#222222] bg-[#222222]">
                <a href="#" className="px-12 flex items-center justify-center h-[3.5rem] me-3 font-medium text-white bg-[#222222] border border-gray-300 rounded-[2.5rem] hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <div className="text-xl">Prev</div>
                </a>
                <a href="#" className="px-12 flex items-center justify-center h-[3.5rem] font-medium  text-white bg-[#222222] border border-gray-300 rounded-[2.5rem] hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <div className="text-xl">Next</div>
                </a>
            </div>
        </div>
    );
}

NewDetail.Layout = DefaultLayout;

export default NewDetail