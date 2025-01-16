import React from "react";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const LatestJobCards = ({ job }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/description/${job._id}`)}
      className="p-8 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer"
    >
      <div>
        <div className="flex justify-between">
          <div className="">
            <h1 className="font-bold text-lg my-2">{job?.title}</h1>
            <h1 className="font-bold text-lg text-gray-600">
              {job?.company?.name}
            </h1>
            <p className="text-sm text-gray-500">India</p>
          </div>
          <div className="w-14 h-14">
            <img src={job?.company?.logo} alt="logo" />
          </div>
        </div>
      </div>
      <div className="my-2 mt-4">
        {job.requirements.map((ele, i) => (
          <Badge
            key={i}
            className="mr-2 text-white rounded-md"
          >
            {ele}
          </Badge>
        ))}
      
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className={"text-blue-700 font-bold"} variant="ghost">
          {job?.position} Positions
        </Badge>
        <Badge className={"text-[#F83002] font-bold"} variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
          {job?.salary}LPA
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
