'use client';
import React, { useState } from 'react';

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-blue-200 rounded-md mb-4 mt-10">
      <button
        className="flex items-center justify-between w-full p-4 bg-blue-100 text-left"
        onClick={toggleAccordion}
      >
        <h2 className="text-lg font-medium">{title}</h2>
        <svg
          className={`w-6 h-6 transition-transform duration-200 transform ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 bg-white">{content}</div>
      )}
    </div>
  );
};

const DummyAccordionData = [
  {
    title: 'Module One: Introduction.',
    content: 'In this introductory module, the students will get a thorough knowledge of block chain fundamentals,detailed information about web3 and web5 and the necessity of interoperability of block chains in the future.',
  },
  {
    title: 'Module Two : Cryptocurrency',
    content: 'In this module,the students will get thorough understanding of the crypto currency,the difference between the coin & token,how to read and understand the white papers of a block chain, mechanics of the cryptocurrency market, staking mechanisms, the liquidity pools and the risks associated with staking and participating in the liquidity pools.',
  },
  {
    title: 'Module Three : dApps ( Decentralized Application) & DeFi ( Decentralized Finance).',
    content: 'In this module the students will get a detailed understanding of DApps ( Decentralized Application) AND DeFi ( Decentralized Finance) and will be able to appreciate the importance of the risk factors involved in a particular DeFi or Dapp project.They will learn how to read and understand the the security audit report/ audit analysis.',
  },
  {
    title: 'Module Four : Case Study Of Automated Market Making(AMM).',
    content: 'This module gives a particular emphasis on the Automated Market Making Mechanism in the cryptocurrency market.There will be a detailed study of the major Decentralized Exchanges like Uniswap, AAVE,Curve,Sushi Swap and Balancer.',
  },
  {
    title: 'Module Five : Permissionless BlockChain.',
    content: 'This module starts with the introduction of what is permissionless block chain and the main consensus algorithms used and its variants as an innovation which appeared in the new block chains.This module gives a good understanding of twenty two major permissionless blockchains in the industry.',
  },
  {
    title: 'LAB SESSIONS ONE (DURATION ONE WEEK) ',
    content: 'int a cryptocurrency (USING GUI), implement a liquidity pool  in order to make it tradeable.',
  },
  {
    title: 'Module Six: BANCOR Protocol Quantitative Case Study.',
    content: 'This is a case study of Bancor protocol which is an innovation in the DeFi world and offers insurance in the crypto currency market.This is an attempt to quantify the impact of Bancor protocol( insurance structure) during the recent cryptocurrency bear market.',
  },
  {
    title: 'Module Seven : Permissioned BlockChain.',
    content: 'In this module, the students will get detailed knowledge about the permissioned block chains and the different algorithms used in the consensus mechanisms of permissioned block chains.',
  },
  {
    title: 'Module Eight: Application Of BlockChain In Various Industries.',
    content: '',
  },
  {
    title: 'LAB SESSIONS TWO (DURATION : ONE WEEK):',
    content: 'Build a complete web3 NFT application  without writing code ( using GUI ) and deploy it in opensea market place.',
  },
  {
    title: 'Module Nine : SUBMISSION OF INDIVIDUAL ASSIGNMENT.',
    content: 'In the final module of this level one course, the students will have to submit a course work which is a white paper about the full design of the block chain which they have been conceptually designing during the course.This can be the full design of a permissioned OR  permissionless block chain OR a Decentralized Autonomous Organization/ DEX/Dapp/DeFi',
  },
];

const CourseAccordion: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center mt-10">Blockchain Technology Fundamentals</h1>
      {DummyAccordionData.map((item, index) => (
        <Accordion key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default CourseAccordion;

