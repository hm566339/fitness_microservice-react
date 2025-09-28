import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams, useNavigate } from "react-router-dom";
import { exchangeGithubCode } from "@/redux/slices/authGithubSlice";

export default function Callback() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const code = searchParams.get("code");
    if (code) {
      dispatch(exchangeGithubCode(code)).then(() => {
        navigate("/dashboard"); // after login redirect
      });
    }
  }, [dispatch, searchParams, navigate]);

  return <p>Logging you in via Keycloak...</p>;
}
