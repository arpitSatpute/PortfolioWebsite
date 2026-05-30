import planitImage from "@/assets/projects/planit.png";

export const projects = [
    {
      title: "Aura-Farm",
      description: "Personalized DeFi yield protocol leveraging soulbound Risk NFTs and AI-driven assessments to route user capital across tiered ERC-4626 vaults",
      liveLink: "https://www.aura-farm.tech",
      githubLink: "https://github.com/himanshu-dhandole/Aura-Farm.git",
      image: "https://image2url.com/r2/default/images/1771578299622-78a3bfd2-34f1-4b80-81e6-a75e987fbd88.png",
      tech: ["Solidity", "Foundry", "React", "Nitrolite Protocol", "Circle Gateway", "USDC"],
      details: [
        "Modular ERC-4626 vault architecture for composable DeFi integration and automated capital reallocation driven by on-chain NFT-encoded risk parameters",
        "Soulbound Risk NFT system where users complete AI-generated risk assessments and receive non-transferable NFTs encoding unique allocations across three ERC-4626 vault tiers: Conservative, Balanced, and Aggressive",
        "Personalized capital allocation driven by AI-powered risk classification, automatically routing deposits to optimal vault tiers matching user risk preferences",
        "Circle Gateway integration enabling frictionless USDC deposits from Ethereum and Base, with native USDC minting on Arc and auto-routing to vaults based on the user's Risk NFT profile",
        "Cross-chain rebalancing via Nitrolite Protocol achieving 90% lower gas costs compared to traditional cross-chain solutions",
        "Real-time dashboard displaying live APY and P&L breakdowns per vault tier with dynamic rebalancing indicators",
      ]
    },
    {
      title: "VeriMint",
      description: "Decentralised E-Commerce NFT Marketplace for physical and virtual goods as encrypted ERC-1155 digital twins",
      liveLink: "https://verimint.vercel.app/",
      githubLink: "https://github.com/arpitSatpute/VeriMint.git",
      image: "https://image2url.com/images/1766082375573-d0cc5ebc-8180-48e6-b590-e6c70127dbe0.png",
      tech: ["Solidity", "Foundry", "React", "IPFS", "OpenZeppelin", "ERC1155"],
      details: [
        "ERC1155 contracts mint digital twins for physical and virtual inventory with encrypted delivery data",
        "Lit Protocol guards shipping addresses with time-locked decrypt (7-day merchant window) and access logs",
        "Escrowed payments auto-release on fulfillment with buyer refunds when decrypt deadlines are missed",
        "Zero-knowledge proof commitments secure address unlock requests and prevent data leakage",
        "React dApp with Wagmi/Viem for fast wallet flows plus merchant dashboard for inventory and sales ops",
        "IPFS-backed metadata and provenance to preserve authenticity across orders and handoffs"
      ]
    },
    {
      title: "Insight Yield",
      description: "AI-Powered DeFi Yield Optimizer | Autonomous liquidity engine for optimal DeFi strategies",
      liveLink: "https://insight-yield.vercel.app/",
      githubLink: "https://github.com/arpitSatpute/InsightYield.git",
      image: "https://image2url.com/images/1766082469413-af515659-52d3-4096-a0e0-fa5628927d43.png",
      tech: ["Solidity", "Foundry", "Python", "React", "Polygon", "Wagmi/Viem"],
      details: [
        "Modular ERC-4626 vault system on Polygon for composable DeFi integration",
        "Custom Python AI engine with XGBoost for real-time risk scoring and APY prediction",
        "EIP-712 verification ensuring authenticated and tamper-proof on-chain recommendations",
        "Automated capital reallocation based on AI-generated strategies",
        "Off-chain AI predictions combined with on-chain cryptographic proofs",
        "Real-time yield optimization reducing slippage and maximizing returns"
      ]
    },
    {
      title: "Skedula",
      description: "Business & Appointment Management Platform | Full-stack platform for service booking",
      liveLink: "https://skedula-customer.vercel.app/",
      githubLink: "https://github.com/arpitSatpute/Skedula",
      image: "https://image2url.com/images/1766082609702-895eb61a-4713-41d2-a8e7-6a8bf1aba2d5.png",
      tech: ["Spring Boot", "React", "PostgreSQL", "Redis", "Docker", "Razorpay"],
      details: [
        "Microservices architecture with Spring Boot and RabbitMQ",
        "Razorpay wallet integration with secure transaction handling",
        "Redis caching for improved performance and reduced database load",
        "Dockerized deployment with PostgreSQL database",
        "Real-time appointment scheduling and notification system",
        "Business dashboard for service management and revenue analytics"
      ]
    },
    {
      title: "Proxima",
      description: "AI-Powered Exam Integrity System | Real-time AI-driven exam monitoring platform",
      liveLink: "https://proxima-frontend-three.vercel.app",
      githubLink: "https://github.com/Yash-Zade/proxima-monorepo",
      image: "https://image2url.com/images/1766082557102-61505964-6cde-4b64-992c-d325b6b8e037.png",
      tech: ["Spring Boot", "React", "React Native", "WebRTC", "Gemini AI", "PostgreSQL"],
      details: [
        "WebRTC and WebSocket for real-time monitoring and communication",
        "Gemini AI integration for scenario-based test generation",
        "Bluetooth and WiFi device detection for exam security",
        "Cross-platform support (Web and Mobile)",
        "Real-time face detection and proctoring capabilities",
        "Automated anomaly detection for academic integrity violations"
      ]
    },
    {
      title: "PlanIt",
      description: "Event Management Platform | Connecting event hosts, organizers, and vendors",
      liveLink: "https://plan-it-roan-two.vercel.app/",
      githubLink: "https://github.com/arpitSatpute/PlanIt",
      image: planitImage,
      tech: ["Spring Boot", "React", "PostgreSQL", "Redis", "Docker", "Razorpay"],
      details: [
        "Microservices architecture with Spring Boot and RabbitMQ",
        "Razorpay wallet integration with secure transaction handling",
        "Redis caching for improved performance and reduced database load",
        "Dockerized deployment with PostgreSQL database",
        "Real-time appointment scheduling and notification system",
        "Business dashboard for service management and revenue analytics"
      ]
    }
];
