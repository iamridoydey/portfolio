import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "LangChoice — End to End DevOps Project",
    description:
      "LangChoice lets developers vote for their favorite programming language. The app is written in Next.js frontend + Go Gin backend + MongoDB database. Used Terraform to create infrastructure, Ansible for configuration management, Jenkins for pipeline, AWS for cloud services (key management, EKS cluster, EC2 instance).",
    icons: [
      "@icons/helm.svg",
      "@icons/docker.svg",
      "@icons/jenkins.svg",
      "@icons/ansible.svg",
      "@icons/terraform.svg",
      "@icons/argocd.svg",
      "@icons/aws.svg",
      "@icons/eks.svg",
      "@icons/ec2.svg",
      "@icons/keymanagement.svg",
      "@icons/python.svg",
      "@icons/nextjs.svg",
      "@icons/mongodb.svg",
    ],
    github: "https://github.com/iamridoydey/langchoice.git",
  },
  {
    name: "VisitCounter App",
    description:
      "VisitCounter is a serverless web application that tracks and displays the total number of visits to a website in real time. Built entirely on AWS serverless services — S3, CloudFront, Route 53, Lambda, and DynamoDB. This architecture is cost-effective, scalable, and requires minimal operational overhead.",
    icons: [
      "@icons/javascript.svg",
      "@icons/aws.svg",
      "@icons/s3.svg",
      "@icons/route53.svg",
      "@icons/lambda.svg",
      "@icons/dynamodb.svg",
      "@icons/cloudfront.svg",
    ],
    github: "https://github.com/iamridoydey/visitcounter-app.git",
  },
  {
    name: "Flask Notebook App — Three-Tier Application",
    description:
      "A three-tier web application built with Flask (Python) for the backend, React (TypeScript + Tailwind) for the frontend, and MySQL as the database. Fully containerized with local automation using Jenkins and Docker Compose, and deployed on Vercel.",
    icons: [
      "@icons/react.svg",
      "@icons/typescript.svg",
      "@icons/python.svg",
      "@icons/mysql.svg",
      "@icons/docker.svg",
      "@icons/jenkins.svg",
      "@icons/vercel.svg",
    ],
    github: "https://github.com/iamridoydey/flask-notebook-app.git",
  },
  {
    name: "Terraform & Ansible Automation",
    description:
      "A collection of infrastructure automation projects combining Terraform and Ansible — each project provisions cloud resources and configures them end to end.",
    icons: [
      "@icons/terraform.svg",
      "@icons/ansible.svg",
      "@icons/aws.svg",
      "@icons/ec2.svg",
    ],
    github: "https://github.com/iamridoydey/tf-ansible-automation.git",
  },
  {
    name: "VMSS Mini App — Load Balancer + Virtual Machine Scale Set",
    description:
      "A Virtual Machine Scale Set web application on Azure with VNet, subnet, network security group, load balancer, backend pool, and health probe. Built on Azure infrastructure with auto-scaling capabilities for high availability and performance.",
    icons: [
      "@icons/azure.svg",
      "@icons/terraform.svg",
      "@icons/azure-lb.svg",
      "@icons/vmss.svg",
    ],
    github:
      "https://github.com/iamridoydey/azure-vmss-apps/tree/main/vmss-mini-app",
  },
  {
    name: "Sample App — Load Balancer + Auto Scaling Group",
    description:
      "An autoscaling web application on AWS with launch template, VPC, route tables, subnets, internet gateway, security group, load balancer, target group, and Auto Scaling Group. Built with Terraform for high availability and performance.",
    icons: [
      "@icons/aws.svg",
      "@icons/terraform.svg",
      "@icons/autoscaling.svg",
      "@icons/loadbalancer.svg",
    ],
    github:
      "https://github.com/iamridoydey/aws-autoscaling-apps/tree/main/asg-sample-app",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="max-w-7xl pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 md:pb-24 mx-4 sm:mx-6 md:mx-8 border-color border-b-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl title-font text-(--primary-color) font-bold mb-4 sm:mb-6 md:mb-8 tracking-wider">
          PROJECTS.
        </h2>
        <hr className="w-full border-color border-2" />

        {/* Responsive grid: 1 col on small, 2 cols on large */}
        <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group project-card-shadow border-color border-3 rounded-lg p-4 sm:p-5 md:p-6 flex flex-col justify-between"
            >
              {/* Project Info */}
              <div>
                <h3 className="tagline-font font-light text-xl sm:text-2xl mb-2 sm:mb-3">
                  {project.name}
                </h3>
                <p className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 md:mb-8 leading-relaxed">
                  <span className="font-bold underline">OVERVIEW:</span>{" "}
                  {project.description}
                </p>

                {/* Icons row */}
                <h3 className="font-bold mb-2 sm:mb-3 underline text-sm sm:text-base">
                  TOOLS:{" "}
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {project.icons.map((icon, i) => (
                    <Image
                      key={i}
                      src={icon.replace("@icons", "/icons")}
                      alt="tech icon"
                      width={40}
                      height={40}
                      className="object-contain w-8 h-8 sm:w-10 sm:h-10"
                    />
                  ))}
                </div>
              </div>

              {/* GitHub Link */}
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 sm:mt-6 inline-flex group-hover:text-(--alter-color) dark:group-hover:text-white group-hover:bg-gray-700 transition-all duration-300 items-center justify-center gap-2 px-3 sm:px-4 py-2 border-2 rounded-md text-sm sm:text-md font-semibold"
              >
                <span>View on GitHub</span>
                <FaGithub size={18} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
