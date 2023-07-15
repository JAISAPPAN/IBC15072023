import {ArrowRightIcon} from "@heroicons/react/24/outline";

export default function CoursePageWriteUps(){
    return(
        <div className="flex justify-center mt-10">
            
          
                <div className=" w-1/2 ">
                    <div><h1 className="flex underline justify-center text-3xl bold mt-5 bg-blue-50 ml-20 mr-20 pt-1 pb-1">Learning Objectives</h1></div>
                    <div className="text-2xl mt-8 bg-blue-100 p-1 mr-2">
                 <div className="flex justify-center"><ArrowRightIcon className="w-10 h-6 text-black-800" /> <p className="flex ml-10 justify-center">A complete and comprehensive understanding of blockchain related technologies with minimal programming and mathematics.</p></div>
                 <div className="flex justify-center"><ArrowRightIcon className="w-10 h-6 text-black-800" /> <p className="flex ml-10 justify-center">Build a complete (web3) NFT application without writing code ( using wizards ) and deploy it in opensea market place.</p></div>
                 <div className="flex justify-center"><ArrowRightIcon className="w-10 h-6 text-black-800" /> <p className="flex ml-10 justify-center">Mint a cryptocurrency, implement a liquidity pool  in order to make it tradeable.</p></div>
                 <div className="flex justify-center"><ArrowRightIcon className="w-10 h-6 text-black-800" /> <p className="flex ml-10 justify-center">Design the whitepaper for a permissioned/ permissionless block chain OR a Decentralized Autonomous Organization/ DEX/Dapp/DeFi.</p></div>                                                                                                                                                  
                        
                    </div>
                </div>
                <div className=" w-1/2  ">
                    <div><h1 className="flex underline text-3xl justify-center bold mt-5 bg-blue-50 ml-20 mr-20 pt-1 pb-1">Course Outcomes</h1></div>
                    <div className="text-2xl mt-8 bg-blue-100 p-1 mr-2 pb-9">
                    <div className="flex justify-center"><ArrowRightIcon className="w-10 h-6 text-black-800" /> <p className="flex ml-10 justify-center">After completion of this level one course, the students will have a thorough understanding of blockchain technologies.</p></div>
                    <div className="flex justify-center"><ArrowRightIcon className="w-10 h-6 text-black-800" /> <p className="flex ml-10 justify-center">After completion of this level one course the students will be able to make  NFT dApps and DeFi apps using code generation wizards/templates.</p></div>
                    <div className="flex justify-center"><ArrowRightIcon className="w-10 h-6 text-black-800" /> <p className="flex ml-10 justify-center">After completion of this level one course the students will be able to design a whitepaper of a block chain  and</p></div>
                    <div className="flex justify-center"><ArrowRightIcon className="w-10 h-6 text-black-800" /> <p className="flex ml-10 justify-center">will be well equipped with the necessary skills to take up a job in the industry as business analyst/ blockchain sales personnel.</p></div>
                    </div>
                </div>
            
        </div>
    )
}