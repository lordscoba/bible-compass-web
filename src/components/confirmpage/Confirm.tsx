import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Confirm = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const link_email = searchParams.get("email");
  const link_user_id = searchParams.get("user_id");
  const link_verification_id = searchParams.get("verification_id");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [data, setData] = useState<UserData>({
    verification_code: link_verification_id, // Replace with the ID of the data you want to update
    user_id: link_user_id,
    email: link_email,
    password: "",
    confirm_password: "",
  });

  useEffect(() => {
    if (!link_email && !link_user_id && !link_verification_id) {
      // If 'queryParam' doesn't exist, redirect the user to another route
      navigate("/");
    }
  }, [searchParams, navigate, link_email, link_user_id, link_verification_id]);

  // console.log(data);

  const handleUpdate = () => {
    if (data.password.trim() === "" || data.confirm_password.trim() === "") {
      alert("Input cannot be empty! Please enter a value.");
      return;
    }

    axios
      .post<UserData>(
        "https://bible-compass-backend-production.up.railway.app/api/v1/changepassword",
        data
      ) // Replace with your API endpoint
      .then((response: AxiosResponse) => {
        // console.log("password changed successfully:", response.data);
        const info = JSON.parse(JSON.stringify(response.data));
        console.log(info.message);
        setMessage(info.message);
        setError("");
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 9000);

        // You can perform additional actions here after a successful update
      })
      .catch((error) => {
        // console.error("Error updating data:", error);
        const error2 = JSON.parse(JSON.stringify(error.response.data));
        console.log(error2.message);
        setMessage("");
        setError(error2.message);
        // Handle the error if the update fails
      });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // const { name, value }: any = event.target;
    setData((data) => ({ ...data, [event.target.name]: event.target.value }));
  };
  return (
    <div className="flex flex-col justify-center h-[80vh] items-center space-y-6">
      <div className="w-5/6 md:w-1/3">
        <input
          type="text"
          name="password"
          value={data.password}
          onChange={handleChange}
          placeholder="Please enter new password"
          className="p-3 rounded-2xl w-full border-2 border-[#0BA37F]"
        />
      </div>
      <div className="w-5/6 md:w-1/3">
        <input
          type="text"
          name="confirm_password"
          value={data.confirm_password}
          onChange={handleChange}
          placeholder="Please enter new confirm password"
          className="p-3 rounded-2xl w-full border-2 border-[#0BA37F]"
        />
      </div>
      <button
        className="bg-[#0BA37F] w-5/6 p-3 rounded-2xl md:w-1/3 text-white"
        onClick={handleUpdate}
      >
        Update Data
      </button>

      {message && (
        <div className="w-4/6 py-5 px-10 md:w-1/3 bg-green-700 rounded-2xl text-white">
          {message}
        </div>
      )}

      {error && (
        <div className="w-5/6 py-5 px-10 md:w-1/3 bg-orange-600 rounded-2xl text-white">
          {error}
        </div>
      )}
    </div>
  );
};

interface UserData {
  verification_code: string | null;
  user_id: string | null;
  email: string | null;
  password: string;
  confirm_password: string;
  // Add more fields as needed
}

export default Confirm;
