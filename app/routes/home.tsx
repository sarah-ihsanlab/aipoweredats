import Navbar from "~/components/Navbar";
import ResumeCard from "~/components/ResumeCard";
import type { Route } from "./+types/home";
import { resumes } from "./../../constants";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "ResumeUp" },
    { name: "description", content: "Smart feedback for your dream job" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />
    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Track your applications & resume ratings</h1>
      </div>
      {resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map((resume) => (
            <ResumeCard key={resume.id} resume={resume} />
          ))}
        </div>
      )}
    </section>


  </main>;
}
