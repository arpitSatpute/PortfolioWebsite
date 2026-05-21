import { Code2, Database, Blocks, Settings, Languages } from 'lucide-react';

export const skills = [
    {
      category: "Languages",
      icon: <Languages className="w-5 h-5" />,
      items: ["Java", "JavaScript", "TypeScript", "Solidity", "Rust", "Python"]
    },
    {
      category: "Blockchain",
      icon: <Blocks className="w-5 h-5" />,
      items: ["Solana", "Ethereum", "Solidity", "Smart Contracts", "Foundry", "Hyper-ledger", "Cross-Chain", "CCTP", "Circle Developer Console"]
    },{
      category: "Standards",
      icon: <Settings className="w-5 h-5" />,
      items: ["ERC-20", "ERC-721", "ERC-1155", "ERC-4626", "ERC-4337", "ERC-7824", "ERC-1967", "ERC-5192", "EIP-712"]
    },
    {
      category: "Backend and Infra",
      icon: <Code2 className="w-5 h-5" />,
      items: ["Spring Boot", "Spring MVC", "Microservices", "Spring Security", "Node.js", "Express.js", "Hibernate/ORM", "REST APIs", "Git", "Github", "Docker"]
    },
    {
      category: "Database",
      icon: <Database className="w-5 h-5" />,
      items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "IPFS"]
    },
    {
      category: "Frontend",
      icon: <Code2 className="w-5 h-5" />,
      items: ["React", "React Native", "Next.js", "Wagmi", "Viem", "Tailwind CSS", "Hero UI"]
    },
];
