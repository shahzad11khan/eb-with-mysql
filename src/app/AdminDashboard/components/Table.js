import React from "react";
import {API_URL_Projects} from "../components/ShowApidatas/apiUrls";
import { useState, useEffect } from "react";
import axios from "axios";

const TableWithTitle = () => {
const [latestProject, setLatestProject] = useState([]);
  useEffect(() => {
    async function fetchLatestProject() {
      try {
        const res = await axios.get(API_URL_Projects);
        const data = res.data;
        // Find all the projects with LatestProject === 1
        const latestProjects = data.Result?.filter(p => p.LatestProject === 1 || p.LatestProject === "1");
        setLatestProject(latestProjects);       
      } catch (error) {
        console.log(`Failed to fetch latest projects: ${error}`);
        setLatestProject([]);
      }
    }
    fetchLatestProject();
  }, []);
  console.log("Latest Project Data:", latestProject);
  return (
    <div className="">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold text-black">Top Projects</h2>
        <h2 className="text-xl font-semibold text-black pr-4">All</h2>
      </div>
      <div className="w-full overflow-x-auto">
        <table className="min-w-[600px] table-auto border-collapse border border-custom-blue w-full text-black">
          <thead>
            <tr className="bg-gray-400">
              <th className="px-4 py-2">No</th>
              <th className="px-4 py-2">Project Name</th>
              <th className="px-4 py-2">Project Team</th>
              <th className="px-4 py-2">Project Timeline</th>
            </tr>
          </thead>
          <tbody>
            {latestProject.length > 0 ? (
              latestProject.slice(0, 2).map((project, idx) => (
                <tr key={project._id || idx}>
                  <td className="border px-4 py-2">{idx + 1}</td>
                  <td className="border px-4 py-2">{project.ProjectName || "Encoder Bytes"}</td>
                  <td className="border px-4 py-2">
                    <div className="overflow-y-scroll no-scrollbar max-h-[4rem] leading-[1.2rem]">
                      {(() => {
                        if (!project.ProjectTeam) return <div>Encoder Bytes Team</div>;
                        if (Array.isArray(project.ProjectTeam)) {
                          return project.ProjectTeam.map((member, i) => <div key={i}>{member}</div>);
                        }
                        try {
                          const teamArr = JSON.parse(project.ProjectTeam);
                          if (Array.isArray(teamArr)) {
                            return teamArr.map((member, i) => <div key={i}>{member}</div>);
                          }
                          return <div>{project.ProjectTeam}</div>;
                        } catch {
                          return <div>{project.ProjectTeam}</div>;
                        }
                      })()}
                    </div>
                  </td>
                  <td className="border px-4 py-2">{project.ProjectTimeline || "Software Developer"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="border px-4 py-2" colSpan={4}>No projects found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableWithTitle;
