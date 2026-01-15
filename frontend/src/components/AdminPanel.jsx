import { useState } from "react";
import axios from "axios";

function AdminPanel() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [photo, setPhoto] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit proběhl");

    const formData = new FormData();
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("age", age);
    formData.append("photo", photo);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/persons/",
        formData,
        {
          auth: {
            username: "admin",
            password: "",
          },
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Uloženo:", response.data);
    } catch (error) {
      console.error("Chyba:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input
        type="text"
        placeholder="Jméno"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Příjmení"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Věk"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setPhoto(e.target.files[0])}
      />

      <button
        type="submit"
        className="bg-amber-500 cursor-pointer">
            Uložit osobu
        </button>
    </form>
  );
}

export default AdminPanel;