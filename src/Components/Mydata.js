import { useState } from "react";

function Mydata({ userData }) {
  console.log(userData);

  const [userdata, setUserData] = useState(userData);
  const [isEditProfile, setisEditProfile] = useState(false);
  function handleInputChange(event) {
    setUserData({
      ...userdata,
      [event.target.name]: event.target.value,
    });
  }
  return (
    <>
      <div>
        {!isEditProfile ? (
          <div>
            <h1>
              {userData.first_name}
              {userData.last_name}{" "}
            </h1>
            <p>{userData.email}</p>
            <button
              className="edit-profile"
              onClick={() => setisEditProfile(true)}
            >
              Edit profile
            </button>
          </div>
        ) : (
          ""
        )}

        {isEditProfile ? (
          <div className="EditProfile">
            <label>First Name</label>
            <input
              type="text"
              name="first_name"
              value={userData.first_name}
              onChange={handleInputChange}
            />
            <label>Last Name</label>
            <input
              type="text"
              value={userData.last_name}
              name="last_name"
              onChange={handleInputChange}
            />
            <label>email</label>
            <input
              type="text"
              value={userData.email}
              name="email"
              onChange={handleInputChange}
            />
            <div>
              <button
                className="cancel"
                onClick={() => setisEditProfile(false)}
              >
                Cancel
              </button>
              <button className="save-profile">Save</button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
export default Mydata;
