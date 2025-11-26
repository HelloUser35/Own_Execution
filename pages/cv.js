import Navbar from "../components/Navbar";


export default function Projects() {
return (
<div>
<Navbar />
<main className="p-4">
<h1 className="text-3xl font-bold mb-2">Projects</h1>
<ul className="list-disc ml-6 text-lg">
<li>Automation Framework (HPE) – BDD, Python, Jenkins</li>
<li>Robot Framework Automation – Nokia</li>
<li>REST API CI Automation – Zaloni</li>
</ul>
</main>
</div>
);
}