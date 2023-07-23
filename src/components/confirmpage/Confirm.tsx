import axios, { AxiosResponse } from "axios";
import { useState } from "react";

const Confirm = () => {
  const [data, setData] = useState<UserData>({
    id: "", // Replace with the ID of the data you want to update
    userId: "",
    password: "",
    confirmPassword: "",
  });

  console.log(data);

  const handleUpdate = () => {
    if (data.password.trim() === "" || data.confirmPassword.trim() === "") {
      alert("Input cannot be empty! Please enter a value.");
      return;
    }

    axios
      .put<UserData>("https://api.example.com/data", data) // Replace with your API endpoint
      .then((response: AxiosResponse<UserData>) => {
        console.log("Data updated successfully:", response.data);
        // You can perform additional actions here after a successful update
      })
      .catch((error) => {
        console.error("Error updating data:", error);
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
          name="confirmPassword"
          value={data.confirmPassword}
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
    </div>
  );
};

interface UserData {
  id: string;
  userId: string;
  password: string;
  confirmPassword: string;
  // Add more fields as needed
}

export default Confirm;
