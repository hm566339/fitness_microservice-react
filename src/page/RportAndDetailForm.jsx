import { useDispatch } from "react-redux";
import { logOut } from "@/redux/data/authSlice";
import { useNavigate } from "react-router";
import { fetchReport } from "@/redux/data/reportSlice";
import { DetailFitness } from "@/app/DetailFitness";
import { Report } from "@/components/Report";
import { Button } from "@/components/ui/button";

export const RportAndDetailForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = () => {
    dispatch(logOut());
    navigate("/");
  };

  const handleClick = () => {
    dispatch(fetchReport()); // <-- best practice
  };

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 p-6">
      <div>
        <DetailFitness />
      </div>
      <div>
        <div className="h-10 w-10">
          <Button onClick={handleChange}>log out</Button>
        </div>
        <div className="h-10 w-10">
          <Button onClick={handleClick}>show the report</Button>
        </div>
        <Report />
      </div>
    </div>
  );
};
