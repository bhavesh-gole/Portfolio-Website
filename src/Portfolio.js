import React from "react";
import { Card, CardContent } from "./Card";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center px-8">
        <h1 className="text-2xl font-bold text-blue-800">Bhavesh Gole</h1>
        <nav className="space-x-6 text-sm">
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#experience" className="hover:text-blue-600">Experience</a>
          <a href="#skills" className="hover:text-blue-600">Skills</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="py-12 text-center bg-gradient-to-r from-blue-50 to-white">
        <h2 className="text-3xl font-bold">Hi, I'm Bhavesh</h2>
        <p className="text-lg mt-2">Data Engineer | ETL Specialist | Cloud & Automation Enthusiast</p>
        <div className="mt-4 flex justify-center space-x-6 text-blue-600">
          <a href="mailto:bhaveshgole786@gmail.com" className="flex items-center space-x-1">
            <Mail className="w-5 h-5" /> <span>Email</span>
          </a>
          <a href="https://linkedin.com/in/bhavesh-gole-1523aa172" target="_blank" className="flex items-center space-x-1">
            <Linkedin className="w-5 h-5" /> <span>LinkedIn</span>
          </a>
          <a href="https://github.com/bhavesh-gole" target="_blank" className="flex items-center space-x-1">
            <Github className="w-5 h-5" /> <span>GitHub</span>
          </a>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="px-8 py-10">
        <h3 className="text-2xl font-semibold mb-6 text-blue-800">Experience</h3>
        <Card className="mb-4">
          <CardContent className="p-4">
            <h4 className="text-xl font-bold">Deloitte Consulting India Pvt. Ltd.</h4>
            <p className="text-sm italic text-gray-600">June 2022 – Present | Bengaluru, Karnataka</p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-sm">
              <li>Designed ETL pipelines for 80+ SAP tables handling 1M+ records.</li>
              <li>Led UT/SIT testing with {"<"}5% defect leakage and automation saving 70% processing time.</li>
              <li>Built 4 ERP automations with Alteryx saving 300+ client hours.</li>
              <li>Initiated GenAI tool PoCs and supported leadership presentations.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Projects */}
      <section id="projects" className="px-8 py-10 bg-gray-100">
        <h3 className="text-2xl font-semibold mb-6 text-blue-800">Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-4">
              <h4 className="text-xl font-bold">YouTube Data Analysis</h4>
              <p className="text-sm text-gray-600">Oct 2023 – Nov 2023</p>
              <ul className="list-disc list-inside mt-2 text-sm">
                <li>Used AWS Glue, Athena, S3 {"&"} Quicksight to analyze and visualize global YouTube data.</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h4 className="text-xl font-bold">Twitter Data Pipeline</h4>
              <p className="text-sm text-gray-600">Aug 2023 – Sept 2023</p>
              <ul className="list-disc list-inside mt-2 text-sm">
                <li>Built real-time pipeline using Twitter API, Pandas, Airflow & S3.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-8 py-10">
        <h3 className="text-2xl font-semibold mb-6 text-blue-800">Technical Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          <div><strong>Languages:</strong> Python, SQL, Shell Scripting</div>
          <div><strong>Tools:</strong> Alteryx, Informatica IICS, IDQ, PowerCentre</div>
          <div><strong>Cloud:</strong> AWS (Certified), Glue, S3, Lambda, EC2</div>
          <div><strong>Big Data:</strong> PySpark (Basics)</div>
          <div><strong>Data Ops:</strong> Profiling, Warehousing, DQ, Integration</div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-blue-50 py-10 text-center">
        <h3 className="text-2xl font-semibold text-blue-800">Contact</h3>
        <p className="mt-2 text-sm">Email: <a href="mailto:bhaveshgole786@gmail.com" className="underline">bhaveshgole786@gmail.com</a></p>
        <p className="text-sm">Phone: +91 9630766034</p>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 text-xs text-gray-500 bg-white">
        © 2025 Bhavesh Gole. All rights reserved.
      </footer>
    </div>
  );
}
