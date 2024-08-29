import { useGetAllTeamQuery } from "../../redux/features/team/teamApi";
import { TTeamMemberData } from "../../types/team.type";


const Team = () => {
const {data: allTeamMembers} = useGetAllTeamQuery("")
    return (
<div className="my-10 rounded shadow-2xl w-auto h-auto p-6  m-6">
      <h1 className="font-bold  text-2xl">Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allTeamMembers?.data.map((member: TTeamMemberData) => (
          <div key={member._id} className="bg-gray-100 shadow-2xl rounded p-6 w-auto h-auto">
            <img 
              src={member.photo} 
              alt={member.name} 
              className="w-32 h-32 rounded-full  object-cover mb-4" 
            />
            <div className="card-body">
              <p className="text-black font-bold">Name: {member.name}</p>
              <p className="text-black font-bold"> Position: {member.position}</p>
              <p className="text-black jus"> Bio: {member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default Team;