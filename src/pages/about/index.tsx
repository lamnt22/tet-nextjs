import { DefaultLayout } from "@/components/layouts";
import { NextPageWithLayout } from "@/types";
import { useEffect, useState } from "react";
import Modal from 'react-modal';
import ReactPlayer from 'react-player';
import { TfiClose } from "react-icons/tfi";

const About: NextPageWithLayout = () => {

    const [page, setPage] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const [total, setTotal] = useState(1);
    const [maxResults, setMaxResults] = useState(3);
    const [hydrated, setHydrated] = useState(false);

    const customModalStyles = {
        overlay: {
            backgroundColor: 'rgba(12, 12, 12, 0.75)'
        },
        content: {
          width: '700px',
          border: 'none',
          background: 'none',
          overflow: 'hidden',
          top: '50%',
          left: '53%',
          right: 'auto',
          bottom: 'auto',
          padding: '0',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)'
        }
    }

    useEffect(() => {
        console.log("useEffect");
        setHydrated(true);
    }, [])

    if (!hydrated) {
		// Returns null on first render, so the client and server match
		return null;
	}
      
    return (
        <div>
            <div className="flex flex-col bg-[#222222] bg-[#222222] h-auto text-white">
                <div className="p-20 ">
                    <span className="text-6xl">MOVIE</span>
                </div>
                <div className="p-20 ">
                    <select name="memberId" id="input-member" className="bg-black border border-[#666666] text-white-900 text-sm rounded-lg focus:ring-[#666666] focus:border-[#666666] block w-[525px] p-2.5 dark:bg-[#666666] dark:border-[#666666] dark:placeholder-[#666666] dark:text-white dark:focus:ring-[#666666] dark:focus:border-[#666666]">
                        <option value="">Choose a member</option>
                        
                    </select>
                </div>
                <div className="p-20 ">
                        <div className="flex flex-wrap">
                            <div className="border border-[#666666]">
                                <div className="p-5 ">
                                    <div className="">
                                        <ReactPlayer url="https://vimeo.com/27980397" width="420px" height="270px" light={true} onClickPreview={() => setIsOpen(true)}/>
                                    </div>
                                    <div>
                                        <div className="text-white-900 my-5">Member 01</div>
                                        <div className="text-gray-600">2023.12.13</div>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-[#666666]">
                                <div className="p-5 ">
                                    <div className="">
                                        <ReactPlayer url="https://vimeo.com/27980397" width="420px" height="270px" light={true} onClickPreview={() => setIsOpen(true)}/>
                                    </div>
                                    <div>
                                        <div className="text-white-900 my-5">Member 01</div>
                                        <div className="text-gray-600">2023.12.13</div>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-[#666666]">
                                <div className="p-5 ">
                                    <div className="">
                                        <ReactPlayer url="https://vimeo.com/27980397" width="420px" height="270px" light={true} onClickPreview={() => setIsOpen(true)}/>
                                    </div>
                                    <div>
                                        <div className="text-white-900 my-5">Member 01</div>
                                        <div className="text-gray-600">2023.12.13</div>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-[#666666]">
                                <div className="p-5 ">
                                    <div className="">
                                        <ReactPlayer url="https://vimeo.com/27980397" width="420px" height="270px" light={true} onClickPreview={() => setIsOpen(true)}/>
                                    </div>
                                    <div className="">
                                        <div className="text-white-900 my-5">Member 01</div>
                                        <div className="text-gray-600">2023.12.13</div>
                                    </div>
                                </div>
                            </div>

                            <div className="border border-[#666666]">
                                <div className="p-5 ">
                                    <div className="">
                                        <ReactPlayer url="https://vimeo.com/27980397" width="420px" height="270px" light={true} onClickPreview={() => setIsOpen(true)}/>
                                    </div>
                                    <div>
                                        <div className="text-white-900 my-5">Member 01</div>
                                        <div className="text-gray-600">2023.12.13</div>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-[#666666]">
                                <div className="p-5 ">
                                    <div className="">
                                        <ReactPlayer url="https://vimeo.com/27980397" width="420px" height="270px" light={true}onClickPreview={() => setIsOpen(true)}/>
                                    </div>
                                    <div>
                                        <div className="text-white-900 my-5">Member 01</div>
                                        <div className="text-gray-600">2023.12.13</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>

            </div>
            <div id="root"/>

            <Modal 
                isOpen={isOpen} 
                onRequestClose={() => setIsOpen(false)} 
                style={customModalStyles}
                ariaHideApp={false}
                >

                <div className="relative">
                    <ReactPlayer url="https://vimeo.com/27980397" controls/>
                    <button className="absolute top-0 right-0 p-3 border border-gray-300 rounded-[2.5rem] text-white" onClick={() => setIsOpen(false)}>
                        <TfiClose />
                    </button>
                </div>
            </Modal>
        </div>
    );
}

About.Layout = DefaultLayout

export default About;